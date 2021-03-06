import {Link} from 'react-router-dom';
import React,{Component} from 'react';
import '../styles/cv_style.css';
import Header from './layout/Header';

class CV extends Component{
  render(){
    console.log(this.props.name)
    return(
    <div>
        <Header name = {"vexere"} link={<Link to="/">Sign out</Link>}/>
        <div className="body-CV">

        <div id="address">
    			<i>271/34 TRINH DINH TRONG STREET, TAN PHU DISTRICT, HO CHI MINH CITY</i>
    		</div>

    		<div id="contact">
    			<i>093-153-6430 • MINHNGON01@GMAIL.COM</i>
    		</div>

    		<h1 className="myname"> <i>ĐẶNG MINH NGÔN</i>	</h1>

    		<div className="section">
    			<h2>JOB OBJECTIVE</h2>
    			<p>- To learn new things about AI, Machine learning, web design and also how to work in the real organization.</p>
    		</div>

    		<div className="section">
    			<h2>TECHNICAL SKILLS</h2>

    				<p>- Programming languages: </p>
    					<div className="content">
    						<ul>
    							<li>C++, Python, Java, <Link to="/JShomepage">JavaScript</Link></li>
    							<li>HTML5, CSS3</li>
    						</ul>
    					</div>

    				<p>- Frameworks:</p>
    					<div className="content">
    						<ul>
    							<li>ReactJS</li>
    						</ul>
    					</div>

    				<p>- Version control:</p>
    					<div className="content">
    						<ul>
    							<li>Git (Github & Gitlab)</li>
    						</ul>
    					</div>

    				<p>- IDE:</p>
    					<div className="content">
    						<ul>
    							<li>Visual Studio 2013</li>
    							<li>Atom</li>
    							<li>Eclipse</li>
    						</ul>
    					</div>

    				<p>- Foreign languages:</p>
    					<div className="content">
    						<ul>
    							<li>English (IELTS 6.5)</li>
    						</ul>
    					</div>

    				<p>- Soft Skills:</p>
    					<div className="content">
    						<ul>
    							<li>Teamwork</li>
    							<li>Time management</li>
    						</ul>
    					</div>

    			</div>

    		<div className="section">
    			<h2>EDUCATION</h2>
    				<ul className="list-style">
    					<li>Bach Khoa University <i className="year">September 2016 - Present</i></li>
    					<li> Computer Science </li>
    				</ul>
    		</div>

    		<div className="section">
    			<h2>WORK EXPERIENCE</h2>
    				<p>- None</p>
    		</div>

    		<div className="section">
    			<h2>PASTIME</h2>
    				<ul>
    					<li>Reading books and IT blogs</li>
    					<li>Soccer</li>
    					<li>Badminton</li>
    				</ul>
    		</div>
    	</div>
    </div>
   	)
  }
}
export default CV;
