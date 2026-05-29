// 搜索 worker

onmessage = async (e) => {
  const { type, dbUrl, searchValue, lang } = e.data;

  if (type === "search") {
    try {
      const jsonData = await fetch(dbUrl).then((res) => res.json());
      const list = [];

      for (const pageItem of jsonData) {
        const result = [];
        let lineIndex = 0;
        const lowerVal = searchValue.toLowerCase();

        for (const line of pageItem.content) {
          lineIndex++;
          if (line.c.toLowerCase().includes(lowerVal)) {
            const startIndex = line.c.toLowerCase().indexOf(lowerVal);
            const endIndex = startIndex + searchValue.length;

            let aroundText = line.c.slice(
              endIndex - 20 < 0 ? 0 : endIndex - 20,
              endIndex + 20,
            );

            if (endIndex - 20 > 0) {
              aroundText = "..." + aroundText;
            }
            if (endIndex + 20 < line.c.length) {
              aroundText += "...";
            }

            result.push({
              tag: line.t,
              url: pageItem.url,
              lineIndex,
              aroundText,
            });
          }
        }

        if (result.length) {
          list.push({
            title: pageItem.title,
            url: pageItem.url,
            result,
          });
        }
      }

      postMessage({
        type: "searchResult",
        data: list,
      });
    } catch (error) {
      console.error("搜索出错:", error);
      postMessage({
        type: "searchResult",
        data: [],
        error: error.message,
      });
    }
  }
};
