/*** Created by lucero on 17/10/2016.*/
var nivel = function ( dato ) {
    var a=100; var b=10000;
    if(dato<=a){
        return lvl=0;
    }
    else if((a<dato) && (dato<=(a+b)/2)){
        return lvl=Math.round((2*(Math.pow((dato-a)/(b-a),2)))*100);
    }
    else if ((a+b)/2 <dato && dato<=b){
        return lvl=Math.round((1-2*(Math.pow(((b-dato)/(b-a)),2)))*100);
    }
    else if(b<=dato){
        return lvl=100;
    }
}
var refresh_top = function(){
    $.get('users')


        .done(function (data) {
            //console.log(data);
            $("#dc").empty();

           //$('#dc').html( data.dc);
            var ind = data.userss;
          /*  for (var  us in ind) {
                var individual = $('<li class="list-group-item"></li>').html("<h2 class='top'>"+" User:   " +ind[us].usuario+"  Score:  " + "<span class='score'>"+ ind[us].score+ "</span>"+" Level: "+nivel(ind[us].score)+"</h2>");

                console.log(individual);

                $("#dc").append(individual);
            }*/
            for (var us=0;us<ind.length;us++){
                if (us <10){
                    var individual = $('<li class="tabla"></li>').html("<PRE class='top'>"+"<h2 class='top'>"+" User:    " +ind[us].usuario+"   Score:    " + "<span class='score'>"+ ind[us].score+ "</span>"+"   Level:  "+"<span class='score'>"+nivel(ind[us].score)+"</span>"+"</h2>"+"</PRE>");

                   // console.log(individual);

                    $("#dc").append(individual);
                }
            }
        });
}

var interval = 2500; // where X is your every X minutes

setInterval(refresh_top, interval);