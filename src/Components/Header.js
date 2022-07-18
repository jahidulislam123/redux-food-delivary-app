import React from 'react';
import {} from '@mui/material'
import { SearchRounded, ShoppingCartRounded } from '@mui/icons-material';

const Header = () => {
    return (
        <div>
            <img src="" alt="" />
            <div className="inputBox">
                <SearchRounded className='searchIcon'></SearchRounded>
                <input type="text" name="" id="" placeholder='Search'/>
            </div>
            <div className='shoppingCart'>
                <ShoppingCartRounded className='cart'></ShoppingCartRounded>
                <div className="cart_content">
                    <p>2</p>
                </div>
            </div>
        </div>
    );
};

export default Header;