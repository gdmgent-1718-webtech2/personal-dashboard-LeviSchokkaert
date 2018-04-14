//code voor Json
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

//weer gent
getJSON("http://openweathermap.org/data/2.5/weather?q=ghent,belgium&appid=b6907d289e10d714a6e88b30761fae22", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("gent").innerHTML= "In Gent is het " + (parseInt(data["main"]["temp"])) + "°C" + "<br>"
        + " met Beaufort " + (parseInt(data["wind"]["speed"])) ;
    }
});

//weer zandbergen
getJSON("http://openweathermap.org/data/2.5/weather?q=Zandbergen,Belgium&appid=b6907d289e10d714a6e88b30761fae22", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("zandbergen").innerHTML= "In zandbergen is het " + (parseInt(data["main"]["temp"])) + "°C" + "<br>"
        + " met Beaufort " + (parseInt(data["wind"]["speed"])) ;
    }
});


//nieuws 1
getJSON("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c1de4208c6d34885b827f57a1e9ca02e", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        let random = Math.floor((Math.random() * data["totalResults"]));
        document.getElementById("nieuws1").innerHTML= data["articles"][random]["title"];
        document.getElementById("nieuws2").innerHTML= data["articles"][random]["description"];
    }
});

//nieuws 2

getJSON("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c1de4208c6d34885b827f57a1e9ca02e", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        let random = Math.floor((Math.random() * data["totalResults"]));
        document.getElementById("nieuws3").innerHTML= data["articles"][random]["title"];
        document.getElementById("nieuws4").innerHTML= data["articles"][random]["description"];
    }
});

//quote
getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("quote1").innerHTML= data[0]["title"];
        document.getElementById("quote2").innerHTML= data[0]["content"];
    }
});

//grapje
getJSON("https://icanhazdadjoke.com/slack", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("joke").innerHTML= data["attachments"][0]["fallback"];
    }
});


