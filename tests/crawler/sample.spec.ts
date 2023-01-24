// https://m.ruliweb.com

import { test, expect } from "@playwright/test";

const delay = (time) => new Promise((res) => setTimeout(res, time));

test("sample page crawler", async ({ page }) => {
  const promiseResponse = await page.goto("https://m.ruliweb.com");

  // const root = await page.locator('#list_read_bottom').click();
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

  await hitGalleryTab?.click();

  const contentList = await page.$$(
    `.list_wrapper > .widget_bottom > ul.swiper-slide-active > li`
  );

  for (const iterator of contentList) {
    const text = await iterator.textContent();
    console.log(text && text.trim());
  }

  // expect(count).toBe(5);
});
