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
				let jeers = $('.jeers p').html();
				$('.jeers p').html(parseInt(jeers) - 1);
				console.log(err.messsage);
			}
		});
	});
});