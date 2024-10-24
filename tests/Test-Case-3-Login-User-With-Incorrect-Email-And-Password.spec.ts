import { test, expect } from '@playwright/test';

test('Test Case 3: Login User with incorrect email and password', async ({page}) => {
    
      await page.goto('https://automationexercise.com/');
      await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
      await page.getByRole('link', { name: ' Signup / Login' }).click();
      await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
      await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
      await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('elhadjiousseynou.diop95@yopmail.com');
      await page.getByPlaceholder('Password').click();
      await page.getByPlaceholder('Password').fill('Passer@1234');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.getByText('Your email or password is')).toBeVisible();
    
    
      
    });