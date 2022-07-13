const Element = '.ScCoreButtonSuccess-sc-1qn4ixc-5'

function clickButton()
{
    if (!!document.querySelector(Element) == 'true'){
        document.querySelector(Element).click() 
    } else {
        //pass
        console.log("Button doesn't exist yet")
    }
}

setInterval(clickButton, 30000);

