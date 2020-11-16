function ajax(){
//Creating an XHR Object
var xhttp = new XMLHttpRequest();
//Eventlistener
xhttp.onreadystatechange = function(){
    //condition
    if(this.readyState==4 && this.status==200){
        var resoponse = JSON.parse(this.responseText);
        //console.log(resoponse);
        var Jtabelecont = resoponse.table_cont;
        console.log(Jtabelecont);
        var output1=""
        var output2=""
        var output3=""
        var output4=""
        var output5=""
        var output6=""
        var output7=""
        var output8=""
        var output9=""
        var output10=""
        var output11=""

        for(var i=0;i<Jtabelecont.length;i++){
            output1 += "<th>" +Jtabelecont[i].col1 +"</th>";
            output2 += "<td>" +Jtabelecont[i].col2 +"</td>";
            output3 += "<td>" +Jtabelecont[i].col3 +"</td>";
            output4 += "<td>" +Jtabelecont[i].col4 +"</td>";
            output5 += "<td>" +Jtabelecont[i].col5 +"</td>";
            output6 += "<td>" +Jtabelecont[i].col6 +"</td>";
            output7 += "<td>" +Jtabelecont[i].col7 +"</td>";
            output8 += "<td>" +Jtabelecont[i].col8 +"</td>";
            output9 += "<td>" +Jtabelecont[i].col9 +"</td>";
            output10 += "<td>" +Jtabelecont[i].col10 +"</td>";
            output11 += "<td>" +Jtabelecont[i].col11 +"</td>";

        }
        document.getElementById("headrow").innerHTML=output1;
        document.getElementById("row1").innerHTML=output2;
        document.getElementById("row2").innerHTML=output3;
        document.getElementById("row3").innerHTML=output4;
        document.getElementById("row4").innerHTML=output5;
        document.getElementById("row5").innerHTML=output6;
        document.getElementById("row6").innerHTML=output7;
        document.getElementById("row7").innerHTML=output8;
        document.getElementById("row8").innerHTML=output9;
        document.getElementById("row9").innerHTML=output10;
        document.getElementById("row10").innerHTML=output11;


    }
}
xhttp.open("GET","ajax.json",true);
xhttp.send();
}