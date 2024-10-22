import { test, expect } from '@playwright/test';

test('Test Case 2: Login User with correct email and password', async ({page}) => {
    
      await page.goto('https://automationexercise.com/');
      await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
      await page.getByRole('link', { name: ' Signup / Login' }).click();
      await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
      await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('elhadjiousseynou.diop95@yopmail.com');
      await page.getByPlaceholder('Password').click();
      await page.getByPlaceholder('Password').press('CapsLock');
      await page.getByPlaceholder('Password').fill('P');
      await page.getByPlaceholder('Password').press('CapsLock');
      await page.getByPlaceholder('Password').fill('Passer@123');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.getByText('Logged in as Elhadji')).toBeVisible();
      //await page.getByRole('link', { name: ' Delete Account' }).click();
      //await expect(page.getByText('Account Deleted!')).toBeVisible();
    
      
    });