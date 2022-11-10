console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

let node1 = (document.getElementById("node1").innerHTML =
  "I used the getElementById('node1') method to access this");

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

let node2 = document.getElementsByClassName("node2")[0];

node2.textContent =
  'I used the getElementsByClassName("node2") method to access this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

let h3s = document.getElementsByTagName("h3");

for (let h3 of h3s) {
  h3.textContent =
    'I used the getElementByTagName("h3") method to access all of these';
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let newP = document.createElement("p");
let parent1 = document.getElementById("parent");
parent1.appendChild(newP);
newP.textContent = "This node was created using the createElement() method";

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

let a = document.createElement("a");
let parent2 = document.getElementById("parent");
parent2.appendChild(a);
a.textContent = "https://www.google.com";

// BONUS: Add a link href to the <a>

a.href = "https://www.google.com";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent1.insertBefore(a, newP);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let child = document.getElementById("N1");
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";
child.replaceWith(newChild);

// TODO: Remove the "New Child Node"

//parent.removeChild(newChild);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

let ul1 = document.createElement("ul");

list.forEach(item => {
  //console.log(item);
  let li1 = document.createElement("li");
  li1.textContent = item;
  //console.log(li1);
  ul1.append(li1);
});

document.querySelectorAll(".exercise4")[0].append(ul1);
// TODO: Create an unordered list element

//let ul1 = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each

/*for (let i = 0; i < list.length; i++) {
  let li = document.createElement("ul");
  li.textContent = list[i];
  ul1.appendChild(li);
}*/

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
  //create elements
  let modalDiv = document.createElement("div");
  let modalCard = document.createElement("div");
  let modalButton = document.createElement("button");

  //Modify elements
  modalDiv.id = "modal";
  modalCard.classList.add("modal-card");
  modalCard.innerText =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user ";
  modalButton.innerText = " Close";
  modalButton.addEventListener("click", () => {
    console.log("close Modal button clicked");
    modalDiv.remove();
    modalCard.remove();
    modalButton.remove();
  });
  //Appendingitems to the DOM
  modalCard.append(modalButton);
  modalDiv.append(modalCard);
  document.querySelector("body").append(modalDiv);
}

let showButton = document.querySelector("#btn");
showButton.addEventListener("click", () => {
  console.log("Show Modal button clicked");
  show();
});
