import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row portfolio">
          <h1><span>Portfolio</span></h1>
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <a href={item.url} target="_blank">
                        <div className="item-wrap">
                          <img src={item.imgurl} className="item-img"/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>and Ongoing projects.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-halves cf">
              {
                resumeData.projects && resumeData.projects.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <a href={item.url} target="_blank">
                        <div className="item-wrap">
                          <img src={item.imgurl} className="item-img"/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
