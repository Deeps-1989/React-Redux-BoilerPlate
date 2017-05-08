import React from 'react';
import Header from './header.js';
import '../public/stylesheets/lessstyle.less';
import Footer from "./footer";
 class App extends React.Component {

    render() {
        console.log("in app rendeer function");
        return (
            <div>
                <div id="wrap">
                    <Header/>
                    <span className="headerspan">  React ++ Node </span>
                </div>
                <div>
                    <Footer/>
                </div>

            </div >
        );
    };
 };

 export default App;

