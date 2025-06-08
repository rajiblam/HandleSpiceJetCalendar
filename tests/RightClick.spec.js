import {test,expect} from '@playwright/test'

test('Right Click Action Handle',async({page})=>
{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    const rightClickMe=await page.getByText('right click me')

    await rightClickMe.nth(0).click({button:'right'})

    await page.waitForTimeout(5000)
})