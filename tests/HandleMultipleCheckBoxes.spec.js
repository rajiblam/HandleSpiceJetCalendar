import {test,expect} from "@playwright/test";

test("Hanlde Mutiple Check Boxes",async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Handle Single Check Box
    const sundayCheckBox=await page.locator('#sunday');
    await sundayCheckBox.check();

    await expect(sundayCheckBox).toBeChecked();

    //Handle multiple checkboxes
    //Crate array for mutiple check boxes
    
    const selectMultipleCheckBoxes=
    [
        "#monday",
        "#wednesday",
        "#friday"
    ];

    for(const singleCheckBox of selectMultipleCheckBoxes) //Select Mutiple CheckBoxes
    {
        await page.locator(singleCheckBox).check();
    }

    await page.waitForTimeout(5000)
    
    //Unchcked Selected Checkboxes

    for(const singleCheckB of selectMultipleCheckBoxes)
    {
        if(await page.locator(singleCheckB).isChecked())
        {
            await page.locator(singleCheckB).uncheck();
        }
    }

    await page.waitForTimeout(5000)
})