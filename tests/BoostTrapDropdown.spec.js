import {test,expect} from "@playwright/test"

test('Boosttrap Dropdown Hanlde',async({page})=>
{
    await page.goto('https://www.redbus.in/')
    //await page.locator('#src').fill('Kolkata')
   await page.locator("//input[@class='sc-bxivhb dsDRlf']").nth(0).type('Kolkata')
   await page.waitForSelector("//ul[@class='sc-dnqmqq dZhbJF']//li//div//text[@class='placeHolderMainText']")
    const allKolkataLocation =await page.$$("//ul[@class='sc-dnqmqq dZhbJF']//li//div//text[@class='placeHolderMainText']")
    console.log("Total Kolkata Option :",allKolkataLocation.length)
    for(let kolOption of allKolkataLocation)
    {
        const locationName=await kolOption.innerText()
        //console.log(locationName)
        if(locationName.includes('Behala'))
        {
            await kolOption.click()
        }
    }

    await page.waitForTimeout(5000)
})