import React from 'react';
import Cart  from './Cart';
import Navbar  from './Navbar';
import firebase from 'firebase';




class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [],
        loading:true
    }
    //this.increaseQuantity = this.increaseQuantity.bind(this);
   // this.testing();
}

 componentDidMount(){
  //  firebase
  //    .firestore()
  //    .collection('products')
  //    .get()
  //    .then((snapshot) =>{
  //      console.log(snapshot);

  //      snapshot.docs.map((doc) =>{
  //        console.log(doc.data())
  //      });

  //      const products = snapshot.docs.map((doc) =>{
  //        const data = doc.data();
  //        data['id'] = doc.id;
  //        return data;
  //      })
  //      this.setState({
  //        products,
  //        loading:false
  //      })
  //    })
      firebase
       .firestore()
       .collection('products')
       .onSnapshot(((snapshot) =>{
        console.log(snapshot);

        snapshot.docs.map((doc) =>{
        console.log(doc.data())
      });

       const products = snapshot.docs.map((doc) =>{
       const data = doc.data();
       data['id'] = doc.id;
       return data;
     })
       this.setState({
       products,
       loading:false
   })
 }))
       

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
            
            const {products,loading} = this.state;
           return (
                  <div className="App">
                  <Navbar count = {this.getCartCount()} />
                  <Cart 
                        products = {products}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                  />
                  {loading && <h1>Loading Products...</h1>}
                  <div style={{fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
                  </div>
                  );
          }
    }


export default App;
