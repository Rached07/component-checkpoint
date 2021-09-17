import React, { Component } from 'react'
import './App.css';
import photo from './img/img.jpg'
export default class ProfilePhoto extends Component {
    render() {
        return (
            <div>
                  <img className="photo" src={photo} alt=""/>
            </div>
        )
    }
}