document.querySelector('#search-input').addEventListener('keypress', function (e) {
	let key = e.which || e.keyCode;
	if (key === 13) {
		search();
	}
});

export function toggleSearch() {
	let input = document.querySelector(".search-wrapper input");
	let close = document.querySelector(".search-wrapper .close");
	let open = document.querySelector(".search-wrapper .open");

	if (input.style.opacity && input.style.opacity != 0) {
		input.style.opacity = 0;
		input.style.transform = 'translateX(-30%)';
		input.style.zIndex = -1;

		close.style.transform = 'rotate(180deg)';
		close.style.opacity = 0;
		open.style.transform = 'rotate(0)';
		open.style.opacity = 1;
	} else {
		input.style.opacity = 1;
		input.style.transform = 'translateX(0)';
		input.style.zIndex = 0;

		open.style.transform = 'rotate(360deg)';
		open.style.opacity = 0;
		close.style.transform = 'rotate(0)';
		close.style.opacity = 1;
		document.querySelector("input").focus();
	}
}

export function search() {
	let searchInput = document.querySelector("input");
	let searchText = searchInput.value;
	let foundMatch = false;
	document.querySelectorAll(".menu a").forEach(ele => {
		let name = ele.innerText.trim().toLowerCase();
		if (name.indexOf(searchText) !== -1) {
			foundMatch = true;
			window.scrollTo({top: ele.getBoundingClientRect().top - 150, behavior: 'smooth'});
			ele.parentElement.setAttribute("class", "highlight");
			setTimeout(() => {
				ele.parentElement.setAttribute("class", "");
			}, 3000);
		}
	});

	if (!foundMatch) {
		searchInput.setAttribute("class", "ml-s not-found");
		setTimeout(() => {
			searchInput.setAttribute("class", "ml-s");
		}, 500);
	}
}