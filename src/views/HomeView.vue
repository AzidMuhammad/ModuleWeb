<template>
  <div :class="{ blur: isSidePanelVisible }">
    <div class="navbar clear nav-top">
      <div class="row content">
        <a href="#"><img class="logo" src="@/assets/logo/logo.png"></a>
        <a class="right" href="https://github.com/ModuluxLabs">
          <img src="../assets/image/github.png">
        </a>
        <a class="hamburger" @click="toggleSidePanel">
          <i class="fas fa-bars"></i>
        </a>
      </div>
    </div>

    <div class="container clear">
      <div class="row wrapper">
        <div :class="['sidepanel', { 'sidepanel-visible': isSidePanelVisible, 'sidepanel-hidden': !isSidePanelVisible }]">
          <div class="sidepanel-header">
            <a class="title" href="#gettingstarted">Getting Started</a>
            <svg class="close-icon" @click="toggleSidePanel" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path></g></g>
              </svg>
          </div>
          <a class="section" href="#installation">Installation</a>
          <div class="divider left"></div>
          <a class="title" href="#layout">Layout</a>
          <a class="section" href="#aspect-ratio">Aspect Ratio</a>
          <a class="section" href="#container">Container</a>
          <a class="section" href="#columns">Columns</a>
          <a class="section" href="#break-after">Break After</a>
          <a class="section" href="#break-before">Break Before</a>
          <a class="section" href="#break-inside">Break Inside</a>
          <a class="section" href="#break-decoration">Break Decoration</a>
          <a class="section" href="#box-sizing">Box Sizing</a>
          <a class="section" href="#display">Display</a>
          <a class="section" href="#float">Float</a>
          <a class="section" href="#clear">Clear</a>
          <a class="section" href="#isolate">Isolate</a>
          <a class="section" href="#object-fit">Object Fit</a>
          <a class="section" href="#object-position">Object Position</a>
          <a class="section" href="#overflow">Overflow</a>
          <a class="section" href="#overscroll">Overscroll</a>
          <a class="section" href="#position">Position</a>
          <div class="divider left"></div>
          <a class="title" href="#spacing">Spacing</a>
          <a class="section" href="#margin">Margin</a>
          <a class="section" href="#padding">Padding</a>
          <a class="section" href="#space-between">Space Between</a>
          <div class="divider left"></div>
          <a class="title" href="#color">Color</a>
          <a class="section" href="#color">Color Code</a>
          <div class="divider left"></div>
          <PaypalButton />
        </div>
        <p id="installation"></p>
        <div class="right-col">
          <h1>Get Started With Modulux CSS</h1>
          <p>
            Modulux CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
          </p>
          <h2>Install Modulux CSS</h2>
          <p>
            Install 'moduluxcss' via NPM.
          </p>
          <TermCard text="npm install moduluxcss postcss postcss-cli" />
          <h2>Configure Your Code</h2>
          <p>
            Create 'postcss.config.cjs' or 'postcss.config.js'.
          </p>
          <TermCard text="module.exports = {
  plugins: [require('moduluxcss')]
};" />
          <h2>Add The Modulux CSS Directives</h2>
          <p>
            Add the '@moduluxcss' directives to ./index.css.
          </p>
          <TermCard text="@moduluxcss base;
@moduluxcss layout;
@moduluxcss utilities;" />
          <h2>Run Modulux CSS With PostCSS</h2>
          <p>
            Run 'npx postcss' with PostCSS via Terminal.
          </p>
          <TermCard text="npx postcss src/assets/index.css -o src/assets/modulux.css" />
          <h2>Run Your Project</h2>
          <p>
            Run your build process with 'npm run dev' or whatever command is configured in your 'package.json' file.
          </p>
          <TermCard text="npm run dev" />
          <h2>Start Modulux CSS In Your HTML</h2>
          <p id="layout">
          </p>
          <p>
            Input 'style.css' in the <'head'> with link css.
          </p>
          <p id="aspect-ratio">
          </p>
          <TermCard text="<!doctype html>
