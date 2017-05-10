import React from 'react';
import nodeLogo from '../public/images/node-img.png';
import reactLogo from '../public/images/react-img.png';
import '../public/stylesheets/style.scss';
import axios from 'axios';
export default class Header extends React.Component {
    componentDidMount() {
        axios.get('/api/getData').then(res => {
           console.log("printing result", res);
        }, err => {
            console.log("got error", err);
        });
    }
    render() {
        console.log("hello from headers");
        return (
            <div className="header" >
                <h2>React-Redux-node app starter</h2>
            </div>

        );
    }
}