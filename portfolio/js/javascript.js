$(document).ready(function() {
    const mainPage = document.querySelector('.mainPage');
    const lnbButton = document.querySelector('.lnbButton');
    const lnbContent = document.querySelector('.lnb');
    const uxuiPage = document.querySelector('.uxuiPage');
    
    // 페이지 로드 시 .mainPage에 'on' 클래스 추가
    mainPage.classList.add('on'); // 페이지 로드 시 .mainPage에 'on' 클래스 추가
    // ✅ .lnb 숨기기
    $(".lnbButton").hide();  
    
    // 슬라이드 진행 상태 추적 변수
    let slideInProgress = false;
  
    // 버튼에 마우스가 들어가면 슬라이드
    lnbButton.addEventListener('mouseenter', () => {
      if (!slideInProgress) { // 슬라이드가 진행 중이지 않다면
        slideInProgress = true; 
        lnbContent.style.transition = 'transform 1s ease-in-out'; // 슬라이드 애니메이션 설정
        lnbContent.style.transform = 'translateX(0vw)'; // 슬라이드해서 나타내기
        lnbContent.style.opacity = '1'; // opacity 1로 설정
        lnbButton.style.opacity = '0'; // 버튼 사라짐
      }
    });
  
    // .lnbContent에서 마우스를 떼면 슬라이드 되돌리기
    lnbContent.addEventListener('mouseleave', () => {
      lnbContent.style.transform = 'translateX(-100%)'; // 화면 밖으로 슬라이드
      lnbButton.style.opacity = '0.5'; // 버튼 원래 opacity로 복귀
      slideInProgress = false; // 슬라이드가 끝난 후 상태로 변경
    });
  
    // .bottom-nav의 #uxui 클릭 시 이벤트 처리
    $('#uxui').click(function(e) {
        e.preventDefault();  
      mainPage.classList.remove('on'); // .mainPage에서 'on' 클래스 제거
      uxuiPage.classList.add('on'); // .uxuiPage에 'on' 클래스 추가
      $(".lnbButton").show();  
    });



        // .bottom-nav의 #profile 클릭 시 이벤트 처리
    $('#profile').click(function(e) {
        e.preventDefault();
        mainPage.classList.remove('on');
        $(".profilePage").addClass("on");
        $(".lnbButton").show();

      

    });



         // .bottom-nav의 #profile 클릭 시 이벤트 처리
         $('#publishing').click(function(e) {
            e.preventDefault();
            mainPage.classList.remove('on');
            $(".publishingPage").addClass("on");
            $(".lnbButton").show();
    
          
    
        });







        // lnb 설정#######################


        $('.lnbList li:nth-child(1)').click(function(e) {
            e.preventDefault();
            
            $(".index>div").removeClass("on"); 
            mainPage.classList.add('on'); // 페이지 로드 시 .mainPage에 'on' 클래스 추가
            // ✅ .lnb 숨기기
            $(".lnbButton").hide(); 
          });





       
          $('.lnbList li:nth-child(2)').click(function(e) {
            e.preventDefault();
           
            $(".index>div").removeClass("on"); 
            uxuiPage.classList.add('on'); // .uxuiPage에 'on' 클래스 추가
            $(".lnbButton").show();  
          });
   


          $('.lnbList li:nth-child(3)').click(function(e) {
            e.preventDefault();
            
            $(".index>div").removeClass("on"); 
            $(".publishingPage").addClass("on");
            $(".lnbButton").show();
          });



          $('.lnbList li:nth-child(4)').click(function(e) {
            e.preventDefault();
            
            $(".index>div").removeClass("on"); 
            $(".profilePage").addClass("on");
            $(".lnbButton").show();
          });
   
   


        

      // uxuiList 설정###########################


      $('.uxuiPage .contentsArea>div:nth-child(1)').click(function(e) {
        e.preventDefault();
        
        $(".uxuiPage").removeClass("on"); 
        $(".uxuiSub1").addClass("on");
        $(".lnbButton").show();
        window.scrollTo(0, 0); // 페이지 넘어갈 때 스크롤을 맨 위로 이동
      });




      
      $('.uxuiPage .contentsArea>div:nth-child(2)').click(function(e) {
        e.preventDefault();
        
        $(".uxuiPage").removeClass("on"); 
        $(".uxuiSub2").addClass("on");
        $(".lnbButton").show();
        window.scrollTo(0, 0); // 페이지 넘어갈 때 스크롤을 맨 위로 이동
      });
    

    
      // publishingList 설정####################



      $('.publishingPage .contentsArea>div:nth-child(1)').click(function(e) {
        e.preventDefault();
        
        $(".publishingPage").removeClass("on"); 
        $(".publishingSub1").addClass("on");
        $(".lnbButton").show();
        window.scrollTo(0, 0); // 페이지 넘어갈 때 스크롤을 맨 위로 이동
      });
    



      $('.publishingPage .contentsArea>div:nth-child(2)').click(function(e) {
        e.preventDefault();
        
        $(".publishingPage").removeClass("on"); 
        $(".publishingSub2").addClass("on");
        $(".lnbButton").show();
        window.scrollTo(0, 0); // 페이지 넘어갈 때 스크롤을 맨 위로 이동
      });
    


      $('.publishingPage .contentsArea>div:nth-child(3)').click(function(e) {
        e.preventDefault();
        
        $(".publishingPage").removeClass("on"); 
        $(".publishingSub3").addClass("on");
        $(".lnbButton").show();
        window.scrollTo(0, 0); // 페이지 넘어갈 때 스크롤을 맨 위로 이동
      });




      // 컵셉뷰에서 close 버튼 눌렀을때
       

      $('.uxuiSub1 .closeB').click(function(e){

        e.preventDefault();
        $(".uxuiSub1").removeClass("on"); 
        $(".uxuiPage").addClass("on");
        $(".lnbButton").show();



       }) 


       
      $('.uxuiSub2 .closeB').click(function(e){

        e.preventDefault();
        $(".uxuiSub2").removeClass("on"); 
        $(".uxuiPage").addClass("on");
        $(".lnbButton").show();



       }) 




       $('.publishingSub1 .closeB').click(function(e){

        e.preventDefault();
        $(".publishingSub1").removeClass("on"); 
        $(".publishingPage").addClass("on");
        $(".lnbButton").show();



       })
    
       $('.publishingSub2 .closeB').click(function(e){

        e.preventDefault();
        $(".publishingSub2").removeClass("on"); 
        $(".publishingPage").addClass("on");
        $(".lnbButton").show();



       })

       $('.publishingSub3 .closeB').click(function(e){

        e.preventDefault();
        $(".publishingSub3").removeClass("on"); 
        $(".publishingPage").addClass("on");
        $(".lnbButton").show();



       })







       // .proRightB 내의 .circleI에 hover 시 .proLower 보이기
       $('.proRightB .circleI').mouseenter(function() {
        
        // .circleI의 부모 .proRightB 내의 .proLower를 선택하고 애니메이션 적용
        $(this).closest('.proRightB').find('.proLower').addClass('on'); // 슬라이드 다운
      });
    
      // .proRightB 내의 .circleI에서 마우스를 떼면 .proLower 숨기기
      $('.proRightB .circleI').mouseleave(function() {
        // .circleI의 부모 .proRightB 내의 .proLower를 선택하고 애니메이션 적용
        $(this).closest('.proRightB').find('.proLower').removeClass('on'); // 슬라이드 업
      });
    



      $('.proRightside .proRightB:nth-child(5) .proLower').mouseenter(function() {
        
        // .circleI의 부모 .proRightB 내의 .proLower를 선택하고 애니메이션 적용
        $(this).closest('.proRightB').find('.proLower').addClass('on'); // 슬라이드 다운
      });


      $('.proRightside .proRightB:nth-child(5)').mouseleave(function() {
        // .circleI의 부모 .proRightB 내의 .proLower를 선택하고 애니메이션 적용
        $(this).closest('.proRightB').find('.proLower').removeClass('on'); // 슬라이드 업
      });








        // .linkB를 클릭하면 새 창에서 웹사이트 열기
  $('.publishingSub1 .linkB').click(function(e) {
    e.preventDefault();  // 기본 동작을 방지 (만약 a 태그가 있다면)
    
    // 새 창에서 웹사이트 열기
    window.open('https://rachel0919.github.io/portfolio/project002/index.html', '_blank');
  });



  $('.publishingSub2 .linkB').click(function(e) {
    e.preventDefault();  // 기본 동작을 방지 (만약 a 태그가 있다면)
    
    // 새 창에서 웹사이트 열기
    window.open('https://rachel0919.github.io/portfolio/project_003_Jennie/index.html', '_blank');
  });


  

  $('.publishingSub3 .linkB').click(function(e) {
    e.preventDefault();  // 기본 동작을 방지 (만약 a 태그가 있다면)
    
    // 새 창에서 웹사이트 열기
    window.open('https://rachel0919.github.io/portfolio/project001/index.html', '_blank');
  });






// ==============================================================================




      $('.heroBg').ripples({


        resolution: 500,
        // dropRadius: 20,
        perturbance: 0



      })
















  });