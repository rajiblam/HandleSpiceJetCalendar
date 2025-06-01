import {test,expect} from "@playwright/test";

test('Handle Mutiple Dropdown',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select mutiple dropdown

    await page.selectOption('#colors',['Red','Yellow','Green']);

    //Verify total number of dropdown options

    const totOptions=await page.locator('#colors option');
    await expect(totOptions).toHaveCount(7);

    //Verify total number of dropdown using JS array $$ please use length for countßßß

    const jsArrayTotalOptions=await page.$$('#colors option');
    await expect(jsArrayTotalOptions.length).toBe(7);

    //Verify presence of the element inside the dropdown

    const allStringTextFromDropdown=await page.locator('#colors').textContent(); // This will return all text from the dropdown
    await expect(allStringTextFromDropdown.includes('Yellow')).toBeTruthy();

    await page.waitForTimeout(5000);
})