function getLocation(){
    if (navigator.geolocation){
        GravaArquivo("Meu teste");
    }
}

function GravaArquivo(texto){
    var dados = new ActiveXObject("Scripting.FileSystemObject");


    var esc = dados.CreateTextFile("arq.txt", false);
    
    esc.WriteLine(texto);
    
    esc.Close();
}
