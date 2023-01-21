// https://m.ruliweb.com

import { test, expect } from "@playwright/test";

test("sample page crawler", async ({ page }) => {
  const promiseResponse = await page.goto("https://m.ruliweb.com");

  // const root = await page.locator('#list_read_bottom').click();
  const hitGalleryTabIndex = 1;
  const humorBestTabIndex = 3;
  const rightBestTabIndex = 2;

  // const humorBestTab = await page.$(`#list_read_bottom > .tab_3`);
  // const hitGalleryTab = await page.$(`#list_read_bottom > .tab_1`);
  // const rightBestTab = await page.$(`#list_read_bottom > .tab_2`);

  // await humorBestTab?.click();

  const contentList = await page.$$(`.list_wrapper > .widget_bottom > ul`);
  // const count = await contentList?.asElement();
  const count = contentList.length;

  // console.log(await contentList.length);
  expect(count).toBe(5);
});
