import React from "react";
import "./Product.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { ProductData } from "./ProductData";

function ProductSection() {
const h1style = {
  backgroundColor: '#1c2237',
  width: '100vw',
  height: '20vh',
color: '#fff',
padding: '50px',

marginTop:'0'
}
const style = {
  backgroundColor: '#1C2237',
  color: '#fff'

}
const style1 = {
  backgroundColor: '#ddd',
}


  return (
    <div style={style1}>
    <h1 style={h1style}>Curriculum</h1>
    <div className="home_courses" style={style}>
            <div className="homeee">
    <h2>General overview</h2>
            <h3>Cutting Edge</h3> 
            <p>WFullstack's immersive curriculum will expose you to the latest in modern software development for the Internet. Our curriculum is based on current technology trends and marketplace demand from industry leaders. We cultivate a passion for discovering and learning, a necessary quality in today’s rapidly changing programming landscape. After graduating Fullstack you’ll be an expert in the technologies we teach, and adaptive enough to pick up new ones as trends change over time.</p></div>
            <div className="homeee"> <h3>Full-stack JavaScript</h3>
            <p>Our weapon of choice to teach software engineering is fullstack JavaScript - the most popular and widely supported language in the world. The future of the web is dynamic and real-time JavaScript applications. As users demand ever faster and more seamless user experiences, web applications built with heavy front-end JavaScript are required to cater to those demands. This trend makes expert JavaScript knowledge a high demand skill-set.</p><p >The stack we teach is fullstack JavaScript. JavaScript is here in a big way and it is growing bigger every day. This surge in popularity is driven by the demands of today's internet users for real-time, interactive and dynamic applications, built in JavaScript. </p>
            </div>
            <div className="homeee"> <h3>Deep Understanding</h3> <p>We also strongly believe that you never master a tool until you've torn it apart and rebuilt it. We've built a curriculum that alternates using and building - by the end of the course you'll have built your own Terminal Shell, Database, Single Page Web Framework and CSS grid system. Don Knuth, a founder of the Computer Science field, said it most eloquently: "Your job here is not to be on top of things, it's to get to the bottom of things."</p> </div>
            <div className="homeee">  <h3>Software Engineer</h3> <p>Being a great software engineer means not only being fluent with the latest frameworks and languages, but also having an evolved intuition for writing efficient and beautiful code. Before mastering the higher-level technologies in software development for the web, it is vital to understand the underpinnings of lower-level theory. This is why your journey at Fullstack will start with a deep dive into the fundamentals of Computer Science.</p></div>
            </div>
            <hr/>
            <blockquote><center>"Your job here is not to be on top of things, it's to get to the bottom of things."
            <p>DONALD KNUTH</p>
            </center></blockquote>

            <div className="home2">
            <div className='cur '>
    <h1 className="top-line">Programming mastery</h1>
<p >Being a great developer starts with being a great programmer. In Foundations and on-campus, we drill into core programming concepts to ensure your fluency in reading and writing code. Once you've solidified these areas, you're ready to move beyond the language to focus on front-end vs. back-end development, systems, frameworks and ultimately full-stack applications.</p>

            </div>
<div className='react_img'><img src='images/4.4.png' width="60%" className='img1' /></div>
</div>





    <div className="home_courses" >
            <div className="homeee"> <img className="home_courses_img"  src="images/data.png"/>
            <h3>Data Structures</h3> 
            <p>Data Structures are fundamental to CS as they allow developers to work with complex data, while balancing processing power and memory requirements. At Fullstack you will learn the inner wizardry of commonly used data structures like arrays, hash tables, lists, trees and heaps. Beyond learning how to use them, you'll also write them yourself.</p></div>
            <div className="homeee"> <img className="home_courses_img"  src="images/algorithms.png"/><h3>Algorithms</h3>
            <p>Understanding algorithms is an integral part of being a developer. At Fullstack, you'll not only learn to write the whole range of essential CS algorithms like sorting, searching, and encryption, but you'll also know which one to choose at the right time..</p>
            </div>
            <div className="homeee"> <img className="home_courses_img"  src="images/graph.png"/><h3>Big-O Space & Time Analysis</h3> <p>The spirit of efficiency in CS stems from its early days and continues today. At Fullstack, you will learn to evaluate and optimize an algorithm for its efficiency in terms of both space and time using asymptotic time analysis.</p> </div>
            <div className="homeee"> <img className="home_courses_img"  src="images/tools.png"/> <h3>Tools & best practices</h3> <p>Git, text editors, Test-Driven Development, virtual machines... know the state of the art tools that developers are using to increase the productivity of their work.Presentation Hierarchy Icon</p> </div>
            </div>



    <div className="home_courses" >
            <div className="homeee"> 
            <h1>Front-end development</h1> <img className="home_courses_img"  src="images/window.png"/>
            <h3>React & JavaScript MVC</h3>
            <p>JavaScript is redefining what it means to be a modern web application. We'll start with using jQuery for simple page changes and move on to study design patterns of "Single Page Web Applications" using React and Redux.</p></div>
            <div className="homeee"> <img className="home_courses_img"  src="images/html.png"/>
            <h3>HTML5</h3>
            <p>HTML is the markup language that started it all and is still the backbone of web information. HTML5 adds new contextual tags, semantics and new capabilities to web browsers. While HTML is one of the easier languages to master, it's a critical part of the stack.</p>
            </div>
            <div className="homeee"> <img className="home_courses_img"  src="images/css3.png"/>
            <h3>CSS3</h3> <p>If HTML is the architect, CSS is the interior designer. Know how CSS decorates HTML and go beyond to create simple but effective designs for your projects. Use tools like SCSS along with Bootstrap to make your sites beautiful and responsive.</p> </div>
            <div className="homeee">  <img  className="home_courses_img" src="images/server.png"/> <h3>Databases</h3> <p>Master data persistence by building your own SQL database engine, learning about new NoSQL databases like Redis and Mongo and how to integrate these into your applications.</p></div>
            </div>
    <div className="home_courses" >
            <div className="homeee"> 
            <h1>Back-end development
</h1> <img className="home_courses_img"  src="images/window.png"/>
            <h3>Node.js & Express</h3>
            <p>JavaScript is an incredibly flexible and popular language, quickly becoming the "lingua franca" of the web. Node.js, a platform built on Chrome's JavaScript runtime, allows Javascript to run server-side. This makes JavaScript the only programming language that runs in the front-end and back-end. Node.js and JavaScript based back-end development are becoming the leader in next generation backend web engineering. You will be writing and thinking JavaScript from Day 1 and be an expert by graduation.</p></div>
            <div className="homeee"> <img className="home_courses_img"  src="images/html.png"/>
            <h3>Services & APIs</h3>
            <p>APIs allow us to connect to vast amounts of data and functionality. For example, we will learn about systems of authentication via OAuth and building payment systems using APIs by providers like Stripe and Balanced. Mastering APIs gives you the ability to harness the vast potential of external API services available on the web. This allows students to build incredibly creative and impressive projects while at Fullstack.</p>
            </div>
            </div>


    <div className="home_courses">
            <div className="homeee"> 
            <h1>Data
</h1> <img className="home_courses_img"  src="images/window.png"/>
            <h3>SQLite & PostgreSQL</h3>
            <p>SQL is one of the most popular database languages in use today. Although NoSQL is on the rise, having a strong understanding of SQL is still a vital skill for any software developer. We'll learn the ins and outs of this relational database language so you can comfortably store and manage a web application's data with it.</p></div>
            <div className="homeee"> <img className="home_courses_img"  src="images/html.png"/>
            <h3>ORM Tools
</h3>
            <p>Understanding various database languages and knowing how to use them is important... But integrating with a database from a web application can be tedious, especially when building the more complex projects covered at Fullstack. We'll learn how to use JavaScript ORM tools to improve your programming productivity.</p>
            </div>
            </div>
    <div className="home_courses">
            <div className="homeee"> 
            
            <h3>GIT VERSION CONTROL</h3>
            <p>If you've ever worked on a project where someone named a file "FINAL - Proposal - DY.doc", you know why Version Control is necessary. Go beyond just version control, learn how to use Git to effectively drive your workflow. You'll get hands-on experience using Git to collaborate with your fellow classmates during the project phase of the course.</p></div>
            <div className="homeee"> 
            <h3>TEXT EDITORS
</h3>
            <p>Vim? Emacs? Sublime Text? We won't start a flame war here, but you'll be a text wrangling expert before the Immersive is over. Whatever editor you choose, we can show you the hidden corners where the experts hide their productivity secrets.</p>
            </div>
            <div className="homeee"> 
            <h3>TEST-DRIVEN DEVELOPMENT
</h3>
            <p>Testing code with code is a fundamental aspect of scalability and reliability. You'll learn where and why to test-drive your development. Then you'll learn popular testing frameworks and apply them to write tests for your own projects</p>
            </div>
            <div className="homeee"> 
            <h3>SHELL & SYSTEMS
</h3>
            <p>If a monitor is a computer's face, then a Shell prompt is a window into its soul. Learn how to be comfortable in the Shell (Terminal, Console) and how to control machines using Shell Scripting.</p>
            </div>
            </div>
    </div>
  );
}

export default ProductSection;
