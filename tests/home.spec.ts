import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
});
test("renders the brand title", async ({ page }) => {
  await expect(
    page.getByRole("heading", { level: 1, name: /minil/ }),
  ).toBeVisible();
});

test("renders an input for going to documents", async ({ page }) => {
  await expect(
    page.getByRole("textbox", { name: "Go to document" }),
  ).toBeVisible();
});
