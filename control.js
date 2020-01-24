var a,b,v;
var p,te;
var timer1,timer2,timer3;
var i1,i2;
var spans;
var im,sp;
window.onload=function(){
    a=getComputedStyle(document.getElementById('z_1'),null);
    b=getComputedStyle(document.getElementById('z_2'),null);
    v=document.getElementById('line');
    im=document.getElementById('img');
    sp=document.getElementById('num');
    im.style.opacity='0';
    sp.style.opacity='0';
    te=new Array('','新','年','快','乐','','H','a','p','p','y',' ','N','e','w',' ','Y','e','a','r','!','');
    p=new Array();
    var pj=Number(a.marginLeft.slice(0,-2));
    var wj=Number(a.width.slice(0,-2));
    p[0]=pj +'px';
    p[1]=((507-440)/260*wj+pj) +'px';
    p[2]=((570-440)/260*wj+pj) +'px';
    p[3]=((637-440)/260*wj+pj) +'px';
    p[4]=((705-440)/260*wj+pj) +'px';

    pj=Number(b.marginLeft.slice(0,-2));
    wj=Number(b.width.slice(0,-2));
    p[5]=pj +'px';
    p[6]=((440-410)/320*wj+pj) +'px';
    p[7]=((464-410)/320*wj+pj) +'px';
    p[8]=((488-410)/320*wj+pj) +'px';
    p[9]=((511-410)/320*wj+pj) +'px';
    p[10]=((532-410)/320*wj+pj) +'px';
    p[11]=((545-410)/320*wj+pj) +'px';
    p[12]=((572-410)/320*wj+pj) +'px';
    p[13]=((593-410)/320*wj+pj) +'px';
    p[14]=((625-410)/320*wj+pj) +'px';
    p[15]=((634-410)/320*wj+pj) +'px';
    p[16]=((660-410)/320*wj+pj) +'px';
    p[17]=((680-410)/320*wj+pj) +'px';
    p[18]=((705-410)/320*wj+pj) +'px';
    p[19]=((721-410)/320*wj+pj) +'px';
    p[20]=((730-410)/320*wj+pj) +'px';
    i1=0;i2=0;
    v.style.width='4px';
    timer1=setInterval(move,1500);
}
function move(){
    //alert(i);
    if(i1==0){
        v.style.marginTop='100px';
        v.style.height=a.height;
        spans=document.getElementById('z_1');
        
    }else if(i1==5){
        v.style.marginTop=(120+Number(a.height.slice(0,-2)))+'px';
        v.style.height=b.height;
        spans=document.getElementById('z_2');
        clearInterval(timer1);
        timer1=setInterval(move,300);
    }else if(i1==10){
        clearInterval(timer1);
        timer1=setInterval(move,1500);
    }else if(i1==11){
        clearInterval(timer1);
        timer1=setInterval(move,300);
    }else if(i1==14){
        clearInterval(timer1);
        timer1=setInterval(move,1500);
    }else if(i1==15){
        clearInterval(timer1);
        timer1=setInterval(move,300);
    }else if(i1==21){
        //alert('gg');
        clearInterval(timer1);
        i1=0;
        timer3=setInterval(show,40);
    }
    v.style.display='block';
    clearInterval(timer2);
    timer2=setInterval(shine,500);
    v.style.marginLeft=p[i1];
    spans.innerHTML=spans.innerHTML+te[i1]
    i2=0;
    ++i1;
}
function shine(){
    if(i2%2==0){
        v.style.display='block';
    }else{
        v.style.display='none';
    }
    i2++;
}
function show(){
    sp.style.opacity=i1/10+'';
    im.style.opacity=i1/10+'';
    if(i1==10){
        clearInterval(timer3);
    }
    i1++;
}
var is=true;
var score=0;
function change(){
    if(is){
        is=false;
        score=Math.floor(Math.random()*201-100);
    }
    sp.innerHTML='(～￣▽￣)～得分:'+score+'(⊙o⊙)';
    document.getElementById('n1').style.opacity=1;
    document.getElementById('n2').style.opacity=1;
    document.getElementById('n3').style.opacity=1;
}