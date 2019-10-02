import React, { Component} from 'react'
import info from './info/info'
import "./intro.css"

const name = 'JOSH NASSIF'
const introduction = 'Amazon Web Service Developer specializing in responsive design. Experienced in application development with Python, user interfaces with PyQt and Kivy, database management with MySQL, data analysis with Python and R, and web development with JavaScript and React.'

export class Intro extends Component{
  render() {
    return (
      <div class="jumbotron jumbotron-fluid intro-bg" id="intro">
        <div class="container text-center">
          <h1 class="display-3 text-dark">{name}</h1>
          <p>{introduction}</p>
        </div>
      </div>
    )
  }
}
