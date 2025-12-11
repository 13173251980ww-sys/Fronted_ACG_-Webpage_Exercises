function loadHitoko(){
    const container=document.getElementsByClassName("api")[0];
    if(container.children){
        for(var i=0;i<container.children.length;i++){
            container.children[i].remove();
            i--;
        }
    }

    var data=null;
    axios({
        method:"get",
        url:'https://v1.hitokoto.cn/?c=a&c=c&c=d&c=k',
    }).then(function (resp) {
        data=resp.data;
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
    })
}

var timeId=null;
function autoWrite(){
    clearInterval(timeId);
    loadHitoko();
    timeId=setInterval(loadHitoko,10000);
}

autoWrite();


