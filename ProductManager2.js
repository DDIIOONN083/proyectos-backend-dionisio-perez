/**
 * @Author: Your name
 * @Date:   2023-11-19 00:15:22
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-20 17:25:25
 */


class ProductManager{
    constructor( ){
       
        this.products = []// este gestiona los productos 
    this.ultimoId = 0;
    }
    
    addProduct(title, description, price, thumbnail, code, stock){
      //VALIDACIÓN  
        if  (!title || !description  || !price || !thumbnail || !code || !stock ){
console.log ("faltan editar algunos datos");
return // todos tieenen un valor

        }else if (this.products.find( product => product.code === code )) {
            console.log ("codigo existente");
            return          
        } 

         //ID
        this.ultimoId++;
        let product = {

            title, description, price, thumbnail, code, stock, 
            id: this.ultimoId
        }    
        
        //Agrego el producto   
this.products.push(product)  
        }

// metodo getproduct ..este contendra un bucle que recorra el array] ver funcion anonima y flecha
getProducts() {
    return this.products
}


getProductById(id)  {//recibe y compara
     
const producto= this.products.find (product => product.id === id)
if (producto === undefined){
    console.log(" no se encuentra el producto con ese id ")
return//cotra la  ejecucion
 } else {// en caso de encontrarlo
    return producto
 }
}
}   

const pm = new ProductManager()// el parentesis llama al constructor del objeto
// con las props y metodos
pm.addProduct("el oso", "primer producto", 200, "sin imagen", "abc123", 1234)
pm.addProduct("el oso", "primer producto", 200, "sin imagen", "abc124", 1234)
console.log(pm.getProducts())// llamo a la lista de productos

