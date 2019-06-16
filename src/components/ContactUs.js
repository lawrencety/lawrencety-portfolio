import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row">
           <div className="columns contact-details">
             <h2>Contact Details</h2>
             <p className="address">
             <span>{resumeData.name}</span>
             <br></br>
             <span>{resumeData.address}</span>
             <br></br>
             <a href="mailto: lawrence.t.yen@gmail.com"><span>{resumeData.email}</span></a>
             <br></br>
             <span>{resumeData.phone}</span>
             </p>
           </div>
        </div>
      </section>
    );
  }
}
