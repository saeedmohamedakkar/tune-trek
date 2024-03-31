if (navigator.serviceWorker) {

    navigator.serviceWorker.register("../sw.js")
    .then((reg)=>{
    console.log("file rg",reg);
    })
.catch((err)=>{console.log("error",err);
})

}
 