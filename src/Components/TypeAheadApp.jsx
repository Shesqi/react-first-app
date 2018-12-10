import React from 'react';
import { TypeAheadInput } from './TypeaheadInput';
import { TypeAheadDropDown } from './TypeAheadDropDown';
// import { TypeAheadFilter } from "./TypeAheadFilter";

export class TypeAheadApp extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            items: [],
            isDropDownVisible: false,
            requestSuccess: false,
            isChecked: false,
            currentLayout: this.listViewMap
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.inputText !== this.state.inputText) {

            this.sendAjax(this.state.inputText);
            this.setState ({isDropDownVisible: this.state.inputText !== '' && this.state.requestSuccess})
        }
    }

    handlerOnChangeInput = (inputText) => {
        if (inputText !== null) {
            this.setState({ inputText });
        }
    };

    handlerOnChangeCheckbox = (event) => {
        this.setState({
            isChecked: true
        })
    };

    showAjaxResponse = (response) => {
        if (this.state.inputText !== null && this.state.inputText !== '') {
            this.setState ({
                items: response
            })
        }
    };

    sendAjax (inputText) {
        const request = new XMLHttpRequest(),
              url = this.props.url + inputText + this.props.urlModificator;

        request.open("GET", url, true);
        request.responseType = "json";
        request.onload = () => {
            debugger
            const requestSuccess = request.response !== null && request.status !== 404;
            this.setState ({ requestSuccess })
        };


        // const arr = [
        //     {
        //         name:'s',
        //         age:25,
        //         sex:'male'
        //     }
        // ]

        // const newArr = arr.map( ({name, age}) => `${age}-${name}`)
        

        request.send();
    };

    render () {
        return (
            <div className="app-container">
                <h1>TYPEAHEAD</h1>
                {/* <TypeAheadFilter onChange={this.handlerOnChangeCheckbox} /> */}
                <TypeAheadInput onChange={this.handlerOnChangeInput}/>

                {this.state.requestSuccess ?
                    <TypeAheadDropDown
                        items={this.state.items}
                        listView={this.props.listView}
                    /> : ''}
            </div>
        )
    }
}
