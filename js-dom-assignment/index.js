// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    const htmlElement = document.getElementsByTagName('*');
    for(let i = 0; i < htmlElement.length; i++){
        if(htmlElement[i].textContent === 'USA'){
            console.log(htmlElement[i].textContent);
            return;
        }
    }
}
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    const htmlSales = document.getElementsByTagName('*');
    for(let i = 0; i < htmlSales.length; i++){
        if(htmlSales[i].textContent === 'Sales'){
            console.log(htmlSales[i-1].textContent);
        }
    }
}

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    const htmltags = document.querySelectorAll('a');
    for(let i = 0; i < htmltags.length; i++){
        if(htmltags[i].firstChild !== null){
            let htmlchild = htmltags[i].querySelectorAll('span');
            for(let m = 0; m < htmlchild.length; m++){
                console.log(htmlchild[m].textContent);
            }
        }
    }
}

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies() {
    const htmlhobby = document.querySelectorAll('skills');
    for(let i = 0; i < htmlhobby.length; i++){
        let value = htmlhobby[i].value;
        let contents = htmlhobby[i].textContent;
        console.log(`${value} ${contents}`);
    }
}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.


// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
const favcolor = document.getElementsByName('favoriteColor');
let oldcolor;
for(let i = 0; i < favcolor.length; i++){
    favcolor[i].addEventListener('click',changeColor,favcolor[i].textContent);
}

function changeColor(){
    alert(`So you like ${oldcolor} now?`);
    oldcolor = favcolor.textContent;
}
// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.


// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node) {
    if(node.nodeType === 1){
        console.log(node.tagName);

        node = node.firstChild;

        while(node) {
            walkTheDOM(node);
            node = node.nextSibling;
        }
    }
}