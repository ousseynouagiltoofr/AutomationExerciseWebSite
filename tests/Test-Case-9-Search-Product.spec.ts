import{test,expect} from '@playwright/test';

test('Test Case 9: Search Product',async ({page}) => {
 
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
  await page.getByPlaceholder('Search Product').click();
  await page.getByPlaceholder('Search Product').fill('Men Tshirt');
  await page.getByRole('button', { name: '' }).click();
  await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
  await expect(page.locator('p').filter({ hasText: /^Men Tshirt$/ })).toBeVisible();
  await expect(page.locator('p').filter({ hasText: /^Men Tshirt$/ })).toBeVisible();

  // ---------------------
 
});