document.querySelector("#alert").addEventListener("click", function () {
	alert("Jus paspaudete mygtuka!");
});

document.querySelector("#confirm").addEventListener("click", function () {
	var decision = confirm("Jus tikrai norite paspausti mygtuka?");

	if (decision) {
		alert("Jus sekminai paspaudete mygtuka!");
	}
});

document.querySelector("#prompt").addEventListener("click", function () {
	var age = prompt("Iveskite savo amziu", 18);

	if (age >= 18) {
		alert("Galite uzeiti");
	} else {
		alert("Jus per jaunas");
	}
});

console.error("Console.error");

console.log("Console.log");
console.warn("Console.warn");
console.info("Console.info");
