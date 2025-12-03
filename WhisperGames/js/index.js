//获取轮播图所有的li标签
var banner_li_list=document.getElementById("slides").getElementsByTagName("li");

for (var i = 0; i < banner_li_list.length; i++) {
    banner_li_list[i].style.opacity=0;
}

banner_li_list[0].style.opacity=1;

var index=0;
setInterval(function animation_slides(){
    var step=10;
    fadeOut(banner_li_list[index]);

    index=(index+1)%12;
    fadeIn(banner_li_list[index])
},10000)

// 封装渐出动画
function fadeOut(element) {
    var opcity=10;

    var timeId=setInterval(function (){
        opcity--;
        if(opcity==0){
            clearInterval(timeId);
            opcity=0;
        }
        element.style.opacity=opcity/10;
    },50)
}

// 封装渐入动画
function fadeIn(element) {
    var opacity = 0;
    var timeId = setInterval(function() {
        opacity++;
        if (opacity < 10) {
        } else {
            clearInterval(timeId);
            opacity = 10;
        }
        element.style.opacity = opacity / 10;
    }, 50);
}

var more_projects=document.getElementsByClassName("more")[0].getElementsByClassName("btn")[0];

more_projects.onclick=function click(){
    var more_projects=document.getElementsByClassName("more")[0].getElementsByClassName("btn")[0];
    more_projects.remove()

    var more=document.getElementsByClassName("more")[0];

    var title=document.createElement("h2");
    title.setAttribute("class","title");
    title.innerText="More Projects";
    title.style.marginTop="200px";
    more.appendChild(title);

    var projects=document.createElement("ul");
    projects.id="moreProjects";
    more.appendChild(projects);

    for(var i=1;i<=48;i++){
        var li=document.createElement("li");
        var img=document.createElement("img");
        img.src="https://www.whisperinteractive.com/images/other/o0"+i+".jpg";
        li.appendChild(img);
        var a=document.createElement("a");
        var span1=document.createElement("span");
        var span2=document.createElement("span");
        span1.innerText="Shadow Tactics";
        span2.innerText="Shadow Tactics is a hardcore tactical stealth game set in Japan around the Edo period. Take control of a team of deadly specialists and sneak in the shadows between dozens of enemies ...";
        a.appendChild(span1);
        a.appendChild(span2);
        li.appendChild(a);
        projects.appendChild(li);

    }
    var close_container=document.createElement("div");
    close_container.className="btn";
    var close=document.createElement("input");
    close.type="button";
    close.value="Close";
    close.id="close";
    close_container.appendChild(close);
    more.appendChild(close_container);

    close.onclick=function(){
        var more=document.getElementsByClassName("more")[0];
        close_container.remove();
        projects.remove();
        title.remove();
        var more_container=document.createElement("div");
        more_container.className="btn";
        var more_btn=document.createElement("input");
        more_btn.type="button";
        more_btn.value="More Projects";
        more_btn.onclick=click;
        more_container.appendChild(more_btn);
        more.appendChild(more_container);
    }
}


