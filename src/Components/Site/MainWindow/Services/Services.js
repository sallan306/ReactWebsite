import React, { Component } from "react"; 
import SEO from "./SVG/SEO"   
import WebDesign from "./SVG/WebDesign"   
import Responsive from "./SVG/Responsive"     
import Border1 from "./SVG/Border1"  
import Border2 from "./SVG/Border2"  
import Border3 from "./SVG/Border3"  
import "./Services.css"

class Services extends Component {

componentDidMount() {

}


    render(props) {
        return (
            <div                         
                ref={this.props.servicesRef}
                className="windowRef">
                <div 
                    id="services"
                    className="services" 
                    style={{ 
                        transition: "1s",
                        borderColor: this.props.fontColor
                        }}>

                    <div className="backgroundPseudo backgroundServices" style={{
                            transition: this.props.changingBackground === true ? "1s" : "0s",
                            backgroundImage: "url("+this.props.backgroundBlur+")",
                            backgroundPositionY: (this.props.backgroundScrollSpeed*this.props.scrollPercent)
                    }}/>
                    <div className="servicesContainer">
                        <div className="serviceBox web">

                            <WebDesign 
                                fillColor={this.props.fontColor}
                                SVGSecondaryColor={this.props.SVGSecondaryColor}        />
                            <Border1 fillColor={this.props.fontColor}/>
                            <p style={{color: this.props.fontColor}} className="serviceBlurb">Fluid Front-End development with effective User Experience solutions that draws users back to your site</p>                       
                        </div>
                        <div className="serviceBox seo">
                            <SEO fillColor={this.props.fontColor}
                            SVGSecondaryColor={this.props.SVGSecondaryColor}/>
                            <Border2 fillColor={this.props.fontColor}/>
                            <p style={{color: this.props.fontColor}} className="serviceBlurb">Proper Search Engine Optimization and Indexing so your voice gets the attention that it deserves</p>  
                        </div>
                        <div className="serviceBox responsive">
                            <Responsive fillColor={this.props.fontColor}
                            SVGSecondaryColor={this.props.SVGSecondaryColor}    />
                            <Border3 fillColor={this.props.fontColor}/>
                            <p style={{color: this.props.fontColor}} className="serviceBlurb">Responsiveness across multiple platforms and devices. Your customers won't be limited by the shape of their screen</p>  
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default Services;