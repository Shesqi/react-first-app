import React from 'react';
import {DebounceInput} from 'react-debounce-input';

export class TypeAheadInput extends React.PureComponent {

    handlerOnChangeInput = (event) => {
        this.props.onChange(event.target.value);
    };

    render() {
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
