const CACHE="rc72-v3";
const CORE=["./","./index.html","./manifest.webmanifest"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
 const u=new URL(e.request.url);
 if(u.origin===location.origin){
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{
   const copy=r.clone(); caches.open(CACHE).then(x=>x.put(e.request,copy)); return r;
  })));
 }
});
