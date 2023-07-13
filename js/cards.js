export const cards = [
	"../img/1.jpg",
	"../img/2.jpg",
	"../img/3.jpg",
	"../img/4.jpg",
	"../img/5.jpg",
	"../img/6.jpg",
	"../img/7.jpg",
	"../img/8.jpg",
	"../img/rubashka.jpg"
];

const fon = [
	"../img/fon.jpg",
	"../img/fon2.png",
]

export class Card {
	img;
	back = cards[8];
	status = false;
	constructor(img) {
		this.img = img;
	}
}

export const createCards = (lvl) => {
	const array = [];
	for (let i = 0; i < lvl / 2; i++) {
		array.push(new Card(cards[i]));
		array.push(new Card(cards[i]));
	}
	for (let i = 0; i < lvl; i++) {
		let a = array[i];
		let r = Math.floor(Math.random() * (lvl - 1));
		array[i] = array[r]
		array[r] = a;

	}
	return array;
}
