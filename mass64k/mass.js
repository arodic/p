var sLoc=[0,0,0,0,0,-1.0,0,0.894427359104,-0.44721314311,0.850650846958,0.276393681765,-0.447213202715,0.52573120594,-0.723606944084,-0.44721326232,-0.52573120594,-0.723606944084,-0.44721326232,-0.850650846958,0.276393681765,-0.447213202715,-0.52573120594,0.723606944084,0.44721326232,-0.850650846958,-0.276393681765,0.447213202715,0,-0.894427359104,0.44721314311,0.850650846958,-0.276393681765,0.447213202715,0.52573120594,0.723606944084,0.44721326232,0,0,1];
var i,j,c,w,h,wd,hd,uvScale,near,far,scale,cPrg,vSh,fSh;
var rttColor,rttColorBuffer,rttColorTarget;
var rttDepth,rttDepthBuffer,rttDepthTarget;
var rttComp,rttCompBuffer,rttCompTarget;
var mWorld,mView,mViewInv,mProjection,mWorldView,mWorldViewProj,mWorldInvTranspose;
var aPos={},aNrm={},aCol={},aTex={},aNdx={},sPrg={},colors=[];
var X=0,Y=0,orbitZ=0,orbitY=0;
var focus=0.5;
var delta, time, oldTime=new Date().getTime();
var colorVar,dirVar;

c=document.getElementById('canvas');
window.addEventListener("onresize",resize, false);
document.body.style.overflow="hidden";
document.addEventListener('mousewheel', scroll, false);
document.addEventListener('DOMMouseScroll', scroll, false);

link = document.createElement('a');
link.setAttribute('href', 'http://aleksandarrodic.com/?page=origin_of_mass');
link.innerHTML = "The Origin of Mass";
link.style.position = "absolute";
link.style.bottom = "8px";
link.style.left = "12px";
var style = "" +
    "a, a:visited, a:hover{text-decoration:none; font-size:13px; font-family: Futura; color:#999;}";
var pa= document.getElementsByTagName('head')[0] ;
var el= document.createElement('style');
el.appendChild(document.createTextNode(style));
pa.appendChild(el);

document.body.appendChild(link);

function resize(){
w=1024;
h=1024;
(w>h)?hd=Math.floor((w-h)/2):hd=0;
(h>w)?wd=Math.floor((h-w)/2):wd=0;
uvScale=[1/1024*w,1/1024*h];
iCol();
iDph();
iComp();
}
c.onmousemove=function(e){
X=e.clientX/w;
Y=e.clientY/h;
};
c.onmousedown=function(e){
grow=false;
};
function scroll(e) {
e.preventDefault();
var delta=0;
if(!e)e=window.e;
if(e.wheelDelta){
delta=e.wheelDelta/120;
if(window.opera) delta=-delta;
}else if(e.detail){
delta=-e.detail/3;
}
focus += delta/50;
focus=Math.max(0.2,Math.min(0.8,focus));
}
near=1;
far=160;
window.onload=function(){
iShd();
iBuf();
iMat();
resize();
gl.clearColor(0,0,0,0);
gl.clearDepth(1);
gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.BLEND);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);
drawScene();
};
var mass={};
var nmass=10;
var massLenght=1000;
var massPolyCount=0;
var turnInterval=7;
var speed=2.;
var grow=true;
var nlimit=0;
var mCount=0, mOffset=0;
var radius = 20;
function iBuf(){
colorVar=Math.floor(Math.random()*17);
dirVar=Math.ceil(Math.random()*6);
scale=1.2-Math.random();
randMass();
for (i=0;i<nmass;i++){
mass[i]=generateMass();
iBuff('mass'+i,mass[i]);
}
iBuff('quad',quad);
grow=true;
}
function randColor(){
var rnd1=Math.random(1);
var rnd2=Math.random(2);
var rnd3=Math.random(3);
colors[0]=new V3.$(rnd1,rnd2,rnd3);
colors[1]=new V3.$(rnd1*.05+.95,rnd2*.5+.5,rnd3*.4+.6);
colors[2]=new V3.$(rnd1,rnd1,rnd1);
colors[3]=new V3.$(rnd1*0.1+0.2,Math.pow(rnd2,3)+0.3,rnd1*0.1+0.2);
colors[4]=new V3.$(rnd1,rnd1,rnd2);
colors[5]=new V3.$(rnd1,rnd2,rnd2);
colors[6]=new V3.$(rnd1,0.7,rnd2*0.5);
colors[7]=new V3.$(0.5,0.54-0.22*rnd1,0.7);
colors[8]=new V3.$(rnd1*0.6,0.8-rnd1*0.5,0.6);
colors[9]=new V3.$(rnd1,rnd1,rnd1-0.3);
colors[10]=new V3.$(rnd1-0.2,rnd1-0.1,rnd1);
colors[11]=new V3.$(rnd1-0.4*rnd2,rnd1,rnd1);
colors[12]= (rnd1<0.8)?new V3.$(rnd1*0.5+0.5,rnd1*0.5+0.5,rnd1*0.5+0.5):colors[6];
colors[13]= (rnd1<0.75)?new V3.$(rnd1*0.3+0.7,rnd1*0.3+0.7,rnd1*0.3+0.7):colors[0];
colors[14]= (rnd1<0.65)?new V3.$(rnd1*0.2+0.1,rnd1*0.1+0.1,rnd1*0.1+0.1):colors[2];
colors[15]=new V3.$(rnd1-0.2*rnd2,rnd1*0.5,rnd1*0.5);
colors[16]=new V3.$(1,1,1);
colors[17]=new V3.$(1,1,1);
return colors[colorVar];
}
function randMass(){
var massType = Math.ceil(Math.random(8)*3);
switch(massType){
case 1:
nmass=Math.ceil(Math.random(1)*20+5);
massLenght=Math.ceil((5000*(Math.random(2)+0.1))/nmass);
speed=Math.random(4)*2+0.5;
turnInterval=Math.ceil(Math.random(3)*10/speed+2);
radius=Math.random(11)*50+50;
break;
case 2:
nmass=Math.ceil(Math.random(1)*300+5);
massLenght=Math.ceil((30000*(Math.random(2)+0.1))/nmass);
speed=Math.random(4)*2+0.5;
turnInterval=Math.ceil(Math.random(3)*10/speed+2);
radius=Math.random(11)*50+50;
break;
default:
nmass=Math.ceil(Math.random(1)*500+5);
massLenght=Math.ceil((20000*(Math.random(2)+0.1))/nmass);
speed=Math.random(4)*2+0.5;
turnInterval=Math.ceil(Math.random(3)*6/speed);
radius=Math.random(11)*50+50;
}
massPolyCount=0;
grow=true;
nlimit=0,mCount=0,mOffset=0;
}

