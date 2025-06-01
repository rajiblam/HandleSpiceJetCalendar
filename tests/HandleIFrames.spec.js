const {test,expect} = require ("@playwright/test")

test('Hanlde Iframe',async({page})=>
{
    //await page.goto('https://ui.vision/demo/webtest/frames/')
    //Handle Single IFrame using FrameLocator
    // const frame1=await page.frameLocator("//frame[contains(@src,'frame_1')]")
    // frame1.locator("input[name=mytext1]").fill("Rajib")

    await page.goto("https://demo.automationtesting.in/Frames.html")
    //Handle Frame using frame object
    const frame1URL=await page.frame({url:'https://demo.automationtesting.in/SingleFrame.html'})
    frame1URL.locator("//h5[text()='iFrame Demo']//parent::div//div//input").nth(0).fill("Iframe Playwright")
    //frame1URL.fill("input[name=mytext1]","Lama")

    await page.waitForTimeout(5000)
})