import {test,expect} from "@playwright/test"

test('InputBoxTest',async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    //const countryName=await page.locator('#autocomplete').nth(0);
    // await countryName.fill('India');
    // await page.locator("//div[@id='ui-id-72']").click();
    // console.log(await countryName.textContent());

    await expect.soft(page).toHaveTitle('Practice Page1');
    await expect.soft(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');

    //await expect(countryName).toHaveValue('India');
    await page.waitForTimeout(5000);
})