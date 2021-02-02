import React from 'react';
import CartItem  from './CartItem';

class Cart extends React.Component{
    constructor () {
        super();
        this.state = {
            products: [
                {
                    price:999,
                    title:'Lap',
                    qty: 4,
                    image:'',
                    id:1
              },
              {
                    price:99,
                    title:'Watch',
                    qty: 1,
                    image:'',
                    id:2,
         },
         {
                    price:999,
                    title:'Phone',
                    qty: 10,
                    image:'',
                    id:3
          }
            ]
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
       // this.testing();
    }
    handleIncreaseQuantity = (product) => {
           console.log('hey inc the qty of',product);
           const {products} = this.state;
           const index = products.indexOf(product);
           products[index].qty += 1;
           this.setState({
               products
           })
    }
    handleDecreaseQuantity = (product) => {
        console.log('hey dec the qty of',product);
        const {products} = this.state;
        const index = products.indexOf(product);

        if (products[index].qty === 0) {
            return;
          }

        products[index].qty -= 1;
        
        this.setState({
        
            products
        })
 }
   render(){
       const {products} = this.state;
       return(
            <div className="cart">
               {products.map((product) =>{
                  return(  
                  <CartItem 
                       product={product} 
                       key={product.id} 
                       onIncreaseQuantity = {this.handleIncreaseQuantity}
                       onDecreaseQuantity = {this.handleDecreaseQuantity}
                 />
                  )
                  })}
               
            </div>
       )
   }
}



export default Cart;