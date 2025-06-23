// 제이쿼리 기본 설정

$(document).ready(function(){

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const heroSection = document.querySelector('.hero');
        const heroHeight = heroSection.offsetHeight;
      
        // Hero 섹션을 지나면 배경색을 추가
        if (window.scrollY > heroHeight) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });









// pro_list의 왼쪽 오른쪽을 클릭할 때마다 이미지의 위치가 바뀌어라
// 왼쪽 오른쪽을 눌렀을 때 변수가 변해라
let num = 0;
$('.proList1').children('.right').click(function(){


  
  if(num<4) num++;
 if(num == 4){

    alert('마지막페이지입니다')

  }
 

  $('.proList1').children('.container').children('ul').stop().animate({'left':'-410'*num + 'px'},400)
  


})


$('.proList1').children('.left').click(function(){


  
  if(num>0) num--;
  
  $('.proList1').children('.container').children('ul').stop().animate({'left':'-410'*num + 'px'},400)


})






// header의 h1를 클릭하면 메인페이지에 on이 붙어라


$('.header h1').click(function(e){

 
  $('.contents').removeClass('loginBig');
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(0).addClass('on')


})




// gnb의 두번째 li를 클릭하면 galleryList에 on이 붙어라

$('.gnb li').eq(1).click(function(e){

  e.preventDefault()

  $('.contents').removeClass('loginBig');
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(2).addClass('on')


  $('.header').removeClass('sub')
  $('.header').addClass('sub')

  $('.cart').removeClass('on')
  $(window).scrollTop(0);



});





//.gallerypic, .gallerytxt>img, .gallerytxt>p, .gallerytxt>span를 클릭하면 product에 on이 붙어라
$('.gallerypic, .gallerytxt>img, .gallerytxt>p, .gallerytxt>span').click(function(e){

  e.preventDefault()
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(1).addClass('on')

  
  $('.header').removeClass('sub')
  $('.header').addClass('sub')

  $('.cart').removeClass('on')
  $(window).scrollTop(0);


})








// proList1 li를 클릭하면 product에 on이 붙어라


$('.proPic, .proTextbox').click(function(e){

  e.preventDefault()
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(1).addClass('on')


  $('.header').removeClass('sub')
  $('.header').addClass('sub')

  $('.cart').removeClass('on')
  $(window).scrollTop(0);

});




// util의 첫번째 li에 클릭하면 loginPage에 on이 붙어라



$('.util li').eq(0).click(function(e){

  e.preventDefault()
$('.contents').addClass('loginBig');


$('.contents>div').removeClass('on')
$('.contents>div').eq(3).addClass('on')
$(window).scrollTop(0);

});



// loginPage에 logo를 클릭하면 메인페이지로 이동해라
$('.logupperTxt>img').eq(0).click(function(e){

 
  $('.contents').removeClass('loginBig');
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(0).addClass('on')


});



// proList1 li를 클릭하면 product에 on이 붙어라


$('.proSugbox').click(function(e){

  e.preventDefault()
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(1).addClass('on')


  $('.header').removeClass('sub')
  $('.header').addClass('sub')

  $('.cart').removeClass('on')
  $(window).scrollTop(0);

});

// closeBtn을 클릭하면 


$('.closeBtn').click(function(){



$('.cart').removeClass('on')


});

$('.gnb li:first-child').click(function(e) {
  e.preventDefault(); // 기본 동작 방지

  // .story 위치로 부드럽게 스크롤 이동
  $('html, body').stop().animate({
      scrollTop: $('.story').offset().top
  }, 700, 'swing'); // 'swing'으로 더 부드럽게
});











// DOM 요소 선택
const listItems = document.querySelectorAll('.mainImg ul li');

// 애니메이션 시작 함수
function startAnimation() {
    listItems.forEach((item, index) => {
        // 각 li 요소가 3초마다 차례로 애니메이션을 진행하도록 설정
        setTimeout(() => {
            item.style.zIndex = '10'; // 현재 li가 위에 오도록 z-index 설정

            // 애니메이션 트리거
            item.style.clipPath = 'circle(100% at 50% 100%)'; // 원이 확대되는 효과

            // 강제로 트랜지션을 트리거하기 위해 requestAnimationFrame 사용
            requestAnimationFrame(() => {
                item.style.transition = 'clip-path 1.5s ease-in-out'; // transition을 다시 설정
            });
        }, index * 3000); // 3초 간격으로 차례대로 실행
    });
}

// 처음에 애니메이션 시작
startAnimation();


