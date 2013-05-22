define([
		'app/hc/slides/SingleFilePresentationModel',
		'app/hc/slides/SlideView',
		'app/hc/slides/PresentationController',
		'css!themes/black/theme.css',
		'css!themes/fade.css',
		'css!lib/google-code-prettify/sunburst.css',
		'lib/google-code-prettify/prettify',
		'lib/google-code-prettify/lang-clj',
		'domReady!'
	],
	function(Model, View, Controller) {
		var model, view, controller;

		model = new Model('slides/slides.html');
		view = new View(document.getElementById('slide-container'), model);
		controller = new Controller(view);

		controller.start().then(function() {
			document.body.className = '';
			prettyPrint();
		});
	}
);
