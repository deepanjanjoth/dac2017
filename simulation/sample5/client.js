/**
 * Created by santosh on 5/6/17.
 */

function ajaxTest() {

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "./server.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function() {

        if(xhttp.readyState == 4 && xhttp.status == 200) {

           var resObj =  JSON.parse(xhttp.responseText);
           console.log(resObj);

           postContentUsingQueryAjaxOnLoad(resObj);
        }

    }
}



function postContentUsingQueryAjaxOnLoad(resObj) {

    for(var i=0; i<resObj.length; i++) {
        var newObj = $("#refIdForContent").clone(true).css("display", "block").removeAttr("id");

        var dynamicContent = resObj[i].quote;
        newObj.children().children().first().html(dynamicContent);

        $("#parentId").prepend(newObj);

        // some logic to display notification
        $("#notificationId").fadeIn(2000, function(){
            $("#notificationId").fadeOut(5000);
        });
    }


}




/** Weather app **/
function weatherApp() {
    // var url = "http://api.openweathermap.org/data/2.5/weather";
    var url = "http://api.openweathermap.org/data/2.5/forecast";
    var data = {"q":"mumbai", "appid":"7023923dd26a725da995c75b65864de5"};

    var jqxhr = $.get(url, data);

    jqxhr.done(function(resonseData){
        console.log(resonseData);
    });

};

weatherApp();