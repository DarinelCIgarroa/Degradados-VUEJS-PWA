if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").
    then((reg) => console.log("Registrro exitoso", reg)).
    catch((error) => console.error(error))
}