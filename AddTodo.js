import React, {Component} from 'react';


class Addtodo extends Component{

    state = {
        item : ''
    }
    handleChange  = (e) => {
        this.setState({
            item : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            item: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='add-todo'>Add Todo</label>
                    <input id='add-todo' type='text' onChange={this.handleChange}></input>
                </form>
            </div>
        )   
    }
}

export default Addtodo;