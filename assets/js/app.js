let burger = document.getElementById("burger");

let ul = document.querySelector("nav ul");

burger.addEventListener("click", () => {
	ul.classList.toggle("show");
});
$(document).ready(function () {
	$("#autoWidth").lightSlider({
		autoWidth: true,
		loop: true,
		onSliderLoad: function () {
			$("#autoWidth").removeClass("cS-hidden");
		},
	});
});
