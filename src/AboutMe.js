import React from 'react';
import MyTime from './MyTime';
// import './style2.css'; // Import CSS file if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faCalendar,faEnvelope,faPhone,faLocation, faGraduationCap, faCalendarDay, faCalendarAlt, faMapMarkerAlt, faFutbol, faUserFriends, faMusic } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
    return (
        <div>
            {/* <a href="http://localhost:8000" className="btn">Back</a>
            <a href="http://localhost:8000/jayesh_pdf" className="btn">Export To PDF</a> */}

            <div className="container">
                <div className="row">
                    <div className=" col-sm-8 text-left mt-1">
                        <center>
                            <h3 className="name">Jayesh Kumar</h3>
                            <h6 className="profession text-warning">Software Engineer</h6>
                            <FontAwesomeIcon icon={faEnvelope}className='text-warning' /><email> jayesh.suthar07@gmail.com</email>
                            <span className="mx-2">|</span> 
<FontAwesomeIcon icon={faPhone}className='text-warning' />
<phone> 9414624683</phone><span className="mx-2">|</span> 

                            <FontAwesomeIcon icon={faLocation}className='text-warning' /><location> Ahmedabad</location>
                            </center>
                        <hr />
                    </div>
                    <div className="col-sm-4 mt-1">
                        <center><img src = {"/jayesh.jpg"} width="110px" height="93px" className="rounded-circle" alt="Jayesh Kumar" /></center>
                        <hr />
                    </div>
                    <h4 className="ml-3">Experienced software engineer specializing in frontend and backend. Passionate about solving complex problems and delivering innovative solutions that exceed client expectations in dynamic environments.</h4>
                </div>
            </div>
            <hr className="main" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-7" style={{ backgroundColor: "#F5F5F5" }}>
                        <h5>EDUCATION</h5>
                        <hr className="field" />
                        <FontAwesomeIcon icon={faGraduationCap}className='text-warning' /><h6 className="text-left mr-3" style={{ float: "right" }}>CGPA/GRADE</h6>
                        <h5> Diploma in Advance Computing</h5><h6 className="text-warning mr-5" style={{ float: "right" }}>A</h6>
                        <p className="text-warning">C-DAC, Pune</p>
                        <FontAwesomeIcon icon={faCalendarAlt}className='text-warning' /> 2011-2012 &emsp;
                        <FontAwesomeIcon icon={faMapMarkerAlt}className='text-warning' /> Mumbai<hr />
                        <FontAwesomeIcon icon={faGraduationCap}className='text-warning' /><h6 className="text-left mr-3" style={{ float: "right" }}>PERCENTAGE</h6>
                        <h5> Bachelor of Technology(IT)</h5><h6 className="text-warning mr-5" style={{ float: "right" }}>82.1%</h6>
                        <p className="text-warning">Rajasthan Technical University, Kota</p>
                        <FontAwesomeIcon icon={faCalendarAlt}className='text-warning' /> 2006-2010 &emsp;
                        <FontAwesomeIcon icon={faMapMarkerAlt}className='text-warning' /> Jaipur<hr />
                    </div>
                    <div className="col-sm-5" style={{ backgroundColor: "#F8F8F8" }}>
                        <h5 >SKILLS</h5><hr className="field" />
                        <img src="https://img.icons8.com/dusk/50/000000/python.png" alt="Python" />Python &emsp;
                        {/* <img src={require('./django1.png')} height="50px" width="50px" alt="Django" /> &emsp; */}
                        <img src="https://img.icons8.com/dusk/50/000000/sql.png" alt="SQL" /> &emsp;
                        <img src="https://img.icons8.com/officel/50/000000/php-logo.png" alt="PHP" /> &emsp;
                        <img src="https://img.icons8.com/officel/50/000000/html.png" alt="HTML" /> &emsp;
                        {/* <img src={require('./git1.png')} height="60px" width="70px" alt="Git" /> &emsp;
                        <img src={require('./bootstrap4.png')} height="60px" width="70px" alt="Bootstrap" /> &emsp; */}
                        <hr />
                        <h5 >PASSIONS</h5><hr className="field" />
                        <FontAwesomeIcon icon ={faFutbol} className='text-warning'/> Sports <span className="fas fa-music text-warning ml-5"></span>
                       <hr/>
                       <FontAwesomeIcon icon = {faMusic} className='text-warning'/> Love Music
                        <hr />
                        <FontAwesomeIcon icon={faUserFriends} className = "text-warning"/> Collaboration and Team Work
                        <hr />
                    </div>
                    <div className="col-sm-7" style={{ backgroundColor: "#F5F5F5" }}>
                        <h5>CONTRIBUTION</h5><hr className="field" />
                        <h5>Python Developer</h5>
                        <p className="text-warning">Self</p>
                        <FontAwesomeIcon icon={faCalendarAlt}className='text-warning' /> Jan,2020-Ongoing&emsp;
                        <FontAwesomeIcon icon={faMapMarkerAlt}className='text-warning' /> Ahmedabad<hr />
                        <h6 className="text-warning">Contribution system</h6>
                        <ul>
                            <li> 
                                A Web Application using Django2.2 with Python3.6 and MySql
                            </li>
                            <li>
                                Provide flexibility for students those who are sharing their rooms with and contributing for room facilities like groceries, bills etc.
                            </li>
                            <li>
                                get updated with the automatic SMS
                                services to all the roommy's
</li>
</ul>
{/* <a href="http://jjkumar.pythonanywhere.com/" target="_blank">Have a Glance</a><br /> */}
<a href="http://jayeshkumar.vercel.app/" target="_blank">Have a Glance</a><br />

<hr />
<h6 className="text-warning">Student Management System</h6>
                    <ul>
                        <li>
                            A Desktop Application using Tkinter-Python3.6 and Mysql Databse
                        </li>
                        <li>
                            Enrollment of Student and display their data table in frame
                        </li>
                        <li>
                            Perform Delete Update Opertions on Students Records
                        </li>
                        <li>
                            Searching student using field wise
                        </li>
                    </ul>
                    <hr />
                    <h5>Junior Magento Developer</h5>
                    <p className="text-warning">Viha Digital Commerce Pvt.Ltd</p>
                    <FontAwesomeIcon icon={faCalendarAlt}className='text-warning' /> Jan 1<sup>st</sup>,2020-Ongoing&emsp;
                    <FontAwesomeIcon icon={faMapMarkerAlt}className='text-warning' /> Ahmedabad<hr />
                    <h6 className="text-warning">Order Number Customization</h6>
                    <ul>
                        <li>
                            Customization of order number,invoice number,shiipping number Module apart from Magento's inbuilt functionality
                        </li>
                        <li>
                            Module Extension for using Magento2.0 with Sql Database
                        </li>
                    </ul>
                    <hr />
                    <h6 className="text-warning">Product Management System</h6>
                    <ul>
                        <li>A web Application for product management for comeletely seller end
                        </li>
                        <li>
                            Seller can create, update, delete product of own
                        </li>
                        <li>
                            Display product details with gallery seller wise
                        </li>
                        <li>
                            Develop a module using PHP and MYSQL
                        </li>
                    </ul>
                    <hr />
                </div>
                <div className="col-sm-5" style={{ backgroundColor: "#F8F8F8" }}>
                    <h5>FIND ME ONLINE</h5><hr className="field" />
                    <i className="fab fa-linkedin-in text-warning"></i>&emsp;/jayeshkumar
                    <hr />
                    <i className="fab fa-twitter text-warning"></i>&emsp;@Jayeshkumar
                    <hr />
                    <h5>Languages</h5><hr className="field" />
                    <i className="ml-3">Hindi</i>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{displayStar(5)} 
                    <hr />
                    <i className="ml-3">English  </i>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{displayStar(4)}
                    <hr />

                    <h5>MY LIFE PHILOSOPHY</h5><hr className="field" />
                    {/* <p className="text-warning">Anyone who has ever made anything of importance was disciplined. </p> */}
                    {/* <p className="text-warning">{ thought }</p>
                    <p className="text-right">{author}</p> */}
                    <hr />
                    <h5>MY TIME</h5><hr className="field" />
                    {/* <div id="chartContainer" style={{ height: "350px", width: "100%" }}></div> */}
                    <MyTime/>
                    <hr />
                </div>
            </div>
        </div>
        <div className="footer">
            <developer style={{ color: "red" }}>Jayesh Kumar</developer>  Copyright &copy; 2024. All right reserved
        </div>
    </div>
);
    }
    const displayStar = (num) => {
        const stars = [];
        for (let i = 0; i < num; i++) {
          stars.push(<FontAwesomeIcon key={i} icon={faStar} className='text-warning' />);
        }
        return stars;
      };

    export default AboutUs;