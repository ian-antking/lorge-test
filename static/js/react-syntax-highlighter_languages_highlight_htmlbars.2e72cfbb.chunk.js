(self.webpackChunkpostgrad_typescript_blog_frontend=self.webpackChunkpostgrad_typescript_blog_frontend||[]).push([[8458],{5627:function(e){function n(e){return e?"string"===typeof e?e:e.source:null}function a(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];var s=a.map((function(e){return n(e)})).join("");return s}function t(e){var t={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},s=/\[\]|\[[^\]]+\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,r=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return"("+a.map((function(e){return n(e)})).join("|")+")"}(/""|"[^"]+"/,/''|'[^']+'/,s,i),l=a(a("(",/\.|\.\/|\//,")?"),r,function(e){return a("(",e,")*")}(a(/(\.|\/)/,r))),o=a("(",s,"|",i,")(?==)"),c={begin:l,lexemes:/[\w.\/]+/},u=e.inherit(c,{keywords:{literal:["true","false","undefined","null"]}}),d={begin:/\(/,end:/\)/},g={className:"attr",begin:o,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,u,d]}}},m={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},g,u,d],returnEnd:!0},b=e.inherit(c,{className:"name",keywords:t,starts:e.inherit(m,{end:/\)/})});d.contains=[b];var p=e.inherit(c,{keywords:t,className:"name",starts:e.inherit(m,{end:/\}\}/})}),h=e.inherit(c,{keywords:t,className:"name"}),f=e.inherit(c,{className:"name",keywords:t,starts:e.inherit(m,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[p],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[h]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[p]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[h]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[f]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[f]}]}}e.exports=function(e){var n=t(e);return n.name="HTMLbars",e.getLanguage("handlebars")&&(n.disableAutodetect=!0),n}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_htmlbars.2e72cfbb.chunk.js.map