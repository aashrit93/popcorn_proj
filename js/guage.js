$(function ()  
				{
   var dataSource = [
	{ name: 'TwitterRating', mean: 3.5, min: 2.8, max: 3.8 },
	{ name: 'CriticRating', mean: 2.4, min: 2.0, max: 3.2 },
	
];

var model = {
	items: dataSource,
	selected: ko.observable(dataSource[0]),
	value: ko.computed(function () {
		return model.selected().mean;
	}, null, { deferEvaluation: true }),
	subvalues: ko.computed(function () {
		return [model.selected().min, model.selected().max];
	}, null, { deferEvaluation: true })
};

var html =
'<div style="width: 80%; height: 100%; float: left;" data-bind="dxCircularGauge: {\
	scale: {\
		startValue: 0, endValue: 10,\
		majorTick: { tickInterval: 1 },\
		label: {\
			customizeText: function (arg) {\
				return arg.valueText ;\
			}\
		}\
	},\
	rangeContainer: {\
		ranges: [\
			{ startValue: 0, endValue: 4, color: \'#FF0E2B\' },\
			{ startValue: 4, endValue: 7, color: \'#E8A50C\' },\
			{ startValue: 7, endValue: 10, color: \'#0CE827\' }\
		]\
	},\
	tooltip: { enabled: true },\
	title: {\
		text: \'Rate-o-meter\',\
		font: { size: 28 },\
	},\
	value : value,\
	subvalues : subvalues\
}"></div>\
<div style="width: 20%; float: left; text-align: left; margin-top: 20px;">\
    <select data-bind="options: items, optionsText: \'name\', value: selected"></select>\
</div>';

$('#chartContainer').append(html);

ko.applyBindings(model, $('#chartContainer').get(0));
}

			);