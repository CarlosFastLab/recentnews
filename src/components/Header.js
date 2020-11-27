import React from 'react';
import logo from '../assets/logo@2x.png';
import './styles/HeaderButtons.css';


export default function Header({ handleFilter }) {

    return (
        <header className="nav">
            <img className="nav__img" src={logo} alt="logo" />
            <div className="nav__buttons">
                <button className="nav__button" value='0' onClick={handleFilter}>SPORTS</button>
                <button className="nav__button" value='1' onClick={handleFilter}>POLITICS</button>
                <button className="nav__button" value='2' onClick={handleFilter}>BUSINESS</button>
                <button className="nav__button" value='3' onClick={handleFilter}>TECHNOLOGY</button>
                <button className="nav__button" value='4' onClick={handleFilter}>REGIONAL</button>
                <button className="nav__login-button">LOGIN</button>
            </div>
        </header>
    );
}