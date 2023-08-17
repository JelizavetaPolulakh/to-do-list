import { Component } from "react";
import check from './check.jpg';

export class ToDoList extends Component {
    state = {
        userInput: '',
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert ("Please enter task");
        } else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>

                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text"
                        placeholder="What you want to do?"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput} />
                    </div>

                    <div className="container">
                        <button onClick={() => this.addItem(this.state.userInput)} className="btn-add">Add</button>
                    </div>

                    <ul>
                        {this.state.toDoList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                <img alt="check" src={check} width="40px" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="container">
                        <button onClick={() => this.deleteItem(this.state.userInput)}
                        className="btn-delete">Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}