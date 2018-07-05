(function(){
    var arrayImg = ["https://picsum.photos/2000/800", 
                    " http://caviar.com/wp-content/themes/caviar/assets/img/2000x800.png", 
                    "https://d36gup878rp7dc.cloudfront.net/media2/images/crop_2000_800/headers-large/for-header-2-2000-x-800.jpg",
                    "https://d36gup878rp7dc.cloudfront.net/media2/images/crop_2000_800/headers-large/for-header-6791-2000-x-800.jpg",
                    "https://d36gup878rp7dc.cloudfront.net/media2/images/crop_2000_800/headers-large/rdy-5644-2000-x-800.jpg",
                    "https://d36gup878rp7dc.cloudfront.net/media2/images/crop_2000_800/headers-large/header4.jpg"];
    var increment = 0;
    var btnSig  = document.getElementById("sig");
    var btnAnt = document.getElementById("ant");
    var tagImg = document.querySelector("img");
    btnSig.addEventListener("click", function(){        
        let cadena = nextItem();
        tagImg.setAttribute("src", cadena);
    });
    btnAnt.addEventListener("click", function() {
        let cadena = prevItem();
        tagImg.setAttribute("src", cadena);
    });

    function nextItem() {
        increment = increment + 1; // incremento variable
        increment = increment % arrayImg.length; // si el numero restante es mayor al tamaño del array se inicializa en cero
        return arrayImg[increment]; // devuelve la posicion actual
    }
    function prevItem() {
        if (increment === 0) { // increment igual a 0
            increment = arrayImg.length; // es igual al tamaño del arreglo
        }
        increment = increment - 1; // se resta 1
        return arrayImg[increment]; // devuelve la posicion actual
    }
})();