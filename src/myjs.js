
window.onload = function () {

var options = {
	animationEnabled: true,
	title: {
		text: "My Time"
	},
	data: [{
		type: "doughnut",
		innerRadius: "40%",
		showInLegend: true,
		legendText: "{label}",
		indexLabel: "{label}: #percent%",
		dataPoints: [
			{ label: "Sports", y: 10 },
			{ label: "Social Media", y: 20 },
			{ label: "Music", y: 10 },
			{ label: "Games", y: 5 },
			{ label: "Engineering", y: 55 }
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}