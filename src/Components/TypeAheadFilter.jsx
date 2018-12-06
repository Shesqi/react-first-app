import React from 'react';

export class TypeAheadFilter extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            //
        };
    }

    render () {
        return (
            <div>
                <span>Filter: </span>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
        )
    }
}