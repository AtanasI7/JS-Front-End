function solve() {
	const textInputEl = document.getElementById('text');
	const conventionInputEl = document.getElementById('naming-convention');
	const resultInputEl = document.getElementById('result');

	let textArrForm = Array.from(textInputEl.value.toLowerCase().split(' '));

	const conventionType = conventionInputEl.value;

	let expectedResult = [];

	if (conventionType === 'Camel Case') {
		const firstWord = textArrForm.shift();
		expectedResult.push(firstWord);

		transformToGivenCase();
	}
	else if (conventionType === 'Pascal Case') {

		transformToGivenCase();
	}
	else {
		resultInputEl.textContent = "Error!"
	}


	function transformToGivenCase() {
		for (const word of textArrForm) {
			expectedResult.push(word.charAt(0).toUpperCase() + word.slice(1));
		}

		resultInputEl.textContent = expectedResult.join('')
	}
}