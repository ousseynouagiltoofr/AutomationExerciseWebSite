import {test, expect} from '@playwright/test';

test('Test Case 5: Register User with existing email', async ({page}) => {
 
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('Elhadji Ousseynou DIOP');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('elhadjiousseynou.diop95@yopmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await expect(page.getByText('Email Address already exist!')).toBeVisible();

  // ---------------------
 
});