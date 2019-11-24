import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  idMax = 100;

  addNewItem(label){
    return {
      label,
      done: false,
      important: false,
      id: this.idMax++
    }
  }

  toggleDoneImportant(data, id, active) {
    return data.map(el => {
      if(el.id === id) el[active] = !el[active];
      return el;
    });
  }

  state = {
    todoData: [
      this.addNewItem('Drink Coffee'),
      this.addNewItem('Make Awesome App'),
      this.addNewItem('Have a lunch')
    ]
  }

  addItem = (text) => {
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, this.addNewItem(text)]
      }
    });
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const newArr = todoData.filter(el => el.id !== id);
      return {
        todoData: newArr
      }
    });
  }

  onClickLabel = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleDoneImportant(todoData, id, 'done')
      }
    });
  }

  onMarkClick = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleDoneImportant(todoData, id, 'important')
      }
    });
  }

  render(){
    const {todoData} = this.state;
    const countDone = todoData.filter(el => el.done).length;
    const countTodo = todoData.length - countDone;
    return (
      <div className="todo-app">
        <AppHeader toDo={countTodo} done={countDone} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList
          todos={todoData}
          onDelete={this.deleteItem}
          onClickLabel={this.onClickLabel}
          onMarkClick={this.onMarkClick}
        />
        <ItemAddForm
          onAddItem={this.addItem}
        />
      </div>
    );
  }
};