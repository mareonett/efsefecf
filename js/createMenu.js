import { createField } from "./createField.js";

export const createMenu = () => {
	const main = document.querySelector("main");
	main.classList.remove("null");

	const game = document.querySelector(".game");
	game.style.display = "none";
	const menu = document.querySelector(".menu");
	menu.style.display = "block";

	const btn = menu.querySelectorAll(".btn");
	btn.forEach(el => {
		el.addEventListener('click', () => {
			console.log(el.textContent);
			switch (el.textContent) {
				case "лёгкий":
					menu.style.display = "none";
					createField(8);
					break;
				case "нормальный":
					menu.style.display = "none";
					createField(12);
					break;
				case "сложный":
					menu.style.display = "none";
					createField(16);
					break;
			}
		})

	})
}

