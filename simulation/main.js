/**
 * Created by santosh on 4/18/17.
 */

function submitForm(){
    console.log("Submit Form");

    var formObject = document.getElementById('form1');
    //formObject.submit();
}


function addNewDiv() {
    console.log("ADD");

    var childnode = document.createElement("div");
    childnode.className = 'sample';

    var textNode = document.createTextNode("Helloo");
    childnode.appendChild(textNode);


    var maindiv = document.getElementById("sample");
    maindiv.appendChild(childnode)
}



function addNewImage() {
    console.log("ADD I");

    var childnode = document.createElement("div");
    childnode.className = 'sample';

    var imgNode = document.createElement("img");
    imgNode.setAttribute("src", "141.png");
    imgNode.setAttribute("width", "100px");
    childnode.appendChild(imgNode);


    var btnDiv = document.createElement("div");
    var btn = document.createElement("BUTTON");        // Create a <button> element
    var t = document.createTextNode("CLICK ME");       // Create a text node
    btn.appendChild(t);
    btnDiv.appendChild(btn);

    childnode.appendChild(btnDiv);


    var maindiv = document.getElementById("sample");
    maindiv.appendChild(childnode)
}


function removeNode() {
    var maindiv = document.getElementById("sample");
    var childList = maindiv.childNodes;

    if(childList[1]) {
        maindiv.removeChild(childList[1]);
    }

}

function addNewImageUsingClone() {
    var refNode = document.getElementById('cloneNode');
    var newCloneNode = refNode.cloneNode(true);
    newCloneNode.removeAttribute("id");
    newCloneNode.removeAttribute("style");

    var maindiv = document.getElementById("sample");
    maindiv.appendChild(newCloneNode)
}


function addNewImageUsingClone1() {
    var refNode = document.getElementById('refDiv');
    var newCloneNode = refNode.cloneNode(true);
    newCloneNode.removeAttribute("id");
    newCloneNode.removeAttribute("style");

    var maindiv = document.getElementById("parentDiv");
    // maindiv.appendChild(newCloneNode)
    maindiv.insertBefore(newCloneNode, maindiv.firstChild);
}