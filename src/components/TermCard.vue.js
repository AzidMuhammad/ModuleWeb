export default (await import('vue')).defineComponent({
    name: 'TermCard',
    props: {
        text: {
            type: String,
            required: true,
        },
    },
    methods: {
        copyText() {
            const textElement = this.$refs.terminalText;
            const range = document.createRange();
            range.selectNodeContents(textElement);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
        },
    },
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("terminal-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({ ref: ("terminalText"), ...{ class: ("terminal-content") }, });
    // @ts-ignore
    (__VLS_ctx.terminalText);
    (__VLS_ctx.text);
    // @ts-ignore
    [terminalText, text,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.copyText) }, ...{ class: ("copy-button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("16"), height: ("16"), viewBox: ("0 0 24 24"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM19 19H5V5H7V7H17V5H19V19ZM9 9H15V11H9V9ZM9 13H15V15H9V13ZM9 17H15V19H9V17Z"), fill: ("#FFFFFF"), });
    // @ts-ignore
    [copyText,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['terminal-card'];
        __VLS_styleScopedClasses['terminal-content'];
        __VLS_styleScopedClasses['copy-button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'TermCard';
    let __VLS_internalComponent;
}
