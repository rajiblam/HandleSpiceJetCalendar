const {test,expect}=require("@playwright/test")

test('Handle Default Alerts',async({page})=>
{

    await page.goto('https://demo.automationtesting.in/Alerts.html')

    //Enable Alert Handle for handle Alert
    page.on('dialog',async dialog=>
    {
        await expect(dialog.message()).toContain('I am an alert box!')
        await expect(dialog.type()).toContain('alert')
        await dialog.accept()
    }
    )
    await page.click("//div[@id='OKTab']//button[contains(text(),'click the button')]")
    await page.waitForTimeout(5000)
})

test('Handle Confirmation Alert',async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    await page.click("(//a[contains(text(),'Alert with OK')])[2]")
    //Creating Alert Handler for handle alert
    page.on('dialog',async dialog=>
    {
        await expect(dialog.message()).toContain('Press a Button !')
        await expect(dialog.type()).toContain('confirm')
        await dialog.accept()
    }
    )
    await page.click("//div[@id='CancelTab']//button")
    const confirmationText=await page.locator("#demo").textContent()
    console.log("Final Confirmation Text -",confirmationText)
    await expect(confirmationText).toBe('You pressed Ok')
    await page.waitForTimeout(5000)
})

test('Handle Confirmation Alert with Press Cancel Button',async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    await page.click("(//a[contains(text(),'Alert with OK')])[2]")
    //Creating Alert Handler for handle alert
    page.on('dialog',async dialog=>
    {
        await expect(dialog.message()).toContain('Press a Button !')
        await expect(dialog.type()).toContain('confirm')
        await dialog.dismiss()
    }
    )
    await page.click("//div[@id='CancelTab']//button")
    const confirmationText=await page.locator("#demo").textContent()
    console.log("Final Confirmation Text -",confirmationText)
    await expect(confirmationText).toBe('You Pressed Cancel')
    await page.waitForTimeout(5000)
})

test('Handle Prompt Alert',async({page})=>
    {
        await page.goto('https://demo.automationtesting.in/Alerts.html')
    
        await page.click("//a[contains(text(),'Alert with Textbox')]")
        //Creating Alert Handler for handle alert
        page.on('dialog',async dialog=>
        {
            await expect(dialog.message()).toContain('Please enter your name')
            await expect(dialog.type()).toContain('prompt')
            await expect(dialog.defaultValue()).toContain('Automation Testing user')
            await dialog.accept('Rajib Lama')
        }
        )
        await page.click("//button[contains(text(),'demonstrate the prompt box')]")
        const confirmationText=await page.locator("#demo1").textContent()
        console.log("Final Confirmation Text -",confirmationText)
        await expect(confirmationText).toBe('Hello Rajib Lama How are you today')
        await page.waitForTimeout(5000)
    })
