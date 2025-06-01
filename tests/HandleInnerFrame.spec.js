const {test,expect}=require('@playwright/test')

test('Handle Inner Frame',async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Frames.html')

    await page.click("(//a[@class='analystic'])[2]")

    const allFrames=await page.frame({url:'https://demo.automationtesting.in/MultipleFrames.html'})

    const allChildFrame=await allFrames.childFrames()

    allChildFrame[0].locator("//h5[text()='iFrame Demo']//parent::div//input").nth(0).fill("Hellow")

    await page.waitForTimeout(5000)
})