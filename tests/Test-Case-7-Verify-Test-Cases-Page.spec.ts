import {test, expect } from "@playwright/test";



test('Test Case 7: Verify Test Cases Page',async ({page}) => {
  await page.goto('https://automationexercise.com/');
  // await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  await page.getByRole('link', { name: ' Test Cases' }).click();
  // await expect(page.getByText('Below is the list of test')).toBeVisible();
  await expect(page).toHaveURL('https://automationexercise.com/test_cases');
  // ---------------------

});