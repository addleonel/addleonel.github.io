import{g as u}from"./index-31200106.js";function c(t,e){for(var a=0;a<e.length;a++){const n=e[a];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s,i;function f(){if(i)return s;i=1,s=t,t.displayName="n4js",t.aliases=[];function t(e){e.languages.n4js=e.languages.extend("javascript",{keyword:/\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),e.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),e.languages.n4jsd=e.languages.n4js}return s}var l=f();const g=u(l),d=c({__proto__:null,default:g},[l]);export{d as n};
