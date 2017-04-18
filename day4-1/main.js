/**
 * Created by santosh on 4/18/17.
 */

var colorList = ['red', 'green', 'blue', 'yellow', 'violet', 'brown', 'black',
'choclate', 'coral', 'pink', 'indigo'];

function createPost() {

    var randomNumber = Math.floor(Math.random()*11);;

    var newNode = document.createElement("div");
    newNode.className = "child";
    newNode.style.backgroundColor = colorList[randomNumber];

    var parentNode = document.getElementById('parentId');
    parentNode.appendChild(newNode);
}