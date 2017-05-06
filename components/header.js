import React from 'react';
import nodeLogo from '../public/images/node-img.png';
import reactLogo from '../public/images/react-img.png';
import '../public/stylesheets/style.scss';
export default class Header extends React.Component {

    render() {
        console.log("hello from headers");
        return (
            <div className="center" >
                <img className="center" src={nodeLogo}/>
                <img className="center" src={reactLogo}/>
            </div>

        );
    }
}