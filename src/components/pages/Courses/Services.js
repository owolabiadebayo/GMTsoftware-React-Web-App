import React from "react";
import ServicesSection from "./ServicesSection";
import Pricing from "../../Pricing";
import Courseprice from "./Courseprice";
import "./Services.css";
import { ImUserCheck } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { SiJquery } from "react-icons/si";
import { GrApple } from "react-icons/gr";
import { FaPaypal, FaApple } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaInvision } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { GrSteps } from "react-icons/gr";
import { FaDownload } from "react-icons/fa";
import { GiPowerLightning } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";


import { Button } from '../../Button';
import './Pricing.css';
import { FaLaptopCode } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';


import {
  FaHtml5,
  FaCss3Alt,
  FaGithubSquare,
  FaReact,
  FaNode,
  FaBootstrap
} from "react-icons/fa";

function Services() {
  const style = {
    backgroundColor: "#1c2237",
    color: "#fff"
  };
  return (
    <>
<div className="scrollspy">

      <nav class="navigation fixed" id="nav">
        <ul>
          <li class="web active"><a href="#page1">WEB DEVELOPMENT</a></li>
          <li class="python"><a href="#page2">PYTHON</a></li>
        </ul>
      </nav>
</div>

      <div className="page" id="page1"></div>

      <div className="courses_head">
        <h1 className="intro-text">Ready to Code?</h1>
        <h3>Learn Web Development In-Person or Remotely at GMTsoftware</h3>
      </div>

     





      <div style={{ background: "#ddd", color:"#000", }}>
        <div className="dev">
          <img src="./images/web1.jpg" alt="" />
          <div>
            <h2>What Is Web Development?</h2>
            <p>
              Have you ever watched a developer for a while? We have. For small
              periods they can live off caffeine and junk food. There is a good
              chance they are wearing a t-shirt that was given to them for free.
              And, most impressively, they will endure hours, and hours of
              frustration and torment all for that glorious moment
              when—Boom!—everything comes together and works perfectly. (Until
              the next Chrome update.) It’s a tough life, but someone has to do
              it. The internet has changed the world and whether a medical
              professional wants to research life-saving treatments or some dude
              just wants to watch cat videos before going to bed, web developers
              have made it all possible. They often work on teams, big or small,
              with other developers, and maybe a manager, designer, and some
              other support staff making websites and web applications.
              Deadlines can be rough. Stress can sometimes be high. But moments
              of success make it all worthwhile.
            </p>
          </div>
        </div>
        <div className="dev">
          <div>
            {" "}
            <h2>Would You Make a Good Web Developer?</h2>
            <p>
              A love of code and tech is a great start, but it takes a lot more
              to succeed in the world of web development. You can’t just take a
              web development course and call it good. Great programmers are
              also:
            </p>
          </div>
          <div>
            <ul className="dev_li">
              <li>
                {" "}
                <ImUserCheck size={40} color="#b82f24" /> Good at Time
                Management
              </li>
              <li>
                {" "}
                <ImUserCheck size={40} color="#b82f24" /> Patient and Positive
              </li>
              <li>
                {" "}
                <ImUserCheck size={40} color="#b82f24" /> Constantly Learning
              </li>
              <li>
                {" "}
                <ImUserCheck size={40} color="#b82f24" /> Lovers of Puzzles and
                Problem Solving
              </li>
              <li>
                <ImUserCheck size={40} color="#b82f24" /> Good Communicators
              </li>
              <li>
                {" "}
                <ImUserCheck size={40} color="#b82f24" /> Detail Oriented
              </li>
              <li>
                {" "}
                <ImUserCheck size={40} color="#b82f24" /> Habitual
                Experiementors
              </li>
            </ul>
          </div>
        </div>
      </div>




      <div style={{ background: "#1c2237", color: "#fff"}}>
        <div className="dev">
          <div>
            <h2>What Is Taught in the GMTsoftware Web Development Course?</h2>
            <div className="deve">
              <h4>
                <FaHtml5 size={50} color="#b82f24" /> HTML
            </h4>
              <h4>
                {" "}
                <FaCss3Alt size={50} color="#b82f24" /> CSS
            </h4>
              <h4>
                <FaBootstrap size={50} color="#b82f24" /> BOOTSTRAP
            </h4>
              <h4>
                <IoLogoJavascript size={50} color="#b82f24" /> JAVASCRIPT
            </h4>
              <h4>
                <SiJquery size={50} color="#b82f24" /> jQUERY
            </h4>
              <h4>
                <FaGithubSquare size={50} color="#b82f24" /> GIT & GITHUB
            </h4>
              <h4>
                <FaReact size={50} color="#b82f24" /> REACT
            </h4>
              <h4>
                <FaNode size={50} color="#b82f24" /> NODE
            </h4>
            </div>
          </div>
          <p>
            Our Web Dev course is a 13-week (full-time) or 43-week (part-time)
            program that prepares you for entry-level positions in web development
            and software engineering. You’ll cover HTML, CSS, Bootstrap,
            Materialize, Javascript, jQuery, React, Node, and more, utilizing git
            and github. Students will also be taught our career prep curriculum
            and have access to our wildly energetic and positive career support
            team. The full-time course meets Monday through Friday, 9:00 AM to
            4:00 PM GMT. The part-time course meets Tuesdays and Thursdays from
            4:00 PM to 9:30 PM GMT, and every other Saturday from 9:00 AM to 5:00
            PM GMT. Either course has frequent homework and challenging
            assignments, and neither one is easy. However, they both provide a
            viable path to a new career in less than a year, which is the beauty
            of a web development bootcamp.
        </p>
        </div>
</div>
     
<div style={{background: "#ddd"}}>
        <div className="dev">
          <h2>How Much Do the Web Dev Courses Cost?</h2>
          <p>
            Tuition for the in-person courses is $9,900 (with housing included for
            full-time students). The remote course tuition is $7,900. If you don’t
            happen to have a few thousand dollars under your sofa cushions, we
            have a selection of helpful financing options. (Housing is not
            currently available due to COVID-19.)
        </p>
        </div>
</div>
     

      <Courseprice />
      <div style={style} className="devee">
        <div className="dev" >
          <div>
            <h2>How Can Studying Web Development Help With Your Career?</h2>
            <div className="deve">
              <center>
                <img src="images/career.png" />
                <h3>Optimize Your Resume. Build Your Brand.</h3>
                <img src="images/career2.png" />
                <h3> Career Advice and Interview Prep</h3>
                <img src="images/career2.png" />
                <h3> Employer Networking</h3>
              </center>
            </div>
          </div>
          <p>
            A weird guy once came into our campus to tell us that in two years
            there would be no more websites. We don’t want to shock you, but it
            turns out that guy was wrong. There are constantly new sites, web
            applications, or software being created, updated, or maintained.
            Working hard in our Web Development program can prepare you for
            entry-level positions in front-end development, back-end development,
            and some full-stack development. If you already have a career you
            love, adding web development skills can make you an even better
            marketer, project manager, product manager, technical recruiter, or
            entrepreneur.
        </p>
        </div>
      </div>
      
<div style={{background:"#ddd"}}>
        <div className="dev">
          <h2>How Much Do the Web Dev Courses Cost?</h2>
          <p>
            Tuition for the in-person courses is $9,900 (with housing included for
            full-time students). The remote course tuition is $7,900. If you don’t
            happen to have a few thousand dollars under your sofa cushions, we
            have a selection of helpful financing options. (Housing is not
            currently available due to COVID-19.)
        </p>
        </div>
</div>
      


      {/* PYTHON */}


      <div className="python_container" id="page2">

        {/* YOUR GUIDE */}

        <div className="python_head">
          <h1 className="py_head">YOUR GUIDE TO PYTHON</h1>
        </div>
        {/* WHAT IS PYTHON */}
        <div style={{ background: "#ddd" }}>
          <div className="why" >
            <img className="first_image" src="./images/python_stack.png" alt="" />
            <div>
              <h2 className="whyh1">WHAT IS PYTHON?</h2>
              <p className="whyp">
                Python is one of the most in-demand programming languages in the
                industry. It is favored by companies such as Instagram, YouTube, and
                Spotify. Python’s diversity, adaptability and its elegant,
                easy-to-master basics set it apart from other programming languages,
                making it popular for use in web development, machine learning, data
                science, scientific computation, and cloud infrastructure.
          </p>
            </div>

          </div>
        </div>
       

          {/* COMPANIES USING PYTHON */}

<div className="comp_outer">
          <div className="companies">
            <div className="comp">
              <h3>COMPANIES USING</h3>
              <h2>PYTHON</h2>
            </div>
            <div className="companies_icons">
              <GrApple size={45}  />
              <FaPaypal size={45} />
              <SiNetflix size={45} />
              <FaInstagramSquare size={45} />
              <AiOutlineGoogle size={45} />
              <FaInvision size={45} />
            </div>

          </div>
</div>


        {/* WHY LEARN PYTHON */}
<div className="learn_outer">
          <div className="learn">
            <div className="learn_text">
              <h2 className="whylearn">WHY LEARN PYTHON</h2>
              <p>
                Python is easy to learn, write and read. It’s a great starting
                programming language for beginners, and is easy to pick up for
                experienced developers. Despite its simplicity, Python’s growing job
                demand and technical versatility are everything but ordinary.
          </p>
            </div>

            <div className="range">
              <div className="ran">
                <BsGraphUp size={50}/>
                <h4 style={{color: "#b82f24"}}>SALARY RANGE</h4>
                <h4>$60K - $137K</h4>
              </div>
              <div className="ran"> <GoGraph size={50} /><h4 style={{color: "#b82f24"}}>NATIONAL AVERAGE</h4>
                <h4>$92,000</h4>
              </div>
              <div className="ran">
                <GrSteps size={50} color="#fff"/>
                <h4 style={{color: "#b82f24"}}>DIFFICULTY LEVEL</h4>
                <h4>BEGINNER</h4>
              </div>
            </div>

          </div>
</div>
         
        
       


          {/* uses of python */}
          <div className="common">

          <div className="uses">
            <div className="uses_text"><h2>COMMON USES OF PYTHON</h2>
              <h4>Web & Software Development</h4></div>
            <div className="uses_img">
              <div className="scientific">
                <img className="uses_img_pic" src="./images/uses_of_python1.jpg" alt="scientific" />
                <h5 className="uses_details">scientific computation</h5>
              </div>
              <div className="automation">
                <img className="uses_img_pic" src="./images/uses_of_python_2.jpg" alt="automation" />
                <h5 className="uses_details">Process Automation</h5>
              </div>
              <div className="server">
                <img className="uses_img_pic" src="./images/uses_of_python_3.jpg" alt="server" />
                <h5 className="uses_details">Server–Side Scripting</h5>
              </div>
            </div>
          </div>
          </div>

          {/* FEATURES OF PYTHON */}
          <div className="features">

            <div className="features_container">
            <h2 className="features_head">FEATURES OF PYTHON</h2>


            <div className="features_of_python">
              <div className="feature">
                <BiBookOpen size={50}/>
                <h5>EASY TO LEARN</h5>
                <p>Known for its simplicity and elegant syntax, Python is much easier to read and write than other programming languages.</p>
              </div>


              <div className="feature">
                <FaDownload size={50} />
                <h5>FREE & OPEN-SOURCE</h5>
                <p>Python is free to download and use commercially. You can even edit the source code and contribute to its community.</p>

              </div>

              <div className="feature">
                <GiPowerLightning size={50} />
                <h5>HIGHLY VERSATILE</h5>
                <p>Python is used in a diverse range of applications and fields of study, which contributes to the growing demand for Python developers.</p>
              </div>

              <div className="feature">
                <AiFillCode size={50} />
                <h5>FEWER LINES OF CODE</h5>
                <p>Python is highly expressive and allows for greater functionality. You’ll be amazed how much you can accomplish with only 500 lines of code.</p>
              </div>

            </div>
            </div>

          </div>

{/* image */}

<div className="python_graphic">
          <img className="python_graphic_illustration" src="./images/python_graphic_illustration.png" alt=""/>
</div>



        {/* Python Price */}

        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
          <div className='pricing__section'>
            <div className='pricing__wrapper'>
              <div className='pricing__container'>
                <Link to='/sign-up' className='pricing__container-card'>
                  <div className='pricing__container-cardInfo'>
                    <div className='icon1'>
                      <FaLaptopCode />
                    </div>
                    <h3>Python Dev</h3>
                    <h4>IN PERSON </h4>
                    <h3>#85,000</h3>
                    <ul className='pricing__container-features'>
                      <li>13 weeks</li>
                      <li>Abuja, Nigeria</li>
                    </ul>
                    <h4>REMOTE</h4>
                    <h3>#65,000</h3>
                    <p>13 weeks</p>

                    <Button buttonSize='btn--wide' buttonColor='primary'>
                      Choose Plan
                </Button>
                  </div>
                </Link>

              </div>
            </div>
          </div>

        </IconContext.Provider>





{/* Our Approach To Python */}

<div className="approach_container" style={{background:"#ddd"}}>
          <div className="approach">
            <div className="approach_head">

            <h2>OUR APPROACH TO PYTHON</h2>
            <h6>Here are the topics and technologies we teach to train you to become a Python developer.</h6>
            </div>


            <div className="approach_details">
              <img src="./images/python_stack.png" alt="python logo" />
              <div className="tech_topics">
                <h4>TECHNOLOGIES</h4>
                <h6>PYTHON . MySQL . Flask . Ajax APIs . Django</h6>
                <h4>TOPICS COVERED</h4>
                <h6 className="lastt">OOP in Python • SQL Queries & ERD Diagrams • Web Security Basics • CRUD Operations • MVC Framework & Design Patterns • Application Deployment • Algorithms in Python • Test-driven Development *Optional topics available</h6>
              </div>
            </div>
          </div>
</div>






        </div>
     











   
     
    </>
  );
}

export default Services;
