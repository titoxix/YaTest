import React from 'react';

const Form = (props) => {
    return (
        <div id='form-login'>
            <form className="ui form error">
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Tú email"
                        onChange={(event) => {
                            props.handlerChanges({ att: 'userName', value: event.target.value });
                        }} />
                </div>
                <div className="field">
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder="Tú contraseña"
                        onChange={(event) => {
                            props.handlerChanges({ att: 'password', value: event.target.value });
                        }} />
                </div>
                <button
                    className={!props.searching ? "ui button" : "ui loading button"}
                    type="button"
                    onClick={() => { props.goIn() }}>Entrar</button>
                <div style={{ display: props.invalidCredentials ? 'block' : 'none' }}>
                    <h5>Emial o contraseña incorrectas</h5>
                </div>
            </form>
        </div>
    )
}
export default Form;