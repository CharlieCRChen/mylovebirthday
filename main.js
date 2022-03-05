function toggleSound() {
    var music = document.getElementById("music");//获取ID  
    if (music.paused) { //判读是否播放  
        music.paused=false;
        music.play(); //没有就播放 
    }    
}


var i=0;
var str="亲爱的老婆,|生日快乐！今天是我们相识的第542天，我们在一起已经一年半啦！我很希望未来的每个生日都能给你送去祝福，不论我们相隔多远，不论我们有多忙，我们的心中都存着对彼此的爱，看着对方不断成长。|我们之间有很多美好的回忆，在过去的542天里，我们打卡了好多城市，从福州，到深圳，到厦门，到上海，到苏州，再到杭州。未来我们还可以走过更多地方，让更多的地方留下属于我们的印记。|你说过，我们两个人在一起，就好像打饥荒一样，要在生活中的一个又一个挑战中不断生活下去，还要越活越好，我们俩在一起，就是幸福加倍，苦难分担，我相信我们一定会变得越来越好的！我知道老婆对我们的未来有很多担心，但我会努力把它们变成一个又一个的确定，等到明年老婆生日的时候，我想又会有更多确定的东西了。|爱你！虽然我不在你的身边，但是就像这首穿越时空的思念一样，我对你的爱也会穿越时空，陪伴你迎接未来的一年又一年。";
window.onclick=function typing(){
    setInterval("toggleSound()",1);
    var mydiv=document.getElementById("text");
    if (str.charAt(i) == "|"){
        mydiv.innerHTML+="<br/><br/>";
    }
    else{
        mydiv.innerHTML+=str.charAt(i);
    }
    i++;
    var id=setTimeout(typing,100);
    if(i==str.length){clearTimeout(id);}
}
    
    
