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

    $("#toast").fadeIn(1000, function(){
        $(this).fadeOut(5000);
    });
}


function postImage() {
    var refObj = $("#refIdForImage").clone(true);
    refObj.removeAttr("id");
    refObj.css("display","block");

    refObj.children().children().first().prop("src", imageList[Math.floor(Math.random() * 4)]);

    $("#parentId").prepend(refObj);
}


function postVideo() {
    var refObj = $("#refIdForVideo").clone(true);
    refObj.removeAttr("id");
    refObj.css("display","block");

    refObj.children().children().children().first().prop("src", youtubeList[Math.floor(Math.random() * 3)]);

    $("#parentId").prepend(refObj);
}





