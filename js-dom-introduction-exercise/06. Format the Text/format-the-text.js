function solve() {
	const textareaInputEl = document.getElementById('input');
	const outputDivEl = document.getElementById('output');

	const sentences = textareaInputEl.value.split('.').filter(sentence => sentence.length > 1);

	let currentParagraph = '';

	for (let i = 0; i < sentences.length; i++) {
		let currentSentence = sentences[i].trim();

		currentParagraph += currentSentence + '.';

		if ((i + 1) % 3 === 0 || i === sentences.length - 1) {
			outputDivEl.innerHTML += `<p>${currentParagraph}</p>`
			currentParagraph = '';
		}
	}
}