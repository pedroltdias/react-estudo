import React from "react";

class Botao extends React.Component {
    render() {
        const color = 'white';
        return(
            <button style={
                {
                    backgroundColor: 'blue',
                    /* color: color */
                    color
                }
            }>
                Botão
            </button>
        );
    }
}

export default Botao;