import React from 'react'
import ModalImage from "react-modal-image";
import info from './info/info'
import "./style.css";
import projectThree1 from './img/projectThree1.png'
import projectThree2 from './img/projectThree2.png'
import projectThree3 from './img/projectThree3.png'
import projectThreeBig1 from './img/projectThreeBig1.png'
import projectThreeBig2 from './img/projectThreeBig2.png'
import projectThreeBig3 from './img/projectThreeBig3.png'



export const Project3 = () => (
  <div className="container">
    <h3 className="col text-center">{info.projectThree}</h3>
    <p className="col text-center lead">{info.projectThreeDetails}</p>
    <div class="row" >
      <div className="col-md-4">
        <ModalImage small={projectThree1} large={projectThreeBig1} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectThree2} large={projectThreeBig2} className="projectImage"/>
      </div>
      <div className="col-md-4">
        <ModalImage small={projectThree3} large={projectThreeBig3} className="projectImage"/>
      </div>
    </div>
    <div className="container text-center" id="social-links">
        <a className="btn btn-social btn-github" data-toggle="modal" data-target=".demo-popup" href="#contact" id="social-button">
          <span className="fa fa-github"  id="social-icon"></span> GitHub
        </a>
    </div>

      {/* Modal popup */}
      <div class="modal fade demo-popup" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
              <p>This complete repository is not available publicly.</p>
              <a href="https://github.com/JoshNas/Optimizer_Public">Click here to see the data cleaner, solver, and user interface files</a>
              <p>If you're considering hiring me and would like more information on how the application works please <a href="#contact">contact me</a> Thanks!</p>
            </div>
          </div>
        </div>
      </div>
      {/* Modal popup */}


  </div>
)
