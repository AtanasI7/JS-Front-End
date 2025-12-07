async function loadRepos() {
   const divResEl = document.getElementById('res');

   const res = await fetch('https://api.github.com/users/testnakov/repos');
   const data = await res.text();
   
   divResEl.textContent = data;
   
}