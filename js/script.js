const elements = document.querySelectorAll('.fade-up, .fade-left');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", function () {

  //Navigation Menu Toggle
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");
  });

  document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click", ()=>{
    document.querySelector(".nav-links").classList.remove("show-menu");
  });
});


  // ImageModal
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.getElementById("closeModal");
  const images = document.querySelectorAll(".card img");

  if (!modal || !modalImg || !closeBtn) {
    console.error("Modal elements not found in HTML");
    return;
  }

  images.forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });



  //Video Section

  const videoOpenBtn = document.getElementById("openVideo");
  const videoModal = document.getElementById("videoModal");
  const videocloseBtn = document.getElementById("closeVideo");
   const iframe = document.getElementById("fbVideoFrame");

  // 👉 PUT YOUR FACEBOOK VIDEO LINK BELOW
  const fbVideoUrl ="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1424959879291809&show_text=false";


  videoOpenBtn.addEventListener("click", function(){
    iframe.src = fbVideoUrl;
    videoModal.style.display = "flex";
  });

  videocloseBtn.addEventListener("click", function(){
    videoModal.style.display = "none";
    iframe.src = "";
  });

  videoModal.addEventListener("click", function(e){
    if(e.target === videoModal){
      videoModal.style.display = "none";
      iframe.src = "";
    }
  });

 


});


