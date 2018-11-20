import React from 'react';

export class UsersPanel extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: "",
            surname: "",
            age: null,
            users: [
                {
                    name: "Sasha",
                    surname: "Volkov",
                    age: 28
                },
                {
                    name: "Ivan",
                    surname: "Petrov",
                    age: 30
                },
                {
                    name: "Michael",
                    surname: "Chehov",
                    age: 25
                }
            ]
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSurnameChange = (event) => {
        this.setState({
            surname: event.target.value
        })
    }

    handleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleAddClick = (event) => {
        this.setState({
            users: [
                ...this.state.users,
                {
                    name: this.state.name,
                    surname: this.state.surname,
                    age: this.state.age
                }
            ]
        });
    }

    render () {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
                    <input type="text" placeholder="Surname" value={this.state.surname} onChange={this.handleSurnameChange} />
                    <input type="text" placeholder="Age" value={this.state.age} onChange={this.handleAgeChange} />
                    <input type="button" value="Add" onClick={this.handleAddClick} />
                </form>
                <table>
                    <thead>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Возраст</th>
                    </thead>
                    {
                        this.state.users.map(
                            (item, index) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.surname}</td>
                                        <td>{item.age}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </table>
            </div>
        )
    }
}