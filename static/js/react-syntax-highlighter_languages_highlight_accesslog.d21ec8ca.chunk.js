(self.webpackChunkpostgrad_typescript_blog_frontend=self.webpackChunkpostgrad_typescript_blog_frontend||[]).push([[5406],{5187:function(e){function n(e){return e?"string"===typeof e?e:e.source:null}function r(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var l=r.map((function(e){return n(e)})).join("");return l}function a(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var l="("+r.map((function(e){return n(e)})).join("|")+")";return l}e.exports=function(e){var n=["GET","POST","HEAD","PUT","DELETE","CONNECT","OPTIONS","PATCH","TRACE"];return{name:"Apache Access Log",contains:[{className:"number",begin:/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,relevance:5},{className:"number",begin:/\b\d+\b/,relevance:0},{className:"string",begin:r(/"/,a.apply(void 0,n)),end:/"/,keywords:n,illegal:/\n/,relevance:5,contains:[{begin:/HTTP\/[12]\.\d'/,relevance:5}]},{className:"string",begin:/\[\d[^\]\n]{8,}\]/,illegal:/\n/,relevance:1},{className:"string",begin:/\[/,end:/\]/,illegal:/\n/,relevance:0},{className:"string",begin:/"Mozilla\/\d\.\d \(/,end:/"/,illegal:/\n/,relevance:3},{className:"string",begin:/"/,end:/"/,illegal:/\n/,relevance:0}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_accesslog.d21ec8ca.chunk.js.map