function animation(){
    var line=document.getElementById("myline")
    var x=0;
    var y=0;
    // el bdaya mn el rokn el shmal el fo2 0,0
    line.setAttribute("x1",0);
    line.setAttribute("y1",0);
    //n3mel set interval 3shan kol 7aba yrsem 7eta so8yra
    var timer=setInterval(function(){
        x=x+5;//kol el interval y5les nzeed 5
        y=y+5;//kol el interval y5les nzeed 5

        line.setAttribute("x2",x);//hena b2oloe at7rek aw arsm el x2 w el y2 b el qyem x,y b3ed el zyada
        line.setAttribute("y2",y);

        if(x>=400|| y>=400){
            clearInterval(timer);
            alert("animation ended you reatched the border limits")
           


        }

    },50)// kol 20 ms hy3ed 


}
 animation();//bnady 3ala el function
            