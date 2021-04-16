export default toIcon(icon_name, options);



function toIcon(icon_name, type, options) {
    switch ((type ?? "cdn").toLowerCase()) {
        case "cdn":
            let cdn_url = options.cdn_url ?? "https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/";

            let template = `<img height="${options.height ?? 32}" width="${options.width ?? 32}" src="${cdn_url}${icon_name}.svg" />`;
    }
}

function urlCombine(base_url, addition) {
    return base_url + base_url.endsWith('/') ? addition : `/${addition}`;
}