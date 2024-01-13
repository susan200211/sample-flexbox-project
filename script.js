const URL = "http://localhost:3000/products";
document.addEventListener("DOMContentLoaded", () => {
	const displayArea = document.querySelector(".displayArea");
	// console.log(displayArea);

	fetch(URL, {
		method: "GET",

		headers: { "content-Type": "application/json" },
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
});
