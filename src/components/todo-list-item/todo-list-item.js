import React,{Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onClickLabel = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    });
  }

  onMarkClick = () => {
    this.setState(({important}) => {
      return {
        important: !important
      }
    });
  }

  render(){
    const {label} = this.props;
    const {done, important} = this.state;
    let className = 'todo-list-item';

    if(done){
      className += ' done';
    }

    if(important){
      className += ' important';
    }
    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          onClick={this.onClickLabel}
        >
          {label}
        </span>
  
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkClick}
        >
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
};