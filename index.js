let config = hexo.config.simple_icons;
const isEnabled = config.enable || !config;

// Inject CSS for icons.
if (isEnabled) {
	hexo.extend.injector.register('head_end', () => {
		const size = config.size;

		// Values check.
		if (size == undefined) {
			size = 1.2;
		}

		// Add CSS in html header.
		return `<style type="text/css">span[class="simple-icon"]{width:${size}rem;height:${size}rem;display:inline-block}span[class="simple-icon"] svg,img{display:inline-block;vertical-align:middle;height:inherit;width:inherit}</style>`;
	}, 'default');
}

// Render tags to icon svg.
hexo.extend.tag.register('icon', (args) => {
	if (!isEnabled)
		// Plugin has not been enabled.
		return `${icon_name} icon.`;

	const icon_name = args[0];
	if (icon_name == undefined)
		// Throw error when lack of arguments.
		throw new TypeError("[hexo-simpleIcon]Icon name should be string not undefined!");

	// Values check.
	if (config.type == undefined)
		config.type = "cdn";
	if (config.cdn_url == undefined)
		config.cdn_url = "https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/";

	const func = require('./libs/convertor').default;
	return func(icon_name, config.type, config.cdn_url);
});