({
	baseUrl: '../script',
	mainConfigFile: '../script/main.js',
	name: '../script/main',
	out: '../script/script.min.js',
	preserveLicenseComments: false,
	paths: {
		requireLib: '../src/bower_components/requirejs/require'
	},
	include: 'requireLib'
})