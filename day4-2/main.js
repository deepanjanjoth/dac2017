/**
 * Created by santosh on 4/18/17.
 */

var colorList = ['red', 'green', 'blue', 'yellow', 'violet', 'brown', 'black',
'choclate', 'coral', 'pink', 'indigo'];

function createPost() {

    var randomNumber = Math.floor(Math.random()*11);

    var textAreaId = document.getElementById("textAreaId");
    var textAreaValue = textAreaId.value;

    var newNode = document.createElement("div");
    newNode.className = "child";
    newNode.style.backgroundColor = colorList[randomNumber];
    newNode.style.color = "white";
    newNode.style.textAlign = "center";

    // we did assigned the content typed by user, to newly created node.
    var textNode = document.createTextNode(textAreaValue);
    newNode.appendChild(textNode);


    var parentNode = document.getElementById('parentId');
    //parentNode.appendChild(newNode);
    parentNode.insertBefore(newNode, parentNode.firstChild);


}