import {test, expect} from '@playwright/test';

test('Test Case 8: Verify All Products and product detail page', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
     await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
    await page.getByRole('link', { name: ' Products' }).click();
    await expect (page).toHaveURL('https://automationexercise.com/products');
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
    await page.locator('.choose > .nav > li > a').first().click();
    await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
    await expect(page.getByText('Category: Women > Tops')).toBeVisible();
    await expect(page.getByText('Availability: In Stock')).toBeVisible();
    await expect(page.getByText('Condition: New')).toBeVisible();
    await expect(page.getByText('Brand: Polo')).toBeVisible();
  
    // ---------------------

});


