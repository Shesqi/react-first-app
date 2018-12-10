import React from 'react';
import { DebounceInput } from 'react-debounce-input';

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

    render () {
        return (
            <DebounceInput
                className='typeahead-input'
                minLength={1}
                debounceTimeout={500}
                onChange={this.handlerOnChangeInput}
            />
        )
    }
}
