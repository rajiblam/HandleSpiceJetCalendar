const {test,expect} = require('@playwright/test')

test('Handle Mouse Hover Action',async({page})=>
{
    await page.goto('https://automationstepbystep.com/')
    const jmeterMenu=await page.locator("#menu-item-86")
    const jmeterAdvancedSubmenu=page.getByText('JMeter Advanced')

    jmeterMenu.hover()
    jmeterAdvancedSubmenu.hover()
    jmeterAdvancedSubmenu.click()

    await page.waitForTimeout(5000)
})