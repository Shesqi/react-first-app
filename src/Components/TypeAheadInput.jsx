import React from 'react';

export class TypeAheadInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        };
    }

    handlerOnChangeInput = (event) => {
        this.setState({
            inputText: event.target.value
        });

        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <input
                type='text'
                className='typeahead-input'
                value={this.state.inputText}
                onChange={this.handlerOnChangeInput}
            />
        )
    }
}
