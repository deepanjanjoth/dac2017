function ajaxCall() {

    var searchcity = $("#searchbox").val();
    searchcity = searchcity || "Mumbai";

    var url = "http://api.openweathermap.org/data/2.5/forecast/daily";
    var data = { "q": searchcity, "appid": "7023923dd26a725da995c75b65864de5" }
    var jqxhr = $.get(url, data);

    jqxhr.done(function(resData) {
        weatherDiv(resData);
    });
};

function weatherDiv(resData) {
    for (var i = 0; i < resData.list.length; i++) {
        var newObj = $("#templateId").clone(true).css("display", "block").removeAttr("id");

        var cityObj = newObj.children().first().children().first().children().first().children().first();
        cityObj.val(resData.city.name);



        $("#parentId").prepend(newObj);
        console.log(newObj);
    }
}

ajaxCall();