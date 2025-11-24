function editElement(htmlEl, searchedStr, replacer) {
    let text = htmlEl.textContent;
    text = text.replaceAll(searchedStr, replacer);

    htmlEl.textContent = text;

}