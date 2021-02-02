import React from 'react';

const Navbar = (props) => {

    
        
        return(
            <div style = {styles.nav}>
               <div style = {styles.cartIconContainer}>
                   <img style = {styles.cartIcon} alt="cart-icon" src="https://www.flaticon.com/svg/vstatic/svg/711/711192.svg?token=exp=1612243664~hmac=f6628f51b7af45e83620dd027e8d15db" />
                   <span style = {styles.cartCount}>3</span>
               </div>

            </div>
        );
    }



const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  



export default Navbar;