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
            requestSuccess: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.inputText !== this.state.inputText) {
            setTimeout(() => {
                this.sendAjax(this.state.inputText);
              }, 600);

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
    };

    showAjaxResponse = (response) => {
        if (this.state.inputText !== null && this.state.inputText !== '') {
            this.setState ({
                items: response
            })
        }
    }

    sendAjax (inputText) {
        const request = new XMLHttpRequest(),
              url = "https://restcountries.eu/rest/v2/name/" + inputText + "?fullText=false";

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
                <TypeAheadFilter />
                <TypeAheadInput onChange={this.handlerOnChangeInput}/>
                {this.state.isDropDownVisible && this.state.requestSuccess ? <TypeAheadDropDown items={this.state.items} text=""/> : ''}
            </div>
        )
    }
}