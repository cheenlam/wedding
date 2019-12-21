//開頭圖片輪播
var top_number = 0;
var top_translate;

function top_start() {
    top_translate = setInterval(topplay, 2000)
};

function topplay(){  
    if(top_number < 300){
        top_number += 100
        var  x = `translateX(-${top_number}%)`
        $('.toppic img').css('transform',x).css('transition','1s')
        
    }
    else if(top_number=300){
        top_number += 100
        var  x = `translateX(-${top_number}%)`
     
        $('.toppic img').css('transform',x).css('transition','1s')
        setTimeout(function(){
            top_number=0
            var  x = `translateX(-${top_number}%)`
            $('.toppic img').css('transform',x).css('transition','0s')
        },1000)                       
    }; 
    
    switch(top_number){
    case 100:
        $('.topmenu li').removeClass()
        $('#topmenu_01').addClass('show')
        break;
    case 200:
    $('.topmenu li').removeClass()
        $('#topmenu_02').addClass('show')
        break;
    case 300:
        $('.topmenu li').removeClass()
        $('#topmenu_03').addClass('show')
        break;
    default:
        $('.topmenu li').removeClass()
        $('#topmenu_04').addClass('show')   
    }
};

//開頭圖片表單點擊事件
$('#topmenu_01').click(function(){
    $('.toppic img').css('transform','translateX(-100%)').css('transition','1s')
    $('.topmenu li').removeClass()
    $('#topmenu_01').addClass('show')
    top_number=100
});
$('#topmenu_02').click(function(){
    $('.toppic img').css('transform','translateX(-200%)').css('transition','1s')
    $('.topmenu li').removeClass()
    $('#topmenu_02').addClass('show')
    top_number=200
});
$('#topmenu_03').click(function(){
    $('.toppic img').css('transform','translateX(-300%)').css('transition','1s')
    $('.topmenu li').removeClass()
    $('#topmenu_03').addClass('show')
    top_number=300
});
$('#topmenu_04').click(function(){
    $('.toppic img').css('transform','translateX(0%)').css('transition','1s')
    $('.topmenu li').removeClass()
    $('#topmenu_04').addClass('show')
    top_number=0
});

//滑鼠移入/移出 & 網頁ready事件
$('.toppic,.topmenu').mousemove(function() {
    clearInterval(top_translate)
});
$('.toppic,.topmenu').mouseout(function() {
    top_start()
});
$(document).ready(function() {
    top_start()
});



//文字 & 頭像動畫 (捲軸判定)
//about區塊

$('#about h2 ,#about p').fadeIn(3000);
$('#about h1').addClass('animated bounceInLeft');
$('#about img').addClass('animated bounceInLeft');


var scroll = $(window).scroll(function(e){ 
//hosts區塊
if( scroll.scrollTop() > $('.about').offset().top-200){
    $('#hosts h2').slideDown(1000);
    $('#hosts p').slideDown(2000);
    $('#gotop').css( 'display','block');
    scaleFc();
}
else{
    $('#gotop').css( 'display','none')
}; 

if( scroll.scrollTop() > $('.hosts').offset().top){
    scaleFc2()
}

if(scroll.scrollTop() > $('.survey').offset().top/2){

     scaleFc3()
};

//survey區塊 
if(scroll.scrollTop() >= $('.survey').offset().top-200){
    $('.survey p').fadeIn(3000);
    $('.survey h2').addClass('animated bounceInDown');
}; 

})


//頭像圖片漸變計時
var scale_start = true;
function scaleFc(){
if(scale_start){
    var hosts_scale = 0.3 ;
    var hoststime =setInterval(function(){
        hosts_scale = hosts_scale+0.1;
        $('.hostspic').css('transform',`scale(${hosts_scale})`);   
        if(hosts_scale >= 0.9){
            clearInterval(hoststime);
         };
    },50);
}  
scale_start = false;
};

var scale_start2 = true;
function scaleFc2(){
if(scale_start2){
    var hosts_scale2 = 0.3 ;
    var hoststime2 =setInterval(function(){
        hosts_scale2 = hosts_scale2+0.1;
        $('.hostspic2').css('transform',`scale(${hosts_scale2})`);        
        if(hosts_scale2 >= 0.9){
            clearInterval(hoststime2);
         };
    },50);
}  
scale_start2 = false;
};

var scale_start3 = true;
function scaleFc3(){
if(scale_start3){
    var hosts_scale3 = 0.3 ;
    var hoststime3 =setInterval(function(){
        hosts_scale3 = hosts_scale3+0.1;
        $('.hostspic3').css('transform',`scale(${hosts_scale3})`);        
        if(hosts_scale3 >= 0.9){
            clearInterval(hoststime3);
         };
    },50);
}  
scale_start3 = false;
};


//選單滑動
$('#toAbout').click(function(){
    window.scrollTo({ 
    top: $('.about').offset().top, 
    behavior: "smooth" 
    });
});
$('#toHosts').click(function(){
    window.scrollTo({ 
    top: $('.hosts').offset().top, 
    behavior: "smooth" 
    });
});
$('#toSurvey').click(function(){
    window.scrollTo({ 
    top: $('.survey').offset().top, 
    behavior: "smooth" 
    });
});

//gotop滑動回到頂端
$('#gotop').click(function(){
    window.scrollTo({ 
    top: 0, 
    behavior: "smooth" 
    });
});


