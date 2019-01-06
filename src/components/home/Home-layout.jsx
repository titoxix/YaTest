import React from 'react';

const HomeLayout = (props) => {
    return (
        <div id='layout'>
            <div id='layout-header' style={{ display: !props.login ? 'none' : 'block' }}>
                <h3 className='userName'>Usuario: {props.userName !== '' ? props.userName : sessionStorage.getItem('userName')}</h3>
                <a className='logout' onClick={() => { props.logout() }}>Salir</a>
            </div>
            {props.children}
        </div>
    )
}
export default HomeLayout;

