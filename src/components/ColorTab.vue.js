import { colorPalette } from './js/Color.js';
export default (await import('vue')).defineComponent({
    data() {
        return {
            palette: colorPalette
        };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("palette-container") }, });
    for (const [colorGroup] of __VLS_getVForSourceType((__VLS_ctx.palette))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((colorGroup.name)), ...{ class: ("color-group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("color-row") }, });
        for (const [color] of __VLS_getVForSourceType((colorGroup.colors))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((color)), ...{ class: ("color-swatch") }, ...{ style: (({ backgroundColor: color })) }, });
            // @ts-ignore
            [palette,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (colorGroup.name);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['palette-container'];
        __VLS_styleScopedClasses['color-group'];
        __VLS_styleScopedClasses['color-row'];
        __VLS_styleScopedClasses['color-swatch'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
