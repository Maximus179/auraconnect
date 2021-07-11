import Heading from "./../Heading/Heading";
import Sidebar from "./Sidebar";
import React from "react";
import { Component } from "react";

class Task extends Component {

  state = {
    todoList: []
  }

  render() {
    return (
    <>
    <Heading/>
    <Sidebar/>
    
      <div class="container">
        <div class="row">
          <div class="col-md-5 offset-md-3 mt-3">
            <div className="jumbotron jumbotron-fluid py-2">
              <div className="container">
                <h1 className="display-2">To-Do App</h1>
                <hr/>
              </div>
            </div>
            <form className='mb-3' onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input type="text" name="todoTask" className="form-control" placeholder="Enter the task" autoComplete="off" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-outline-success">Add</button>
                </div>
              </div>
            </form>
            <ul className="list-group"> {
              this.state.todoList.map(
                (item, index) => {
                  return <li className="list-group-item" key={index}>
                    {item}
                    <button className="btn btn-sm btn-outline-danger float-end" onClick={(event) => { this.deleteTodoTask(event, index) }}>Delete</button>
                  </li>
                }
              )
            }
            </ul>
          </div>
        </div>
      </div>
    </>
    );
  }

  handleSubmit = (event) => {
    var taskDesc = event.target.elements.todoTask.value;
    if (taskDesc.length > 0) {
      this.setState({
        todoList: [...this.state.todoList, taskDesc]
      })
      event.target.reset();
    }
    event.preventDefault();
  }
  deleteTodoTask = (event, index) => {
    var taskArray = [...this.state.todoList]
    taskArray.splice(index, 1)
    this.setState({ todoList: taskArray })

  }
}

export default Task;