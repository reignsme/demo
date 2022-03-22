self.addEventListener("install",e=>{
     e.waitUntil(
       caches.open("static").then(cache=>{
           return cache.addAll(["./","./css/style.css","./images/64.png","./images/512.png"]);
       })
     )
})

self.addEventListener("fetch",e=>{
    e.respondWidth(
      caches.match(e.request).then(response=>{
          return response || fetch(e.request);
      })
    )
})