export function wordGlitch(word, el) {
	const letters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,.?/:;[]{}!@#$%^&*()-_=+|`~';
	const totalLetters = letters.length;
	const length = word.length;
	const middle = Math.floor(length / 2);
	let iterations = -1;

	const interval = setInterval(() => {
		el.innerText = word
			.split('')
			.map((letter, index) => {
				const distanceFromMiddle = Math.abs(index - middle);
				if (distanceFromMiddle <= iterations) {
					return word[index];
				}
				return letters[Math.floor(Math.random() * totalLetters)];
			})
			.join('');

		iterations += 1 / 2;
		if (iterations > middle) {
			clearInterval(interval);
		}
	}, 50);
}
