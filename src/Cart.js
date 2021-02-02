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
   render(){
       const {products} = this.state;
       return(
            <div className="cart">
               {products.map((product) =>{
                  return  <CartItem product={product} key={product.id} />
               })}
               
            </div>
       )
   }
}



export default Cart;