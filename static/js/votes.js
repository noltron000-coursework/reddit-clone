$(document).ready(function () {
	$(".jeers").submit(function (event) {
		event.preventDefault();
		const flareId = $(this).data("id");
		$.ajax({
			type: "PUT",
			url: "/flares/" + flareId + "/jeers",
			success: function () {
				console.log("OOHHHHHH--BURN!!!!!!!!");
			},
			error: function (err) {
				console.log(err.messsage);
			}
		});
	});
});