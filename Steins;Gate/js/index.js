//获取phonesliders下的li
var phone_slider_list=document.getElementById("phonesliders").getElementsByTagName("li");

//默认显示第一张
for(var i=0;i<phone_slider_list.length;i++){
    phone_slider_list[i].style.opacity="0";
}

phone_slider_list[0].style.opacity="1";


var index=0;
setInterval(function(){
    fadeout(phone_slider_list[index]);
    index=(index+1)%4;
    fadein(phone_slider_list[index]);
},4000)

//封装淡出动画
function fadeout(element) {
    clearInterval(element.timedId);
    var opcity=10;
    element.timedId=setInterval(function(){
        opcity--;
        if(opcity<=0){
            clearInterval(element.timedId)
            element.style.opacity=0;
        }
        element.style.opacity=opcity/10;
    },10)
}

//封装淡入动画
function fadein(element) {
    clearInterval(element.timedId);
    var opcity=0;
    element.timedId=setInterval(function(){
        opcity++;
        if(opcity>=10){
            clearInterval(element.timedId)
            element.style.opacity=1;
        }
        element.style.opacity=opcity/10;
    },10)
}