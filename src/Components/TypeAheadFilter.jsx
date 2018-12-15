import React from 'react';

export class TypeAheadFilter extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false
        };
    }

    handlerOnChangeCheckbox = () => {
        this.props.onChange('filter');

        console.log('checkbox triggered in filter');
    };

    render () {
        return (
            <div>
                <span>Native name:</span>
                <input
                    type="checkbox"
                    onChange={this.handlerOnChangeCheckbox}
                />
            </div>
        )
    }
}
