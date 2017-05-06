import React from 'react';
import Header from './header.js';
import '../public/stylesheets/lessstyle.less';
 class App extends React.Component {

    render() {
        console.log("in app rendeer function");
        return (
            <div>
                <Header/>
                <span className="headerspan">  React ++ Node </span>

            </div >
        );
    };
 };

 export default App;

