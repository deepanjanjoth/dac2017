/**
 * Created by santosh on 4/18/17.
 */
/*parentNode.insertBefore(newNode, parentNode.firstChild);*/


function registerUser(){

    var nameId = document.getElementById("id1");
    var nameValue = nameId.value;

    if(nameValue == '') {
        // SOME LOGIC REQ to show message for name
        var unvid = document.getElementById('unvid');
        unvid.style.display = 'block';
        //unvid.style.color = "green";
    }
};