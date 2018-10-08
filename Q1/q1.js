
class Products{
    constructor(){
        this.fullName = String;
    }

    showProductList(){
        let products = [
            {
              "name": "iPhone 7",
              "brand": "Apple",
              "slug": "iphone-7",
              "availability": "IN_STOCK",
              "colors": [ "Silver", "Space Gray", "Rose Gold" ]
            },
            {
              "name": "iPhone 7 Plus",
              "brand": "Apple",
              "slug": "iphone-7",
              "availability": "IN_STOCK",
              "colors": [ "Jet Black", "Space Gray", "Rose Gold", "Gold" ]
            },
            {
              "name": "iPhone X",
              "brand": "Apple",
              "slug": "iphone-x",
              "availability": "BACKORDER",
              "colors": [ "Space Gray", "Silver" ]
            },
            {
              "name": "Galaxy S8",
              "brand": "Samsung",
              "slug": "galaxy-s8",
              "availability": "OUT_OF_STOCK",
              "colors": [ "Artic Silver", "Midnight Black", "Orchid Gray" ]
            },
            {
              "name": "Galaxy Note8",
              "brand": "Samsung",
              "slug": "galaxy-note8",
              "availability": "IN_STOCK",
              "colors": [ "Midnight Black", "Orchid Gray" ]
            }
          ] 
        return products;
    }

    get getFullName(){
            return this.nameAndBrand();
    }

    inStock(product){
        if(product.availability == "IN_STOCK"){
            return true;
        }
    }

    nameAndBrand(){
        this.showProductList().forEach(product => {
            if(this.inStock(product)){
                this.fullName += product.brand +" "+ product.name;
            }
        });
        return this.fullName;
    }
    
    productsInStock(){
        const productInStock =  this.showProductList().filter( productInStock => {
            return productInStock.availability === "IN_STOCK";
        }) 
        return productInStock;
    }

    productsMadeByApple(){
        const productMadeByApple =  this.showProductList().filter( productMadeByApple => {
            return productMadeByApple.brand === "Apple";
        }) 
        return productMadeByApple;
    }

}

const product = new Products()

console.log(product.getFullName);
console.log(product.productsInStock());
console.log(product.productsMadeByApple());