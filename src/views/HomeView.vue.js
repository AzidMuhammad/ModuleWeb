import TermCard from '@/components/TermCard.vue';
import LayoutTab from '@/components/LayoutTab.vue';
import ContainTab from '@/components/ContainTab.vue';
import ColTab from '@/components/ColTab.vue';
import BreakAfterTab from '@/components/BreakAfterTab.vue';
import BreakBeforeTab from '@/components/BreakBeforeTab.vue';
import BreakInsideTab from '@/components/BreakInsideTab.vue';
import BreakDecorationTab from '@/components/BreakDecorationTab.vue';
import BoxSizingTab from '@/components/BoxSizingTab.vue';
import DisplayTab from '@/components/DisplayTab.vue';
import FloatTab from '@/components/FloatTab.vue';
import ClearTab from '@/components/ClearTab.vue';
import MarginTab from '@/components/MarginTab.vue';
import PaddingTab from '@/components/PaddingTab.vue';
import SpaceTab from '@/components/SpaceTab.vue';
import ColorTab from '@/components/ColorTab.vue';
import PaypalButton from '@/components/PaypalButton.vue';
export default (await import('vue')).defineComponent({
    name: 'HomeView',
    components: {
        TermCard,
        LayoutTab,
        ContainTab,
        ColTab,
        BreakAfterTab,
        BreakBeforeTab,
        BreakInsideTab,
        BreakDecorationTab,
        BoxSizingTab,
        DisplayTab,
        FloatTab,
        ClearTab,
        MarginTab,
        PaddingTab,
        PaypalButton,
        SpaceTab,
        ColorTab
    },
    data() {
        return {
            isSidePanelVisible: false,
        };
    },
    methods: {
        toggleSidePanel() {
            this.isSidePanelVisible = !this.isSidePanelVisible;
        },
    },
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ blur: __VLS_ctx.isSidePanelVisible })) }, });
    __VLS_styleScopedClasses = ({ blur: isSidePanelVisible });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar clear nav-top") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("logo") }, src: ("@/assets/logo/logo.png"), });
    // @ts-ignore
    [isSidePanelVisible,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("right") }, href: ("https://github.com/ModuluxLabs"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/image/github.png"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.toggleSidePanel) }, ...{ class: ("hamburger") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fas fa-bars") }, });
    // @ts-ignore
    [toggleSidePanel,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container clear") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['sidepanel', { 'sidepanel-visible': __VLS_ctx.isSidePanelVisible, 'sidepanel-hidden': !__VLS_ctx.isSidePanelVisible }])) }, });
    __VLS_styleScopedClasses = (['sidepanel', { 'sidepanel-visible': isSidePanelVisible, 'sidepanel-hidden': !isSidePanelVisible }]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sidepanel-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("title") }, href: ("#gettingstarted"), });
    // @ts-ignore
    [isSidePanelVisible, isSidePanelVisible,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ onClick: (__VLS_ctx.toggleSidePanel) }, ...{ class: ("close-icon") }, xmlns: ("http://www.w3.org/2000/svg"), x: ("0px"), y: ("0px"), width: ("15"), height: ("15"), viewBox: ("0,0,256,256"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.g, __VLS_intrinsicElements.g)({ fill: ("#ffffff"), "fill-rule": ("nonzero"), stroke: ("none"), "stroke-width": ("1"), "stroke-linecap": ("butt"), "stroke-linejoin": ("miter"), "stroke-miterlimit": ("10"), "stroke-dasharray": (""), "stroke-dashoffset": ("0"), "font-family": ("none"), "font-weight": ("none"), "font-size": ("none"), "text-anchor": ("none"), ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.g, __VLS_intrinsicElements.g)({ transform: ("scale(8.53333,8.53333)"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"), });
    // @ts-ignore
    [toggleSidePanel,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#installation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("title") }, href: ("#layout"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#aspect-ratio"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#container"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#columns"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#break-after"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#break-before"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#break-inside"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#break-decoration"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#box-sizing"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#display"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#float"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#clear"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("title") }, href: ("#spacing"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#margin"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#padding"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#space-between"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("title") }, href: ("#color"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("section") }, href: ("#color"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider left") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .PaypalButton;
    ({}.PaypalButton);
    __VLS_components.PaypalButton;
    // @ts-ignore
    [PaypalButton,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("installation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("right-col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_6 = {}
        .TermCard;
    ({}.TermCard);
    __VLS_components.TermCard;
    // @ts-ignore
    [TermCard,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ text: ("npm install moduluxcss postcss postcss-cli"), }));
    const __VLS_8 = __VLS_7({ text: ("npm install moduluxcss postcss postcss-cli"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ text: ("npm install moduluxcss postcss postcss-cli"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_12 = {}
        .TermCard;
    ({}.TermCard);
    __VLS_components.TermCard;
    // @ts-ignore
    [TermCard,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ text: ("\u006d\u006f\u0064\u0075\u006c\u0065\u002e\u0065\u0078\u0070\u006f\u0072\u0074\u0073\u0020\u003d\u0020\u007b\u000a\u0020\u0020\u0070\u006c\u0075\u0067\u0069\u006e\u0073\u003a\u0020\u005b\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0028\u0027\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0027\u0029\u005d\u000a\u007d\u003b"), }));
    const __VLS_14 = __VLS_13({ text: ("\u006d\u006f\u0064\u0075\u006c\u0065\u002e\u0065\u0078\u0070\u006f\u0072\u0074\u0073\u0020\u003d\u0020\u007b\u000a\u0020\u0020\u0070\u006c\u0075\u0067\u0069\u006e\u0073\u003a\u0020\u005b\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0028\u0027\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0027\u0029\u005d\u000a\u007d\u003b"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ text: ("\u006d\u006f\u0064\u0075\u006c\u0065\u002e\u0065\u0078\u0070\u006f\u0072\u0074\u0073\u0020\u003d\u0020\u007b\u000a\u0020\u0020\u0070\u006c\u0075\u0067\u0069\u006e\u0073\u003a\u0020\u005b\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0028\u0027\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0027\u0029\u005d\u000a\u007d\u003b"), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_18 = {}
        .TermCard;
    ({}.TermCard);
    __VLS_components.TermCard;
    // @ts-ignore
    [TermCard,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ text: ("\u0040\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0020\u0062\u0061\u0073\u0065\u003b\u000a\u0040\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0020\u006c\u0061\u0079\u006f\u0075\u0074\u003b\u000a\u0040\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0020\u0075\u0074\u0069\u006c\u0069\u0074\u0069\u0065\u0073\u003b"), }));
    const __VLS_20 = __VLS_19({ text: ("\u0040\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0020\u0062\u0061\u0073\u0065\u003b\u000a\u0040\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0020\u006c\u0061\u0079\u006f\u0075\u0074\u003b\u000a\u0040\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0020\u0075\u0074\u0069\u006c\u0069\u0074\u0069\u0065\u0073\u003b"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ text: ("\u0040\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0020\u0062\u0061\u0073\u0065\u003b\u000a\u0040\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0020\u006c\u0061\u0079\u006f\u0075\u0074\u003b\u000a\u0040\u006d\u006f\u0064\u0075\u006c\u0075\u0078\u0063\u0073\u0073\u0020\u0075\u0074\u0069\u006c\u0069\u0074\u0069\u0065\u0073\u003b"), }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_24 = {}
        .TermCard;
    ({}.TermCard);
    __VLS_components.TermCard;
    // @ts-ignore
    [TermCard,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ text: ("npx postcss src/assets/index.css -o src/assets/modulux.css"), }));
    const __VLS_26 = __VLS_25({ text: ("npx postcss src/assets/index.css -o src/assets/modulux.css"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ text: ("npx postcss src/assets/index.css -o src/assets/modulux.css"), }));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_30 = {}
        .TermCard;
    ({}.TermCard);
    __VLS_components.TermCard;
    // @ts-ignore
    [TermCard,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ text: ("npm run dev"), }));
    const __VLS_32 = __VLS_31({ text: ("npm run dev"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ text: ("npm run dev"), }));
    const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("layout"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("aspect-ratio"), });
    // @ts-ignore
    const __VLS_36 = {}
        .TermCard;
    ({}.TermCard);
    __VLS_components.TermCard;
    // @ts-ignore
    [TermCard,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ text: ("\u003c\u0021\u0064\u006f\u0063\u0074\u0079\u0070\u0065\u0020\u0068\u0074\u006d\u006c\u003e\u000a\u003c\u0068\u0074\u006d\u006c\u003e\u000a\u003c\u0068\u0065\u0061\u0064\u003e\u000a\u0020\u0020\u003c\u006d\u0065\u0074\u0061\u0020\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0027\u0055\u0054\u0046\u002d\u0038\u0027\u003e\u000a\u0020\u0020\u003c\u006d\u0065\u0074\u0061\u0020\u006e\u0061\u006d\u0065\u003d\u0027\u0076\u0069\u0065\u0077\u0070\u006f\u0072\u0074\u0027\u0020\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u003d\u0027\u0077\u0069\u0064\u0074\u0068\u003d\u0064\u0065\u0076\u0069\u0063\u0065\u002d\u0077\u0069\u0064\u0074\u0068\u002c\u0020\u0069\u006e\u0069\u0074\u0069\u0061\u006c\u002d\u0073\u0063\u0061\u006c\u0065\u003d\u0031\u002e\u0030\u0027\u003e\u000a\u0020\u0020\u003c\u006c\u0069\u006e\u006b\u0020\u0068\u0072\u0065\u0066\u003d\u0027\u002f\u0073\u0072\u0063\u002f\u0073\u0074\u0079\u006c\u0065\u002e\u0063\u0073\u0073\u0027\u0020\u0072\u0065\u006c\u003d\u0027\u0073\u0074\u0079\u006c\u0065\u0073\u0068\u0065\u0065\u0074\u0027\u003e\u000a\u003c\u002f\u0068\u0065\u0061\u0064\u003e\u000a\u003c\u0062\u006f\u0064\u0079\u003e\u000a\u0020\u0020\u003c\u0068\u0031\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0027\u0074\u0065\u0078\u0074\u002d\u0076\u0062\u0069\u0067\u0020\u0066\u006f\u006e\u0074\u002d\u0073\u0074\u0072\u006f\u006e\u0067\u0020\u0066\u006f\u006e\u0074\u002d\u006d\u006f\u0064\u0065\u0072\u006e\u002d\u0077\u0068\u0069\u0074\u0065\u0027\u003e\u000a\u0020\u0020\u0020\u0020\u0048\u0065\u006c\u006c\u006f\u0020\u0077\u006f\u0072\u006c\u0064\u0021\u000a\u0020\u0020\u003c\u002f\u0068\u0031\u003e\u000a\u003c\u002f\u0062\u006f\u0064\u0079\u003e\u000a\u003c\u002f\u0068\u0074\u006d\u006c\u003e"), }));
    const __VLS_38 = __VLS_37({ text: ("\u003c\u0021\u0064\u006f\u0063\u0074\u0079\u0070\u0065\u0020\u0068\u0074\u006d\u006c\u003e\u000a\u003c\u0068\u0074\u006d\u006c\u003e\u000a\u003c\u0068\u0065\u0061\u0064\u003e\u000a\u0020\u0020\u003c\u006d\u0065\u0074\u0061\u0020\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0027\u0055\u0054\u0046\u002d\u0038\u0027\u003e\u000a\u0020\u0020\u003c\u006d\u0065\u0074\u0061\u0020\u006e\u0061\u006d\u0065\u003d\u0027\u0076\u0069\u0065\u0077\u0070\u006f\u0072\u0074\u0027\u0020\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u003d\u0027\u0077\u0069\u0064\u0074\u0068\u003d\u0064\u0065\u0076\u0069\u0063\u0065\u002d\u0077\u0069\u0064\u0074\u0068\u002c\u0020\u0069\u006e\u0069\u0074\u0069\u0061\u006c\u002d\u0073\u0063\u0061\u006c\u0065\u003d\u0031\u002e\u0030\u0027\u003e\u000a\u0020\u0020\u003c\u006c\u0069\u006e\u006b\u0020\u0068\u0072\u0065\u0066\u003d\u0027\u002f\u0073\u0072\u0063\u002f\u0073\u0074\u0079\u006c\u0065\u002e\u0063\u0073\u0073\u0027\u0020\u0072\u0065\u006c\u003d\u0027\u0073\u0074\u0079\u006c\u0065\u0073\u0068\u0065\u0065\u0074\u0027\u003e\u000a\u003c\u002f\u0068\u0065\u0061\u0064\u003e\u000a\u003c\u0062\u006f\u0064\u0079\u003e\u000a\u0020\u0020\u003c\u0068\u0031\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0027\u0074\u0065\u0078\u0074\u002d\u0076\u0062\u0069\u0067\u0020\u0066\u006f\u006e\u0074\u002d\u0073\u0074\u0072\u006f\u006e\u0067\u0020\u0066\u006f\u006e\u0074\u002d\u006d\u006f\u0064\u0065\u0072\u006e\u002d\u0077\u0068\u0069\u0074\u0065\u0027\u003e\u000a\u0020\u0020\u0020\u0020\u0048\u0065\u006c\u006c\u006f\u0020\u0077\u006f\u0072\u006c\u0064\u0021\u000a\u0020\u0020\u003c\u002f\u0068\u0031\u003e\u000a\u003c\u002f\u0062\u006f\u0064\u0079\u003e\u000a\u003c\u002f\u0068\u0074\u006d\u006c\u003e"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ text: ("\u003c\u0021\u0064\u006f\u0063\u0074\u0079\u0070\u0065\u0020\u0068\u0074\u006d\u006c\u003e\u000a\u003c\u0068\u0074\u006d\u006c\u003e\u000a\u003c\u0068\u0065\u0061\u0064\u003e\u000a\u0020\u0020\u003c\u006d\u0065\u0074\u0061\u0020\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0027\u0055\u0054\u0046\u002d\u0038\u0027\u003e\u000a\u0020\u0020\u003c\u006d\u0065\u0074\u0061\u0020\u006e\u0061\u006d\u0065\u003d\u0027\u0076\u0069\u0065\u0077\u0070\u006f\u0072\u0074\u0027\u0020\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u003d\u0027\u0077\u0069\u0064\u0074\u0068\u003d\u0064\u0065\u0076\u0069\u0063\u0065\u002d\u0077\u0069\u0064\u0074\u0068\u002c\u0020\u0069\u006e\u0069\u0074\u0069\u0061\u006c\u002d\u0073\u0063\u0061\u006c\u0065\u003d\u0031\u002e\u0030\u0027\u003e\u000a\u0020\u0020\u003c\u006c\u0069\u006e\u006b\u0020\u0068\u0072\u0065\u0066\u003d\u0027\u002f\u0073\u0072\u0063\u002f\u0073\u0074\u0079\u006c\u0065\u002e\u0063\u0073\u0073\u0027\u0020\u0072\u0065\u006c\u003d\u0027\u0073\u0074\u0079\u006c\u0065\u0073\u0068\u0065\u0065\u0074\u0027\u003e\u000a\u003c\u002f\u0068\u0065\u0061\u0064\u003e\u000a\u003c\u0062\u006f\u0064\u0079\u003e\u000a\u0020\u0020\u003c\u0068\u0031\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0027\u0074\u0065\u0078\u0074\u002d\u0076\u0062\u0069\u0067\u0020\u0066\u006f\u006e\u0074\u002d\u0073\u0074\u0072\u006f\u006e\u0067\u0020\u0066\u006f\u006e\u0074\u002d\u006d\u006f\u0064\u0065\u0072\u006e\u002d\u0077\u0068\u0069\u0074\u0065\u0027\u003e\u000a\u0020\u0020\u0020\u0020\u0048\u0065\u006c\u006c\u006f\u0020\u0077\u006f\u0072\u006c\u0064\u0021\u000a\u0020\u0020\u003c\u002f\u0068\u0031\u003e\u000a\u003c\u002f\u0062\u006f\u0064\u0079\u003e\u000a\u003c\u002f\u0068\u0074\u006d\u006c\u003e"), }));
    const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("container"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_42 = {}
        .LayoutTab;
    ({}.LayoutTab);
    __VLS_components.LayoutTab;
    // @ts-ignore
    [LayoutTab,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({}));
    const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({ id: ("columns"), });
    // @ts-ignore
    const __VLS_48 = {}
        .ContainTab;
    ({}.ContainTab);
    __VLS_components.ContainTab;
    // @ts-ignore
    [ContainTab,];
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({}));
    const __VLS_53 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("break-after"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_54 = {}
        .ColTab;
    ({}.ColTab);
    __VLS_components.ColTab;
    // @ts-ignore
    [ColTab,];
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
    const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({}));
    const __VLS_59 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("break-before"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_60 = {}
        .BreakAfterTab;
    ({}.BreakAfterTab);
    __VLS_components.BreakAfterTab;
    // @ts-ignore
    [BreakAfterTab,];
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
    const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}({}));
    const __VLS_65 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("break-inside"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_66 = {}
        .BreakBeforeTab;
    ({}.BreakBeforeTab);
    __VLS_components.BreakBeforeTab;
    // @ts-ignore
    [BreakBeforeTab,];
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
    const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({}));
    const __VLS_71 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("break-decoration"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_72 = {}
        .BreakInsideTab;
    ({}.BreakInsideTab);
    __VLS_components.BreakInsideTab;
    // @ts-ignore
    [BreakInsideTab,];
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
    const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
    ({}({}));
    const __VLS_77 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("box-sizing"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_78 = {}
        .BreakDecorationTab;
    ({}.BreakDecorationTab);
    __VLS_components.BreakDecorationTab;
    // @ts-ignore
    [BreakDecorationTab,];
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({}));
    const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
    ({}({}));
    const __VLS_83 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("display"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_84 = {}
        .BoxSizingTab;
    ({}.BoxSizingTab);
    __VLS_components.BoxSizingTab;
    // @ts-ignore
    [BoxSizingTab,];
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({}));
    const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
    ({}({}));
    const __VLS_89 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("float"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_90 = {}
        .DisplayTab;
    ({}.DisplayTab);
    __VLS_components.DisplayTab;
    // @ts-ignore
    [DisplayTab,];
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({}));
    const __VLS_92 = __VLS_91({}, ...__VLS_functionalComponentArgsRest(__VLS_91));
    ({}({}));
    const __VLS_95 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("clear"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_96 = {}
        .FloatTab;
    ({}.FloatTab);
    __VLS_components.FloatTab;
    // @ts-ignore
    [FloatTab,];
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
    const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
    ({}({}));
    const __VLS_101 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("margin"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_102 = {}
        .ClearTab;
    ({}.ClearTab);
    __VLS_components.ClearTab;
    // @ts-ignore
    [ClearTab,];
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({}));
    const __VLS_104 = __VLS_103({}, ...__VLS_functionalComponentArgsRest(__VLS_103));
    ({}({}));
    const __VLS_107 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("padding"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_108 = {}
        .MarginTab;
    ({}.MarginTab);
    __VLS_components.MarginTab;
    // @ts-ignore
    [MarginTab,];
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({}));
    const __VLS_110 = __VLS_109({}, ...__VLS_functionalComponentArgsRest(__VLS_109));
    ({}({}));
    const __VLS_113 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("space-between"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_114 = {}
        .PaddingTab;
    ({}.PaddingTab);
    __VLS_components.PaddingTab;
    // @ts-ignore
    [PaddingTab,];
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({}));
    const __VLS_116 = __VLS_115({}, ...__VLS_functionalComponentArgsRest(__VLS_115));
    ({}({}));
    const __VLS_119 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("color"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_120 = {}
        .SpaceTab;
    ({}.SpaceTab);
    __VLS_components.SpaceTab;
    // @ts-ignore
    [SpaceTab,];
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({}));
    const __VLS_122 = __VLS_121({}, ...__VLS_functionalComponentArgsRest(__VLS_121));
    ({}({}));
    const __VLS_125 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_126 = {}
        .ColorTab;
    ({}.ColorTab);
    __VLS_components.ColorTab;
    // @ts-ignore
    [ColorTab,];
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({}));
    const __VLS_128 = __VLS_127({}, ...__VLS_functionalComponentArgsRest(__VLS_127));
    ({}({}));
    const __VLS_131 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['navbar'];
        __VLS_styleScopedClasses['clear'];
        __VLS_styleScopedClasses['nav-top'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['logo'];
        __VLS_styleScopedClasses['right'];
        __VLS_styleScopedClasses['hamburger'];
        __VLS_styleScopedClasses['fas'];
        __VLS_styleScopedClasses['fa-bars'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['clear'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['wrapper'];
        __VLS_styleScopedClasses['sidepanel-header'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['close-icon'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['divider'];
        __VLS_styleScopedClasses['left'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['divider'];
        __VLS_styleScopedClasses['left'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['divider'];
        __VLS_styleScopedClasses['left'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['divider'];
        __VLS_styleScopedClasses['left'];
        __VLS_styleScopedClasses['right-col'];
        __VLS_styleScopedClasses['divider'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        TermCard,
        LayoutTab,
        ContainTab,
        ColTab,
        BreakAfterTab,
        BreakBeforeTab,
        BreakInsideTab,
        BreakDecorationTab,
        BoxSizingTab,
        DisplayTab,
        FloatTab,
        ClearTab,
        MarginTab,
        PaddingTab,
        PaypalButton,
        SpaceTab,
        ColorTab
    };
    const __VLS_name = 'HomeView';
    let __VLS_internalComponent;
}
