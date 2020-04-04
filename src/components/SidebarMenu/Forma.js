import React from 'react';
import "./Forma.css"
const Forma = props => {

    return (
        <div className='forma' style={{
            backgroundImage: "url(" + require("../../images/city.jpg") + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",

        }}>
            <div className="overlay-forma">
                <div style={{padding:"50px 0"}}>
                <form action="#" className="inside-contact">
                    <div className="contact-info employer employer-first-child">
                 
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter name" />
                        </div>

                        <div>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder="Enter last name" />
                        </div>

                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div>

                            <label htmlFor="">Phone</label>
                            <input type="text" placeholder="Enter your phone" />
                        </div>

                        <div>
                            <label htmlFor="">Name of Company</label>
                            <input type="text" placeholder="Enter Company" />

                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input type="pasword" placeholder="Enter Company" />
                        </div>
                    </div>
                    <div id="group2" className="contact-info employer">
                        <p>Department</p>
                        <div className="group-divs">
                            <label htmlFor="">Human Recource</label>
                            <input type="radio" placeholder="Enter name" name="group2" /><br />
                        </div>
                        <div className="group-divs">
                            <label htmlFor="">Marketing</label>
                            <input type="radio" placeholder="Enter name" name="group2" /><br />
                        </div>
                        <div className="group-divs">
                            <label htmlFor="">Production</label>
                            <input type="radio" placeholder="Enter name" name="group2" /><br />

                        </div>
                        <div className="group-divs">
                            <label htmlFor="">Sale</label>
                            <input type="radio" placeholder="Enter name" name="group2" /><br />
                        </div>

                        <div className="group-divs">
                            <label htmlFor="">CEO</label>
                            <input type="radio" placeholder="Enter name" name="group2" /><br />
                        </div>
                        <div className="group-divs">
                            <label htmlFor="">else</label>
                            <input type="radio" placeholder="Enter name" name="group2" /><br />
                        </div>
                    </div>
                    <div id="group1" className="contact-info employer">
                        <p>Employer</p>
                        <div className="group-divs">
                            <label htmlFor="">1</label>
                            <input type="radio" placeholder="Enter name" name="group1" /><br />
                        </div>
                        <div className="group-divs">
                            <label htmlFor="">2-10</label>
                            <input type="radio" placeholder="Enter name" name="group1" /><br />
                        </div>
                        <div className="group-divs">
                            <label htmlFor="">11-50</label>
                            <input type="radio" placeholder="Enter name" name="group1" /><br />
                        </div>
                        <div className="group-divs">
                            <label htmlFor="">51-200</label>
                            <input type="radio" placeholder="Enter name" name="group1" /><br />
                        </div>
                        <div className="group-divs">
                            <label htmlFor="">200+</label>
                            <input type="radio" placeholder="Enter name" name="group1" /><br />
                        </div>
                    </div>
                  
                    <button className="form-btn" type="submit">submit</button>
                </form>
                </div>
            </div>
        </div>
    );
}
export default Forma;