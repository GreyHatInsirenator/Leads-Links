// function clickedBt() {                                    onclick="clickedBt()"
//     console.log("Button Clicked");
// }

// let box = document.getElementById("box")

// box.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })
//-----------------------------------------------------------------------------------------------------------------

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "";
    renderLeads()
})


function renderLeads() {

    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
    `
    }


    ulEl.innerHTML = listItems
}



//--------------------------------------------------------------------------------------------------------------



