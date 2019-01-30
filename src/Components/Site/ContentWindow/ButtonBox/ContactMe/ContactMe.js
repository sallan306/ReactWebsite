import React, { Component } from "react";
import classnames from 'classnames';

         
class ContactMe extends Component {

    render(props) {
        return (
                <div className={classnames("contactMe mainContent" , this.props.display)} >
                    <img id="aboutMePic" src="images/me.jpg" alt="" />
                    <p className="paragraph1">
                        I have always had an affinity towards computers. From 5 years old, sitting on my father's lap watching him play doom 3D to today, i have loved the content
                        behind a screen. I am familar with many development tools, and my love of game design first started with Game Maker Studio.  I used to make RPG games styled
                        like the old Final Fantasy games.  Now, a user of Unreal Engine 4, Unity, Blender, Photoshop, and Audacity, I have learned the entire creative process of 3D 
                        development.  From creating my own 3D sculpts, to rigging and animating its skeleton, to creating its 3D mesh, to importing it into said engine, and then
                        using these animations to respond to my programmed functions i now understand the entire creative process.
                    </p>
                    <p className="paragraph2">
                        Recently I have been learning Web Development so that I can broaden my skillset and dive into a career field that can sustain me and grow my knowledge of programming 
                        languages, so that I can round off my weaker programming skills and be able to design applications, games, and other unique corners of the internet.
                    </p>
                </div>

        )
    }
};

export default ContactMe;