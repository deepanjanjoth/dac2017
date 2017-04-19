/**
 * Created by santosh on 4/18/17.
 */
/*parentNode.insertBefore(newNode, parentNode.firstChild);*/


function registerUser(){
    try{
        var nameId = document.getElementById("id1");
        var nameValue = nameId.value; // it returns string.

        var unvid = document.getElementById('unvid');
        if(nameValue == '') {
            // SOME LOGIC REQ to show message for name
            unvid.style.display = 'block';
        } else {
            unvid.style.display = 'none';
        }


        var number1 = parseInt(nameValue);
    } catch(err){
        console.log(err);
    }
};


function onfocusDemo(){
    console.log("FOCUS EVENT");
};

function onblurDemo(){
    console.log("BLUR EVENT");
};


function onkeyupDemo(){
    console.log("KEYUP");

    var nameId = document.getElementById("id1");
    var nameValue = nameId.value; // it returns string.

    var unvid = document.getElementById('unvid');
    if(nameValue == '') {
        // SOME LOGIC REQ to show message for name
        unvid.style.display = 'block';
    } else {
        unvid.style.display = 'none';
    }
}