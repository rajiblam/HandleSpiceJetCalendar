const {test,expect}=require('@playwright/test')

test('Handle Calender',async({page})=>
{
    await page.goto('https://www.redbus.in/')
    await page.click("//i[@class='icon___9beafd icon icon-date_range']")

    const day="10";
    const monthYearActual="July 2025";
    const monthYearExpected=await page.locator("//p[@class='monthYear___d72513']").textContent();
    console.log('Actual -',monthYearActual ,' Expected ',monthYearExpected)

    //const year="2025";

    while(true)
    {
        const monthYearExpected=await page.locator("//p[@class='monthYear___d72513']").textContent();
        if(monthYearActual===monthYearExpected)
        {
            break;
        }
        await page.click("//i[@class='icon icon-arrow arrow___280ed0 right___054a19 ']")
    }
    await page.click(`//ul[@class='datesWrap___a57ec8']//li//span[text()=${day}]`)

    await page.waitForTimeout(5000)
})