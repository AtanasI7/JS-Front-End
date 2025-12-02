document.addEventListener('DOMContentLoaded', solve);

function solve() {
	const allSectionEls = document.querySelectorAll('.question');
	const allAnswerEls = document.querySelectorAll('.quiz-answer');
	const divResultEl = document.querySelector('#results');

	const rightQuestions = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

	allAnswerEls.forEach(answerEl => {
		answerEl.addEventListener('click', handleQuestionAnswer)
	});

	let questionIndex = 0;
	let rightAnswersCount = 0;

	function handleQuestionAnswer(e) {
		if (e.target.textContent === rightQuestions[questionIndex]) {
			rightAnswersCount += 1;
		}

		const sectionEl = allSectionEls[questionIndex];
		sectionEl.classList.add('hidden');

		questionIndex += 1;

		if (questionIndex === rightQuestions.length) {
			const h1El = document.createElement('h1');

			if (rightAnswersCount === 3) {
				h1El.textContent = "You are recognized as top JavaScript fan!";
			} else {
				h1El.textContent = `You have ${rightAnswersCount} right answer${rightAnswersCount === 1 ? '' : 's'}`;
			}

			divResultEl.appendChild(h1El);
		} else {
			const newSectionEl = allSectionEls[questionIndex];
			newSectionEl.classList.remove('hidden');
		}
	}
}