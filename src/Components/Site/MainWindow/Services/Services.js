import React, { Component } from "react";
                
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
                        }}>

                    <div className="backgroundPseudo backgroundServices" style={{
                            backgroundImage: "url("+this.props.backgroundPicture+")",
                            backgroundPositionY: (this.props.backgroundScrollSpeed*this.props.scrollPercent)
                    }}/>
                </div>
            </div>
        )
    }
};

export default Services;