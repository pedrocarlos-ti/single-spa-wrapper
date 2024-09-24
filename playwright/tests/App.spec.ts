import { test, expect } from "@playwright/test";
test.describe("E2E Tests", () => {
  test("Navigation MFE | User Information", async ({ page }) => {
    // Navigate to the root URL
    await page.goto("http://localhost:9000");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user information is loaded
    await expect(page.locator("text=Mr John Doe")).toBeVisible();
    await expect(page.locator("text=john.doe@example.com")).toBeVisible();
  });

  test("Catalog MFE | Investment Options", async ({ page }) => {
    // Navigate to the root URL
    await page.goto("http://localhost:9000");

    // Check if content MFE is loaded
    await expect(
      page.locator("text=Welcome to iCapital Dashboard")
    ).toBeVisible();
    await expect(page.locator("text=Investment Options")).toBeVisible();

    // Check if investment options are loaded
    const investmentOptions = page.locator(".investment-card");
    await expect(investmentOptions).toHaveCount(8);
  });

  test("Management MFE | Order Management", async ({ page }) => {
    // Navigate to the root URL
    await page.goto("http://localhost:9000");

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await expect(page.locator("text=Order Management")).toBeVisible();
    await expect(page.locator("table")).toBeVisible();
    await page.screenshot({ path: "./playwright/tests/order-management.png" });
  });
});
