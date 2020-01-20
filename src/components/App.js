import React, { Component } from "react";
import moment from 'moment'
import axios from 'axios'
import API_KEY from '../config.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      images: "Hello World"
    };
  }

  componentDidMount(){
    axios.get('http://localhost:3000/api/todaysimage')
    .then((data) => {
      console.log(data);
      this.setState({images: data.data})
    })

  }

  render() {
    return (
      <div>
        <h3>Hi, today is: {moment().format("MMM Do YY")}</h3>
        <h4>Todays picture is: {this.state.images.title}</h4>
        <img src="https://apod.nasa.gov/apod/image/2001/22466-22467anaVantuyne.jpg"></img>
      </div>
    );
  }
}
