const Element = '.ScCoreButtonSuccess-sc-1qn4ixc-5'

function clickButton()
{
    let button = document.querySelector(Element)
    if (button){
        button.click()
    }
}

setInterval(clickButton, 30000);

