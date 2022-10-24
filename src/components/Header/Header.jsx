import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();
    let name = '';
    let display = '';
    if(user){
        name = 'Hello, ' + user?.username ;
        display = 'display:block';
    } else {
        name = ''
        display = 'display:none';
    }

    return (
        <div className={'header'}>
            <Button onClick={onClose} style={{display}}>Закрыть</Button>
            <span className={'username'}>
                {name}
            </span>
        </div>
    );
};

export default Header;
