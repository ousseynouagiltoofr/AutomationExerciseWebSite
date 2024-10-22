import {test,expect} from '@playwright/test'


test('Test Case 6: Contact Us Form',async ({page}) => {
 
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  await page.getByRole('link', { name: ' Contact us' }).click();
  await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
  await page.getByPlaceholder('Name').click();

  await page.getByPlaceholder('Name').fill('Elhadji Ousseynou DIOP');
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('elhadjiousseynou.diop95@gmail.com');
  await page.getByPlaceholder('Subject').click();
  await page.getByPlaceholder('Subject').fill('Reclamation');
 /* await page.getByPlaceholder('Your Message Here').click();

  await page.getByPlaceholder('Your Message Here').fill('Je réclame mon argent');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('input[name="upload_file"]').click();
  await page.locator('input[name="upload_file"]').setInputFiles('TMS-106 (1).pdf');
  
  
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  //await expect(page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.')).toBeVisible();
  await page.getByRole('link', { name: ' Home' }).click();
  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  */
  });
  

  // ---------------------
 
