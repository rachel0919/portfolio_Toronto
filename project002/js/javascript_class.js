// 제이쿼리 기본 설정

$(document).ready(function(){


  // hero 오른쪽에서 왼쪽으로 이동하는 자동슬라이드




  // btn을 클릭했을 때 이동하는 구조로 변경
  $('.btn li').click(function(){



    let i = $(this).index();
    $('.btn li').removeClass('on')
    $(this).addClass('on')



    $('.mainImg li').eq(i).css({'left':'0'}).stop().animate({'left':'-100%'})
    $('.mainImg li').eq(i-1).css({'left':'100%'}).stop().animate({'left':'0'})

  });

  // 일정시간마다 버튼이 자동으로 이동

  let a = 0;
  let slide = setInterval(function(){

    a++;
    if(a == 3) a = 0;



    $('.btn li').eq(a).trigger('click')





  },3000);



  // hero에 마우스가 들어갔을 때 화면이 멈추어라
  // 화면이 멈추는게 아니라 setinterval을 지우는 것임

  $('.hero').mouseenter(function(){


    clearInterval(slide)



  })

  $('.hero').mouseleave(function(){
    slide = setInterval(function(){

      a++;
      if(a == 3) a = 0;
  
  
  
      $('.btn li').eq(a).trigger('click')
  
    },3000)
    

  })





// pro_list의 왼쪽 오른쪽을 클릭할 때마다 이미지의 위치가 바뀌어라
// 왼쪽 오른쪽을 눌렀을 때 변수가 변해라
let num = 0;
$('.pro_list').children('.left').click(function(){


  
  if(num<4) num++;
  if(num == 4){

    alert('마지막페이지입니다')

  }

  $('.pro_list').children('.container').children('ul').stop().animate({'left':'-220'*num + 'px'},800)
  



})


$('.pro_list').children('.right').click(function(){


  
  if(num>0) num--;
  
  $('.pro_list').children('.container').children('ul').stop().animate({'left':'-220'*num + 'px'},800)


})




// 스크롤의 위치값을 찾기

$(window).scroll(function(){

  let sc = $(this).scrollTop();
  console.log(sc);

  let infoTop =$('.info').offset().top

  if(sc>=infoTop){

    $('.header').addClass('fixed')


  }else{
    $('.header').removeClass('fixed')

  };

  if(sc>=infoTop-600){

    $('.info').addClass('on')
    $('.info .list').addClass('on')
    $('.info .list2').addClass('on')



  }else{


    $('.info').removeClass('on')
    $('.info .list').removeClass('on')
    $('.info .list2').removeClass('on')




  };


  if(sc>=infoTop && sc<=infoTop + 800){

    $('.info .list').addClass('on')
    $('.info .list2').addClass('on')



  }else{


    $('.info .list').removeClass('on')
    $('.info .list2').removeClass('on')




  };




});




// list li를 클릭했을 때 장바구니 옆의 숫자가 늘어나라

let cart = 0;
$('.list li').click(function(){


  cart++;
  $('.util').find('.num').text(cart);
  $('.total>div').eq(0).find('span').text(cart);



});



// 장바구니 클릭시 장바구니가 나타남

let aa = 0;

$('.cart').children('h2').click(function(){

aa++;
if(aa==2)aa=0;
if(aa===1){

  $('.cart').addClass('on')

}else{

  $('.cart').removeClass('on')

}
});



// gnb 두번째 li product 클ㄹ릭했을때 on이 붙어라



$('.gnb li').eq(1).click(function(e){

  e.preventDefault()
  $('.contents').removeClass('loginBig');
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(1).addClass('on')


})


// logo를 클릭했을때 메인페이지에 on이 붙어라



$('.logo').click(function(e){

  e.preventDefault()
  $('.contents').removeClass('loginBig');
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(0).addClass('on')


})




// util 첫번째 li를 클릭했을때 로그인에 on이 붙어라


  $('.util li').eq(0).click(function(e){

    e.preventDefault()
$('.contents').addClass('loginBig');


$('.contents>div').removeClass('on')
$('.contents>div').eq(2).addClass('on')

  })


// login에서 // logo를 클릭했을때 메인페이지에 on이 붙어라


$('.login h2').click(function(e){

 
  $('.contents').removeClass('loginBig');
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(0).addClass('on')


})




// util 두번째 li를 클릭했을때 cart에 on이 붙어라



$('.util li').eq(1).click(function(e){

  e.preventDefault()
  $('.cart').addClass('on')


})

// pro_list의 li들을 클릭했을때 product에 on이 붙어라

$('.pro_list li').click(function(e){

  e.preventDefault()
  $('.product').addClass('on')



});




})     //제이쿼리 끝!!!!!!!!



