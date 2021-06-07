// Export functions
export const editorService = {
    getFieldsWithPx,
    getFieldsWithDebounce,
    getNewElement,
    getElementUpdatedSrc,
    getFixedYoutubeUrl,
    stripFromPx
};

function getFieldsWithPx() {
    return [
        'fontSize', 'letterSpacing', 'lineHeight',
        'borderRadius', 'height', 'width',
        'marginBlockStart', 'marginBlockEnd', 'marginInlineStart', 'marginInlineEnd',
        'paddingBlockStart', 'paddingBlockEnd', 'paddingInlineStart', 'paddingInlineEnd',
        'borderBlockStartWidth', 'borderBlockEndWidth', 'borderInlineStartWidth', 'borderInlineEndWidth'];
}

function getFieldsWithDebounce() {
    return ['color', 'backgroundColor']
}

function getNewElement(element, changedField, newValue) {
    if (changedField === 'txt') element = { ...element, [changedField]: newValue };
    else {
        if (getFieldsWithPx().includes(changedField)) newValue = newValue + 'px';
        element = { ...element, prefs: { ...element.prefs, style: { ...element.prefs.style, [changedField]: newValue } } };
    };

    return element;
}

function getElementUpdatedSrc(element, newValue) {
    element = JSON.parse(JSON.stringify(element));
    element.childs[0].prefs.src = newValue;

    return element;
}

function getFixedYoutubeUrl(url) {
    if (url.includes('watch?v=')) {
        url = url.replace('watch?v=', 'embed/');
    }
    if (url.includes('&')) {
        let idx = url.indexOf('&');
        url = url.slice(0, idx);
    }
    return url;
}

function stripFromPx(prop) {
    return parseInt(prop.replace('px', ''));
}

