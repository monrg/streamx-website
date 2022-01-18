"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[279],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7769:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],c={title:"Documentation Notice",sidebar_position:1},s="Documentation Notice",l={unversionedId:"submit_guide/document",id:"submit_guide/document",title:"Documentation Notice",description:"Good documentation is critical for any type of software. Any contribution that can improve the StreamX documentation is welcome.",source:"@site/community/submit_guide/document.md",sourceDirName:"submit_guide",slug:"/submit_guide/document",permalink:"/community/submit_guide/document",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Documentation Notice",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Submit Code",permalink:"/community/submit_guide/submit-code"}},u=[{value:"Get the document project",id:"get-the-document-project",children:[],level:2},{value:"Preview and generate static files",id:"preview-and-generate-static-files",children:[],level:2},{value:"Directory structure",id:"directory-structure",children:[],level:2},{value:"Specification",id:"specification",children:[{value:"Directory naming convention",id:"directory-naming-convention",children:[],level:3},{value:"Vue and the naming convention of static resource files",id:"vue-and-the-naming-convention-of-static-resource-files",children:[],level:3},{value:"Resource Path",id:"resource-path",children:[],level:3},{value:"Page content modification",id:"page-content-modification",children:[],level:3},{value:"Home page modification",id:"home-page-modification",children:[],level:3},{value:"Team page modification",id:"team-page-modification",children:[],level:3},{value:"User list page modification",id:"user-list-page-modification",children:[],level:3}],level:2}],m={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"documentation-notice"},"Documentation Notice"),(0,r.kt)("p",null,"Good documentation is critical for any type of software. Any contribution that can improve the StreamX documentation is welcome."),(0,r.kt)("h2",{id:"get-the-document-project"},"Get the document project"),(0,r.kt)("p",null,"Documentation for the StreamX project is maintained in a separate ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamxhub/streamx-website"},"git repository"),"."),(0,r.kt)("p",null,"First you need to fork the document project into your own github repository, and then clone the document to your local computer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/<your-github-user-name>/streamx-website\n")),(0,r.kt)("h2",{id:"preview-and-generate-static-files"},"Preview and generate static files"),(0,r.kt)("p",null,"This website is compiled using node, using Docusaurus framework components"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and install nodejs (version>12.5.0)"),(0,r.kt)("li",{parentName:"ol"},"Clone the code to the local ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:apache/streamxhub/streamx-website.git")),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")," to install the required dependent libraries."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run start")," in the root directory, you can visit http://localhost:3000 to view the English mode preview of the site"),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run start-zh")," in the root directory, you can visit http://localhost:3000 to view the Chinese mode preview of the site"),(0,r.kt)("li",{parentName:"ol"},"To generate static website resource files, run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build"),". The static resources of the build are in the build directory.")),(0,r.kt)("h2",{id:"directory-structure"},"Directory structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"|-- community \n|-- docs     // The next version of the document that will be released soon\n|-- download \n|-- faq      // Q&A\n|-- i18n    \n|   `-- zh-CN  //Internationalized Chinese\n|       |-- code.json\n|       |-- docusaurus-plugin-content-docs\n|       |-- docusaurus-plugin-content-docs-community\n|       |-- docusaurus-plugin-content-docs-download\n|       |-- docusaurus-plugin-content-docs-faq\n|       `-- docusaurus-theme-classic\n|-- resource  // Original project files for architecture/timing diagram/flow chart, etc.\n|-- src\n|   |-- components\n|   |-- css\n|   |-- js\n|   |-- pages\n|   |   |-- home\n|   |   |-- index.jsx\n|   |   |-- team\n|   |   |-- user\n|   |   `-- versions\n|   |-- styles\n|-- static // Picture static resource\n|   |-- doc  // document picture\n|   |-- user // users picture\n|   |-- home // homepage picture\n|   |-- img  // common picture\n|-- docusaurus.config.js\n\n")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"directory-naming-convention"},"Directory naming convention"),(0,r.kt)("p",null,"Use all lowercase, separated by underscores. If there is a plural structure, use plural nomenclature, and do not use plural abbreviations"),(0,r.kt)("p",null,"Positive example: ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts / styles / components / images / utils / layouts / demo_styles / demo-scripts / img / doc")),(0,r.kt)("p",null,"Counter example: ",(0,r.kt)("inlineCode",{parentName:"p"},"script / style / demoStyles / imgs / docs")),(0,r.kt)("h3",{id:"vue-and-the-naming-convention-of-static-resource-files"},"Vue and the naming convention of static resource files"),(0,r.kt)("p",null,"All lowercase, separated by a dash"),(0,r.kt)("p",null,"Positive example: ",(0,r.kt)("inlineCode",{parentName:"p"},"render-dom.js / signup.css / index.html / company-logo.png")),(0,r.kt)("p",null,"Counter example: ",(0,r.kt)("inlineCode",{parentName:"p"},"renderDom.js / UserManagement.html")),(0,r.kt)("h3",{id:"resource-path"},"Resource Path"),(0,r.kt)("p",null,"Image resources are unified under ",(0,r.kt)("inlineCode",{parentName:"p"},"static/{module name}")),(0,r.kt)("p",null,"css and other style files are placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/css")," directory"),(0,r.kt)("h3",{id:"page-content-modification"},"Page content modification"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Except for the homepage, team, user, Docs>All Version module page, all other pages can be directly jumped to the corresponding github resource modification page through the'Edit this page' button at the bottom")),(0,r.kt)("h3",{id:"home-page-modification"},"Home page modification"),(0,r.kt)("p",null,"Visit the page ",(0,r.kt)("a",{parentName:"p",href:"https://streamxhub.com"},"https://streamxhub.com"),"\nLocated in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/home")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500home\n\u2502 languages.json // Home page Chinese and English configuration\n\u2502 index.less     // homepage style\n")),(0,r.kt)("h3",{id:"team-page-modification"},"Team page modification"),(0,r.kt)("p",null,"Visit the page ",(0,r.kt)("a",{parentName:"p",href:"https://streamxhub.com/team"},"https://streamxhub.com/team"),"\nLocated in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/team")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500team\n\u2502 languages.json\n\u2502 index.js\n\u2502 index.less\n")),(0,r.kt)("h3",{id:"user-list-page-modification"},"User list page modification"),(0,r.kt)("p",null,"Visit the page ",(0,r.kt)("a",{parentName:"p",href:"https://streamxhub.com/user"},"https://streamxhub.com/user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Located in `src/pages/user`\n\u2514\u2500versions\n        data.json\n        images.json\n        index.js\n        index.less\n        languages.json\n")))}p.isMDXComponent=!0}}]);