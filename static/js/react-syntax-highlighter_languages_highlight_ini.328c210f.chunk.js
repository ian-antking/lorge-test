(self.webpackChunkpostgrad_typescript_blog_frontend=self.webpackChunkpostgrad_typescript_blog_frontend||[]).push([[5740],{2839:function(n){function e(n){return n?"string"===typeof n?n:n.source:null}function a(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];var r=a.map((function(n){return e(n)})).join("");return r}n.exports=function(n){var s={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:n.NUMBER_RE}]},r=n.COMMENT();r.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];var t={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},i={className:"literal",begin:/\bon|off|true|false|yes|no\b/},o={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},l={begin:/\[/,end:/\]/,contains:[r,i,t,o,s,"self"],relevance:0},c=function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return"("+a.map((function(n){return e(n)})).join("|")+")"}(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[r,{className:"section",begin:/\[+/,end:/\]+/},{begin:a(c,"(\\s*\\.\\s*",c,")*",a("(?=",/\s*=\s*[^#\s]/,")")),className:"attr",starts:{end:/$/,contains:[r,l,i,t,o,s]}}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_ini.328c210f.chunk.js.map