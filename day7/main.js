/**
 * Created by santosh on 4/20/17.
 */
var imageList = ["img/nodejs-vs-java.png", "img/141.png", "img/cool.jpg", "img/infinite_truth.jpg"];

var contentList = ["Failure is simply the opportunity to begin again, this time more intelligently.",
                    "Yesterday, you said tomorrow.",
                    "If you want to go fast, go alone. If you want to go far, bring others along.",
                    "Always remember that the future comes one day at a time.",
                    "Don't find fault. Find a remedy.",
                    "When we give up on our dreams, we die while still alive."];


function increaseCount(elemObj){
    var currentCount = elemObj.children[1].innerHTML;
    var increaseCount = Number(currentCount) + 1;

    elemObj.children[1].innerHTML = increaseCount;
};


function increaseCountUsingJQuery(elemObj){

    var currentCount = $(elemObj).children().last().html();
    var increaseCount = Number(currentCount) + 1;

    $(elemObj).children().last().html(increaseCount);
};


function postImage() {
    var refImgObj = document.getElementById("refIdForImage");

    var newImgObj = refImgObj.cloneNode(true);
    newImgObj.style.display = "block";
    newImgObj.removeAttribute("id");

    newImgObj.children[0].children[0].src = imageList[Math.floor(Math.random() * 4)];


    var parentObj = document.getElementById("parentId");
    parentObj.insertBefore(newImgObj, parentObj.firstChild);
}



function postContent() {
    var refObj = document.getElementById("refIdForContent");

    var newObj = refObj.cloneNode(true);
    newObj.style.display = "block";
    newObj.removeAttribute("id");

    newObj.children[0].children[0].children[0].innerHTML = '"' + contentList[Math.floor(Math.random() * 6)] + '"';


    var parentObj = document.getElementById("parentId");
    parentObj.insertBefore(newObj, parentObj.firstChild);
}


