const https = require('https');

module.exports = function toIcon(icon_name, type = "cdn", options = {
    cdn_url: "https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/"
}) {
    // Default svg.
    const svg_content_default =
        `Here should be ${icon_name}, but we can not get icon, please check your Internet connection or the contact website master.`;
    let svg_content;

    switch ((type).toLowerCase()) {
        case "cdn":
            const icon_file = icon_name + ".svg";
            const cdn_url = options.cdn_url;

            svg_content = getSvgContent(urlCombine(cdn_url, icon_file));
            break;

        case "package":
            const icon = require(`simple-icons/icons/${icon_name}`);
            svg_content = icon.get("svg");
            break;
    }

    return `<span id="simple-icons-${icon_name}" class="simple-icons">${svg_content}</span>`;
}

function getSvgContent(url) {
    let result = "";
    https.get(url, (resp) => {
        if (resp.statusCode === 200) {
            resp.on('data', d => {
                result += d;
            })
        }
    });

    return result;
}

function urlCombine(base_url, addition) {
    return base_url + (base_url.endsWith('/') ? addition : `/${addition}`);
}