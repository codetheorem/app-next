function cssVar(name: string) {
	return getComputedStyle(document.body).getPropertyValue(name);
}

export default function getEditorStyles(font: 'sans-serif' | 'serif' | 'monospace') {
	return `
	body {
    color: ${cssVar('--foreground-normal')}; 
  
    background-color: ${cssVar('--background-page')}; 
    margin: 20px;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    margin-bottom: 0;
    font-weight: 300;
  
    font-family: ${cssVar(`--font-${font}`)}, serif;
    font-size: 44px;
    line-height: 52px;
  }
  h2 {
    margin-top: 60px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 34px;
    line-height: 38px;
  }
  h3 {
    margin-top: 40px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
  }
  h4 {
    margin-top: 40px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
  }
  h5 {
    margin-top: 40px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
  }
  h6 {
    margin-top: 40px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  p {
    margin-top: 20px;
    margin-bottom: 20px;
  
    font-family: ${cssVar(`--font-${font}`)}, serif; 
    font-size: 16px;
    line-height: 32px;
  }
  a {
    color: #546e7a;
  }
  ul,
  ol {
    margin: 24px 0;
  
    font-family: ${cssVar(`--font-${font}`)}, serif; 
    font-size: 18px;
    line-height: 34px;
  }
  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin: 0;
  }
  b,
  strong {
    font-weight: 600;
  }
  
  code {
    padding: 2px 4px;
    font-size: 18px;
    line-height: 34px;
    overflow-wrap: break-word;
  
    font-family: ${cssVar('--family-monospace')}, monospace; 
    background-color: #eceff1;
    border-radius: 4px;
  }
  pre {
    padding: 20px;
    overflow: auto;
    font-size: 18px;
    line-height: 24px;
  
    font-family: ${cssVar('--family-monospace')}, monospace; 
    background-color: #eceff1;
    border-radius: 4px;
  }
  blockquote {
    margin-left: -10px;
    padding-left: 10px;
  
    font-family: ${cssVar(`--font-${font}`)}, serif; 
    font-size: 18px;
    font-style: italic;
    line-height: 34px;
    border-left: 2px solid #546e7a;
  }
  video,
  iframe,
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  hr {
    margin-top: 52px;
    margin-bottom: 56px;
    text-align: center;
    border: 0;
    border-color: #ccc;
    border-style: solid;
  }
  
  hr::after {
    font-size: 28px;
    line-height: 0;
    letter-spacing: 16px;
    content: '...';
  }
  
  table {
    border-collapse: collapse;
  }
  table th,
  table td {
    padding: 0.4rem;
    border: 1px solid #cfd8dc;
  }
  
  figure {
    display: table;
    margin: 1rem auto;
  }
  figure figcaption {
    display: block;
    margin-top: 0.25rem;
    color: #999;
    text-align: center;
  }
  
  /**
  * Copyright (c) Tiny Technologies, Inc. All rights reserved.
  * Licensed under the LGPL or a commercial license.
  * For LGPL see License.txt in the project root for license information.
  * For commercial licenses see https://www.tiny.cloud/
  */
  .mce-content-body .mce-item-anchor {
    display: inline-block;
    width: 8px !important;
    height: 12px !important;
    padding: 0 2px;
    background: transparent
      url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'8'%20height%3D'12'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M0%200L8%200%208%2012%204.09117821%209%200%2012z'%2F%3E%3C%2Fsvg%3E%0A")
      no-repeat center;
    cursor: default;
    -webkit-user-select: all;
    -moz-user-select: all;
    -ms-user-select: all;
    user-select: all;
    -webkit-user-modify: read-only;
    -moz-user-modify: read-only;
  }
  .mce-content-body .mce-item-anchor[data-mce-selected] {
    outline-offset: 1px;
  }
  .tox-comments-visible .tox-comment {
    background-color: #fff0b7;
  }
  .tox-comments-visible .tox-comment--active {
    background-color: #ffe168;
  }
  .mce-toc li {
    list-style-type: none;
  }
  .tox-checklist > li:not(.tox-checklist--hidden) {
    margin: 0.25em 0;
    list-style: none;
  }
  .tox-checklist > li:not(.tox-checklist--hidden)::before {
    position: absolute;
    width: 1em;
    height: 1em;
    margin-top: 0.125em;
    margin-left: -1.5em;
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-unchecked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2215%22%20height%3D%2215%22%20x%3D%22.5%22%20y%3D%22.5%22%20fill-rule%3D%22nonzero%22%20stroke%3D%22%234C4C4C%22%20rx%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A');
    background-size: 100%;
    cursor: pointer;
    content: '';
  }
  .tox-checklist li:not(.tox-checklist--hidden).tox-checklist--checked::before {
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-checked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%234099FF%22%20fill-rule%3D%22nonzero%22%20rx%3D%222%22%2F%3E%3Cpath%20id%3D%22Path%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M11.5703186%2C3.14417309%20C11.8516238%2C2.73724603%2012.4164781%2C2.62829933%2012.83558%2C2.89774797%20C13.260121%2C3.17069355%2013.3759736%2C3.72932262%2013.0909105%2C4.14168582%20L7.7580587%2C11.8560195%20C7.43776896%2C12.3193404%206.76483983%2C12.3852142%206.35607322%2C11.9948725%20L3.02491697%2C8.8138662%20C2.66090143%2C8.46625845%202.65798871%2C7.89594698%203.01850234%2C7.54483354%20C3.373942%2C7.19866177%203.94940006%2C7.19592841%204.30829608%2C7.5386474%20L6.85276923%2C9.9684299%20L11.5703186%2C3.14417309%20Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A');
  }
  [dir='rtl'] .tox-checklist > li:not(.tox-checklist--hidden)::before {
    margin-right: -1.5em;
    margin-left: 0;
  }
  
  /* http://prismjs.com/ */
  
  /**
  * prism.js default theme for JavaScript, CSS and HTML
  * Based on dabblet (http://dabblet.com)
  * @author Lea Verou
  */
  code[class*='language-'],
  pre[class*='language-'] {
    color: black;
    font-size: 1em;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    line-height: 1.5;
    white-space: pre;
    text-align: left;
    text-shadow: 0 1px white;
    word-wrap: normal;
    word-break: normal;
    word-spacing: normal;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: none;
  }
  
  /* Code blocks */
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #f5f2f0;
  }
  
  pre[class*='language-'] {
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }
  
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
  }
  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #b3d4fc;
  }
  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }
  
  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    white-space: normal;
    border-radius: 0.3em;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #999;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, 0.5);
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }
  .token.function,
  .token.class-name {
    color: #dd4a68;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .mce-content-body {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  .mce-content-body .mce-visual-caret {
    position: absolute;
    background-color: black;
    background-color: currentColor;
  }
  .mce-content-body .mce-visual-caret-hidden {
    display: none;
  }
  .mce-content-body *[data-mce-caret] {
    position: absolute;
    top: 0;
    right: auto;
    left: -1000px;
    margin: 0;
    padding: 0;
  }
  .mce-content-body .mce-offscreen-selection {
    position: absolute;
    left: -2000000px;
    max-width: 1000000px;
  }
  .mce-content-body *[contentEditable='false'] {
    cursor: default;
  }
  .mce-content-body *[contentEditable='true'] {
    cursor: text;
  }
  .tox-cursor-format-painter {
    cursor: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M15%2C6%20C15%2C5.45%2014.55%2C5%2014%2C5%20L6%2C5%20C5.45%2C5%205%2C5.45%205%2C6%20L5%2C10%20C5%2C10.55%205.45%2C11%206%2C11%20L14%2C11%20C14.55%2C11%2015%2C10.55%2015%2C10%20L15%2C9%20L16%2C9%20L16%2C12%20L9%2C12%20L9%2C19%20C9%2C19.55%209.45%2C20%2010%2C20%20L11%2C20%20C11.55%2C20%2012%2C19.55%2012%2C19%20L12%2C14%20L18%2C14%20L18%2C7%20L15%2C7%20L15%2C6%20Z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M1%2C1%20L8.25%2C1%20C8.66421356%2C1%209%2C1.33578644%209%2C1.75%20L9%2C1.75%20C9%2C2.16421356%208.66421356%2C2.5%208.25%2C2.5%20L2.5%2C2.5%20L2.5%2C8.25%20C2.5%2C8.66421356%202.16421356%2C9%201.75%2C9%20L1.75%2C9%20C1.33578644%2C9%201%2C8.66421356%201%2C8.25%20L1%2C1%20Z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A'),
      default;
  }
  .mce-content-body figure.align-left {
    float: left;
  }
  .mce-content-body figure.align-right {
    float: right;
  }
  .mce-content-body figure.image.align-center {
    display: table;
    margin-right: auto;
    margin-left: auto;
  }
  .mce-preview-object {
    position: relative;
    display: inline-block;
    margin: 0 2px 0 2px;
    line-height: 0;
    border: 1px solid gray;
  }
  .mce-preview-object .mce-shim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
  }
  
  .tiny-pageembed .mce-shim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
  }
  
  .mce-preview-object[data-mce-selected='2'] .mce-shim {
    display: none;
  }
  .mce-object {
    background: transparent
      url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%203h16a1%201%200%200%201%201%201v16a1%201%200%200%201-1%201H4a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1zm1%202v14h14V5H5zm4.79%202.565l5.64%204.028a.5.5%200%200%201%200%20.814l-5.64%204.028a.5.5%200%200%201-.79-.407V7.972a.5.5%200%200%201%20.79-.407z%22%2F%3E%3C%2Fsvg%3E%0A')
      no-repeat center;
    border: 1px dashed #aaa;
  }
  .mce-pagebreak {
    display: block;
    width: 100%;
    height: 5px;
    margin-top: 15px;
    page-break-before: always;
    border: 1px dashed #aaa;
    cursor: default;
  }
  @media print {
    .mce-pagebreak {
      border: 0;
    }
  }
  
  .tiny-pageembed[data-mce-selected='2'] .mce-shim {
    display: none;
  }
  .tiny-pageembed {
    position: relative;
    display: inline-block;
  }
  .tiny-pageembed--21by9,
  .tiny-pageembed--16by9,
  .tiny-pageembed--4by3,
  .tiny-pageembed--1by1 {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
  }
  .tiny-pageembed--21by9 {
    padding-top: 42.857143%;
  }
  .tiny-pageembed--16by9 {
    padding-top: 56.25%;
  }
  .tiny-pageembed--4by3 {
    padding-top: 75%;
  }
  .tiny-pageembed--1by1 {
    padding-top: 100%;
  }
  .tiny-pageembed--21by9 iframe,
  .tiny-pageembed--16by9 iframe,
  .tiny-pageembed--4by3 iframe,
  .tiny-pageembed--1by1 iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  .mce-content-body[data-mce-placeholder] {
    position: relative;
  }
  .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
    position: absolute;
    color: rgba(34, 47, 62, 0.7);
    content: attr(data-mce-placeholder);
  }
  
  .mce-content-body div.mce-resizehandle {
    position: absolute;
    z-index: 10000;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    background-color: #4099ff;
    border-color: #4099ff;
    border-style: solid;
    border-width: 1px;
  }
  .mce-content-body div.mce-resizehandle:hover {
    background-color: #4099ff;
  }
  .mce-content-body div.mce-resizehandle:nth-of-type(1) {
    cursor: nwse-resize;
  }
  .mce-content-body div.mce-resizehandle:nth-of-type(2) {
    cursor: nesw-resize;
  }
  .mce-content-body div.mce-resizehandle:nth-of-type(3) {
    cursor: nwse-resize;
  }
  .mce-content-body div.mce-resizehandle:nth-of-type(4) {
    cursor: nesw-resize;
  }
  .mce-content-body .mce-clonedresizable {
    position: absolute;
    z-index: 10000;
    outline: 1px dashed black;
    opacity: 0.5;
  }
  .mce-content-body .mce-resize-helper {
    position: absolute;
    z-index: 10001;
    display: none;
    margin: 5px 10px;
    padding: 5px;
    color: white;
    font-size: 12px;
    font-family: sans-serif;
    line-height: 14px;
    white-space: nowrap;
    background: #555;
    background: rgba(0, 0, 0, 0.75);
    border: 1px;
    border-radius: 3px;
  }
  .mce-match-marker {
    color: #fff;
    background: #aaa;
  }
  .mce-match-marker-selected {
    color: #fff;
    background: #39f;
  }
  .mce-content-body img[data-mce-selected],
  .mce-content-body table[data-mce-selected] {
    outline: 3px solid #b4d7ff;
  }
  .mce-content-body hr[data-mce-selected] {
    outline: 3px solid #b4d7ff;
    outline-offset: 1px;
  }
  .mce-content-body *[contentEditable='false'] *[contentEditable='true']:focus {
    outline: 3px solid #b4d7ff;
  }
  .mce-content-body *[contentEditable='false'] *[contentEditable='true']:hover {
    outline: 3px solid #b4d7ff;
  }
  .mce-content-body *[contentEditable='false'][data-mce-selected] {
    outline: 3px solid #b4d7ff;
    cursor: not-allowed;
  }
  .mce-content-body.mce-content-readonly *[contentEditable='true']:focus,
  .mce-content-body.mce-content-readonly *[contentEditable='true']:hover {
    outline: none;
  }
  .mce-content-body *[data-mce-selected='inline-boundary'] {
    background-color: #b4d7ff;
  }
  .mce-content-body .mce-edit-focus {
    outline: 3px solid #b4d7ff;
  }
  .mce-content-body td[data-mce-selected],
  .mce-content-body th[data-mce-selected] {
    background-color: #b4d7ff !important;
  }
  .mce-content-body td[data-mce-selected]::-moz-selection,
  .mce-content-body th[data-mce-selected]::-moz-selection {
    background: none;
  }
  .mce-content-body td[data-mce-selected]::selection,
  .mce-content-body th[data-mce-selected]::selection {
    background: none;
  }
  .mce-content-body td[data-mce-selected] *,
  .mce-content-body th[data-mce-selected] * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .mce-content-body img::-moz-selection {
    background: none;
  }
  .mce-content-body img::selection {
    background: none;
  }
  .ephox-snooker-resizer-bar {
    background-color: #b4d7ff;
    opacity: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .ephox-snooker-resizer-cols {
    cursor: col-resize;
  }
  .ephox-snooker-resizer-rows {
    cursor: row-resize;
  }
  .ephox-snooker-resizer-bar.ephox-snooker-resizer-bar-dragging {
    opacity: 1;
  }
  .mce-spellchecker-word {
    height: 2rem;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%23ff0000'%20fill%3D'none'%20stroke-linecap%3D'round'%20stroke-opacity%3D'.75'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");
    background-repeat: repeat-x;
    background-position: 0 calc(100% + 1px);
    background-size: auto 6px;
    cursor: default;
  }
  .mce-spellchecker-grammar {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%2300A835'%20fill%3D'none'%20stroke-linecap%3D'round'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");
    background-repeat: repeat-x;
    background-position: 0 calc(100% + 1px);
    background-size: auto 6px;
    cursor: default;
  }
  .mce-toc {
    border: 1px solid gray;
  }
  .mce-toc h2 {
    margin: 4px;
  }
  
  .mce-item-table,
  .mce-item-table td,
  .mce-item-table th,
  .mce-item-table caption {
    border: 1px dashed #bbb;
  }
  .mce-visualblocks p,
  .mce-visualblocks h1,
  .mce-visualblocks h2,
  .mce-visualblocks h3,
  .mce-visualblocks h4,
  .mce-visualblocks h5,
  .mce-visualblocks h6,
  .mce-visualblocks div:not([data-mce-bogus]),
  .mce-visualblocks section,
  .mce-visualblocks article,
  .mce-visualblocks blockquote,
  .mce-visualblocks address,
  .mce-visualblocks pre,
  .mce-visualblocks figure,
  .mce-visualblocks figcaption,
  .mce-visualblocks hgroup,
  .mce-visualblocks aside,
  .mce-visualblocks ul,
  .mce-visualblocks ol,
  .mce-visualblocks dl {
    margin-left: 3px;
    padding-top: 10px;
    background-repeat: no-repeat;
    border: 1px dashed #bbb;
  }
  
  .mce-visualblocks p {
    background-image: url(data:image/gif;base64,R0lGODlhCQAJAJEAAAAAAP///7u7u////yH5BAEAAAMALAAAAAAJAAkAAAIQnG+CqCN/mlyvsRUpThG6AgA7);
  }
  .mce-visualblocks h1 {
    background-image: url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGu1JuxHoAfRNRW3TWXyF2YiRUAOw==);
  }
  .mce-visualblocks h2 {
    background-image: url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8Hybbx4oOuqgTynJd6bGlWg3DkJzoaUAAAOw==);
  }
  .mce-visualblocks h3 {
    background-image: url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIZjI8Hybbx4oOuqgTynJf2Ln2NOHpQpmhAAQA7);
  }
  .mce-visualblocks h4 {
    background-image: url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxInR0zqeAdhtJlXwV1oCll2HaWgAAOw==);
  }
  .mce-visualblocks h5 {
    background-image: url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjane4iq5GlW05GgIkIZUAAAOw==);
  }
  .mce-visualblocks h6 {
    background-image: url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjan04jep1iZ1XRlAo5bVgAAOw==);
  }
  .mce-visualblocks div:not([data-mce-bogus]) {
    background-image: url(data:image/gif;base64,R0lGODlhEgAKAIABALu7u////yH5BAEAAAEALAAAAAASAAoAAAIfjI9poI0cgDywrhuxfbrzDEbQM2Ei5aRjmoySW4pAAQA7);
  }
  .mce-visualblocks section {
    background-image: url(data:image/gif;base64,R0lGODlhKAAKAIABALu7u////yH5BAEAAAEALAAAAAAoAAoAAAI5jI+pywcNY3sBWHdNrplytD2ellDeSVbp+GmWqaDqDMepc8t17Y4vBsK5hDyJMcI6KkuYU+jpjLoKADs=);
  }
  .mce-visualblocks article {
    background-image: url(data:image/gif;base64,R0lGODlhKgAKAIABALu7u////yH5BAEAAAEALAAAAAAqAAoAAAI6jI+pywkNY3wG0GBvrsd2tXGYSGnfiF7ikpXemTpOiJScasYoDJJrjsG9gkCJ0ag6KhmaIe3pjDYBBQA7);
  }
  .mce-visualblocks blockquote {
    background-image: url(data:image/gif;base64,R0lGODlhPgAKAIABALu7u////yH5BAEAAAEALAAAAAA+AAoAAAJPjI+py+0Knpz0xQDyuUhvfoGgIX5iSKZYgq5uNL5q69asZ8s5rrf0yZmpNkJZzFesBTu8TOlDVAabUyatguVhWduud3EyiUk45xhTTgMBBQA7);
  }
  .mce-visualblocks address {
    background-image: url(data:image/gif;base64,R0lGODlhLQAKAIABALu7u////yH5BAEAAAEALAAAAAAtAAoAAAI/jI+pywwNozSP1gDyyZcjb3UaRpXkWaXmZW4OqKLhBmLs+K263DkJK7OJeifh7FicKD9A1/IpGdKkyFpNmCkAADs=);
  }
  .mce-visualblocks pre {
    background-image: url(data:image/gif;base64,R0lGODlhFQAKAIABALu7uwAAACH5BAEAAAEALAAAAAAVAAoAAAIjjI+ZoN0cgDwSmnpz1NCueYERhnibZVKLNnbOq8IvKpJtVQAAOw==);
  }
  .mce-visualblocks figure {
    background-image: url(data:image/gif;base64,R0lGODlhJAAKAIAAALu7u////yH5BAEAAAEALAAAAAAkAAoAAAI0jI+py+2fwAHUSFvD3RlvG4HIp4nX5JFSpnZUJ6LlrM52OE7uSWosBHScgkSZj7dDKnWAAgA7);
  }
  .mce-visualblocks figcaption {
    border: 1px dashed #bbb;
  }
  .mce-visualblocks hgroup {
    background-image: url(data:image/gif;base64,R0lGODlhJwAKAIABALu7uwAAACH5BAEAAAEALAAAAAAnAAoAAAI3jI+pywYNI3uB0gpsRtt5fFnfNZaVSYJil4Wo03Hv6Z62uOCgiXH1kZIIJ8NiIxRrAZNMZAtQAAA7);
  }
  .mce-visualblocks aside {
    background-image: url(data:image/gif;base64,R0lGODlhHgAKAIABAKqqqv///yH5BAEAAAEALAAAAAAeAAoAAAItjI+pG8APjZOTzgtqy7I3f1yehmQcFY4WKZbqByutmW4aHUd6vfcVbgudgpYCADs=);
  }
  .mce-visualblocks ul {
    background-image: url(data:image/gif;base64,R0lGODlhDQAKAIAAALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGuYnqUVSjvw26DzzXiqIDlVwAAOw==);
  }
  .mce-visualblocks ol {
    background-image: url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybH6HHt0qourxC6CvzXieHyeWQAAOw==);
  }
  .mce-visualblocks dl {
    background-image: url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybEOnmOvUoWznTqeuEjNSCqeGRUAOw==);
  }
  .mce-content-body:not([dir='rtl'])[data-mce-placeholder]:not(.mce-visualblocks)::before {
    left: 1px;
  }
  .mce-content-body[dir='rtl'][data-mce-placeholder]:not(.mce-visualblocks)::before {
    right: 1px;
  }
  
  .mce-content-body:not([dir='rtl']) blockquote {
    margin-left: 1.5rem;
    padding-left: 1rem;
    border-left: 2px solid #ccc;
  }
  .mce-content-body[dir='rtl'] blockquote {
    margin-right: 1.5rem;
    padding-right: 1rem;
    border-right: 2px solid #ccc;
  }
  .mce-visualblocks:not([dir='rtl']) p,
  .mce-visualblocks:not([dir='rtl']) h1,
  .mce-visualblocks:not([dir='rtl']) h2,
  .mce-visualblocks:not([dir='rtl']) h3,
  .mce-visualblocks:not([dir='rtl']) h4,
  .mce-visualblocks:not([dir='rtl']) h5,
  .mce-visualblocks:not([dir='rtl']) h6,
  .mce-visualblocks:not([dir='rtl']) div:not([data-mce-bogus]),
  .mce-visualblocks:not([dir='rtl']) section,
  .mce-visualblocks:not([dir='rtl']) article,
  .mce-visualblocks:not([dir='rtl']) blockquote,
  .mce-visualblocks:not([dir='rtl']) address,
  .mce-visualblocks:not([dir='rtl']) pre,
  .mce-visualblocks:not([dir='rtl']) figure,
  .mce-visualblocks:not([dir='rtl']) figcaption,
  .mce-visualblocks:not([dir='rtl']) hgroup,
  .mce-visualblocks:not([dir='rtl']) aside,
  .mce-visualblocks:not([dir='rtl']) ul,
  .mce-visualblocks:not([dir='rtl']) ol,
  .mce-visualblocks:not([dir='rtl']) dl {
    margin-left: 3px;
  }
  .mce-visualblocks[dir='rtl'] p,
  .mce-visualblocks[dir='rtl'] h1,
  .mce-visualblocks[dir='rtl'] h2,
  .mce-visualblocks[dir='rtl'] h3,
  .mce-visualblocks[dir='rtl'] h4,
  .mce-visualblocks[dir='rtl'] h5,
  .mce-visualblocks[dir='rtl'] h6,
  .mce-visualblocks[dir='rtl'] div:not([data-mce-bogus]),
  .mce-visualblocks[dir='rtl'] section,
  .mce-visualblocks[dir='rtl'] article,
  .mce-visualblocks[dir='rtl'] blockquote,
  .mce-visualblocks[dir='rtl'] address,
  .mce-visualblocks[dir='rtl'] pre,
  .mce-visualblocks[dir='rtl'] figure,
  .mce-visualblocks[dir='rtl'] figcaption,
  .mce-visualblocks[dir='rtl'] hgroup,
  .mce-visualblocks[dir='rtl'] aside,
  .mce-visualblocks[dir='rtl'] ul,
  .mce-visualblocks[dir='rtl'] ol,
  .mce-visualblocks[dir='rtl'] dl {
    margin-right: 3px;
    background-position-x: right;
  }
  .mce-nbsp,
  .mce-shy {
    background: #aaa;
  }
  .mce-shy::after {
    content: '-';
  }
  `;
}
