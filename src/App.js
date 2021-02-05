import React from 'react';
import Cart  from './Cart';
import Navbar  from './Navbar';




class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [
            {
                price:999,
                title:'Lap',
                qty: 4,
                img:'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
                id:1
          },
          {
                price:99,
                title:'Watch',
                qty: 1,
                img:'https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=948&q=80',
                id:2,
     },
     {
                price:999,
                title:'Mobile Phone',
                qty: 10,
                img:'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80',
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
handleDeleteProduct = (id) => {
 const {products} = this.state;
 const items = products.filter((item) => item.id != id);
 this.setState({
     products: items
 })
}

getCartCount = () => {
  const {products} = this.state;

  let count = 0;
   
  products.forEach((product) =>{
    count += product.qty;
  })

  return count;
}

getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) => {
    if(product.qty>0){
      cartTotal = cartTotal + product.qty * product.price;
    }
     
    return '';
        
  })
   
   return cartTotal;
}

  render(){
            
            const {products} = this.state;
           return (
                  <div className="App">
                  <Navbar count = {this.getCartCount()} />
                  <Cart 
                        products = {products}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                  />
                  <div style={{fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
                  </div>
                  );
          }
    }


export default App;
