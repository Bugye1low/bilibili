var btn_onclick=document.querySelectorAll('.btn_onclick')
var mask=document.querySelector('.mask')

for(var i=0;i<btn_onclick.length;i++){
btn_onclick[i].onclick=function(){
    var modal_buttom=document.querySelector('.modal_buttom')
    mask.style.display= 'block';
    console.log(this)
       this.className='btn_default'
       var btn_default=document.querySelector('.btn_default')
       btn_default.innerHTML='以订阅'
    modal_buttom.onclick=function(a){
        console.log(a)
        
        mask.style.display= 'none';
    }
    //===================     ========================== 
    // var events_left=document.querySelector('icon-left')

    // events_left.onclick=function(){}




    btn_default .onclick=function(){
    var cancle=document.querySelector('.cancle')
    console.log(cancle)
    cancle.style.display= 'block';
    
    btn_default.innerHTML='订阅直播'
    var modal_buttom_a1=document.querySelector('.modal_buttom_a1')
    var modal_buttom_a2=document.querySelector('.modal_buttom_a2')

    modal_buttom_a1.onclick=function(){
        console.log(123)
        btn_default.innerHTML='订阅直播'
        btn_default.className='btn_onclick'
        cancle.style.display= 'none';
    }
    modal_buttom_a2.onclick=function(){
        btn_default.innerHTML='订阅直播'
        console.log(123)
        cancle.style.display= 'none';
    }

}

btn_default.onmouseover=function(){
        btn_default.innerHTML='取消订阅'
    }
    btn_default.onmouseout=function(){
        btn_default.innerHTML='以订阅'
    }
}
}




// ==============================   ===========================
var foot_left=document.querySelector('.foot_left')
var foot_right=document.querySelector('.foot_right')

var foot_ul=document.querySelector('.foot_ul')
foot_left.onclick=function(){
    if(!foot_ul.style.left){
        foot_ul.style.left='-980px'
        foot_ul.style.transition='0.6s'
    }
    else if(foot_ul.style.left!='0px'){
        foot_ul.style.left=0
    }
    else{
        foot_ul.style.left='-980px'
    }
    
}
foot_right.onclick=function(){
    if(!foot_ul.style.left){
        foot_ul.style.left='-980px'
        foot_ul.style.transition='0.6s'
    }else if(foot_ul.style.left != '0px'){
        foot_ul.style.left=0
    }
    else{
        foot_ul.style.left= '-980px'
    }
    
}

