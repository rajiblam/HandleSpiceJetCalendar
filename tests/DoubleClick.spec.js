import {test,expect} from '@playwright/test'

test('Handle Double Click Action',async({page})=>
{
    await page.goto('https://qa-practice.netlify.app/double-click')
    await page.dblclick('#double-click-btn')

    const displayedText=await page.locator("//div[normalize-space()='Congrats, you double clicked!']").textContent()
    await page.waitForTimeout(5000)


    await expect(displayedText).toContain("Congrats, you double clicked!")

    await page.waitForTimeout(5000)
})