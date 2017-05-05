
function helloAjax() {

    // STEP 1
    var xhttp = new XMLHttpRequest();

    // STEP 2
    var url = "./data.json";
    xhttp.open("GET", url, true);

    // STEP 3
    xhttp.send();

    // STEP 4
    xhttp.onreadystatechange = function(){

        console.log(xhttp);
        console.log(this);

        if(this.readyState == 4 && this.status == 200) {
            console.log(this.response);
        }

    };





}

