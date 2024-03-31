
const cachName = "Tune Trek "

const assets = ["/"]

self.addEventListener("install", (installEvent) => {

    installEvent.waitUntil(
        caches.open(cachName).then((cash) => {

            cash.addAll(assets).then().catch()


        }).catch((err) => { })
    )




})



self.addEventListener("activate", (activateEvent) => {



    activateEvent.waitUntil(

        caches.keys().then((keys) => {


            return Promise.all(keys.filter((key) => key != cachName).map((key) => caches.delete(key)))





        })

    )


})



self.addEventListener("fetch", (fetchEvent) => {

    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {

            return res || fetch(fetchEvent.request).then((res) => {

                return caches.open(cachName).then((cashe) => { 
                    
                    
                    cashe.put(fetchEvent.request, res.clone()) 
                
                    return res
                
                })

                    

            })
        })
    )

})