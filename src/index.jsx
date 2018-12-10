import React from "react";
import ReactDOM from "react-dom";
import { TypeAheadApp } from './Components/TypeAheadApp';

import "./styles";
import "./typeahead.less";

class LaunchApp extends React.Component {
    render () {
        return(
            <TypeAheadApp url="https://restcountries.eu/rest/v2/name/" urlModificator="?fullText=false" listView={CustomItem} />
        )
    }
}

class CustomItem extends React.Component {
    render () {
        return(
            <div className="dropdown-item hello" key={this.props.item.name}>
                <img src={this.props.item.flag} alt="" className="dropdown-flag" />
                <a href="">{this.props.item.nativeName}</a> [{this.props.item.capital}]
            </div>
        )
    }
}

ReactDOM.render (<LaunchApp />, document.getElementById("root"));






// хочу, что бы подтягивались не страны, а любые другие данные
