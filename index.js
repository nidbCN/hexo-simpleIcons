hexo.extend.tag.register('test', function (args) {
	console.log("HELLO!");
	var id = args[0];
	return 'HELLO THERE';
});