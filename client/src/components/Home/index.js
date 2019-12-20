import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCookie } from '../../cookies/cookies';


export default class Home extends Component{
    render() {
        console.log(getCookie('user'))
        return (
            getCookie("user") === "undefined" ? 
            <Redirect to ="/login" /> 
            : <Redirect to = "/app" />
        )
    }
}