(self.webpackChunkpostgrad_typescript_blog_frontend=self.webpackChunkpostgrad_typescript_blog_frontend||[]).push([[528],{7053:function(n){function e(n){return n?"string"===typeof n?n:n.source:null}function a(){for(var n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];var s=a.map((function(n){return e(n)})).join("");return s}n.exports=function(n){var e="HTTP/(2|1\\.[01])",t={className:"attribute",begin:a("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},s=[t,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+e+" \\d{3})",end:/$/,contains:[{className:"meta",begin:e},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:s}},{begin:"(?=^[A-Z]+ (.*?) "+e+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:e},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:s}},n.inherit(t,{relevance:0})]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_http.fee24212.chunk.js.map