const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
         entry.target.classList.add('show');
      }
      else {
         entry.target.classList.remove('show');
      }
   });
});
const hiddenElements = document.querySelectorAll('.Hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observers = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
         entry.target.classList.add('show');
      }
      else {
         entry.target.classList.remove('show');
      }
   });
});
const hiddenElementss = document.querySelectorAll('.Hiddens');
hiddenElementss.forEach((el) => observers.observe(el));






let animationDone = false;
window.addEventListener("scroll", startCount);
function startCount() {
   const numbers = document.querySelectorAll('.number');

   if (animationDone && scrollY > 2000) {

      numbers.forEach(number => {
         const target = +number.getAttribute('data-count');
         const count = +number.innerText;

         const increment = target / 1000;

         if (count < target) {
            number.innerText = Math.ceil(count + increment);
            setTimeout(startCount, 1500);
         } else {
            number.innerText = target;
         }
      });
   }

   animationDone = true;
}




let btn = document.getElementById('btn');

window.onscroll = function () {
   if (this.scrollY >= 600) {
      btn.style.display = 'block';
   } else {
      btn.style.display = 'none';
   }
}
btn.onclick = function () {
   scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
   })
}

