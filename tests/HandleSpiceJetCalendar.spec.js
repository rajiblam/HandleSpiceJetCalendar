import {test,expect} from "@playwright/test"

test('Handle Spice jet Calendar',async({page})=>
{
    await page.goto("https://www.spicejet.com/")
    //Click on calendar
    await page.click("(//div[@class='css-1dbjc4n']//*[name()='svg'])[7]")
    //Target Date, Month, Year
    const actualDate="9";
    const actualMonth="May";
    const actualYear="2026";
    const actualMonthYear=`${actualMonth} ${actualYear}`;
    console.log(actualMonthYear)
    while(true)
    {
        const expectedMonthyearCalendar1=await page.locator(`//div[@data-testid='undefined-month-${actualMonth}-${actualYear}']//div[@class='css-76zvg2 r-homxoj r-adyw6z r-1kfrs79']`).textContent()
        if(actualMonthYear===expectedMonthyearCalendar1)
        {
            break;
        }
        await page.click("(//*[name()='svg']//*[name()='g' and contains(@fill,'none')]//*[name()='circle' and contains(@cx,'24.5')])[1]")
    }
    await page.click(`//div[@data-testid='undefined-month-${actualMonth}-${actualYear}']//div[@class='css-76zvg2 r-homxoj r-ubezar r-16dba41'][text()=${actualDate}]`);

    await page.waitForTimeout(5000)
})