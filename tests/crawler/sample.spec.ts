import { test, expect } from "@playwright/test";

const delay = (time: number) => new Promise((res) => setTimeout(res, time));

test("sample page crawler", async ({ page }) => {
  await page.goto("https://m.ruliweb.com");

  const hitGalleryTabIndex = 1;
  const humorBestTabIndex = 3;
  const rightBestTabIndex = 2;

  const humorBestTab = await page.$(
    `#list_read_bottom .tab_${humorBestTabIndex}`
  );
  const hitGalleryTab = await page.$(
    `#list_read_bottom .tab_${hitGalleryTabIndex}`
  );
  const rightBestTab = await page.$(
    `#list_read_bottom .tab_${rightBestTabIndex}`
  );

  const tabList = [humorBestTab, hitGalleryTab, rightBestTab];
  for (const tab of tabList) {
    await tab?.click();

    const contentList = await page.$$(
      `.list_wrapper > .widget_bottom > ul.swiper-slide-active > li`
    );

    for (const [index, content] of contentList.entries()) {
      if (index == 0) {
        const title = await content.innerText();
        console.log(
          `========================================================================`
        );
      } else {
        // const contentLink = await content.
        const contentTitle = await content.innerText();
        const anchorRef = await content.$("a");
        const link = await anchorRef?.getAttribute("href");
        const isBold = await content.$("strong");

        console.log(link);
      }
    }
  }
});
