import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        value: ''
    }

    onChangeValue = (e) => {
        const val = e.target.value;
        this.setState(({value}) => {
            return {
                value: val
            }
        });
    }

    onSubmitItem = (e) => {
        e.preventDefault();
        const text = this.state.value;
        if(!text) return;
        const {onAddItem} = this.props;
        onAddItem(text);
        this.setState(({value}) => {
            return {
                value: ''
            }
        });
    }

    render(){
        return(
            <form
                className="item-add-form d-flex"
                onSubmit={this.onSubmitItem}
            >
                <input
                    type="text"
                    placeholder="What to do?"
                    className="form-control"
                    value={this.state.value}
                    onChange={this.onChangeValue}
                />
                <button
                    className="btn btn-outline-secondary"
                >Add Item</button>
            </form>
        );
    }
}