import React from 'react';
import nodeLogo from '../public/images/node-img.png';
import reactLogo from '../public/images/react-img.png';
import '../public/stylesheets/style.scss';
import axios from 'axios';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        axios.post("api/data",{
            userName: this.state.value
        }).then((response)=> {
            console.log("Reference id is", response.data.refId);
        }).catch(()=> {
           console.log("got errr while posting data", error);
        });

        event.preventDefault();
    }


    render() {

        return (
            <div className="center content" >
                <img className="" src={nodeLogo}/>
                <img className="" src={reactLogo}/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        );
    }
}