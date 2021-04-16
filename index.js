if (hexo.config.simple_icons.enable || !hexo.config.simple_icons) {
	// Inject CSS for icons.
	hexo.extend.injector.register('head_end', () => {
		return `<style type="text/css">span[class="simple-icon"] {width: 1.5rem;height: 1.5rem;display: inline-block;}span[class="simple-icon"] svg {display: inline-block;vertical-align: middle;height: inherit;width: inherit;}</style>`;
	}, 'default');

	// Render tags to icons svg.
	hexo.extend.tag.register('simple-icon', (args) => {
		let icon_name = args[0];
		const func = require('./libs/convertor');
		func(icon_name);
		return 'HELLO THERE';
	});
}
