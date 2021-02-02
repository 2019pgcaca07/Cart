import React from 'react';

class CartItem extends React.Component{

    render(){
        console.log('this.props',this.props);
         const {price,title,qty} = this.props.product;
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
                        <img 
                           alt="increase" 
                           className="action-icons" 
                           src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1612236925~hmac=f67a9c5c89d78ebee0f1c70678694661" 
                           onClick = {() => this.props.onIncreaseQuantity(this.props.product)}
                           />
                           
                        <img 
                           alt="decrease" 
                           className="action-icons" 
                           src="https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1612234043~hmac=853d429d55feb836e5967e5ac16df779" 
                           onClick = {() => this.props.onDecreaseQuantity(this.props.product)}
                           />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/1345/1345874.svg?token=exp=1612234103~hmac=18a29584690e8fbfb47139fae77847c3" />
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