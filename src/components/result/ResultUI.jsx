import React from 'react';

const ResultUI = (props) => {
    return (
        <div id='results-container'>
            {props.searchInformation.length === 0
                ? <div className='result-empty'><h3>No hay resultados</h3></div>
                : props.searchInformation.map(item => {
                    return <div className="ui card">
                        <div className="image">
                            <img src={item.logo} />
                        </div>
                        <div className="content">
                            <a className="header">{item.name}</a>
                            <div className="description">
                                <p><strong>Categorías Principales:</strong>{item.topCategories}</p>
                                <p><strong>Rating:</strong> {item.rating}</p>
                                <p><strong>Tiempo de entrega:</strong> {item.deliveryTimeMaxMinutes}</p>
                                <a href={item.link}><strong>Link PedidosYa</strong></a>
                            </div>
                        </div>
                    </div>
                })}
        </div>
    )
}
export default ResultUI