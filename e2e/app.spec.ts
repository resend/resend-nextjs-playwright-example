import { test, expect } from "@playwright/test";

test("mocks the response and doesn't call the Resend API", async ({ page }) => {
  // Sample response from Resend
  const body = JSON.stringify({
    "data": {
      "id":"621f3ecf-f4d2-453a-9f82-21332409b4d2"
    }
  });

  // Mock the api call before navigating
  await page.route('*/**/api/send', async route => {
    await route.fulfill({
      body,
      contentType: 'application/json',
      status: 200,
    });
  });

  // Go to the page
  await page.goto("http://localhost:3000/api/send");

  // Assert that the response is visible
  await expect(page.getByText(body)).toBeVisible();
});

test("does not mock the response and calls the Resend API", async ({ page }) => {
  // Go to the page
  await page.goto("http://localhost:3000/api/send");

  // Assert that the response is visible
  await expect(page.getByText('id')).toBeVisible();
});