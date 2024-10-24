import { test, expect, chromium } from '@playwright/test';

test('Test Case 1: Register User', async ({page} ) => {
  
      await page.goto('https://automationexercise.com/');
      await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
     /* await page.getByRole('link', { name: ' Signup / Login' }).click();
      await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
      await page.getByPlaceholder('Name').click();
      await page.getByPlaceholder('Name').fill('Elhadji Ousseynou DIOP');
      await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
      await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('elhadjiousseynou.diop95@gmail.com');
      await page.getByRole('button', { name: 'Signup' }).click();
      await expect(page.getByText('Enter Account Information')).toBeVisible();
      await page.getByLabel('Mr.').check();
      await page.getByLabel('Name *', { exact: true }).click();
      await page.getByLabel('Password *').click();
      await page.getByLabel('Password *').fill('Passer@123');
      await page.locator('#days').selectOption('1');
      await page.locator('#months').selectOption('9');
      await page.locator('#years').selectOption('2000');
      await page.getByLabel('Sign up for our newsletter!').check();
      await page.getByLabel('Receive special offers from').check();
      await page.getByLabel('First name *').click();
      await page.getByLabel('First name *').fill('Ouest');
      await page.getByLabel('Last name *').click();
      await page.getByLabel('Last name *').fill('Foire');
      await page.getByLabel('Company', { exact: true }).click();
      await page.getByLabel('Company', { exact: true }).fill('Agiltoo');
      await page.getByLabel('Address * (Street address, P.').click();;
      await page.getByLabel('Address * (Street address, P.').fill('Ouest FOIRE');
      await page.getByLabel('Address 2').click();
      await page.getByLabel('Address 2').fill('ouest Foire');
      await page.getByLabel('State *').click();
      await page.getByLabel('State *').fill('Bombay');
      await page.getByLabel('City *').click();
      await page.getByLabel('City *').fill('Bombay City');
      await page.locator('#zipcode').click();
      await page.locator('#zipcode').fill('1441');
      await page.getByLabel('Mobile Number *').click();
      await page.getByLabel('Mobile Number *').fill('+221771234567');
      await page.getByRole('button', { name: 'Create Account' }).click();
      await expect(page.getByText('Account Created!')).toBeVisible();
      await page.getByRole('link', { name: 'Continue' }).click();
      await expect(page.getByText('Logged in as Elhadji')).toBeVisible();
      await page.getByRole('link', { name: ' Delete Account' }).click();
      await expect(page.getByText('Account Deleted!')).toBeVisible();
    
      // ---------------------
      */
    });



