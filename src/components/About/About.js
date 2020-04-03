import React from 'react';
import Menu from "../Menu/Menu";
import "./About.css"
import Footer from '../Footer/Footer';

const About = props => {
    return (
        <div className='about' >
               <Menu bgColor="black"/>
            <div className="pic" style={
                {
                    backgroundImage: "url(" + require(`../../images/about.jpg`) + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>

             
                <h1>future-proof you organization</h1>
            </div>

            <div className="about-text">
                <p className="about-p1">
                    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi natus impedit rerum iusto? Deserunt, excepturi dolorem velit facere voluptas unde officiis impedit aliquam asperiores voluptatum, maxime doloremque inventore! Illum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi natus impedit rerum iusto? Deserunt, excepturi dolorem velit facere voluptas unde officiis impedit aliquam asperiores voluptatum, maxime doloremque inventore! Illum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi natus impedit rerum iusto? Deserunt, excepturi dolorem velit facere voluptas unde officiis impedit aliquam asperiores voluptatum, maxime doloremque inventore! Illum!
                </p>
                <p className ="about-p2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi natus impedit rerum iusto? Deserunt, excepturi dolorem velit facere voluptas unde officiis impedit aliquam asperiores voluptatum, maxime doloremque inventore! Illum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi natus impedit rerum iusto? Deserunt, excepturi dolorem velit facere voluptas unde officiis impedit aliquam asperiores voluptatum, maxime doloremque inventore! Illum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi natus impedit rerum iusto? Deserunt, excepturi dolorem velit facere voluptas unde officiis impedit aliquam asperiores voluptatum, maxime doloremque inventore! Illum!

                </p>
            </div>
            <Footer bgColor="black" />
        </div>
    );
}
export default About;