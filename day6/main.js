/**
 * Created by santosh on 4/20/17.
 */


function increaseCount(elemObj){

    console.log(this);
    console.log(elemObj);
    console.log("We need to increase the counter!!!");

    var currentCount = elemObj.children[1].innerHTML;
    var increaseCount = Number(currentCount) + 1;

    elemObj.children[1].innerHTML = increaseCount;
};