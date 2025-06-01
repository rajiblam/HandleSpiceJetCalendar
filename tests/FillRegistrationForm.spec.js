import {test,expect} from "@playwright/test"

test('Registration Form',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Register.html")
    //await page.getByPlaceholder("First Name").fill("Rajib")
    await page.getByRole("textbox",{name:'first name'}).fill('Rajib')
    await page.getByRole("textbox",{name:'last name'}).fill('Lama')
    const textAreaEle=await page.getByRole("textbox",{name:'Adress'})
    await textAreaEle.fill("This is text area")
    //await page.getByPlaceholder("Last Name")
    // await page.locator("//textarea").fill("This is my playwright learning")
    // await page.locator("//input[@ng-model='EmailAdress']").fill("rajib.lama@gmail.com")
    // await page.locator("//input[@ng-model='Phone']").fill("980069670")
    // await page.locator("//input[@name='radiooptions' and @value='Male']").check()
    // await page.locator("//input[@id='checkbox1']").check()
    // await page.click("//div[@id='msdd']")
    // await page.click("//div[@id='msdd']//parent::div//following::div//ul//li//a[text()='English']")
    // await page.selectOption("//select[@id='Skills']","APIs")
    // await page.click("//span[@aria-labelledby='select2-country-container']")
    // await page.click("//ul[@id='select2-country-results']//li[text()='India']")

    await page.waitForTimeout(5000)
})