$(window).on('scroll', function() {
  $('.story .story_box li').each(function() {
      // 현재 li 요소의 위치를 확인
      const position = $(this).offset().top;
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();

      // li가 뷰포트에 들어왔을 때 애니메이션 추가 (지연)
      if (position < scrollTop + windowHeight) {
          // storyPic 애니메이션 (0.1초 지연)
          setTimeout(() => {
              $(this).find('.storyPic_001, .storyPic_002, .storyPic_003, .storyPic_004, .storyPic_005').addClass('animate');
          }, 100);  // 0.1초 지연
          
          // storyText 애니메이션 (0.4초 지연)
          setTimeout(() => {
              $(this).find('.storyText_001, .storyText_002, .storyText_004, .storyText_005').addClass('animate');
          }, 400);  // 0.4초 지연
      } else {
          // 요소가 뷰포트 밖으로 나가면 애니메이션 제거
          $(this).find('.storyText_001, .storyText_002, .storyText_004, .storyText_005, .storyPic_001, .storyPic_002, .storyPic_003, .storyPic_004, .storyPic_005').removeClass('animate');
      }
  });
});



document.querySelector(".util li:nth-child(2) a").addEventListener("click", function (event) {
  event.preventDefault(); // a 태그의 기본 동작(페이지 이동) 막기
  
});
// 장바구니 클릭시 장바구니가 나타남

let aa = 0;

$('.util li').eq(1).click(function(){

aa++;
if(aa==2)aa=0;
if(aa===1){

  $('.cart').addClass('on')

}else{

  $('.cart').removeClass('on')

}
});

// 장바구니 추천부분 클릭했을때
$('.cartrecomList').click(function(e){

  e.preventDefault();

  $('.contents>div').removeClass('on')
  $('.contents>div').eq(1).addClass('on')

  
  $('.header').removeClass('sub')
  $('.header').addClass('sub')

  
  $('.cart').removeClass('on')
  $(window).scrollTop(0);
})






// 1. 전역변수 제거하고 함수에 값 넘기기
$('.proList1 .container .shopNow').click(function (e) {
  e.preventDefault();

  let pro1Pic = $(this).siblings('div').find('.proList1P').attr('src');
  let pro1name = $(this).siblings('div').find('.proName img').attr('src');
  let pro1cost = $(this).siblings('div').find('.proPrice').text();

  pro1cost = parseInt(pro1cost.replace(/[^0-9]/g, ''));
  let count = 1;

  // 기존 li 중에 같은 이미지가 있는지 검사
  let $existingItem = $('.cartProList .listLi').filter(function () {
    return $(this).find('.cartPicB img').attr('src') === pro1Pic;
  });

  if ($existingItem.length > 0) {
    // 이미 있는 경우 → 수량만 +1
    let currentAmount = parseInt($existingItem.find('.amount').text());
    $existingItem.find('.amount').text(currentAmount + 1);
  } else {
    // 없으면 → 새 li 추가
    addCartItem(pro1Pic, pro1name, pro1cost, count);
  }

  updateCart(); // 전체 카운트 및 가격 갱신
});
// 2. updateCart를 수정
function addCartItem(pro1Pic, pro1name, pro1cost, count) {
  $('.listLi').addClass('on');
  $('.cart').addClass('on');

  const $newItem = $('.listLi').first().clone();
  $newItem.css({ visibility: "visible", position: "static", left: "auto" });
  $newItem.find('.cartPicB img').attr('src', pro1Pic);
  $newItem.find('.cartPicT img').attr('src', pro1name);
  $newItem.find('.count .num .amount').text(count);

  $('.cartProList').append($newItem);

  updateCart(); // 총합 계산은 여기서 호출
}



// 삭제 아이콘 클릭 시, li 삭제 + 가격/수량 업데이트
$('.cartProList').on('click', '.deleteIcon', function () {
  $(this).closest('.listLi').remove();
  updateCart(); // 수량 및 가격 업데이트 호출
});



// 수량 증가
$('.cartProList').on('click', '.plusI>i', function () {
  const $li = $(this).closest('.listLi');
  let amount = parseInt($li.find('.amount').text());

  amount++;
  $li.find('.amount').text(amount);

  updateCart(); // 추가
});

// 수량 감소
$('.cartProList').on('click', '.minusI>i', function () {
  const $li = $(this).closest('.listLi');
  let amount = parseInt($li.find('.amount').text());

  if (amount > 1) {
    amount--;
    $li.find('.amount').text(amount);

     updateCart(); // 추가
  }
});






