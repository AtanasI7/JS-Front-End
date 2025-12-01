document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formEl = document.getElementById('task-input');
   const inputTextEl = document.querySelector('input[type=text]');
   let divContentEl = document.getElementById('content');

   formEl.addEventListener('submit', generateDivEls);

   function generateDivEls(e) {
      e.preventDefault();

      const textArr = inputTextEl.value.trim().split(', ');

      for (const text of textArr) {
         const pEl = document.createElement('p');
         pEl.textContent = text;
         pEl.style.display = 'none';

         let newDivEl = document.createElement('div');
         newDivEl.appendChild(pEl);

         newDivEl.addEventListener('click', displayPEl);
         
         function displayPEl(e) {
            pEl.style.display = 'block';
         }

         divContentEl.appendChild(newDivEl)
      }
   }
}