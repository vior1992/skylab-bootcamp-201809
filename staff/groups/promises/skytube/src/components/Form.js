import React, { Component } from 'react'

function formatLabel(label) {
    let words = label.split('_');
    words.forEach(function(word, i) {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(' ');
}

function Input(props) {
    return <div className="form__group">
        <label className="form__label">{props.label ? props.label : formatLabel(props.id)}</label>
        <input id={props.id} className="form__input" name={props.id} type={props.type ? props.type : 'text' } />
    </div>
}

class Form {
    constructor() {
        this.state = {
            error: ''
        }
    }

    render() {
        return <form className="form">
            <fieldset>
                {this.props.inputs.map(input => {
                    return <Input {...input}></Input>
                })}
            </fieldset>

            <div className="form__buttons">
                <button className="form__button form__button--link" type="button">{this.props.back}</button>
                <button className="form__button" type="submit">{this.props.submit}</button>
            </div>
        </form>
    }
}

export default Input;
