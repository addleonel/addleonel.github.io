import{g as l}from"./index-31200106.js";function p(e,n){for(var o=0;o<n.length;o++){const r=n[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const s=Object.getOwnPropertyDescriptor(r,t);s&&Object.defineProperty(e,t,s.get?s:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,u;function f(){if(u)return a;u=1,a=e,e.displayName="json",e.aliases=[];function e(n){n.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,number:/-?\d+\.?\d*(e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}}}return a}var i=f();const c=l(i),d=p({__proto__:null,default:c},[i]);export{d as j};
