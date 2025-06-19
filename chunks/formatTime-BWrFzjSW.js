const n=o=>{const r=Math.floor(o/60),t=o%60;return`${r<10?"0":""}${r}:${t<10?"0":""}${t}`},a=o=>{if(o<60)return`${o} min`;const r=Math.floor(o/60),t=o%60;return`${r}h ${t}min`};export{n as a,a as f};
