import React from 'react';

class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            price:999,
            title:'Phone',
            qty: 1,
            image:''
        }
    }
    render(){
         const {price,title,qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                   <img style= {styles.image} />
                </div>
                <div className="right-block">
                    <div style= {{fontSize: 25}}>{title}</div>
                    <div style= {{color:'#777'}}>Rs{price}</div>
                    <div style= {{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons */}
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1611682203~hmac=8399dfe6ee0e828c23986f8fc94e7a02" />
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1611682074~hmac=3eb792825c073df32acdf865fff7a58b" />
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/3096/3096687.svg?token=exp=1611682282~hmac=2349e11776496e73dc7594202e946db1" />
                    </div>
                </div>

            </div>
        );
    }
}


const styles = {
    image:{
            height:110,
            width:110,
            borderRadius:4,
            background:'#ccc'
    }
  }



export default CartItem;