function updateCart() {
  let totalCount = 0;
  let unitPrice = 14900;
  
  // 모든 li의 수량 합산
  $('.cartProList .listLi').each(function () {
    const itemCount = parseInt($(this).find('.amount').text());
    totalCount += itemCount;
  });

  let totalPCost = unitPrice * totalCount;
  let shippingCost = (totalPCost >= 50000) ? 0 : 3000;
  const totalCost = totalPCost + shippingCost;
  

  // UI 업데이트
  $('.cartMiddle .total .price em').text(totalPCost.toLocaleString());
  $('.cartMiddle .total .totalPrice p em').text(totalCost.toLocaleString());
  $('.cartBox span').text(totalCount); // 우측 상단 장바구니 수량 표시
  $('.cartMiddle .total .parcel em').text(shippingCost.toLocaleString());
  $('.util .num').text(totalCount); 
}








// 갤러리 리스트에서 Add To Cart 클릭 시
$('.gallerybox a').click(function (e) {
  e.preventDefault();

  const $box = $(this).closest('.gallerybox');
  const proPic = $box.find('.gallerypic img').attr('src');       // 제품 이미지
  const proName = $box.find('.gallerytxt img').attr('src');      // 텍스트 이미지 (제품명 대신)
  const count = 1;

  // 기존 li 중 같은 이미지가 있는지 확인
  let $existingItem = $('.cartProList .listLi').filter(function () {
    return $(this).find('.cartPicB img').attr('src') === proPic;
  });

  if ($existingItem.length > 0) {
    // 이미 있으면 수량만 증가
    let currentAmount = parseInt($existingItem.find('.amount').text());
    $existingItem.find('.amount').text(currentAmount + 1);
  } else {
    // 없으면 새로 추가
    addCartItem(proPic, proName, 14900, count);
  }

  updateCart();
});



// 상세페이지 Add To Cart 클릭 시 (고정된 상품)
$('.deMain .add a').click(function (e) {
  e.preventDefault();

  const deMainPic = 'img/proNewyork.png';
  const deMainName = 'img/productText_nychoco_002.png';
  const count = parseInt($('.deMain .num001').text()) || 1;

  let $existingItem = $('.cartProList .listLi').filter(function () {
    return $(this).find('.cartPicB img').attr('src') === deMainPic;
  });

  if ($existingItem.length > 0) {
    let currentAmount = parseInt($existingItem.find('.amount').text());
    $existingItem.find('.amount').text(currentAmount + count);
  } else {
    addCartItem(deMainPic, deMainName, 14900, count);
  }

  updateCart();
});



// 상세페이지 수량 + 버튼
$('.deMain .plI').click(function () {
  let $num = $(this).siblings('.num001');
  let count = parseInt($num.text()) || 0;
  count++;
  $num.text(count);
  $('.deMain .won span').text(count * 14900);
});

// 상세페이지 수량 - 버튼
$('.deMain .miI').click(function () {
  let $num = $(this).siblings('.num001');
  let count = parseInt($num.text()) || 0;
  if (count > 1) {
    count--;
    $num.text(count);
    $('.deMain .won span').text(count * 14900);
  }
});


  







  
  // 카트 지금 결제하기 
  $('.cart .buyBtn').click(function(){
  
  
    $('.contents').addClass('loginBig');
  
  
  $('.contents>div').removeClass('on')
  $('.contents>div').eq(3).addClass('on')
  $(window).scrollTop(0);
  
  $('.listLi').removeClass('on');
  
  // count 초기화
  count = 0;
  
  // 수량 초기화
  $('.count .num .amount').text(count);
  
  // 가격 초기화
  $('.cartMiddle .total .price em').text('0');  // 가격을 0으로 설정
  $('.cartMiddle .total .totalPrice p em').text('0');  // 총 가격을 0으로 설정
  $('.cartMiddle .total .parcel em').text('0');  // 배송비를 0으로 설정
  
  
  $('.cart').removeClass('on')
  
  })
  

















    // foooter util 클릭
    $('.snsIcons i:nth-child(1)').on('click', function() {
      window.open('https://www.instagram.com/benandjerrys/', '_blank');
    });

    $('.snsIcons i:nth-child(2)').on('click', function() {
      window.open('https://x.com/benandjerrys', '_blank');
    });


    $('.snsIcons i:nth-child(3)').on('click', function() {
      window.open('https://www.snapchat.com/add/benandjerrys', '_blank');
    });




    








})     //제이쿼리 끝!!!!!!!!



