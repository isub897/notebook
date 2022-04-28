var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.classList.add("delete");

	//create the button element and append it to UL tag
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	//create button element and append it to the LI tag
	button.appendChild(document.createTextNode("✅"));
	li.appendChild(button);
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(ev) {
	if (inputLength() > 0 && ev.keyCode === 13) {
		createListElement();
	}
}

function isButton(boolean) {
	return boolean;
}


// function doSomething(element) {
// 	 if (element.target.tagName === "LI") {
// 	 	element.target.classList.toggle("done");
// 	 } else if (element.target.tagName === "BUTTON") {
// 	 	element.target.parentElement.remove();
// 	 }
// }

//this was practice using the switch function which i kinda like
function doSomething(element) {
	var item = element.target;
	switch (item.tagName) {
		case "LI":
			item.classList.toggle("done");
			break;
		case "BUTTON":
			item.parentElement.remove();
			break
		default:
			break;	
	}
}


ul.addEventListener("click", doSomething)

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

