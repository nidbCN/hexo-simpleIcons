let config = hexo.config.simple_icons;
const isEnabled = config.enable || !config;

// Inject CSS for icons.
if (isEnabled) {
	hexo.extend.injector.register('head_end', () => {

		const size = config.size;
		if (size == undefined) {
			size = 1.2;
		}

		return `<style type="text/css">span[class="simple-icon"]{width:${size}rem;height:${size}rem;display:inline-block}span[class="simple-icon"] svg,img{display:inline-block;vertical-align:middle;height:inherit;width:inherit}</style>`;
	}, 'default');
}

// Render tags to icons svg.
hexo.extend.tag.register('icon', (args) => {
	if (!isEnabled)
		return `${icon_name} icon.`;

	const icon_name = args[0];
	if (icon_name == undefined)
		throw new TypeError("[hexo-simpleIcon]Icon name should be string not undefined!");

	if (config.type == undefined)
		config.type = "cdn";
	if (config.cdn_url == undefined)
	config.cdn_url = 

	const func = require('./libs/convertor');
	return func(icon_name, config.type, config.cdn_url);
});