/**
 * Created by santosh on 4/20/17.
 */
var imageList = ["img/nodejs-vs-java.png", "img/141.png", "img/cool.jpg", "img/infinite_truth.jpg"];

function increaseCount(elemObj){
    var currentCount = elemObj.children[1].innerHTML;
    var increaseCount = Number(currentCount) + 1;

    elemObj.children[1].innerHTML = increaseCount;
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