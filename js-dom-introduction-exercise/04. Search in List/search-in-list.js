function solve() {
   const allLiItemsEls = document.querySelectorAll('li');
   const searchedTextEl = document.getElementById('searchText');
   const resultEl = document.getElementById('result');

   let matches = 0;
   for (let item of allLiItemsEls) {
      if (item.textContent.includes(searchedTextEl.value)) {
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
         matches += 1;
      }
      else {
         item.style.fontWeight = 'normal';
         item.style.textDecoration = 'none';
      }
   }

   resultEl.textContent = `${matches} matches found`
   
}