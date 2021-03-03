var cover = document.querySelector(".youtube-cover")   
var bv = document.querySelector(".background-video") 
var hv = document.querySelector(".hidden-video") 
var mv = document.querySelector(".main-video")

var ulList = document.querySelector("#youtubeList")  
var liList = ulList.querySelectorAll("li")  
//add class active
for (var i = 0; i < liList.length; i++) {
   liList[i].addEventListener("click", function () {
      var el = document.querySelectorAll(".active");
      el[0].classList.remove("active");
      this.classList.add("active");
   });
}
 
function hideCover() {
   cover.style.display = "none";
   bv.style.display = "none";
   bv.src = "";
   hv.style.display = "none";
   hv.src = ""; 
   mv.style.display = "block"; 
}

function showCover() {
   cover.style.display = "block";
   bv.style.display = "block";
   bv.src = "https://www.youtube.com/embed/ppeWG-oiJkg?&autoplay=1&mute=1&loop=1&playlist=ppeWG-oiJkg&controls=0";
   mv.src = "";
}

/* ---cover---- */
cover.addEventListener("click", function () { 
   this.style.display = "none";
   bv.style.display = "none";
});

hv.addEventListener("mouseout", function () { 
   cover.style.display = "block";
   bv.style.display = "block";
}); 

/* ---main-video--- */
function nhac() { 
   hideCover();
   mv.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnu8my-D0VFkIKFrML4yZHpE&autoplay=1";
}
function nhacphongtra() {  
   hideCover();
   mv.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnskXm8j3qaG7g8mjgpXSFNq&autoplay=1";
}
function nhacvang() {
   hideCover();
   mv.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvntPElQYdAACeguPE589fgQt&autoplay=1";
} 
function tienchien() {
   hideCover();
   mv.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvntQeibB9oOxJaD5m--oB6q_&autoplay=1";
}
function quehuong() {
   hideCover();
   mv.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnsClWCp6jQeiBDD6U2iNMRs&autoplay=1";
}
function quanhoquetoi() {
   hideCover();
   mv.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnurw41-50tktrg4oWzkeglK&autoplay=1";
}
function nhatkicuame() {
   hideCover();
   mv.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnse-MNQY3cxa4-dDIPl2ipE&autoplay=1";
}

/* ---hidden-video--- */
function khongloi() { //default 
   showCover();
   hv.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnsWfce9JHCo6YkPcky5OtUP&autoplay=1";
}
function khongloi_thugian() {
   showCover();
   hv.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnt4EfCJj6z9eTpXzPYeHtLC&autoplay=1";
}
function khongloi_quehuong() {
   showCover();
   hv.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnskOAo7sLbNyWujWRn5sTQk&autoplay=1";
} 