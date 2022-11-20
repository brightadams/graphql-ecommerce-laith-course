
exports.Category = {
    products: ({id:categoryId}, {filter}, {db})=>{
        console.log(parent);
        const categoryProducts = db.products.filter(product=> product.categoryId === categoryId );
        let filteredCategoryProducts = categoryProducts;
        if(filter){
            if(filter.onSale){
                filteredCategoryProducts = filteredCategoryProducts.filter(product => product.onSale)
            }
        }
        return filteredCategoryProducts
    }
}