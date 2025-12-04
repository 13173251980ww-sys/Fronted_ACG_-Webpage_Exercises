var icon=document.getElementById("index").getElementsByTagName("img")[0];

var i=0,j=0,k=0;
setInterval(function(){
    icon.style.border="3px solid rgb("+i+","+j+","+k+")";
    i=(i+1)%256;
    if(i==0){
        i=50;
    }
    j=(j+2)%256;
    if(j==0){
        j=50;
    }
    k=(k+3)%256;
    if(k==0){
        k=50;
    }
},100)

var run_time=document.getElementById("run_time");

var day=24;
var hour=16;
var minute=0;
var second=0;
setInterval(function(){
    second++;
    if(second==60){
        second=0;
        minute++;
        minute=minute<10?"0"+minute:minute;
    }
    if(minute==60){
        minute=0;
        hour++;
        hour=hour<10?"0"+hour:hour;
    }
    if(hour==24){
        hour=0;
        day++;
        day=day>10?"0"+day:day;
    }
    second=second<10?"0"+second:second;
    run_time.innerText="本站勉强运行:"+day+"天"+hour+"时"+minute+"分"+second+"秒";
},1000)