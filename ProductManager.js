class ProductManager {
    #id =0;
    
    constructor(){          //funcion constructora donde se almacenaran los productos
        this.products = [];
    }

    
    getProducts() {                //funcion para mostrar array de productos
        return this.products;
    }
    
    addProduct(title, description, price, thumbnail, code, stock) {  //funcion para agregar productos al array con parametros
        
        if (!title || !description || !price || !thumbnail || !code || !stock){     //condicion para parametros obligatorios
            console.log("Todos los campos son obligatorios");
            return;
        }

        for (let i = 0 ; i < this.products.length; i++){        //condicion para que el parametro code no se repita
            if(this.products[i].code === code){
                console.log("el codigo ya existe, porfavor ingrese otro");
                return;
            }
        }
    
        const product = {                      //creacion del producto mediante parametros
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock
        }       
        product.id = this.#getID();    //se agrega el id como variable de cada producto


        this.products.push(product);
     
    }

    #getID(){ 
                            //creacion de ID autoincremental
        this.#id ++;
        return this.#id;
    }

    getProductById(id){                 //funcion para obtener el producto mediante el id por parametro
        for (let i = 0 ; i < this.products.length; i++){
            if (this.products[i].id === id){
                return this.products[i]
            } else {
                console.log("No tenemos productos con ese id");
                return;
            }
        }
    }
    

}



//PRUEBAS
const pm = new ProductManager();
pm.addProduct("asd", "qwerty", 100, "qwedsfg", 123, 10)
pm.addProduct("asdasd", "asdasdqwerty", 100, "qwedsfg", 321, 10)
//console.log(pm.getProducts())
console.log(pm.getProductById(3))


