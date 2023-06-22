//ハンバーガーメニュー
hamburger = document.getElementById('hamburger-menu');
nav = document.getElementById('nav');

hamburger.addEventListener('click', function() {
 hamburger.classList.toggle('active');
 nav.classList.toggle('active');
})

//アコーディオン
const qa = document.querySelectorAll('.js-ac')
function acToggle(){
  const qa = this;
  qa.classList.toggle('is-open');
  
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
}

for (let i = 0; i < qa.length; i++) { 
  qa[i].addEventListener("click", acToggle);
}