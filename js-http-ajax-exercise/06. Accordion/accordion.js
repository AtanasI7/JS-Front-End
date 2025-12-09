async function solution() {
    const sectionEl = document.getElementById('main');

    const res = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await res.json();

    for (const itemObj of data) {
        const accordionDivEl = document.createElement('div');
        accordionDivEl.classList.add('accordion');
        const headDivEl = document.createElement('div');
        headDivEl.classList.add('head');
        const spanEl = document.createElement('span');
        const buttonMoreEl = document.createElement('button');
        buttonMoreEl.classList.add('button');
        const extraDivEl = document.createElement('div');
        extraDivEl.classList.add('extra');
        const pEl = document.createElement('p');

        spanEl.textContent = itemObj.title;
        buttonMoreEl.textContent = 'More';
        
        extraDivEl.appendChild(pEl);
        headDivEl.appendChild(spanEl);
        headDivEl.appendChild(buttonMoreEl);
        accordionDivEl.appendChild(headDivEl);
        accordionDivEl.appendChild(extraDivEl);
        sectionEl.appendChild(accordionDivEl);

        buttonMoreEl.addEventListener('click', handleToggle);

        async function handleToggle(e) {
            const infoRes = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${itemObj._id}`);
            const infoData = await infoRes.json();
       
            buttonMoreEl.id = infoData._id; 
            pEl.textContent = infoData.content;

            if (buttonMoreEl.textContent === 'More') {
                buttonMoreEl.textContent = 'Less';
                extraDivEl.classList.remove('extra');
            }

            else if (buttonMoreEl.textContent === 'Less') {
                buttonMoreEl.textContent = 'More';
                extraDivEl.classList.add('extra');
            }
        }
    }
}

solution();