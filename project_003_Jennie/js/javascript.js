$(document).ready(function() {

    // ✅ 로딩 페이지를 처음 한 번만 표시 (새로고침 전까지 유지)
    if (!sessionStorage.getItem("loadingCompleted")) {
        $(".loadingPage").addClass("on");
    }

    // ✅ .lnb 숨기기
    $(".lnb").hide();  

    // ✅ .mainPage에 'on' 클래스 추가
    $(".mainPage").addClass("on");

    // ✅ 로딩 페이지를 숨기는 함수
    function hideLoadingPage() {
        $(".loadingPage").fadeTo(1500, 0, function() {
            $(this).removeClass("on").hide();
            sessionStorage.setItem("loadingCompleted", "true"); // 로딩 완료 상태 저장
        });
        console.log("로딩 페이지 사라짐, 현재 클래스: " + $(".loadingPage").attr("class"));
    }

    // ✅ 클릭 시 로딩 페이지 숨기기
    $(".loadingTxt").on("click", function() {
        $(".bg-video")[0].play();
        setTimeout(hideLoadingPage, 300);
    });




    // .mainPage .util ul li:nth-child(n)을 클릭
    $('.mainPage .util ul li:nth-child(1)').on('click', function() {
        window.open('https://oddatelier.net/oddatelier/', '_blank');
      });



      $('.mainPage .util ul li:nth-child(2)').on('click', function() {
        window.open('https://open.spotify.com/album/1vWMw6pu3err6qqZzI3RhH', '_blank');
      });




    $(".logo").click(function() {
       
        $(".mainPage").addClass("on");
     
    });





    $(".mainPage .menu li:first-child").click(function(e) {
        e.preventDefault();  
        $(".mainPage").removeClass("on");
        $(".profilePage").addClass("on");
        $(".profilePage .Kr").addClass("toggle");
        $(".lnb").show();
        
    });



 
$(".mainPage .menu li:nth-child(2)").click(function(e) {
    e.preventDefault();  
    $(".mainPage").removeClass("on");
    $(".albumPage").addClass("on");
    $(".lnb").show();
});



$(".mainPage .menu li:nth-child(3)").click(function(e) {
    e.preventDefault();  
    $(".mainPage").removeClass("on");
    $(".shopPage").addClass("on");
    $(".lnb").show();
});


// .lnb설정


 
$(".depth1 ul li:nth-child(1)").click(function(e) {
    e.preventDefault();  
    $(".mainPage, .profilePage, .albumPage, .shopPage").removeClass("on");
    $(".mainPage").addClass("on");
    $(".lnb").hide();
});


$(".depth1 ul li:nth-child(2)").click(function(e) {
    e.preventDefault();  
    $(".mainPage, .profilePage, .albumPage, .shopPage").removeClass("on");
    $(".profilePage").addClass("on");
    $(".profilePage .Kr").addClass("toggle");
    $(".lnb").show();
});



$(".depth1 ul li:nth-child(3)").click(function(e) {
    e.preventDefault();  
    $(".mainPage, .profilePage, .albumPage, .shopPage").removeClass("on");
    $(".albumPage").addClass("on");
    $(".lnb").show();
});


$(".depth1 ul li:nth-child(4)").click(function(e) {
    e.preventDefault();  
    $(".mainPage, .profilePage, .albumPage, .shopPage").removeClass("on");
    $(".shopPage").addClass("on");
    $(".lnb").show();
    $("html, body").scrollTop(0);
});

   // .depth2 항목 클릭 시 해당 섹션으로 스크롤 이동
   $(".depth2 li:first-child").click(function(e) {
    e.preventDefault();  // 기본 링크 동작을 막음

    // 페이지에서 모든 .on 클래스를 제거
    $(".mainPage, .profilePage, .albumPage, .shopPage").removeClass("on");
    
    // .albumPage에 .on 클래스를 추가하여 해당 페이지 표시
    $(".albumPage").addClass("on");

    // .lnb 표시
    $(".lnb").show();


 
});

var clickCount = 0; // 클릭 횟수를 추적할 변수

$('.profilePage > div .toggleBox').click(function() {
    clickCount++; // 클릭할 때마다 횟수 증가
    console.log(clickCount);

    // 클릭 횟수가 0일 때는 Kr에 toggle 클래스 추가
    if (clickCount === 1) {
        $(".profilePage .Kr").addClass("toggle");
    }

    // 홀수일 때
    if (clickCount % 2 !== 0) {
        $(".switchOn").stop(true, true).animate({
            left: "2.5vw"
        }, 200); // 0.3초 동안 왼쪽으로 이동

        // 1초 뒤에 .En에 toggle 클래스 추가하고 .Kr에서 toggle 클래스 제거
        setTimeout(function() {
            $(".profilePage .En").addClass("toggle");
            $(".profilePage .Kr").removeClass("toggle");
        }, 800); // 1초 후 실행

    } else {
        $(".switchOn").stop(true, true).animate({
            left: "0"
        }, 200); // 0.3초 동안 원래 위치로 돌아옴

        // 1초 뒤에 .Kr에 toggle 클래스 추가하고 .En에서 toggle 클래스 제거
        setTimeout(function() {
            $(".profilePage .Kr").addClass("toggle");
            $(".profilePage .En").removeClass("toggle");
        }, 800); // 1초 후 실행
    }
});



// .ExploreBtn 클릭 시
$(".ExploreBtn").click(function() {
    $(".storiesPage").addClass("on"); // 먼저 클래스 추가하여 페이지가 보이게 함
    
    $(".storiesPage").stop(true, true).css("bottom", "-100%") // 초기 위치 설정
    .animate({
        bottom: "0" // 슬라이드 업 (bottom 0으로 설정)
    }, 200); // 슬라이드 업 애니메이션을 빠르게
});



// .close 버튼 클릭 시
$(".close").click(function() {
    
    $(".storiesPage").stop(true, true).animate({
        bottom: "-100%" // 슬라이드 다운 (bottom을 -100%로 설정)
    }, 500); // 500ms 동안 애니메이션 실행

    // 500ms 후에 클래스 제거
    setTimeout(function() {
        $(".storiesPage").removeClass("on");
    }, 1000); // 애니메이션 시간(500ms) 후에 클래스 제거

    setTimeout(function() {
        $('article').removeClass('on');
    }, 1200); // 애니메이션 시간(500ms) 후에 클래스 제거


   
});




// article부분########################################################
$('article').click(function(e){
    e.preventDefault(); 
    $('article').removeClass('on');
    $(this).addClass('on')


})





var moveX = 0;
    
$(".storiesPage").on("wheel", function(e) {
    e.preventDefault(); // 기본 스크롤 방지
    var delta = e.originalEvent.deltaY; // 마우스 휠 방향 감지

    moveX += delta * 2; // ⬅⬅⬅ 여기서 반대로 변경!!
    moveX = Math.max(Math.min(moveX, 3000), 0); // 이동값 제한 (0 ~ 3000px)

    $(".storiesPage > section").css("transform", "translateX(-" + moveX + "px)");
});






function showArticles(selector) {
    $(".storiesPage > section > article")
        .css({ opacity: 0, transform: "scale(0.9)" }) // 먼저 투명하고 작게 만들기
        .hide();

    $(selector)
        .show() // 먼저 display: block
        .each(function (index) {
            $(this).delay(index * 100).animate({ opacity: 1 }, 400).css("transform", "scale(1)");
        });
}

// 전체 보기
$(".all").click(function () {
    showArticles(".storiesPage > section > article");
});

// MUSIC 버튼 클릭
$(".musicBtn").click(function () {
    showArticles(".storiesPage > section > article:nth-of-type(3n+1)");
});

// SHOW 버튼 클릭
$(".showBtn").click(function () {
    showArticles(".storiesPage > section > article:nth-of-type(3n+2)");
});

// FASHION 버튼 클릭
$(".fashionBtn").click(function () {
    showArticles(".storiesPage > section > article:nth-of-type(3n)");
});

let scrolledOnce = false; // 한 번만 실행되도록 체크하는 변수
$(window).scroll(function () {
    if (!$(".albumPage").length) return; // albumPage가 없으면 실행 안 함
    if (scrolledOnce) return; // 이미 실행됐으면 더 이상 실행되지 않음

    var scrollTop = $(window).scrollTop();  
    var trackBoxTop = $(".albulTrackBox .bg").offset().top + ($(window).height() * 0.75); // 네가 설정한 수치 유지

    if (scrollTop > 0 && scrollTop < trackBoxTop) {  
        scrolledOnce = true; // 한 번 실행 후 다시 실행되지 않도록 설정

        $("html, body").stop().animate(
            { scrollTop: trackBoxTop }, 
            1000,  // 네가 설정한 속도 유지
            "swing"
        );
    }
});
// Check It 클릭시 스크롤
$(".moreBtn").on("click", function () {
  if (!$(".albumPage").length) return;

  var trackBoxTop = $(".albulTrackBox .bg").offset().top + ($(window).height() * 0.75);

  $("html, body").stop().animate(
    { scrollTop: trackBoxTop },
    1000, // 애니메이션 속도
    "swing"
  );
});




$(document).on("click", ".iconVD .video, .depth2 .MUSICVIDEO", function (e) {
    e.preventDefault();

    $(".musicvideoPage").css("z-index", 5).addClass("on");

    $(".musicvideoPage")
        .stop(true, true) // 애니메이션 중복 실행 방지
        .css({ bottom: "-100%" })
        .animate({ bottom: "0" }, 400, "swing");

    $(".albumPage").removeClass("on");
});






$(".musicvideoPage .close").click(function(e) {
    e.preventDefault(); 

    $(".musicvideoPage").removeClass("on");
    $(".albumPage").addClass("on"); // 먼저 클래스 추가하여 페이지가 보이게 함
    
});








// 트랙리스트 클릭 설정


// 공통 클릭 이벤트 등록
$('[class^="trackList"]').click(function () {
    // 1. 클래스명에서 번호 추출 (trackList001 → 001)
    const classList = $(this).attr('class').split(' ');
    let trackClass = classList.find(cls => cls.startsWith('trackList'));
    let trackNum = trackClass.replace('trackList', '');
  
    // 2. 모든 가사 이미지 숨기기
    $('[class^="lyricsCircle_"]').hide();
  
    // 3. 해당 번호와 일치하는 가사 이미지만 보이게
    $('.lyricsCircle_' + trackNum).css('display', 'block');


    $('[class^="lyricsCircle_"]').fadeOut(10);
    $('.lyricsCircle_' + trackNum).fadeIn(200);
  });

// .musicvideoPage 설정



$('.mvList_001').click(function(e){

    e.preventDefault(); 
    $(".mvMainframe video").attr("src", "img/mvList_001.mp4")[0].load();

})


$('.mvList_002').click(function(e){

    e.preventDefault(); 
    $(".mvMainframe video").attr("src", "img/mvList_002.mp4")[0].load();

})

$('.mvList_003').click(function(e){

    e.preventDefault(); 
    $(".mvMainframe video").attr("src", "img/mvList_003.mp4")[0].load();

})


$('.mvList_004').click(function(e){

    e.preventDefault(); 
    $(".mvMainframe video").attr("src", "img/mvList_004.mp4")[0].load();

})


$('.mvList_005').click(function(e){

    e.preventDefault(); 
    $(".mvMainframe video").attr("src", "img/mvList_005.mp4")[0].load();

})












// 투어일자 설정###############################################

$(document).on("click", ".iconVD .date, .depth2 .TOURDATES", function (e) {
    e.preventDefault();

    $(".tourdatePage").css("z-index", 5).addClass("on");

    $(".tourdatePage")
        .stop(true, true)
        .css({ bottom: "-30%" })
        .animate({ bottom: "0" }, 600, "swing");

    $(".musicvideoPage, .storiesPage,.albumPage").removeClass("on");
});

$(".tourdatePage .close").click(function(e) {
    e.preventDefault(); 

    // 다른 모든 페이지에서 on 제거
    $(".musicvideoPage, .storiesPage, .tourdatePage").removeClass("on");

    // albumPage 다시 보이게 함
    $(".albumPage").addClass("on");
});


// shop 설정###############################

$(document).on("click", ".depth1 ul li:nth-child(4)", function (e) {
    e.preventDefault();

    // 다른 모든 페이지 숨기기
    $(".musicvideoPage, .storiesPage, .albumPage, .tourdatePage")
        .css("z-index", -1)
        .removeClass("on");

    // shopPage 활성화
    $(".shopPage").css("z-index", 5).addClass("on");
});


$(document).on("click", ".shopPage .option p:nth-child(1)", function (e) {
    e.preventDefault();

    // proNINIBARAS 디졸브
    $(".proNINIBARAS").stop().animate({ opacity: 0 });

    // proRuby 다시 나타나게 하기
    $(".proRuby").stop().animate({ opacity: 1 });
    $(".proRuby").removeClass("off");
    $(".proNINIBARAS").removeClass("on");
});

$(document).on("click", ".shopPage .option p:nth-child(2)", function (e) {
    e.preventDefault();

    // proRuby 디졸브
    $(".proRuby").stop().animate({ opacity: 0 });

    // proNINIBARAS 나타나게 하기
    $(".proNINIBARAS").stop().animate({ opacity: 1 });
    $(".proNINIBARAS").addClass("on");
    $(".proRuby").addClass("off");
});



});

    



    

