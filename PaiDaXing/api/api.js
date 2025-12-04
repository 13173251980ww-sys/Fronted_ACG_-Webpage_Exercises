async function loadHitoko(){
    const container=document.getElementsByClassName("api")[0];
    fadeout(container.children);
    if(container.children){
        for(var i=0;i<container.children.length;i++){
            container.children[i].remove();
            i--;
        }
    }

    const json=await fetch('https://v1.hitokoto.cn/?c=a&c=c&c=d&c=k');
    const data=await json.json();
    console.log(data);

    const content=document.createElement('span');
    const source=document.createElement('span');

    content.style.cssText='font-size: 17px;line-height: 1.8;color: #AAA;'
    source.style.cssText='font-size: 15px;line-height: 1.8;color: #888;'
    content.innerText = data.hitokoto;
    source.innerText = " —— " + data.from+" —— ";

    container.appendChild(content);
    var br=document.createElement('br');
    container.appendChild(br);
    container.appendChild(source);
    fadein(container.children);
}

var timeId=null;
function autoWrite(){
    clearInterval(timeId);
    loadHitoko();
    timeId=setInterval(loadHitoko,10000);
}

autoWrite();

function fadeout(elements) {
    Array.from(elements).forEach((element) => {
        clearInterval(element.timedId);
        var opcity=10;
        element.timedId=setInterval(function(){
            opcity--;
            if(opcity<=0){
                clearInterval(element.timedId)
                element.style.opacity=0;
            }
            element.style.opacity=opcity/10;
        },10);
    })
}

//封装淡入动画
function fadein(elements) {
    Array.from(elements).forEach((element) => {
        clearInterval(element.timedId);
        var opcity=0;
        element.timedId=setInterval(function(){
            opcity++;
            if(opcity>=10){
                clearInterval(element.timedId)
                element.style.opacity=1;
            }
            element.style.opacity=opcity/10;
        },10);
    })
}
