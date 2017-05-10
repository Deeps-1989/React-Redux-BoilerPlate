import React from 'react';
import Header from './header.js';
import '../public/stylesheets/lessstyle.less';
import Footer from "./footer";
import Content from "./content";
 class App extends React.Component {

    render() {
        console.log("in app rendeer function");
        return (
            <div>
                <div className="wrapper">
                    <div className="wrapper-inside">

                        <Header/>
                        <div className="mainapp">
                            <Content/>
                        </div>

                    </div>
                </div>
                <Footer/>

            </div >
        );
    };
 };

 export default App;

