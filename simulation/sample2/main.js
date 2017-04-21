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

var youtubeList = ["https://www.youtube.com/embed/G62HrubdD6o", "https://www.youtube.com/embed/mg2xtVYgQhI", "https://www.youtube.com/embed/eON7OfV2yFs"];


function increaseCount(elemObj){
    var currentCount = elemObj.children[1].innerHTML;
    var increaseCount = Number(currentCount) + 1;

    elemObj.children[1].innerHTML = increaseCount;
};


function postContent() {
    var refObj = $("#refIdForContent").clone(true);
    refObj.removeAttr("id");
    refObj.css("display","block");

    refObj.children().children().first().html(contentList[Math.floor(Math.random() * 6)]);

    $("#parentId").prepend(refObj);
}


function postImage() {
    var refImgObj = document.getElementById("refIdForImage");

    var newImgObj = refImgObj.cloneNode(true);
    newImgObj.style.display = "block";
    newImgObj.removeAttribute("id");

    newImgObj.children[0].children[0].src = imageList[Math.floor(Math.random() * 4)];


    var parentObj = document.getElementById("parentId");
    parentObj.insertBefore(newImgObj, parentObj.firstChild);
}


function postVideo() {
    var refObj = document.getElementById("refIdForVideo");

    var newObj = refObj.cloneNode(true);
    newObj.style.display = "block";
    newObj.removeAttribute("id");

    newObj.children[0].children[0].children[0].src = youtubeList[Math.floor(Math.random() * 3)];


    var parentObj = document.getElementById("parentId");
    parentObj.insertBefore(newObj, parentObj.firstChild);
}





