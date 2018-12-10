import React from 'react';

export class TypeAheadDropDown extends React.PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            text: this.props.text,
            listView: this.props.listView
        }
    }

    render () {
        return (
            <div className="dropdown-container">
            {
                this.props.items.map (item => {
                    return (
                        React.createElement(this.props.listView, {item, key: item.name}) // {item: item}
                    )
                })
            }
            </div>
        )
    }
}
