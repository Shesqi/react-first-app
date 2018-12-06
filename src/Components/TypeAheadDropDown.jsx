import React from 'react';

export class TypeAheadDropDown extends React.PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            isVisible: this.props.isVisible,
            text: this.props.text
        }
    }

    checkPropsItems () {
        return typeof(this.props.items)
    }

    render () {
        return (
            <div className="dropdown-container">
                {
                    this.props.items.map((item) => {
                        return (
                        <div className="dropdown-item" key={item.name}>
                        <img src={item.flag} alt="" className="dropdown-flag"/>
                            <a href="">{item.nativeName}</a> [{item.capital}]
                        </div>
                        )
                    })
                }

                {this.state.isVisible ? <span>{this.state.text}</span> : ""}
            </div>
        )
    }
}