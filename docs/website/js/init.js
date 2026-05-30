import { getCurrentLang } from "./util.js";

// 保存滚动位置
let scrollTimer = null;

// 是否有 footer 模块
let hasFooter = null;

export const init = async (page, query) => {
  const lang = getCurrentLang();

  const articleConfigData = await fetch(
    import.meta.resolve(`../${lang}/article-config.json`),
  ).then((res) => res.json());

  {
    const footerSrc = import.meta.resolve(`../${lang}/footer.html`);

    if (hasFooter === null) {
      // 判断是否有footer文件
      await fetch(footerSrc)
        .then((e) => (hasFooter = true))
        .catch(() => (hasFooter = false));
    }

    if (hasFooter) {
      // 填充footer
      page.shadow.$(".footer").after(`<o-page src="${footerSrc}"></o-page>`);
    }
  }

  {
    // 获取上一页下一页的内容
    const { header } = articleConfigData;

    const prefixSrc = page.src.split(lang)[0];
    const currentSrc = page.src.split(lang)[1].replace(/^\//, "");
    const targetHeaderItem = header.find((e) =>
      currentSrc.startsWith(e.prefix),
    );

    if (targetHeaderItem) {
      const flatedList = targetHeaderItem.data.flatMap((e) => e.content || [e]);

      const currentIndex = flatedList.findIndex(
        (e) => targetHeaderItem.prefix + e.url === currentSrc,
      );

      if (currentIndex !== -1) {
        const leftItem = flatedList[currentIndex - 1];
        const rightItem = flatedList[currentIndex + 1];

        const footer = page.shadow.$(".footer");

        if (leftItem) {
          footer.push(
            `<p-button variant="text" class="prev-item">
          <n-icon icon="mdi:page-previous" slot="prefix"></n-icon>
          <a href="${prefixSrc + lang}/${targetHeaderItem.prefix + leftItem.url}" olink>${leftItem.name}</a></p-button>`,
          );
        }

        if (rightItem) {
          footer.push(
            `<p-button variant="text" class="next-item">
          <n-icon icon="mdi:page-next" slot="suffix"></n-icon>
          <a href="${prefixSrc + lang}/${targetHeaderItem.prefix + rightItem.url}" olink>${rightItem.name}</a></p-button>`,
          );
        }
      }
    }
  }

  {
    // 给所有a标签添加icon
    page.shadow.all("article a").forEach(($el) => {
      const href = $el.attr("href");
      const urlObj = new URL(href);

      if (location.host !== urlObj.host) {
        $el.push(`<n-icon icon="majesticons:open"></n-icon>`);
      } else {
        const icon = $(
          `<n-icon icon="material-symbols:article-rounded"></n-icon>`,
        );

        // 内部的文章
        $el.ele.prepend(icon.ele);
      }
    });
  }

  {
    const routerLength = page.app.routers.length;
    const ROUTER_LENGTH_KEY = "page_scroll_router_length";

    const SCROLL_KEY = "page_scroll_all";

    const getScrollMap = () => {
      try {
        return JSON.parse(sessionStorage.getItem(SCROLL_KEY)) || {};
      } catch {
        return {};
      }
    };

    const setScrollMap = (map) => {
      sessionStorage.setItem(SCROLL_KEY, JSON.stringify(map));
    };

    const savedRouterLength =
      parseInt(sessionStorage.getItem(ROUTER_LENGTH_KEY)) || 0;
    const scrollMap = getScrollMap();
    if (
      scrollMap[page.src] !== undefined &&
      routerLength <= savedRouterLength
    ) {
      page.ele.scrollTop = parseInt(scrollMap[page.src]);
    }

    page.on("scroll", (e) => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const currentMap = getScrollMap();
        currentMap[page.src] = e.target.scrollTop;
        setScrollMap(currentMap);
        sessionStorage.setItem(ROUTER_LENGTH_KEY, routerLength);
      }, 300);
    });
  }

  {
    // 给所有code包裹article-code组件
    page.shadow.all("pre code").forEach(($el) => {
      $el.parent.wrap(`<article-code></article-code>`);
    });
  }

  {
    const line = query.index || query.L;
    // 锚点修正
    if (line) {
      const target = page.shadow.$("article")[line - 1];
      if (target) {
        target.ele.scrollIntoView({ behavior: "smooth" });
        target.classList.add("focus-index");
      }
      if (query.search) {
        const searchText = query.search.trim();
        if (searchText && target.ele) {
          const escapedText = searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const regex = new RegExp(`(${escapedText})`, "gi");

          const walker = document.createTreeWalker(
            target.ele,
            NodeFilter.SHOW_TEXT,
            null,
            false,
          );

          const textNodes = [];
          let node;
          while ((node = walker.nextNode())) {
            if (node.textContent.trim()) {
              textNodes.push(node);
            }
          }

          textNodes.forEach((textNode) => {
            if (regex.test(textNode.textContent)) {
              const span = document.createElement("span");
              span.className = "search-highlight";
              span.innerHTML = textNode.textContent.replace(
                regex,
                '<mark class="search-highlight-mark">$1</mark>',
              );
              textNode.parentNode.replaceChild(span, textNode);
            }
          });
        }
      }
    }
  }

  // 添加地址引用的标识
  const markdownBody = page.shadow.$(".markdown-body");

  if (markdownBody) {
    const markBtn =
      $(`<p-button icon variant="text" size="small" class="octicon-link-mark">
        <n-icon icon="material-symbols:link"></n-icon>
      </p-button>`);

    markdownBody.push(markBtn);

    let hoverIndex = 0;
    let isSuccess = false;

    markBtn.on("click", () => {
      markBtn.html = `<n-icon icon="mdi:success"></n-icon>`;
      markBtn.attr("variant", "contained");
      markBtn.attr("color", "success");
      isSuccess = true;

      let finalUrl = new URL(location.href);

      finalUrl.searchParams.set("L", hoverIndex + 1);

      navigator.clipboard.writeText(finalUrl.toString());

      setTimeout(() => {
        isSuccess = false;
        markBtn.html = `<n-icon icon="material-symbols:link"></n-icon>`;
        markBtn.attr("variant", "text");
        markBtn.attr("color", null);
      }, 1000);
    });

    const bodyChilds = markdownBody.slice();

    markdownBody.on("mouseover", (e) => {
      let isChild = false;
      if (isSuccess) {
        return;
      }

      for (const child of bodyChilds) {
        if (child.ele === e.target) {
          isChild = true;
          break;
        }
      }

      if (markBtn.ele === e.target) {
        return;
      }

      if (isChild) {
        hoverIndex = $(e.target).index;
        markBtn.style.top = e.target.offsetTop + "px";
      }
    });
  }
};

export const revoke = async (page) => {
  clearTimeout(scrollTimer);
  sessionStorage.removeItem("page_scrollTop");
};
