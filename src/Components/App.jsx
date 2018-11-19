import React from 'react';
import {Timer} from './Timer';

/**
 * Компонент-приложение (реализован через компонент-класс).
 */
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startNumber: 1000
        }

        setInterval(
            () => {
                this.setState({
                    startNumber: ++this.state.startNumber
                })
            },
            1000
        );
    }

    render () {
        return (
            <Timer counter={this.state.startNumber} />
        )
    }
}

export {App};