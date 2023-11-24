module.exports = function toIcon(icon_name, icon_color, type, cdn_url) {
    // Default svg.
    let icon_content = `Here should be ${icon_name}, but there is a wrong type configuration.`;

    switch ((type).toLowerCase()) {
        case "cdn":
            const icon_file = icon_name + ".svg";

            // Set image content.
            icon_content = `<img src="${urlCombine(cdn_url, icon_file)}" />`;
            break;

        case "package":
            const icon = require(`simple-icons/icons/${icon_name}`);

            // Set svg content.
            icon_content = icon.get("svg");
            break;
    }

    return icon_color != null ? `<span id="simple-icons-${icon_name}" class="simple-icon" style="color: ${icon_color};">${icon_content}</span>` : `<span id="simple-icons-${icon_name}" class="simple-icon">${icon_content}</span>`;
}

function urlCombine(base_url, file_name) {
    return base_url.endsWith('/') ? base_url + file_name : base_url + `/${file_name}`;
}