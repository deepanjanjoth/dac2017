/**
 * Created by santosh on 4/20/17.
 */


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


    var parentObj = document.getElementById("parentId");
    parentObj.insertBefore(newImgObj, parentObj.firstChild);
}