const config = hexo.config.simple_icons;

console.log("Test");

const isEnabled = config.enable || !config

// Inject CSS for icons.
hexo.extend.injector.register('head_end', () => {
	if (isEnabled)
		return `<style type="text/css">span[class="simple-icon"] {width: 1.5rem;height: 1.5rem;display: inline-block;}span[class="simple-icon"] svg {display: inline-block;vertical-align: middle;height: inherit;width: inherit;}</style>`;
}, 'default');

// Render tags to icons svg.
hexo.extend.tag.register('icon', (args) => {
	console.log(args);
	let icon_name = args[0];
	if (!isEnabled)
		return `${icon_name} icon.`;
	const func = require('./libs/convertor');
	return func(icon_name, config.type, config.options);
});