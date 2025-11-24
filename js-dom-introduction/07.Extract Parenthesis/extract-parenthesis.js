function extract(content) {
    let pEl = document.getElementById(content);
    const text = pEl.textContent;
    const pattern = /\(.*?\)/g;

    const matchedText = text.match(pattern);
    
    return matchedText.map(word => word.slice(1, -1)).join('; ');
}