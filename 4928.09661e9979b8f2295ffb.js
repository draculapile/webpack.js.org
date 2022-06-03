"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4928],{4928:function(e,a,n){n.r(a),n(7378);var t=n(2682);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function p(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",o({components:a},n),(0,t.kt)("p",null,"Providing the ",(0,t.kt)("inlineCode",{parentName:"p"},"mode")," configuration option tells webpack to use its built-in optimizations accordingly."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"string = 'production': 'none' | 'development' | 'production'")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"usage",parentName:"h2"}),"Usage",(0,t.kt)("a",{href:"#usage","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Provide the ",(0,t.kt)("inlineCode",{parentName:"p"},"mode")," option in the config:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  mode",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'development'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"or pass it as a ",(0,t.kt)("a",{href:"/api/cli/",parentName:"p"},"CLI")," argument:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-bash",parentName:"pre"},"webpack --mode",(0,t.kt)("span",{className:"token operator",parentName:"code"},"="),"development")),(0,t.kt)("p",null,"The following string values are supported:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr"},"Option"),(0,t.kt)("th",{parentName:"tr"},"Description"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{"data-th":"Option",parentName:"tr"},(0,t.kt)("span",{parentName:"td"},(0,t.kt)("inlineCode",{parentName:"span"},"development"))),(0,t.kt)("td",{"data-th":"Description",parentName:"tr"},(0,t.kt)("span",{parentName:"td"},"Sets ",(0,t.kt)("inlineCode",{parentName:"span"},"process.env.NODE_ENV")," on ",(0,t.kt)("inlineCode",{parentName:"span"},"DefinePlugin")," to value ",(0,t.kt)("inlineCode",{parentName:"span"},"development"),". Enables useful names for modules and chunks."))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{"data-th":"Option",parentName:"tr"},(0,t.kt)("span",{parentName:"td"},(0,t.kt)("inlineCode",{parentName:"span"},"production"))),(0,t.kt)("td",{"data-th":"Description",parentName:"tr"},(0,t.kt)("span",{parentName:"td"},"Sets ",(0,t.kt)("inlineCode",{parentName:"span"},"process.env.NODE_ENV")," on ",(0,t.kt)("inlineCode",{parentName:"span"},"DefinePlugin")," to value ",(0,t.kt)("inlineCode",{parentName:"span"},"production"),". Enables deterministic mangled names for modules and chunks, ",(0,t.kt)("inlineCode",{parentName:"span"},"FlagDependencyUsagePlugin"),", ",(0,t.kt)("inlineCode",{parentName:"span"},"FlagIncludedChunksPlugin"),", ",(0,t.kt)("inlineCode",{parentName:"span"},"ModuleConcatenationPlugin"),", ",(0,t.kt)("inlineCode",{parentName:"span"},"NoEmitOnErrorsPlugin")," and ",(0,t.kt)("inlineCode",{parentName:"span"},"TerserPlugin"),"."))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{"data-th":"Option",parentName:"tr"},(0,t.kt)("span",{parentName:"td"},(0,t.kt)("inlineCode",{parentName:"span"},"none"))),(0,t.kt)("td",{"data-th":"Description",parentName:"tr"},(0,t.kt)("span",{parentName:"td"},"Opts out of any default optimization options"))))),(0,t.kt)("p",null,"If not set, webpack sets ",(0,t.kt)("inlineCode",{parentName:"p"},"production")," as the default value for ",(0,t.kt)("inlineCode",{parentName:"p"},"mode"),"."),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.kt)("p",{parentName:"aside"},"If ",(0,t.kt)("inlineCode",{parentName:"p"},"mode")," is not provided via configuration or CLI, CLI will use any valid ",(0,t.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," value for ",(0,t.kt)("inlineCode",{parentName:"p"},"mode"),".")),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"mode-development",parentName:"h3"}),"Mode: development",(0,t.kt)("a",{href:"#mode-development","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token comment",parentName:"code"},"// webpack.development.config.js"),"\nmodule",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  mode",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'development'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"mode-production",parentName:"h3"}),"Mode: production",(0,t.kt)("a",{href:"#mode-production","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token comment",parentName:"code"},"// webpack.production.config.js"),"\nmodule",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  mode",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'production'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"mode-none",parentName:"h3"}),"Mode: none",(0,t.kt)("a",{href:"#mode-none","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token comment",parentName:"code"},"// webpack.custom.config.js"),"\nmodule",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  mode",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'none'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"If you want to change the behavior according to the ",(0,t.kt)("strong",{parentName:"p"},"mode")," variable inside the ",(0,t.kt)("em",{parentName:"p"},"webpack.config.js"),", you have to export a function instead of an object:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"var")," config ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'./app.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function-variable function",parentName:"code"},"exports")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"env",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," argv"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"argv",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"mode ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"===")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'development'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    config",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"devtool ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'source-map'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"argv",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"mode ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"===")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'production'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"return")," config",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))))}p.isMDXComponent=!0,a.default=p}}]);