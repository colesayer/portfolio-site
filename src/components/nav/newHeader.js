import React, { Component } from 'react';
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import MdColorLens from 'react-icons/lib/md/color-lens'

class NewHeader extends Component {
  state = {
    buttonIsActive: false,
    isMobile: false,
  }

  handleMouseEnter = () => {
    this.setState({
      buttonIsActive: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      buttonIsActive: false
    })
  }

  handleButtonClick = () => {
    this.state.buttonIsActive === false ? this.setState({buttonIsActive: true}) : this.setState({buttonIsActive: false})
  }

  componentDidMount(){
    const width = window.innerWidth
    width <=500 ? this.setState({isMobile: true}) : this.setState({isMobile: false})
  }

  render(){
    let mainButton = ""
    let mainButtonMenu = ""

    if(this.state.isMobile){
      if(!this.state.buttonIsActive){
        mainButton = <button className="main-button" onClick={this.handleButtonClick}><span>Info</span></button>
        mainButtonMenu = ""
      } else {
        mainButton = <button className="main-button-active" onClick={this.handleButtonClick}><span>Info</span></button>
        mainButtonMenu =
          <div className="main-button-menu">
            <span style={{ padding: `5%`}} onClick={this.handleHomeClick}>Home</span>
            <span style={{ padding: `5%`}} onClick={this.handleAboutClick}>About</span>
            <span style={{ padding: `5%`}} onClick={this.handleProjectsClick}>Projects</span>
            <div className="menu-links">
              <a href="https://www.linkedin.com/in/cole-shapiro-54646b9/"><FaLinkedin /></a>
              <a href="https://github.com/colesayer" target="_blank"><FaGithub /></a>
              <a href="http://www.jttnyc.com/6953,6954,6964" target="_blank"><MdColorLens /></a>
            </div>
          </div>
      }
    } else if(!this.state.isMobile) {
      if(this.state.buttonIsActive === false){
        mainButton = <button className="main-button" onMouseEnter={this.handleMouseEnter}><span>Info</span></button>
        mainButtonMenu = ""
      } else if (this.state.buttonIsActive === true){
        mainButton = <button className="main-button-active" onMouseEnter={this.handleMouseEnter}><span>Info</span></button>
        mainButtonMenu =
          <div className="main-button-menu" onMouseLeave={this.handleMouseLeave}>
            <span style={{ padding: `5%`}} onClick={this.handleHomeClick}>Home</span>
            <span style={{ padding: `5%`}} onClick={this.handleAboutClick}>About</span>
            <span style={{ padding: `5%`}} onClick={this.handleProjectsClick}>Projects</span>
            <div className="menu-links">
              <a href="https://www.linkedin.com/in/cole-shapiro-54646b9/"><FaLinkedin /></a>
              <a href="https://github.com/colesayer" target="_blank"><FaGithub /></a>
              <a href="http://www.jttnyc.com/6953,6954,6964" target="_blank"><MdColorLens /></a>
            </div>
          </div>
      }

    }




    return(
      <div>
        <div className="drop-down">
          {mainButton}
          {mainButtonMenu}
        </div>
      </div>
    )
  }
}

export default NewHeader