<html>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <link href='/src/style.css' rel='stylesheet'>
</head>
<body>
  <h1 class='text-vbig font-strong font-modern-white'>
    Hello world!
  </h1>
</body>
</html>" />
          <p id="container">
          </p>
          <div class="divider" style="width: 24%; margin: 30px 0;"></div>
          <h2>Aspect Ratio</h2>
          <LayoutTab />
          <h2>Container</h2>
          <p>
            <br id="columns"/>
          </p>
          <ContainTab />
          <p id="break-after">
          </p>
          <h2>Columns</h2>
          <ColTab />
          <p id="break-before">
          </p>
          <h2>Break After</h2>
          <BreakAfterTab />
          <p id="break-inside">
          </p>
          <h2>Break Before</h2>
          <BreakBeforeTab />
          <p id="break-decoration">
          </p>
          <h2>Break Inside</h2>
          <BreakInsideTab />
          <p id="box-sizing">
          </p>
          <h2>Break Decoration</h2>
          <BreakDecorationTab />
          <p id="display">
          </p>
          <h2>Box Sizing</h2>
          <BoxSizingTab />
          <p id="float">
          </p>
          <h2>Display</h2>
          <DisplayTab />
          <p id="clear">
          </p>
          <h2>Float</h2>
          <FloatTab />
          <p id="isolate">
          </p>
          <h2>Clear</h2>
          <ClearTab />
          <p id="object-fit">
          </p>
          <h2>Isolate</h2>
          <IsolateTab />
          <p id="object-position">
          </p>
          <h2>Object Fit</h2>
          <ObjectFitTab />
          <p id="overflow">
          </p>
          <h2>Object Position</h2>
          <ObjectPosTab />
          <p id="overscroll">
          </p>
          <h2>Overflow</h2>
          <OverflowTab />
          <p id="position">
          </p>
          <h2>Overscroll</h2>
          <OverscrollTab />
          <p id="margin">
          </p>
          <h2>Position</h2>
          <PositionTab />
          <p id="padding">
          </p>
          <br>
          <h2>Margin</h2>
          <MarginTab />
          <p id="space-between">
          </p>
          <h2>Padding</h2>
          <PaddingTab />
          <p id="color">
          </p>
          <h2>Space Between</h2>
          <SpaceTab />
          <br>
          <h2>Color</h2>
          <ColorTab />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TermCard from '@/components/TermCard.vue'
import LayoutTab from '@/components/LayoutTab.vue'
import ContainTab from '@/components/ContainTab.vue'
import ColTab from '@/components/ColTab.vue'
import BreakAfterTab from '@/components/BreakAfterTab.vue'
import BreakBeforeTab from '@/components/BreakBeforeTab.vue'
import BreakInsideTab from '@/components/BreakInsideTab.vue'
import BreakDecorationTab from '@/components/BreakDecorationTab.vue'
import BoxSizingTab from '@/components/BoxSizingTab.vue'
import DisplayTab from '@/components/DisplayTab.vue'
import FloatTab from '@/components/FloatTab.vue'
import ClearTab from '@/components/ClearTab.vue'
import MarginTab from '@/components/MarginTab.vue'
import PaddingTab from '@/components/PaddingTab.vue'
import SpaceTab from '@/components/SpaceTab.vue'
import ColorTab from '@/components/ColorTab.vue'
import IsolateTab from '@/components/IsolateTab.vue'
import ObjectFitTab from '@/components/ObjectFitTab.vue'
import ObjectPosTab from '@/components/ObjectPosTab.vue'
import OverflowTab from '@/components/OverflowTab.vue'
import OverscrollTab from '@/components/OverscrollTab.vue'
import PositionTab from '@/components/PositionTab.vue'
import PaypalButton from '@/components/PaypalButton.vue'
export default {
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
    ColorTab,
    IsolateTab,
    ObjectFitTab,
    ObjectPosTab,
    OverflowTab,
    OverscrollTab,
    PositionTab
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
}
</script>
