import React from 'react';
import { TypeAheadInput } from './TypeaheadInput';
import { TypeAheadDropDown } from './TypeAheadDropDown';
import { TypeAheadFilter } from "./TypeAheadFilter";

export class TypeAheadApp extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            items: [],
            isDropDownVisible: false,
            requestSuccess: false,
            isChecked: false,
            currentLayout: this.listViewMap
        };
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            let context = this, args = arguments;
            let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.inputText !== this.state.inputText) {
            // setTimeout(() => {
            //     this.sendAjax(this.state.inputText);
            //   }, 600);

            const myDebounce = this.debounce(function () {
                this.sendAjax(this.state.inputText);
            }, 900);

            this.setState ({
                isDropDownVisible: this.state.inputText !== '' && this.state.requestSuccess ? true : false
            })
        }
    }

    handlerOnChangeInput = (value) => {
        if (value !== null) {
            this.setState({
                inputText: value
            });
        }
    }

    handlerOnChangeCheckbox = (event) => {
        this.setState({
            isChecked: true
        })

        console.log('checkbox triggered in app' + event);
    }

    showAjaxResponse = (response) => {
        if (this.state.inputText !== null && this.state.inputText !== '') {
            this.setState ({
                items: response
            })
        }
    }

    sendAjax (inputText) {
        const request = new XMLHttpRequest(),
              url = this.props.url + inputText + this.props.urlModificator;

        request.open("GET", url, true);
        request.responseType = "json";

        request.onload = () => {
            if (request.response !== null && request.status !== 404) {
                this.showAjaxResponse(request.response)

                this.setState ({
                    isDropDownVisible: true,
                    requestSuccess: true
                })
            } else {
                this.setState ({
                    isDropDownVisible: false,
                    requestSuccess: false
                })
            }
        };

        request.send();
    };

    render () {
        return (
            <div className="app-container">
                <h1>TYPEAHEAD</h1>
                <TypeAheadFilter onChange={this.handlerOnChangeCheckbox} />
                <TypeAheadInput onChange={this.handlerOnChangeInput}/>

                {this.state.isDropDownVisible && this.state.requestSuccess ? 
                    <TypeAheadDropDown 
                        items={this.state.items} 
                        listView={this.props.listView} 
                    /> : ''}
            </div>
        )
    }
}
