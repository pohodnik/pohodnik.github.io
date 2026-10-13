function i([t,n],[s,a]){const M=t*Math.PI/180,h=s*Math.PI/180,o=(s-t)*Math.PI/180,c=(a-n)*Math.PI/180,r=Math.sin(o/2)*Math.sin(o/2)+Math.cos(M)*Math.cos(h)*Math.sin(c/2)*Math.sin(c/2);return 6371e3*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))}function P(t){return t.reduce((n,s,a,e)=>a===0?n:n+i(e[a-1],s),0)}export{P as a,i as g};
//# sourceMappingURL=gpsHelper.DrTX_f12.js.map
