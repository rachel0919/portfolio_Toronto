$(document).ready(function(){









    // 예약창 설정


    $(".reservation-box button[type='submit']").click(function(e){
        e.preventDefault(); // 새로고침 방지
          // 선택된 방문목적과 날짜 값 가져오기
          const purposeValue = $('#purposeSelect').val();
          const dateValue = $('#date').val();
   
        // 폼 열기
        $(".reservation-form").addClass("on");


          // 두 번째 폼에 값 설정 (jQuery의 .val() 사용)
          $('#purposeInput').val(purposeValue);  // 방문목적
          $('#dateInput').val(dateValue);  // 날짜



    });


// 예약하기 버튼 활성화 조건: 이메일과 요청사항 입력, 체크박스 두 개 모두 체크해야 함
function checkFormValidity() {
    const emailFilled = $('#email').val() !== '';  // 이메일 입력 여부
    const requestFilled = $('#request').val() !== '';  // 요청사항 입력 여부
    const termsChecked = $('#terms').is(':checked');  // 체크박스 1 상태
    const agreementChecked = $('#agreement').is(':checked');  // 체크박스 2 상태
  
    // 모든 조건이 맞으면 버튼 활성화, 아니면 비활성화
    if (emailFilled && requestFilled && termsChecked && agreementChecked) {
      // 활성화된 상태
      $('.reservation-form > div:nth-child(1) .reserBox').css('pointer-events', 'auto'); // 클릭 활성화
      $('.reservation-form > div:nth-child(1) .reserBox').removeClass('disabled'); // 회색 필터 제거
    } else {
      // 비활성화된 상태
      $('.reservation-form > div:nth-child(1) .reserBox').css('pointer-events', 'none'); // 클릭 비활성화
      $('.reservation-form > div:nth-child(1) .reserBox').addClass('disabled'); // 회색 필터 추가
    }
  }
  
  // 이메일과 요청사항 입력을 모니터링하여 버튼 활성화 상태를 업데이트
  $('#email, #request').on('input', function() {
    checkFormValidity();
  });
  
  // 체크박스 상태 변경을 모니터링하여 버튼 활성화 상태를 업데이트
  $('#terms, #agreement').on('change', function() {
    checkFormValidity();
  });





    


    $(".reservation-form .reserBox").click(function(){

        $(".reservation-form,.confirmR").removeClass("on");
        $(".confirmR").addClass("on");



    })

    
    $(".closeBtn").click(function(){


        $(".reservation-form,.confirmR").removeClass("on");



    })


        
    $(".confirmBox .confirmLower").click(function(){


        $(".reservation-form,.confirmR").removeClass("on");



    })




    // 공지사항 아코디언 효과

        $(".notice_box .contentsBox .notice li").mouseenter(function(){
            
            $(this).addClass('on'); // 슬라이드 다운


        })
        
        $(".notice_box .contentsBox .notice li").mouseleave(function(){

            $(this).removeClass('on'); // 슬라이드 다운


        })










        //  왼쪽 오른쪽을 클릭할 때마다 이미지의 위치가 바뀌어라
// 왼쪽 오른쪽을 눌렀을 때 변수가 변해라
let num = 0;


$('.newmember>.iBtn>ul>li:nth-child(2)').click(function(e){
    e.preventDefault(); // 기본 새로고침 막기

  
  if(num<4) num++;
 if(num == 4){

    alert('마지막페이지입니다')

  }
 

  $('.imgBox_con').stop().animate({'left':'-320'*num + 'px'},400)
  


})


$('.newmember>.iBtn>ul>li:nth-child(1)').click(function(e){

    e.preventDefault(); // 기본 새로고침 막기
  
  if(num>0) num--;
  
  $('.imgBox_con').stop().animate({'left':'-320'*num + 'px'},400)


})




// 두번째 배너 슬라이드 효과
$(".con1Forscroll").addClass('on'); 
$(".slider_second>.btn ul li:nth-child(1)").click(function(){

    $(".slider_second>.btn ul li").removeClass("active");

    // 클릭된 첫 번째 li에만 active 클래스 추가
    $(this).addClass("active");

      // 2초 후에 removeClass
        setTimeout(function() {
            $(".con2Forscroll, .con3Forscroll").removeClass('on');
        }, 1000);
  
    $(".con1Forscroll").addClass('on'); 

      



})



$(".slider_second>.btn ul li:nth-child(2)").click(function(){

    $(".slider_second>.btn ul li").removeClass("active");

    // 클릭된 첫 번째 li에만 active 클래스 추가
    $(this).addClass("active");
       // 2초 후에 removeClass
        setTimeout(function() {
            $(".con1Forscroll,.con3Forscroll").removeClass('on');
        }, 1000); 
   
    $(".con2Forscroll").addClass('on');
     


})


$(".slider_second>.btn ul li:nth-child(3)").click(function(){

    $(".slider_second>.btn ul li").removeClass("active");

    // 클릭된 첫 번째 li에만 active 클래스 추가
    $(this).addClass("active");
        // 2초 후에 removeClass
        setTimeout(function() {
            $(".con1Forscroll, .con2Forscroll").removeClass('on');
        }, 1000);

  
    $(".con3Forscroll").addClass('on'); 
    

})



// find 설정하기

let numF = 0;
$('.find_leftside .iBtn ul li:nth-child(2)').click(function(e){
    e.preventDefault(); // 기본 새로고침 막기

  
  if(numF<5) numF++;
 if(numF == 5){

    alert('마지막페이지입니다')

  }
 

  $('.find_rightside ul').stop().animate({'left':'-400'*numF + 'px'},400)
  


})


$('.find_leftside .iBtn ul li:nth-child(1)').click(function(e){

    e.preventDefault(); // 기본 새로고침 막기
  
  if(numF>0) numF--;
  
  $('.find_rightside ul').stop().animate({'left':'-400'*numF + 'px'},400)


})





// .simple-steps ul li a버튼 클릭시 팝업


$('.simple-steps ul li a').click(function(e){

  e.preventDefault(); // 기본 새로고침 막기


$(".findPopupR").removeClass("on");
$(".findPopupR").addClass("on");



})




$(".findPopupUpper>.closeBtn").click(function(){


  $(".findPopupR").removeClass("on");



})



$(".findPopupLower").click(function(){


  $(".findPopupR").removeClass("on");



})









// find 버튼 클릭시 팝업


$('.findLower_tap').click(function(e){

    e.preventDefault(); // 기본 새로고침 막기


  $(".findPopupR").removeClass("on");
  $(".findPopupR").addClass("on");



})




$(".findPopupUpper>.closeBtn").click(function(){


    $(".findPopupR").removeClass("on");



})



$(".findPopupLower").click(function(){


    $(".findPopupR").removeClass("on");



})




//.topB 클릭시 스크롤 맨위로 

$(".topB").click(function(){


    $('html, body').animate({ scrollTop: 0 }, 800, 'swing');



})



    
})