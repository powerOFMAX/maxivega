import{j as a,C as e,r,L as t,O as o,P as n,u as l}from"./index-78244e5f.js";import{B as c,a as j,S as h}from"./index-78244e5f.js";const i=()=>{const s=l("./planet/earth.glb");return a.jsx("primitive",{object:s.scene,scale:1.8,"position-y":0,"rotation-y":0})},m=()=>a.jsx(e,{shadows:!0,frameloop:"demand",gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:a.jsxs(r.Suspense,{fallback:a.jsx(t,{}),children:[a.jsx(o,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,mixPolarAngle:Math.PI/2}),a.jsx(i,{}),a.jsx("ambientLight",{intensity:2}),a.jsx(n,{all:!0})]})});export{c as BallCanvas,j as ComputersCanvas,m as EarthCanvas,h as StarsCanvas};
