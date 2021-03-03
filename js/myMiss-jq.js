 
//add class active
$(document).ready(function () {
   $(".list-youtube li").click(function () {
      $(".list-youtube li").removeClass() 
      $(this).addClass('active');
   });
});

// youtube-menu
$(document).ready(function () {
   $(".menu-button").click(function () {
      $('.youtube-menu').toggle();
   });
   $(".youtube-menu").click(function () {
      $(this).toggle();
   });
});
//youtube-cover
$(document).ready(function () {
   $(".youtube-cover").click(function () {
      $(this).hide();
      $(".background-video").hide();
   });
   $(".hidden-video").mouseleave(function () {
      $(".youtube-cover, .background-video").show();
   });
});
//hidden video
function khongloi() { //default
   $(".main-video").attr("src", "").hide();
   $('.youtube-cover').show();
   $('.youtube-cover>img').show(20000);
   $('.background-video').attr("src", "https://www.youtube.com/embed/ppeWG-oiJkg?&autoplay=1&mute=1&loop=1&playlist=ppeWG-oiJkg&controls=0").show();
   $('.hidden-video').attr("src", "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnsWfce9JHCo6YkPcky5OtUP&autoplay=1").show();
} 
function khongloi_thugian() {
   $(".main-video").attr("src", "").hide();
   $('.background-video').attr("src", "https://www.youtube.com/embed/36w-cbEd1vs?&autoplay=1&mute=1&loop=1&playlist=ppeWG-oiJkg").show();
   $('.youtube-cover').show();
   $('.youtube-cover>img').hide();
   $('.hidden-video').attr("src", "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnt4EfCJj6z9eTpXzPYeHtLC&autoplay=1").show();
}
function khongloi_quehuong() { 
   $(".main-video").attr("src", "").hide();
   $('.youtube-cover').show();
   $('.youtube-cover>img').hide();
   $('.background-video').attr("src", "https://www.youtube.com/embed/3NycM9lYdRI?&autoplay=1&mute=1&loop=1").show();
   $('.hidden-video').attr("src", "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnskOAo7sLbNyWujWRn5sTQk&autoplay=1").show();
} 
// main-video
function nhac() {
   $("iframe").attr("src", "").css("display", "none");
   $(".youtube-cover").css("display", "none");
   $(".main-video").attr("src", "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnu8my-D0VFkIKFrML4yZHpE&autoplay=1").show();
}
function nhacphongtra() {
   $("iframe").attr("src", "").css("display", "none");
   $(".youtube-cover").css("display", "none");
   $('.main-video').attr("src", "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnskXm8j3qaG7g8mjgpXSFNq&autoplay=1").show();
}
function nhacvang() {
   $("iframe").attr("src", "").css("display", "none");
   $(".youtube-cover").css("display", "none");
   $('.main-video').attr("src", "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvntPElQYdAACeguPE589fgQt&autoplay=1").show();
}
function tienchien() {
   $("iframe").attr("src", "").css("display", "none");
   $(".youtube-cover").css("display", "none");
   $('.main-video').attr("src", "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvntQeibB9oOxJaD5m--oB6q_&autoplay=1").show();
}
function quehuong() {
   $("iframe").attr("src", "").css("display", "none");
   $(".youtube-cover").css("display", "none");
   $('.main-video').attr("src", "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnsClWCp6jQeiBDD6U2iNMRs&autoplay=1").show();
}
function quanhoquetoi() {
   $("iframe").attr("src", "").css("display", "none");
   $(".youtube-cover").css("display", "none");
   $('.main-video').attr("src", "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnurw41-50tktrg4oWzkeglK&autoplay=1").show();
}
function nhatkicuame() {
   $("iframe").attr("src", "").css("display", "none");
   $(".youtube-cover").css("display", "none");
   $('.main-video').attr("src", "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnse-MNQY3cxa4-dDIPl2ipE&autoplay=1").show();
}  