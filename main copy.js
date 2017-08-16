var drink1 = document.querySelector("#drink1");
window.onload = function() {
document.getElementById("lunch-menu").addEventListener("click", function() {

	$("#lunch-menu").css("text-decoration", "line-through");
	$("#lunch-menu").css("color", "black");
	$("#sig-drink").css("color", "orange");
	$("#sig-drink").css("text-decoration", "none");
	$("#drink1").text("Lunch Menu Item 1");
	$("#drink1-des").text("Lunch Menu Item 1 Description");

	$("#drink2").text("Lunch Menu Item 2");
	$("#drink2-des").text("Lunch Menu Item 2 Description");

	$("#drink3").text("Lunch Menu Item 3");
	$("#drink3-des").text("Lunch Menu Item 3 Description");

	$("#drink4").text("Lunch Menu Item 4");
	$("#drink4-des").text("Lunch Menu Item 4 Description");

	$("#drink5").text("Lunch Menu Item 5");
	$("#drink5-des").text("Lunch Menu Item 5 Description");

	$("#drink6").text("Lunch Menu Item 6");
	$("#drink6-des").text("Lunch Menu Item 6 Description");

	$("#drink7").text("Lunch Menu Item 7");
	$("#drink7-des").text("Lunch Menu Item 7 Description");

	$("#drink8").text("Lunch Menu Item 8");
	$("#drink8-des").text("Lunch Menu Item 8 Description");

	$("#drink9").text("Lunch Menu Item 9");
	$("#drink9-des").text("Lunch Menu Item 9 Description");

	$("#drink10").text("Lunch Menu Item 10");
	$("#drink10-des").text("Lunch Menu Item 10 Description");
});

document.getElementById("sig-drink").addEventListener("click", function() {

	$("#sig-drink").css("text-decoration", "line-through");
	$("#lunch-menu").css("color", "orange");
	$("#sig-drink").css("color", "black");
	$("#lunch-menu").css("text-decoration", "none");

	$("#drink1").text("C & C Signature");
	$("#drink1-des").text("White Chocolate, Hazelnut, Nutmeg");

	$("#drink2").text("Honey Vanilla");
	$("#drink2-des").text("");

	$("#drink3").text("Cinnamon Bun");
	$("#drink3-des").text("Caramel, Cinnamon");

	$("#drink4").text("Vanilla");
	$("#drink4-des").text("");

	$("#drink5").text("Salted Caramel Mocha");
	$("#drink5-des").text("Chocolate, Caramel, Sea Salt");

	$("#drink6").text("Caramel");
	$("#drink6-des").text("");

	$("#drink7").text("Sugar and Spice");
	$("#drink7-des").text("Vanilla, Cinnamon");

	$("#drink8").text("Mocha");
	$("#drink8-des").text("");

	$("#drink9").text("White Mocah");
	$("#drink9-des").text("");

	$("#drink10").text("Drink10");
	$("#drink10-des").text("");

	

})


}