function rndDir(s,p){
var dVec = [];
var up=V3.$(0,1,0);
switch(s){
case 1:
up=V3.$(0,1,0);
dVec[0]=V3.normalize(V3.$(p[0],p[1],p[2]));
dVec[1]=V3.neg(dVec[0]);
dVec[2]=V3.cross(dVec[0],up);
dVec[3]=V3.neg(dVec[2]);
dVec[4]=V3.cross(dVec[0],dVec[2]);
dVec[5]=V3.neg(dVec[4]);
break;
case 2:
up=V3.$(0,1,0);
dVec[0]=V3.normalize(V3.$(p[0],-p[1],p[2]));
dVec[1]=V3.neg(dVec[0]);
dVec[2]=V3.cross(dVec[0],up);
dVec[3]=V3.neg(dVec[2]);
dVec[4]=V3.cross(dVec[0],dVec[2]);
dVec[5]=V3.neg(dVec[4]);
break;
case 3:
up=V3.$(0,1,0);
dVec[0]=V3.normalize(V3.$(p[0],p[1],p[2]));
dVec[1]=V3.neg(dVec[0]);
dVec[2]=V3.cross(dVec[0],up);
dVec[3]=V3.neg(dVec[2]);
dVec[4]=V3.cross(dVec[0],V3.neg(dVec[1]));
dVec[5]=V3.neg(dVec[4]);
break;
case 4:
up=V3.$(0,1,0);
dVec[0]=V3.normalize(V3.$(-p[0],p[1],Math.pow(p[2],3)));
dVec[1]=V3.neg(dVec[0]);
dVec[2]=V3.cross(dVec[0],up);
dVec[3]=V3.neg(dVec[2]);
dVec[4]=V3.cross(dVec[0],dVec[2]);
dVec[5]=V3.neg(dVec[4]);
break;
case 5:
up=V3.$(0,1,0);
dVec[0]=V3.normalize(V3.$(p[0],-Math.abs(p[1]),p[2]));
dVec[1]=V3.cross(dVec[0],V3.$(0,0,1));
dVec[2]=V3.cross(dVec[0],up);
dVec[3]=V3.neg(V3.$(-1,0,0));
dVec[4]=V3.cross(dVec[0],dVec[2]);
dVec[5]=V3.neg(dVec[4]);
break;
case 6:
up=V3.$(0,1,0);
dVec[0]=V3.normalize(V3.$(p[0],p[1],p[2]));
dVec[1]=V3.neg(dVec[0]);
dVec[2]=V3.cross(dVec[0],up);
dVec[3]=V3.neg(dVec[2]);
dVec[4]=V3.cross(dVec[1],dVec[2]);
dVec[5]=V3.neg(dVec[4]);
dVec[5]=V3.$(dVec[5][0],dVec[3][1],dVec[5][2]);
dVec[4]=V3.$(dVec[4][0],-dVec[1][1],dVec[4][2]);
break;
}
return dVec;
}
function generateMass(){
var m=new Object();
m.vertexPositions=[];
m.vertexNormals=[];
m.vertexColors=[];
m.vertexTextureCoords=[];
m.indices=[];
var position=V3.$(0,0,0);
var direction=V3.$(0,1,0);
var dir = [];
color=randColor();
position=V3.$(radius/2-Math.random()*radius,radius/2-Math.random()*radius,radius/2-Math.random()*radius);
for (var i=0; i<massLenght; i++){
dir = rndDir(dirVar,position);
if(i%turnInterval == 0) direction=Math.floor(Math.random()*5.99);
V3.add(position,V3.scale(dir[direction],speed),position);
for (var j=0; j<sphere.vertexPositions.length; j=j+3){
m.vertexPositions.push(sphere.vertexPositions[j+0]*scale+position[0]);
m.vertexPositions.push(sphere.vertexPositions[j+1]*scale+position[1]);
m.vertexPositions.push(sphere.vertexPositions[j+2]*scale+position[2]);
m.vertexNormals.push(sphere.vertexPositions[j+0]);
m.vertexNormals.push(sphere.vertexPositions[j+1]);
m.vertexNormals.push(sphere.vertexPositions[j+2]);
m.vertexTextureCoords.push(sphere.vertexPositions[j+0]);
m.vertexTextureCoords.push(sphere.vertexPositions[j+1]);
m.vertexTextureCoords.push(sphere.vertexPositions[j+2]);
m.vertexColors.push(color[0]);
m.vertexColors.push(color[1]);
m.vertexColors.push(color[2]);
}
for (j=0; j<sphere.indices.length; j++){
m.indices.push(sphere.indices[j]+((sphere.vertexPositions.length/3)*i));
}
massPolyCount=m.indices.length;
}
return m;
}
var sphere={
"vertexPositions" : [0,0,-1,0,.894427359104,-.44721314311,.850650846958,.276393681765,-.447213202715,.52573120594,-.723606944084,-.44721326232,-.52573120594,-.723606944084,-.44721326232,-.850650846958,.276393681765,-.447213202715,-.52573120594,.723606944084,.44721326232,-.850650846958,-.276393681765,.447213202715,0,-.894427359104,.44721314311,.850650846958,-.276393681765,.447213202715,.52573120594,.723606944084,.44721326232,0,0,1],
"indices" : [4,3,0,3,2,0,5,4,0,2,1,0,1,5,0,8,3,4,7,4,5,9,2,3,6,5,1,10,1,2,7,8,4,8,9,3,6,7,5,9,10,2,10,6,1,9,8,11,8,7,11,10,9,11,7,6,11,6,10,11]
};
var quad={
"vertexPositions" : [-.5,-.5,0,.5,-.5,0,-.5,.5,0,.5,.5,0],
"vertexNormals" : [0,0,-1,0,0,-1,0,0,-1,0,0,-1],
"vertexColors" : [1,1,1,1,1,1,1,1,1,1,1,1],
"vertexTextureCoords" : [0,0,.5,1,0,.5,0,1,.5,1,1,.5],
"indices" : [0,1,3,0,3,2]
};
function drawScene(){
if (mCount < massPolyCount && grow){
mCount += 3*500;
}
else if (mCount > 0 && !grow){
mCount -= 3*500;
mOffset += 3*500;
} else if (mCount <= 0 && !grow){
iBuf();
}
mCount = Math.min(Math.max(mCount,0),massPolyCount);
time=new Date().getTime();
delta=time - oldTime;
oldTime=time;
mProjection=M4x4.makePerspective(50,1,near,far);
M4x4.makeTranslate3(0,0,0,mWorld);
M4x4.scale(V3.$(.6,.6,.6),mWorld,mWorld);
M4x4.makeTranslate3(0,0,-80,mView);
orbitY += (X-orbitY)/10;
orbitZ += (Y-orbitZ)/10;
M4x4.rotate(orbitY*5,V3.$(0,1,0),mView,mView);
M4x4.rotate(orbitZ*5,V3.$(0,0,1),mView,mView);
nlimit < nmass ? nlimit += 1 : null;
render();
}
function render(){
gl.viewport(-wd,-hd,w+wd*2,h+hd*2);
requestAnimationFrame(drawScene);
sShd("vcolor");
gl.bindFramebuffer(gl.FRAMEBUFFER,rttColorTarget);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
for(i=0;i<nmass;i++)drawMass('mass'+i);
sShd("depth");
gl.bindFramebuffer(gl.FRAMEBUFFER,rttDepthTarget);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
for(i=0;i<nmass;i++)drawMass('mass'+i);
gl.viewport(0, 0, w, h);
gl.bindFramebuffer(gl.FRAMEBUFFER,rttCompTarget);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
mProjection=M4x4.makeOrtho2D(-.5,.5,-.5,.5);
M4x4.makeTranslate3(0,0,0,mWorld);
M4x4.makeTranslate3(0,0,0,mView);
sShd("post_ao");
bindRTTexture();
drawBuffer('quad');
gl.bindFramebuffer(gl.FRAMEBUFFER,null);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
sShd("post_dof");
bindRTTexture();
drawBuffer('quad');
}
function drawBuffer(name){
if(aPos[name]){
gl.bindBuffer(gl.ARRAY_BUFFER,aPos[name]);
gl.vertexAttribPointer(cPrg.aPos,aPos[name].itemSize,gl.FLOAT,false,0,0);
gl.bindBuffer(gl.ARRAY_BUFFER,aNrm[name]);
gl.vertexAttribPointer(cPrg.aNrm,aNrm[name].itemSize,gl.FLOAT,false,0,0);
gl.bindBuffer(gl.ARRAY_BUFFER,aCol[name]);
gl.vertexAttribPointer(cPrg.aCol,aCol[name].itemSize,gl.FLOAT,false,0,0);
gl.bindBuffer(gl.ARRAY_BUFFER,aTex[name]);
gl.vertexAttribPointer(cPrg.aTex,aTex[name].itemSize,gl.FLOAT,false,0,0);
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,aNdx[name]);
gl.drawElements(gl.TRIANGLES,aNdx[name].numItems,gl.UNSIGNED_SHORT,0);
}
}
function drawMass(name){
if(aPos[name]){
gl.bindBuffer(gl.ARRAY_BUFFER,aPos[name]);
gl.vertexAttribPointer(cPrg.aPos,aPos[name].itemSize,gl.FLOAT,false,0,0);
gl.bindBuffer(gl.ARRAY_BUFFER,aNrm[name]);
gl.vertexAttribPointer(cPrg.aNrm,aNrm[name].itemSize,gl.FLOAT,false,0,0);
gl.bindBuffer(gl.ARRAY_BUFFER,aCol[name]);
gl.vertexAttribPointer(cPrg.aCol,aCol[name].itemSize,gl.FLOAT,false,0,0);
gl.bindBuffer(gl.ARRAY_BUFFER,aTex[name]);
gl.vertexAttribPointer(cPrg.aTex,aTex[name].itemSize,gl.FLOAT,false,0,0);
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,aNdx[name]);
gl.drawElements(gl.TRIANGLES,mCount,gl.UNSIGNED_SHORT,mOffset);
}
}
function bindRTTexture(){
gl.activeTexture(gl.TEXTURE2);
gl.bindTexture(gl.TEXTURE_2D,rttColor);
gl.uniform1i(cPrg.sampler2,2);
gl.activeTexture(gl.TEXTURE3);
gl.bindTexture(gl.TEXTURE_2D,rttDepth);
gl.uniform1i(cPrg.sampler3,3);
gl.activeTexture(gl.TEXTURE4);
gl.bindTexture(gl.TEXTURE_2D,rttComp);
gl.uniform1i(cPrg.sampler4,4);
}
function iCol(){
rttColorTarget=gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER,rttColorTarget);
rttColor=gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D,rttColor);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
//gl.generateMipmap(gl.TEXTURE_2D);
gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1024,1024,0,gl.RGBA,gl.UNSIGNED_BYTE,null);
rttColorBuffer=gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER,rttColorBuffer);
gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,w,h);
gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,rttColor,0);
gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,rttColorBuffer);
gl.bindTexture(gl.TEXTURE_2D,null);
gl.bindRenderbuffer(gl.RENDERBUFFER,null);
gl.bindFramebuffer(gl.FRAMEBUFFER,null);
}
function iDph(){
rttDepthTarget=gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER,rttDepthTarget);
rttDepth=gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D,rttDepth);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
//gl.generateMipmap(gl.TEXTURE_2D);
gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1024,1024,0,gl.RGBA,gl.UNSIGNED_BYTE,null);
rttDepthBuffer=gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER,rttDepthBuffer);
gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,w,h);
gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,rttDepth,0);
gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,rttDepthBuffer);
gl.bindTexture(gl.TEXTURE_2D,null);
gl.bindRenderbuffer(gl.RENDERBUFFER,null);
gl.bindFramebuffer(gl.FRAMEBUFFER,null);
}
function iComp(){
rttCompTarget=gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER,rttCompTarget);
rttComp=gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D,rttComp);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
//gl.generateMipmap(gl.TEXTURE_2D);
gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1024,1024,0,gl.RGBA,gl.UNSIGNED_BYTE,null);
rttCompBuffer=gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER,rttCompBuffer);
gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,w,h);
gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,rttComp,0);
gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,rttCompBuffer);
gl.bindTexture(gl.TEXTURE_2D,null);
gl.bindRenderbuffer(gl.RENDERBUFFER,null);
gl.bindFramebuffer(gl.FRAMEBUFFER,null);
}
function iBuff(name,data){
aPos[name]=gl.createBuffer();bBuff3(aPos[name],data.vertexPositions);
aNrm[name]=gl.createBuffer();bBuff3(aNrm[name],data.vertexNormals);
aCol[name]=gl.createBuffer();bBuff3(aCol[name],data.vertexColors);
aTex[name]=gl.createBuffer();bBuff3(aTex[name],data.vertexTextureCoords);
aNdx[name]=gl.createBuffer();bIndex(aNdx[name],data.indices);
}
function iShd(){
sPrg["vcolor"]=iPrg(vcolor_fs,vcolor_vs);
sPrg["post_dof"]=iPrg(post_dof_fs,post_dof_vs);
sPrg["post_ao"]=iPrg(post_ao_fs,post_ao_vs);
sPrg["depth"]=iPrg(depth_fs,depth_vs);
}
function iPrg(fSrc,vSrc){
var prg=mPrg(fSrc,vSrc);
prg.aPos=mAtt(prg,"aPos");gl.enableVertexAttribArray(prg.aPos);
prg.aNrm=mAtt(prg,"aNrm");gl.enableVertexAttribArray(prg.aNrm);
prg.aCol=mAtt(prg,"aCol");gl.enableVertexAttribArray(prg.aCol);
prg.aTex=mAtt(prg,"aTex");gl.enableVertexAttribArray(prg.aTex);
prg.sampler0=mUni(prg,"uSampler0");
prg.sampler1=mUni(prg,"uSampler1");
prg.sampler2=mUni(prg,"uSampler2");
prg.sampler3=mUni(prg,"uSampler3");
prg.sampler4=mUni(prg,"uSampler4");
prg.uvScale=mUni(prg,"uvScale");
prg.mouseX=mUni(prg,"uMouseX");
prg.mouseY=mUni(prg,"uMouseY");
prg.near=mUni(prg,"uNear");
prg.far=mUni(prg,"uFar");
prg.focus=mUni(prg,"uFocus");
prg.sphere=mUni(prg,"uSphere");
prg.world=mUni(prg,"uWorld");
prg.worldView=mUni(prg,"uWorldView");
prg.worldViewProj=mUni(prg,"uWorldViewProj");
prg.worldInvTranspose=mUni(prg,"uWorldInvTranspose");
prg.viewInv=mUni(prg,"uViewInv");
return prg;
}
function sUni(){
M4x4.mul(mView,mWorld,mWorldView);
M4x4.mul(mProjection,mWorldView,mWorldViewProj);
M4x4.inverseOrthonormal(mView,mViewInv);
M4x4.transpose(mViewInv,mWorldInvTranspose);
gl.uniformMatrix4fv(cPrg.world,gl.FALSE,new Float32Array(mWorld));
gl.uniformMatrix4fv(cPrg.worldView,gl.FALSE,new Float32Array(mWorldView));
gl.uniformMatrix4fv(cPrg.worldInvTranspose,gl.FALSE,new Float32Array(mWorldInvTranspose));
gl.uniformMatrix4fv(cPrg.worldViewProj,gl.FALSE,new Float32Array(mWorldViewProj));
gl.uniformMatrix4fv(cPrg.viewInv,gl.FALSE,new Float32Array(mViewInv));
gl.uniform2fv(cPrg.uvScale,uvScale);
gl.uniform1f(cPrg.mouseX,X);
gl.uniform1f(cPrg.mouseY,Y);
gl.uniform1f(cPrg.far,far);
gl.uniform1f(cPrg.near,near);
gl.uniform1f(cPrg.focus,focus);
gl.uniform3fv(cPrg.sphere,sLoc);
}
function iMat(){mWorld=new M4x4.$();mView=new M4x4.$();mViewInv=new M4x4.$();mProjection=new M4x4.$();mWorldView=new M4x4.$();mWorldViewProj=new M4x4.$();mWorldInvTranspose=new M4x4.$();}
function sShd(n){cPrg=sPrg[n];gl.useProgram(cPrg);sUni();}
function mPrg(fSrc,vSrc){vSh=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vSh,vSrc);gl.compileShader(vSh);fSh=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fSh,fSrc);gl.compileShader(fSh);var prg=gl.createProgram();gl.attachShader(prg,vSh);gl.attachShader(prg,fSh);gl.linkProgram(prg);if(!gl.getProgramParameter(prg,gl.LINK_STATUS)){alert("shader fail");}return prg;}
function mAtt(p,s){return gl.getAttribLocation(p,s);}function mUni(p,s){return gl.getUniformLocation(p,s);}
function bBuff3(b,d){gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(d),gl.STATIC_DRAW);b.itemSize=3;b.numItems=d.length/3;return b;}
function bIndex(b,d){gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,b);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(d),gl.STREAM_DRAW);b.itemSize=1;b.numItems=d.length;return b;}
if(!window.requestAnimationFrame){window.requestAnimationFrame=(function(){return window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(call){window.setTimeout(call,1000/30);};})();}
//SHADERS
var sAttr=[
"attribute vec3 aPos;",
"attribute vec3 aNrm;",
"attribute vec3 aCol;",
"attribute vec3 aTex;"
].join("\n");
var sUnif=[
"uniform mat4 uWorld;",
"uniform mat4 uWorldView;",
"uniform mat4 uWorldViewProj;",
"uniform mat4 uWorldInvTranspose;",
"uniform mat4 uViewInv;",
"uniform float uNear;",
"uniform float uFar;",
"uniform float uFocus;",
"uniform vec2 uvScale;",
"uniform float uHeight;",
"uniform float uMouseX;",
"uniform vec3 uSphere[13];"
].join("\n");
var sVary=[
"varying vec3 vNormal;",
"varying vec4 vWorld;",
"varying vec3 vColor;",
"varying vec3 vDiffuse;",
"varying float vDepth;",
"varying vec4 pos;",
"varying vec3 uv;"
].join("\n");
var sSamp=[
"uniform sampler2D uSampler0;",
"uniform sampler2D uSampler1;",
"uniform sampler2D uSampler2;",
"uniform sampler2D uSampler3;",
"uniform sampler2D uSampler4;"
].join("\n");
var sHead="#ifdef GL_ES\nprecision highp float;\n#endif;";
var sMain="void main(void) {";
var sVert=[
"gl_Position=uWorldViewProj * vec4(aPos, 1.0);",
"vColor=aCol;",
"uv=aTex;",
"vDepth=(gl_Position.z+uNear)/uFar;",
"vNormal=(uWorldInvTranspose * vec4(aNrm, 1.0)).xyz;"
].join("\n");
var vcolor_vs=[sAttr,sUnif,sVary,sMain,sVert,
"vec3 ambientCol=vec3(.5,.6,.65);",
"vec3 lightPos1=vec3(3.0,2.0,1.0);",
"vec3 lightCol1=vec3(.5,.2,.35);",
"vec3 lightDir1=normalize(lightPos1);",
"float diffuseProduct1=dot(normalize(vNormal.xyz), lightDir1);",
"vec3 lightPos2=vec3(0.,-1.,2.0);",
"vec3 lightCol2=vec3(.3,.4,.2);",
"vec3 lightDir2=normalize(lightPos2);",
"float diffuseProduct2=dot(normalize(vNormal.xyz), lightDir2);",
"vDiffuse=vec3(diffuseProduct1)*lightCol1 + vec3(diffuseProduct2)*lightCol2 + ambientCol;",
"}"].join("\n");
var vcolor_fs=[sHead,sVary,sMain,
"gl_FragColor=vec4(vDiffuse*vColor,1.0);",
"}"].join("\n");
var depth_vs=[sAttr,sUnif,sVary,sMain,sVert,"}"].join("\n");
var depth_fs=[sHead,sVary,sMain,
"gl_FragColor=vec4( (vDepth*3.), (vDepth*3.-1.), (vDepth*3.-2.), 1. );",
"}"].join("\n");
var post_ao_vs=[sAttr,sUnif,sVary,sMain,sVert,"}"].join("\n");
var post_ao_fs=[sHead,sSamp,sUnif,sVary,sMain,
"vec2 ep=vec2(uv.s*uvScale.s, uv.t*uvScale.t);",
"vec4 zTex=texture2D(uSampler3, ep);",
"float ez=zTex.r/3.+zTex.g/3.+zTex.b/3.;",
"if(zTex.a == 0.) ez=1.;",
"vec4 col=texture2D(uSampler2, ep);",
"float ao=0.0;",
"if(col.a > 0.) {",
"float ao=0.0;",
"vec3 rndUv=vec3(0.0);",
"for( int i=0; i<13; i++ ){",
"rndUv=vec3(ep,ez) + 0.005*reflect(uSphere[i].xyz,vNormal);",
"vec4 rndDepthRGB=texture2D(uSampler3,rndUv.xy);",
"float rndDepth=rndDepthRGB.r/3.+rndDepthRGB.g/3.+rndDepthRGB.b/3.;",
"if(rndDepthRGB.a == 0.0) rndDepth=1.;",
"float zd=(rndUv.z-rndDepth);",
"zd=max(min(zd-0.01,0.06-zd), 0.0);",
"ao += 1./(1.+100000.0*sqrt(zd));",
"}",
"ao=ao/13.0;",
"gl_FragColor=vec4(vec3(ao*ao)*col.rgb,1.);",
"} else {",
"gl_FragColor=vec4(vec3(1.),1.);",
"}",
"}"].join("\n");
var post_dof_vs=[sAttr,sUnif,sVary,sMain,sVert,"}"].join("\n");
var post_dof_fs=[sHead,sSamp,sUnif,sVary,sMain,
"vec2 ep=vec2(uv.s*uvScale.s, uv.t*uvScale.t);",
"vec4 zTex=texture2D(uSampler3, ep);",
"float ez=zTex.r/3.+zTex.g/3.+zTex.b/3.;",
"float aspect=1.;",
"float aperture=.008;",
"float maxblur=1.;",
"float vingenettingDarkening=0.2;",
"vec4 col=vec4(1.);",
"vec4 colOrig=texture2D( uSampler4, ep.xy );",
"vec3 rndUv=vec3(0.0);",
"vec2 aspectcorrect=vec2( 1.0, aspect );",
"float factor=ez - uFocus;",
"vec2 dofblur=vec2( clamp( factor * aperture, -maxblur, maxblur ) );",
"for( int i=1; i<13; i++ ){",
"rndUv.xy=ep + (dofblur*uSphere[i].xz*aspectcorrect);",
"vec4 rndDepthRGB=texture2D(uSampler3,rndUv.xy);",
"float rndDepth=rndDepthRGB.r/3.+rndDepthRGB.g/3.+rndDepthRGB.b/3.;",
"if(rndDepth > ez-0.05) col += texture2D( uSampler4, rndUv.xy );",
"else col += colOrig;",
"}",
"gl_FragColor=col/13.;",
"gl_FragColor=vec4( mix(gl_FragColor.rgb, -vec3( vingenettingDarkening ), vec3( dot( (uv.st - vec2(0.5)), (uv.st - vec2(0.5)) ))), 1.0 );",
"gl_FragColor=vec4(1.0) - (vec4(1.0) - gl_FragColor) * (vec4(1.0) - gl_FragColor);",
"}"].join("\n");
//MJS library 11,626 bytes // Copyright (c) 2010 Mozilla Corporation // Copyright (c) 2010 Vladimir Vukicevic
const MJS_DO_ASSERT=true;try{WebGLFloatArray;}catch(x){WebGLFloatArray=Float32Array;}const T=WebGLFloatArray;if(MJS_DO_ASSERT){function MathUtils_assert(cond,msg){if(!cond)throw "fail:"+msg;}} else {function MathUtils_assert(){}}var V3={};V3._t1=new T(3);V3._t2=new T(3);V3._t3=new T(3);if(T==Array){V3.x=[1,0,0];V3.y=[0,1,0];V3.z=[0,0,1];V3.$=function(x,y,z){return [x,y,z];};V3.clone=function(a){return [a[0],a[1],a[2]];};} else {V3.x=new T([1,0,0]);V3.y=new T([0,1,0]);V3.z=new T([0,0,1]);V3.$=function(x,y,z){return new T([x,y,z]);};V3.clone=function(a){return new T(a);};}V3.u=V3.x;V3.v=V3.y;V3.add=function(a,b,r){if(r==undefined)r=new T(3);r[0]=a[0]+b[0];r[1]=a[1]+b[1];r[2]=a[2]+b[2];return r;};V3.sub=function(a,b,r){if(r==undefined)r=new T(3);r[0]=a[0]-b[0];r[1]=a[1]-b[1];r[2]=a[2]-b[2];return r;};V3.neg=function(a,r){if(r==undefined)r=new T(3);r[0]=-a[0];r[1]=-a[1];r[2]=-a[2];return r;};V3.direction=function(a,b,r){if(r==undefined)r=new T(3);return V3.normalize(V3.sub(a,b,r),r);};V3.length=function(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);};V3.lengthSquared=function(a){return a[0]*a[0]+a[1]*a[1]+a[2]*a[2];};V3.normalize=function(a,r){if(r==undefined)r=new T(3);var im=1/V3.length(a);r[0]=a[0]*im;r[1]=a[1]*im;r[2]=a[2]*im;return r;};V3.scale=function(a,k,r){if(r==undefined)r=new T(3);r[0]=a[0]*k;r[1]=a[1]*k;r[2]=a[2]*k;return r;};V3.dot=function(a,b){return a[0]*b[0] +a[1]*b[1] +a[2]*b[2];};V3.cross=function(a,b,r){if(r==undefined)r=new T(3);r[0]=a[1]*b[2]-a[2]*b[1];r[1]=a[2]*b[0]-a[0]*b[2];r[2]=a[0]*b[1]-a[1]*b[0];return r;};V3.mul4x4=function(m,v,r){var w;var t=V3._t1;if(r==undefined)r=new T(3);t[0]=m[3];t[1]=m[7];t[2]=m[11];w=V3.dot(v,t)+m[15];t[0]=m[0];t[1]=m[4];t[2]=m[8];r[0]=(V3.dot(v,t)+m[12])/w;t[0]=m[1];t[1]=m[5];t[2]=m[9];r[1]=(V3.dot(v,t)+m[13])/w;t[0]=m[2];t[1]=m[6];t[2]=m[10];r[2]=(V3.dot(v,t)+m[14])/w;return r;};var M4x4={};M4x4._t1=new T(16);M4x4._t2=new T(16);if(T==Array){M4x4.I=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];M4x4.$=function(m00,m01,m02,m03,m04,m05,m06,m07,m08,m09,m10,m11,m12,m13,m14,m15){return [m00,m01,m02,m03,m04,m05,m06,m07,m08,m09,m10,m11,m12,m13,m14,m15];};M4x4.clone=function(m){return new [m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]];};}else{M4x4.I=new T([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);M4x4.$=function(m00,m01,m02,m03,m04,m05,m06,m07,m08,m09,m10,m11,m12,m13,m14,m15){return new T([m00,m01,m02,m03,m04,m05,m06,m07,m08,m09,m10,m11,m12,m13,m14,m15]);};M4x4.clone=function(m){return new T(m);};}M4x4.identity=M4x4.I;M4x4.topLeft3x3=function(m,r){if(r==undefined)r=new T(9);r[0]=m[0];r[1]=m[1];r[2]=m[2];r[3]=m[4];r[4]=m[5];r[5]=m[6];r[6]=m[8];r[7]=m[9];r[8]=m[10];return r;};M4x4.inverseOrthonormal=function(m,r){if(r==undefined)r=new T(16);M4x4.transpose(m,r);var t=[m[12],m[13],m[14]];r[3]=r[7]=r[11]=0;r[12]=-V3.dot([r[0],r[4],r[8]],t);r[13]=-V3.dot([r[1],r[5],r[9]],t);r[14]=-V3.dot([r[2],r[6],r[10]],t);return r;};M4x4.inverseTo3x3=function(m,r){if(r==undefined)r=new T(9);var a11=m[10]*m[5]-m[6]*m[9],a21=-m[10]*m[1]+m[2]*m[9],a31=m[6]*m[1]-m[2]*m[5],a12=-m[10]*m[4]+m[6]*m[8],a22=m[10]*m[0]-m[2]*m[8],a32=-m[6]*m[0]+m[2]*m[4],a13=m[9]*m[4]-m[5]*m[8],a23=-m[9]*m[0]+m[1]*m[8],a33=m[5]*m[0]-m[1]*m[4];var det=m[0]*(a11)+m[1]*(a12)+m[2]*(a13);if(det==0)throw "fail";var idet=1/det;r[0]=idet*a11;r[1]=idet*a21;r[2]=idet*a31;r[3]=idet*a12;r[4]=idet*a22;r[5]=idet*a32;r[6]=idet*a13;r[7]=idet*a23;r[8]=idet*a33;return r;};M4x4.makeFrustum=function(lft,rgt,btm,top,zn,zf,r){if(r==undefined)r=new T(16);r[0]=2*zn/(rgt-lft);r[1]=0;r[2]=0;r[3]=0;r[4]=0;r[5]=2*zn/(top-btm);r[6]=0;r[7]=0;r[8]=(rgt+lft)/(rgt-lft);r[9]=(top+btm)/(top-btm);r[10]=-(zf+zn)/(zf-zn);r[11]=-1;r[12]=0;r[13]=0;r[14]=-2*zf*zn/(zf-zn);r[15]=0;return r;};M4x4.makePerspective=function(fovy,asp,zn,zf,r){var ymax=zn*Math.tan(fovy*Math.PI/360);var ymin=-ymax;var xmin=ymin*asp;var xmax=ymax*asp;return M4x4.makeFrustum(xmin,xmax,ymin,ymax,zn,zf,r);};M4x4.makeOrtho=function(lft,rgt,btm,top,zn,zf,r){if(r==undefined)r=new T(16);r[0]=2/(rgt-lft);r[1]=0;r[2]=0;r[3]=0;r[4]=0;r[5]=2/(top-btm);r[6]=0;r[7]=0;r[8]=0;r[9]=0;r[10]=-2/(zf-zn);r[11]=0;r[12]=-(rgt+lft)/(rgt-lft);r[13]=-(top+btm)/(top-btm);r[14]=-(zf+zn)/(zf-zn);r[15]=1;return r;};M4x4.makeOrtho2D=function(lft,rgt,btm,top,r){return M4x4.makeOrtho(lft,rgt,btm,top,-1,1,r);};M4x4.mul=function M4x4_mul(a,b,r){if(r==undefined)r=new T(16);var a11=a[0],a21=a[1],a31=a[2],a41=a[3],a12=a[4],a22=a[5],a32=a[6],a42=a[7],a13=a[8],a23=a[9],a33=a[10],a43=a[11],a14=a[12],a24=a[13],a34=a[14],a44=a[15];var b11=b[0],b21=b[1],b31=b[2],b41=b[3],b12=b[4],b22=b[5],b32=b[6],b42=b[7],b13=b[8],b23=b[9],b33=b[10],b43=b[11],b14=b[12],b24=b[13],b34=b[14],b44=b[15];r[0]=a11*b11+a12*b21+a13*b31+a14*b41;r[1]=a21*b11+a22*b21+a23*b31+a24*b41;r[2]=a31*b11+a32*b21+a33*b31+a34*b41;r[3]=a41*b11+a42*b21+a43*b31+a44*b41;r[4]=a11*b12+a12*b22+a13*b32+a14*b42;r[5]=a21*b12+a22*b22+a23*b32+a24*b42;r[6]=a31*b12+a32*b22+a33*b32+a34*b42;r[7]=a41*b12+a42*b22+a43*b32+a44*b42;r[8]=a11*b13+a12*b23+a13*b33+a14*b43;r[9]=a21*b13+a22*b23+a23*b33+a24*b43;r[10]=a31*b13+a32*b23+a33*b33+a34*b43;r[11]=a41*b13+a42*b23+a43*b33+a44*b43;r[12]=a11*b14+a12*b24+a13*b34+a14*b44;r[13]=a21*b14+a22*b24+a23*b34+a24*b44;r[14]=a31*b14+a32*b24+a33*b34+a34*b44;r[15]=a41*b14+a42*b24+a43*b34+a44*b44;return r;};M4x4.makeRotate=function(angle,axis,r){if(r==undefined)r=new T(16);axis=V3.normalize(axis,V3._t1);var x=axis[0],y=axis[1],z=axis[2];var c=Math.cos(angle);var c1=1-c;var s=Math.sin(angle);r[0]=x*x*c1+c;r[1]=y*x*c1+z*s;r[2]=z*x*c1-y*s;r[3]=0;r[4]=x*y*c1-z*s;r[5]=y*y*c1+c;r[6]=y*z*c1+x*s;r[7]=0;r[8]=x*z*c1+y*s;r[9]=y*z*c1-x*s;r[10]=z*z*c1+c;r[11]=0;r[12]=0;r[13]=0;r[14]=0;r[15]=1;return r;};M4x4.rotate=function(angle,axis,m,r){if(r==undefined)r=new T(16);var a0=axis [0],a1=axis [1],a2=axis [2];var l=Math.sqrt(a0*a0+a1*a1+a2*a2);var x=a0,y=a1,z=a2;if(l!=1){var im=1/l;x*=im;y*=im;z*=im;}var c=Math.cos(angle);var c1=1-c;var s=Math.sin(angle);var xs=x*s;var ys=y*s;var zs=z*s;var xyc1=x*y*c1;var xzc1=x*z*c1;var yzc1=y*z*c1;var m11=m[0],m21=m[1],m31=m[2],m41=m[3],m12=m[4],m22=m[5],m32=m[6],m42=m[7],m13=m[8],m23=m[9],m33=m[10],m43=m[11];var t11=x*x*c1+c;var t21=xyc1+zs;var t31=xzc1-ys;var t12=xyc1-zs;var t22=y*y*c1+c;var t32=yzc1+xs;var t13=xzc1+ys;var t23=yzc1-xs;var t33=z*z*c1+c;r[0]=m11*t11+m12*t21+m13*t31;r[1]=m21*t11+m22*t21+m23*t31;r[2]=m31*t11+m32*t21+m33*t31;r[3]=m41*t11+m42*t21+m43*t31;r[4]=m11*t12+m12*t22+m13*t32;r[5]=m21*t12+m22*t22+m23*t32;r[6]=m31*t12+m32*t22+m33*t32;r[7]=m41*t12+m42*t22+m43*t32;r[8]=m11*t13+m12*t23+m13*t33;r[9]=m21*t13+m22*t23+m23*t33;r[10]=m31*t13+m32*t23+m33*t33;r[11]=m41*t13+m42*t23+m43*t33;if(r!=m){r[12]=m[12];r[13]=m[13];r[14]=m[14];r[15]=m[15];}return r;};M4x4.scale3=function(x,y,z,m,r){if(r==m){m[0]*=x;m[1]*=x;m[2]*=x;m[3]*=x;m[4]*=y;m[5]*=y;m[6]*=y;m[7]*=y;m[8]*=z;m[9]*=z;m[10]*=z;m[11]*=z;return m;}if(r==undefined)r=new T(16);r[0]=m[0]*x;r[1]=m[1]*x;r[2]=m[2]*x;r[3]=m[3]*x;r[4]=m[4]*y;r[5]=m[5]*y;r[6]=m[6]*y;r[7]=m[7]*y;r[8]=m[8]*z;r[9]=m[9]*z;r[10]=m[10]*z;r[11]=m[11]*z;r[12]=m[12];r[13]=m[13];r[14]=m[14];r[15]=m[15];return r;};M4x4.scale=function(v,m,r){var x=v[0],y=v[1],z=v[2];if(r==m){m[0]*=x;m[1]*=x;m[2]*=x;m[3]*=x;m[4]*=y;m[5]*=y;m[6]*=y;m[7]*=y;m[8]*=z;m[9]*=z;m[10]*=z;m[11]*=z;return m;}if(r==undefined)r=new T(16);r[0]=m[0]*x;r[1]=m[1]*x;r[2]=m[2]*x;r[3]=m[3]*x;r[4]=m[4]*y;r[5]=m[5]*y;r[6]=m[6]*y;r[7]=m[7]*y;r[8]=m[8]*z;r[9]=m[9]*z;r[10]=m[10]*z;r[11]=m[11]*z;r[12]=m[12];r[13]=m[13];r[14]=m[14];r[15]=m[15];return r;};M4x4.makeTranslate3=function(x,y,z,r){if(r==undefined)r=new T(16);r[0]=1;r[1]=0;r[2]=0;r[3]=0;r[4]=0;r[5]=1;r[6]=0;r[7]=0;r[8]=0;r[9]=0;r[10]=1;r[11]=0;r[12]=x;r[13]=y;r[14]=z;r[15]=1;return r;};M4x4.makeTranslate1=function(k,r){return M4x4.makeTranslate3(k,k,k,r);};M4x4.makeTranslate=function(v,r){return M4x4.makeTranslate3(v[0],v[1],v[2],r);};M4x4.translate3Self=function(x,y,z,m){m[12]+=m[0]*x+m[4]*y+m[8]*z;m[13]+=m[1]*x+m[5]*y+m[9]*z;m[14]+=m[2]*x+m[6]*y+m[10]*z;m[15]+=m[3]*x+m[7]*y+m[11]*z;return m;};M4x4.translate3=function(x,y,z,m,r){if(r==m){m[12]+=m[0]*x+m[4]*y+m[8]*z;m[13]+=m[1]*x+m[5]*y+m[9]*z;m[14]+=m[2]*x+m[6]*y+m[10]*z;m[15]+=m[3]*x+m[7]*y+m[11]*z;return m;}if(r==undefined)r=new T(16);var m11=m[0],m21=m[1],m31=m[2],m41=m[3],m12=m[4],m22=m[5],m32=m[6],m42=m[7],m13=m[8],m23=m[9],m33=m[10],m43=m[11];r[0]=m11;r[1]=m21;r[2]=m31;r[3]=m41;r[4]=m12;r[5]=m22;r[6]=m32;r[7]=m42;r[8]=m13;r[9]=m23;r[10]=m33;r[11]=m43;r[12]=m11*x+m12*y+m13*z+m[12];r[13]=m21*x+m22*y+m23*z+m[13];r[14]=m31*x+m32*y+m33*z+m[14];r[15]=m41*x+m42*y+m43*z+m[15];return r;};M4x4.translate1=function(k,m,r){return M4x4.translate3(k,k,k,m,r);};M4x4.translateSelf=function(v,m){var x=v[0],y=v[1],z=v[2];m[12]+=m[0]*x+m[4]*y+m[8]*z;m[13]+=m[1]*x+m[5]*y+m[9]*z;m[14]+=m[2]*x+m[6]*y+m[10]*z;m[15]+=m[3]*x+m[7]*y+m[11]*z;return m;};M4x4.translate=function(v,m,r){var x=v[0],y=v[1],z=v[2];if(r==m){m[12]+=m[0]*x+m[4]*y+m[8]*z;m[13]+=m[1]*x+m[5]*y+m[9]*z;m[14]+=m[2]*x+m[6]*y+m[10]*z;m[15]+=m[3]*x+m[7]*y+m[11]*z;return m;}if(r==undefined)r=new T(16);var m11=m[0],m21=m[1],m31=m[2],m41=m[3],m12=m[4],m22=m[5],m32=m[6],m42=m[7],m13=m[8],m23=m[9],m33=m[10],m43=m[11];r[0]=m11;r[1]=m21;r[2]=m31;r[3]=m41;r[4]=m12;r[5]=m22;r[6]=m32;r[7]=m42;r[8]=m13;r[9]=m23;r[10]=m33;r[11]=m43;r[12]=m11*x+m12*y+m13*z+m[12];r[13]=m21*x+m22*y+m23*z+m[13];r[14]=m31*x+m32*y+m33*z+m[14];r[15]=m41*x+m42*y+m43*z+m[15];return r;};M4x4.makeLookAt=function(eye,center,up,r){var y=V3.normalize(V3.direction(eye,center,V3._t1),V3._t1);var x=V3.normalize(V3.cross(up,y,V3._t2),V3._t2);var z=V3.normalize(V3.cross(y,x,V3._t3),V3._t3);var t1=M4x4._t1;var t2=M4x4._t2;t1[0]=-x[0];t1[1]=-x[1];t1[2]=-x[2];t1[3]=0;t1[4]=-y[0];t1[5]=-y[1];t1[6]=-y[2];t1[7]=0;t1[8]=-z[0];t1[9]=-z[1];t1[10]=-z[2];t1[11]=0;t1[12]=0;t1[13]=0;t1[14]=0;t1[15]=1;t2[0]=1;t2[1]=0;t2[2]=0;t2[3]=0;t2[4]=0;t2[5]=1;t2[6]=0;t2[7]=0;t2[8]=0;t2[9]=0;t2[10]=1;t2[11]=0;t2[12]=0;t2[13]=0;t2[14]=0;t2[15]=1;if(r==undefined)r=new T(16);return M4x4.mul(t1,t2,r);};M4x4.transposeSelf=function(m){var t=m[1];m[1]=m[4];m[4]=t;t=m[2];m[2]=m[8];m[8]=t;t=m[3];m[3]=m[12];m[12]=t;t=m[6];m[6]=m[9];m[9]=t;t=m[7];m[7]=m[13];m[13]=t;t=m[11];m[11]=m[14];m[14]=t;return m;};M4x4.transpose=function(m,r){if(m==r){var t=0;t=m[1];m[1]=m[4];m[4]=t;t=m[2];m[2]=m[8];m[8]=t;t=m[3];m[3]=m[12];m[12]=t;t=m[6];m[6]=m[9];m[9]=t;t=m[7];m[7]=m[13];m[13]=t;t=m[11];m[11]=m[14];m[14]=t;return m;}if(r==undefined)r=new T(16);r[0]=m[0];r[1]=m[4];r[2]=m[8];r[3]=m[12];r[4]=m[1];r[5]=m[5];r[6]=m[9];r[7]=m[13];r[8]=m[2];r[9]=m[6];r[10]=m[10];r[11]=m[14];r[12]=m[3];r[13]=m[7];r[14]=m[11];r[15]=m[15];return r;};M4x4.transformPoint=function(m,v,r){if(r==undefined)r=new T(3);var v0=v[0],v1=v[1],v2=v[2];r[0]=m[0]*v0+m[4]*v1+m[8]*v2+m[12];r[1]=m[1]*v0+m[5]*v1+m[9]*v2+m[13];r[2]=m[2]*v0+m[6]*v1+m[10]*v2+m[14];var w=m[3]*v0+m[7]*v1+m[11]*v2+m[15];if(w!=1){r[0]/=w;r[1]/=w;r[2]/=w;}return r;};M4x4.transformLine=function (m,v,r){if(r==undefined)r=new T(3);var v0=v[0],v1=v[1],v2=v[2];r[0]=m[0]*v0+m[4]*v1+m[8]*v2;r[1]=m[1]*v0+m[5]*v1+m[9]*v2;r[2]=m[2]*v0+m[6]*v1+m[10]*v2;var w=m[3]*v0+m[7]*v1+m[11]*v2;if(w!=1){r[0]/=w;r[1]/=w;r[2]/=w;}return r;};M4x4.transformPointAffine=function(m,v,r){if(r==undefined)r=new T(3);var v0=v[0],v1=v[1],v2=v[2];r[0]=m[0]*v0+m[4]*v1+m[8]*v2+m[12];r[1]=m[1]*v0+m[5]*v1+m[9]*v2+m[13];r[2]=m[2]*v0+m[6]*v1+m[10]*v2+m[14];return r;};M4x4.transformLineAffine=function(m,v,r){if(r==undefined)r=new T(3);var v0=v[0],v1=v[1],v2=v[2];r[0]=m[0]*v0+m[4]*v1+m[8]*v2;r[1]=m[1]*v0+m[5]*v1+m[9]*v2;r[2]=m[2]*v0+m[6]*v1+m[10]*v2;return r;};