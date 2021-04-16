module.exports = function toIcon(
    icon_name,
    type = "cdn",
    cdn_url_in = "https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/") {
    // Default svg.
    const svg_content_default =
        `Here should be ${icon_name}, but we can not get icon, please check your Internet connection or the contact website master.`;
    let icon_content = "";

    switch ((type).toLowerCase()) {
        case "cdn":
            const icon_file = icon_name + ".svg";
            const cdn_url = cdn_url_in;

            icon_content = `<img src="${urlCombine(cdn_url, icon_file)}" />`;

            break;

        case "package":
            const icon = require(`simple-icons/icons/${icon_name}`);
            
            icon_content = icon.get("svg");
            
            break;
    }

    return `<span id="simple-icons-${icon_name}" class="simple-icon">${icon_content}</span>`;
}

function urlCombine(base_url, addition) {
    return base_url + (base_url.endsWith('/') ? addition : `/${addition}`);
}