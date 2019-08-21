import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row resume">
          <h1>Download my resume here:
            <a href="./Lawrence Yen - Resume.pdf" download style={{fontSize: 36, padding: 8}}>
              <i class="fa fa-file-text"></i>
            </a>
          </h1>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                            {item.specialization}
                            <span>&bull;</span>
                            <em className="date"> {item.MonthOfStart} {item.YearOfStart}</em>
                            <span>&ndash;</span>
                            <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                            {item.specialization}
                            <span> &bull;</span>
                            <em className="date"> {item.MonthOfStart} {item.YearOfStart}</em>
                            <span>&ndash;</span>
                            <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                          </p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <ul className="skills">
              {
                resumeData.otherSkills && resumeData.otherSkills.map((item) => {
                  return(
                    <li>
                      <h4>{item.skillname}</h4>
                      <p>{item.description}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
