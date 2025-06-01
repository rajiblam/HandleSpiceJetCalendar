const {test,expect}=require ("@playwright/test")

test('Hanlde Pagination Web Table',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table=await page.locator('#productTable')

    //Count total number of table header
    const totalColumn=table.locator('thead th');
    console.log('Total Columns :',await totalColumn.count())
    await expect(await totalColumn.count()).toBe(4)

    //Count total Rows
    const totalRows=table.locator('tbody tr')
    console.log('Total Rows :',await totalRows.count())
    await expect(await totalRows.count()).toBe(5)

    // await selectProduct(totalRows,page,'Smartwatch')
    // await selectProduct(totalRows,page,'Smartphone')
    // await selectProduct(totalRows,page,'Tablet ')

    //Print table value in console using nested for loop
    /*for(let i=0;i<await totalRows.count();i++)
    {
        const singleRow=totalRows.nth(i)
        const TotalColumnInsideRow=singleRow.locator('td')
        for(let j=0;j<await TotalColumnInsideRow.count()-1;j++)
        {
            console.log("Value inside Column -",await TotalColumnInsideRow.nth(j).textContent())
        }
    }*/

        //Count all pages data and print in console
    const checkBox=await page.locator("//table[@id='productTable']//tr//td//input")
    await page.waitForTimeout(3000)
    const TotalPagesCount=await page.locator('#pagination li a')
    for(let p=0;p<await TotalPagesCount.count();p++)
    {
        if(p>0)
        {
            await TotalPagesCount.nth(p).click()
            await page.waitForTimeout(3000)
                    for(let i=0;i<await totalRows.count();i++)
                    {
                        const singleRow=totalRows.nth(i)
                        const TotalColumnInsideRow=singleRow.locator('td')
                        for(let j=0;j<await TotalColumnInsideRow.count()-1;j++)
                        {
                            console.log("Value inside Column -",await TotalColumnInsideRow.nth(j).textContent())
                        }
                        }
        }
        await checkBox.nth(0).click()
        await page.waitForTimeout(3000)
    }

    //await page.waitForTimeout(5000)
})

async function selectProduct(rows,page,ProductName)
{
    const targetCheckBoxSmartphone=rows.filter({
        has: page.locator('td'),
        hasText: ProductName
    })
   await targetCheckBoxSmartphone.locator('input').check()
}