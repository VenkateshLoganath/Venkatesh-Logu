const circle = ()=>{
    const inputId = document.getElementById("input-section").value.toUpperCase();
    const storeItems = document.querySelector(".product-list");
    const products = document.querySelectorAll(".product");
    const pName = storeItems.getElementsByTagName("h5");

 
    for(var i=0; i < pName.length ; i++ ){

        let match = products[i].getElementsByTagName('h5')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML ; 

            if(textvalue.toUpperCase().indexOf(inputId) > -1){
                products[i].style.display = ""
            }else{
                products[i].style.display = "none";
            }
        }

    }
}