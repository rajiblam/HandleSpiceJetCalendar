import {test,expect} from "@playwright/test";

test("Handle Dropdown",async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Hanlde single selet dropdown
    //await page.locator('#country').selectOption({label:'Japan'}); // select by label
    //await page.locator('#country').selectOption('Japan'); // Select by visible text
    //await page.locator('#country').selectOption({value:'uk'}); // Select by value
    //await page.locator('#country').selectOption({index:3}); // Select by index

    //await page.selectOption('#country','India'); // Direct callling selectOption method

    //Assertion for verify total number of dropdown
    /*const totalOptions=await page.locator('#country option');
    console.log('Total Number of drowpdown : ',await totalOptions.count());*/
    //await expect(totalOptions).toHaveCount(10);

    //Assertion for count total number of options in dropdown using JS Array
    //const arrayAllOptions=await page.$$('#country option');

    //console.log("Total Number of options is Array :",arrayAllOptions.length);

    // Use asertion for checking length of array
    //await expect(arrayAllOptions.length).toBe(10);

    //Different approcah to validate drowpdonw option - like India is present in dropdown or not

    //const allOptionInStringFormat=await page.locator('#country').textContent();
    //await expect(allOptionInStringFormat.includes('Japan123')).toBeTruthy();

    //Second approcah to validate dropdown using looping statement

    /*const allOptions=await page.$$('#country option'); // capturing all dropdown option in Array using page.$$
    let status=false;

    for(const singleOption of allOptions)
    {
        //console.log(await singleOption.textContent());
        const optionText=await singleOption.textContent();

        if(optionText.includes('Japan'))
        {
            console.log("Target Text :",optionText)
            status=true;
            break;
        }
    }

    await expect(status).toBeTruthy();*/

    const allOptions=await page.$$('#country option'); // capturing all dropdown option in Array using page.$$
    
    for(const singleOption of allOptions)
    {
        //console.log(await singleOption.textContent());
        let optionText=await singleOption.textContent();

        if(optionText.includes('India'))
        {
            console.log("Target Text :",optionText);
            //await page.selectOption('#country',optionText);
            await page.selectOption('#country','India');
            break;
        }
    }

    await page.waitForTimeout(5000);
})