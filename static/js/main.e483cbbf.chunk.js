(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/giraffe.79af8f09.jpg"},function(e,t,a){e.exports=a.p+"static/media/giraffe_blur.1c15b21d.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/Resume.2e22cd22.pdf"},function(e,t,a){e.exports=a.p+"static/media/MeBackyard.e07ccefa.jpg"},,function(e,t,a){e.exports=a.p+"static/media/elephant.87b42e37.jpg"},function(e,t,a){e.exports=a.p+"static/media/elephant_blur.1dc72885.jpg"},function(e,t,a){e.exports=a.p+"static/media/llama.411b80dd.jpg"},function(e,t,a){e.exports=a.p+"static/media/llama_blur.b3912ff3.jpg"},function(e,t,a){e.exports=a.p+"static/media/pug.3496a7c6.jpg"},function(e,t,a){e.exports=a.p+"static/media/pug_blur.0b5d6d30.jpg"},function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/BrewStash.60f85c74.png"},function(e,t,a){e.exports=a.p+"static/media/IDo.717e53be.png"},function(e,t,a){e.exports=a.p+"static/media/OldSite.cbacb3e8.png"},function(e,t,a){e.exports=a.p+"static/media/SunnyWeekend.f29039fd.png"},function(e,t,a){e.exports=a.p+"static/media/kindling.c53508fc.png"},function(e,t,a){e.exports=a.p+"static/media/CrystalCollectors.f221baa9.png"},,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(17),s=a.n(r),i=a(2),l=a(3),c=a(5),d=a(4),u=a(6),p=(a(32),a(18)),h=a.n(p),m="https://docs.google.com/document/d/15yJT9t423c4WiMPlCgdmDld2Lw-szrcb59tT_2JN7Zg/edit?usp=sharing",g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={opacity:1},a.getFile=function(e){"pdf"===e?window.location.href=h.a:"google"===e&&(window.location.href=m)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"navbar",style:{background:this.props.navBackgroundColor,top:this.props.navbarVisible?0:-100}},n.a.createElement("div",{className:"backgroundPseudo backgroundSidenav",style:{backgroundImage:"url("+this.props.backgroundBlur+")",backgroundPositionY:this.props.backgroundScrollSpeed*this.props.scrollPercent,height:this.props.sideNavVisible?"20vh":"0vh"}}),n.a.createElement("button",{className:"sideNavButton",onClick:function(){return e.props.toggleSideNav()}},n.a.createElement("div",{className:this.props.sideNavVisible?"menuItem menuItem1 open1":"menuItem menuItem1",style:{opacity:this.state.opacity,background:this.props.fontColor}}),n.a.createElement("div",{className:this.props.sideNavVisible?"menuItem menuItem2 open2":"menuItem menuItem2",style:{background:this.props.fontColor}}),n.a.createElement("div",{className:this.props.sideNavVisible?"menuItem menuItem3 open3":"menuItem menuItem3",style:{background:this.props.fontColor}})),n.a.createElement("span",{className:"sideNav",style:{visibility:(this.props.sideNavVisible,"visible"),height:this.props.sideNavVisible?"20vh":"0vh",top:0,background:this.props.navBackgroundColor}},n.a.createElement("span",{className:"sideNavLinks",style:{visibility:this.props.sideNavVisible?"visible":"hidden",opacity:this.props.sideNavVisible?1:0,top:this.props.sideNavVisible?"10vh":"-10vh",color:this.props.fontColor}},n.a.createElement("div",{className:"resumeContainer"},"Resume -",n.a.createElement("button",{style:{color:"rgba(255, 255, 255, 0.7)"},onClick:function(){return e.getFile("pdf")},className:"resumeButton"},"PDF")," /",n.a.createElement("button",{style:{color:"rgba(255, 255, 255, 0.7)"},onClick:function(){return e.getFile("google")},className:"resumeButton"},"Google Doc")),n.a.createElement("div",{className:"animalContainer"},"Background -",n.a.createElement("button",{onClick:function(){return e.props.changeBackground("giraffe")},style:{color:"yellow"},className:"animalButton"},"Giraffe")," /",n.a.createElement("button",{onClick:function(){return e.props.changeBackground("pug")},style:{color:"brown"},className:"animalButton"},"Pug")," /",n.a.createElement("button",{onClick:function(){return e.props.changeBackground("elephant")},style:{color:"gray"},className:"animalButton"},"Elephant")))),n.a.createElement("span",{className:"navButtonsContainer"},n.a.createElement("span",{className:"navButton navHomeButton",onClick:function(){e.props.goToPage("home")}},n.a.createElement("div",{style:{color:this.props.fontColor},className:"navName navNameHome"},"Home"),n.a.createElement("div",{id:"underlineHome",style:{background:this.props.fontColor},className:"home"===this.props.selectedNav?"navUnderline navSelected":"navUnderline"})),n.a.createElement("span",{className:"navButton navAboutButton",onClick:function(){e.props.goToPage("about")}},n.a.createElement("div",{style:{color:this.props.fontColor},className:"navName navNameAbout"},"About"),n.a.createElement("div",{id:"underlineAbout",style:{background:this.props.fontColor},className:"about"===this.props.selectedNav?"navUnderline navSelected":"navUnderline"})),n.a.createElement("span",{className:"navButton navServicesButton",onClick:function(){e.props.goToPage("services")}},n.a.createElement("div",{style:{color:this.props.fontColor},className:"navName navNameServices"},"Services"),n.a.createElement("div",{id:"underlineServices",style:{background:this.props.fontColor},className:"services"===this.props.selectedNav?"navUnderline navSelected":"navUnderline"})),n.a.createElement("span",{className:"navButton navPortfolioButton",onClick:function(){e.props.goToPage("portfolio")}},n.a.createElement("div",{style:{color:this.props.fontColor},className:"navName navNamePortfolio"},"Portfolio"),n.a.createElement("div",{id:"underlinePortfolio",style:{background:this.props.fontColor},className:"portfolio"===this.props.selectedNav?"navUnderline navSelected":"navUnderline"})),n.a.createElement("span",{className:"navButton navContactButton",onClick:function(){e.props.goToPage("contact")}},n.a.createElement("div",{style:{color:this.props.fontColor},className:"navName navNameContact"},"Contact"),n.a.createElement("div",{id:"underlineContact",style:{background:this.props.fontColor},className:"contact"===this.props.selectedNav?"navUnderline navSelected":"navUnderline"}))))}}]),t}(o.Component),b=(a(33),a(34),function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={IamA:["A Web Designer","A Software Engineer","A UI/UX Enthusiast","A SEO Optimizer","A Dinosaur","100 Percent Geek"],selected:"A Web Designer",jobRandomColor:["#000080","maroon","orange","teal"],jobText:"",oldWord:"A Web Designer",jobColor:"#000080",oldColor:"black",hueRotate:0},a.addLetters=function(){a.setState({cursorStatus:"active"});var e=setInterval(function(){a.state.selected.length>0?a.setState({jobText:a.state.jobText+a.state.selected[0],selected:a.state.selected.slice(1)}):(a.setState({oldWord:a.state.jobText,oldColor:a.state.jobColor}),a.blinkingCursorBefore(),clearInterval(e))},75)},a.eraseLetters=function(){a.setState({cursorStatus:"active"});var e=setInterval(function(){a.state.jobText.length>0?a.setState({jobText:a.state.jobText.slice(0,a.state.jobText.lastIndexOf())}):(a.blinkingCursorAfter(),clearInterval(e))},25)},a.blinkingCursorBefore=function(){a.setState({cursorStatus:"inactiveCursor"}),setTimeout(function(){return a.eraseLetters()},1e3)},a.blinkingCursorAfter=function(){a.setState({cursorStatus:"inactiveCursor"}),setTimeout(function(){return a.newWord()},1e3)},a.newWord=function(){a.setState({selected:a.state.IamA[Math.floor(Math.random()*a.state.IamA.length)],jobColor:a.state.jobRandomColor[Math.floor(Math.random()*a.state.jobRandomColor.length)]}),a.state.selected===a.state.oldWord||a.state.oldColor===a.state.jobColor?a.newWord():a.addLetters()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.addLetters(),setInterval(function(){e.setState({hueRotate:e.state.hueRotate+.1})},2e3)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{ref:this.props.homeRef,id:"home"},n.a.createElement("img",{id:"homePic",src:this.props.backgroundPicture,alt:"Scott Allan",style:{top:this.props.backgroundScrollSpeed*this.props.scrollPercent}}),n.a.createElement("span",{id:"myName",className:"myName"},"Hello, I'm Scott.",n.a.createElement("span",{id:"myJob",style:{color:this.state.jobColor,transition:"0.1s",cursor:"auto"}}," "+this.state.jobText),n.a.createElement("span",{className:this.state.cursorStatus},"|")),n.a.createElement("span",{style:{visibility:this.props.navbarVisible?"hidden":"visible"},className:"homeArrowContainer",onClick:function(){return e.props.goToPage("about")}},n.a.createElement("i",{style:{border:"solid",borderColor:this.props.fontColor,borderWidth:"0 3px 3px 0"},className:"homeArrow down"}),n.a.createElement("i",{style:{border:"solid",borderColor:this.props.fontColor,borderWidth:"0 3px 3px 0"},className:"homeArrow2 down"})))}}]),t}(o.Component)),f=(a(35),a(19)),v=a.n(f),k=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{ref:this.props.aboutRef,className:"windowRef"},n.a.createElement("div",{id:"about",className:"about",style:{}},n.a.createElement("div",{className:"backgroundPseudo backgroundAbout",style:{backgroundImage:"url("+this.props.backgroundBlur+")",backgroundPositionY:this.props.backgroundScrollSpeed*this.props.scrollPercent}}),n.a.createElement("div",{style:{position:"relative",zIndex:11},className:"container aboutContainer"},n.a.createElement("div",null,n.a.createElement("img",{id:"aboutMeCard",className:"col-md-5",src:v.a,alt:"me"}),n.a.createElement("p",{className:"paragraph1",style:{color:this.props.fontColor}},"From 5 years old i have loved the content behind a screen, and to this day I remain strong in my quest to be the ultimate computer nerd. I have a passion for visually appealing and effective web solutions, and have been honing my skills for years. I want your site to stand out among the sea of never ending websites; engaging the user and drawing them back via compelling UI techniques and actually useful functionality.  I look forward to creating a unique corner of the internet with you!")))))}}]),t}(o.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return n.a.createElement("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 372.000000 374.000000",preserveAspectRatio:"xMidYMid meet",fill:this.props.fillColor},n.a.createElement("g",{transform:"translate(0.000000,374.000000) scale(0.100000,-0.100000)",stroke:"none"},n.a.createElement("path",{d:"M1707 3669 c-459 -59 -865 -415 -992 -869 -200 -712 300 -1439 1042\r -1513 195 -19 420 16 591 94 36 16 69 26 73 22 4 -5 64 -96 132 -202 l125\r -195 -24 -29 c-18 -21 -24 -40 -24 -74 0 -43 15 -70 231 -402 127 -196 243\r -368 257 -383 27 -29 77 -44 115 -35 12 4 77 42 144 86 152 99 176 137 137\r 214 -9 17 -99 157 -199 312 -100 154 -203 312 -228 352 -59 92 -80 106 -152\r 101 l-56 -3 -128 198 -128 198 92 92 c471 474 472 1221 0 1692 -267 268 -632\r 392 -1008 344z m398 -259 c217 -57 416 -194 548 -377 52 -72 122 -222 148\r -323 33 -122 33 -338 0 -460 -76 -286 -262 -511 -522 -634 -149 -71 -237 -90\r -409 -90 -172 0 -260 19 -409 90 -207 97 -358 248 -456 456 -70 148 -89 236\r -89 408 0 172 19 260 89 408 50 106 95 171 174 255 137 145 347 255 548 287\r 92 14 286 4 378 -20z"}),n.a.createElement("path",{d:"M1690 2460 l0 -800 28 -7 c35 -10 269 -10 305 0 l27 7 0 800 0 800\r -180 0 -180 0 0 -800z"}),n.a.createElement("path",{d:"M1210 2461 l0 -498 41 -47 c66 -75 187 -161 282 -201 l37 -15 0 630\r 0 630 -180 0 -180 0 0 -499z"}),n.a.createElement("path",{d:"M1060 2700 c-20 -72 -24 -106 -24 -220 0 -114 4 -148 24 -220 l25\r -85 3 153 c1 83 1 221 0 305 l-3 152 -25 -85z"}),n.a.createElement("path",{d:"M2652 2480 l0 -305 19 60 c48 147 48 346 1 490 l-20 60 0 -305z"}),n.a.createElement("path",{d:"M2170 2210 c0 -344 3 -510 10 -510 16 0 109 48 160 83 25 17 78 62\r 118 101 l72 69 0 384 0 383 -180 0 -180 0 0 -510z"}),n.a.createElement("path",{d:"M3133 3143 c3 -272 5 -307 27 -398 20 -84 24 -126 24 -265 0 -139 -4\r -181 -24 -265 -22 -91 -24 -126 -27 -397 l-4 -298 181 0 180 0 0 960 0 960\r -180 0 -181 0 4 -297z"}),n.a.createElement("path",{d:"M250 2120 l0 -600 180 0 181 0 -4 298 c-3 268 -5 307 -26 397 -19 78\r -24 132 -25 245 0 80 2 171 7 203 l7 57 -160 0 -160 0 0 -600z"}),n.a.createElement("path",{d:"M730 1668 l0 -148 117 0 117 0 -50 53 c-54 55 -127 149 -163 207\r l-21 35 0 -147z"}),n.a.createElement("path",{d:"M3000 1802 c0 -14 -112 -162 -169 -224 l-53 -58 116 0 116 0 0 145\r c0 80 -2 145 -5 145 -3 0 -5 -4 -5 -8z"}),n.a.createElement("path",{d:"M70 1340 l0 -60 623 0 622 0 -74 41 c-41 22 -85 49 -99 60 -24 18\r -45 19 -548 19 l-524 0 0 -60z"}),n.a.createElement("path",{d:"M2898 1340 l37 -60 368 0 367 0 0 60 0 60 -405 0 -404 0 37 -60z"})))}}]),t}(o.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return n.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 47.168 47.168",fill:this.props.fillColor},n.a.createElement("g",null,n.a.createElement("g",{id:"Layer_19_33_"},n.a.createElement("g",null,n.a.createElement("path",{d:"M47.168,36.918V6.699H0v30.219h19.252v1.945H9.188v1.605h28.179v-1.605h-9.846v-1.945H47.168z M3.45,32.469V10.149\r h40.267v22.317H3.45V32.469z"}),n.a.createElement("path",{d:"M10.965,19.217h25.166v-6.166H10.965V19.217z M11.465,13.551h24.166v5.166H11.465V13.551z"}),n.a.createElement("path",{d:"M10.941,25.764h7.739v-5.562h-7.739V25.764z M11.441,20.701h6.739v4.562h-6.739V20.701z"}),n.a.createElement("path",{d:"M19.647,25.764h7.738v-5.562h-7.738V25.764z M20.147,20.701h6.738v4.562h-6.738V20.701z"}),n.a.createElement("path",{d:"M36.152,20.201h-7.738v5.562h7.738V20.201z M35.652,25.264h-6.738v-4.562h6.738V25.264z"}),n.a.createElement("rect",{x:"10.941",y:"27.029",width:"6.976",height:"0.484"}),n.a.createElement("rect",{x:"10.941",y:"27.92",width:"7.739",height:"0.484"}),n.a.createElement("rect",{x:"10.941",y:"28.842",width:"6.304",height:"0.484"}),n.a.createElement("rect",{x:"10.941",y:"29.842",width:"7.054",height:"0.484"}),n.a.createElement("rect",{x:"10.488",y:"30.781",width:"4.522",height:"0.484"}),n.a.createElement("rect",{x:"19.647",y:"27.029",width:"6.976",height:"0.484"}),n.a.createElement("rect",{x:"19.647",y:"27.92",width:"7.739",height:"0.484"}),n.a.createElement("rect",{x:"19.647",y:"28.842",width:"6.304",height:"0.484"}),n.a.createElement("rect",{x:"19.647",y:"29.842",width:"7.054",height:"0.484"}),n.a.createElement("rect",{x:"19.193",y:"30.781",width:"4.522",height:"0.484"}),n.a.createElement("rect",{x:"28.49",y:"26.99",width:"6.976",height:"0.484"}),n.a.createElement("rect",{x:"28.49",y:"27.881",width:"7.738",height:"0.484"}),n.a.createElement("rect",{x:"28.49",y:"28.803",width:"6.304",height:"0.484"}),n.a.createElement("rect",{x:"28.49",y:"29.803",width:"7.054",height:"0.484"}),n.a.createElement("rect",{x:"28.037",y:"30.742",width:"4.521",height:"0.484"}),n.a.createElement("path",{d:"M22.501,11.029H10.938v1.406h11.563V11.029z M22.001,11.937H11.438V11.53h10.563V11.937z"})))),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null))}}]),t}(o.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(e){return n.a.createElement("div",{ref:this.props.servicesRef,className:"windowRef"},n.a.createElement("div",{id:"services",className:"services",style:{}},n.a.createElement("div",{className:"backgroundPseudo backgroundServices",style:{backgroundImage:"url("+this.props.backgroundBlur+")",backgroundPositionY:this.props.backgroundScrollSpeed*this.props.scrollPercent}}),n.a.createElement("div",{className:"servicesContainer"},n.a.createElement("div",{className:"serviceBox web"},n.a.createElement(y,{fillColor:this.props.fontColor}),n.a.createElement("p",{style:{color:this.props.fontColor},className:"serviceBlurb"},"i feel this way about that")),n.a.createElement("div",{className:"serviceBox seo"},n.a.createElement(E,{fillColor:this.props.fontColor}),n.a.createElement("p",{style:{color:this.props.fontColor},className:"serviceBlurb"},"I feel that way about this")))))}}]),t}(o.Component),S=(a(36),[{id:"1",name:"BrewStash",tag:"Web Development",github:"https://github.com/sallan306/Brew-stash",liveLink:"https://brew-stash.herokuapp.com/",imgURL:a(37),description:"A fun, lightweight website that helps brewers list their drink items and helps drinkers find them!",shortDescription:"Make drinking even more fun",technologies:["Handlebars","Node.js","Express"]},{id:"2",name:"I.Do",tag:"Web Development",github:"https://github.com/sallan306/I.Do",liveLink:"https://i-dooo.herokuapp.com/",imgURL:a(38),description:"description here",shortDescription:"Event planning just got easier",technologies:["React","Node.js","Mongo DB","Nodemailer","Express"]},{id:"3",name:"Another Website",tag:"Web Development",github:"https://github.com/sallan306/ScottAllan",liveLink:"https://sallan306.github.io/ScottAllan/",imgURL:a(39),description:"My previous professional website. Cool effects and quite fun to make, yet I wanted to have a more accessable and less outlandish site. Using only the basics of web design. Space: the final frontier.",shortDescription:"Space: The Final Frontier",technologies:["HTML","CSS","Javascript"]},{id:"4",name:"Sunny Weekend",tag:"Web Development",github:"https://github.com/sallan306/SunnyWeekend",liveLink:"https://sallan306.github.io/SunnyWeekend/",imgURL:a(40),description:"Follow the sun with this exciting website! Find your last minute sunny vacation weekend with our state of the art weather scrying technology! We don't know everything but were experts on the sun.",shortDescription:"Step out of the shade!",technologies:["javascript","API calls","CSS","HTML"]},{id:"5",name:"Kindling",tag:"Web Development",github:"https://github.com/sallan306/FriendFinder",liveLink:"https://kindlingfriendfinder.herokuapp.com/",imgURL:a(41),description:"A fun little site where you answer a few questions to gague your personality type, then our expert level matchmaking system will pair you with your most compatible superhero sidekick!",shortDescription:"Find your superhero soulmate!",technologies:["react","node.js","heroku","photoshop","Express"]},{id:"6",name:"Crystal Collector",tag:"Web Development",github:"https://github.com/sallan306/CrystalGame",liveLink:"https://sallan306.github.io/CrystalGame/",imgURL:a(42),description:"Try your hand at collecting all the crystals! A simple yet addicting game where you win by acquiring the exact number of crystals...just make sure you dont get too much or its GAME OVER",shortDescription:"Crystals everywhere!!",technologies:["javascript","html"]}]),N=a(9),C=(a(45),a(46),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this))).state={highlighted:"",showInfoPanel:!1,selectedItem:[],currentSlideshow:1,slideshowScrollDistance:32.5},a.mouseEnter=function(e){a.setState({highlighted:e}),console.log("enter")},a.mouseLeave=function(){a.setState({highlighted:""}),console.log("exit")},a.mouseClicked=function(){console.log("clicked")},a.displayMoreInfo=function(e){a.setState({showInfoPanel:!0,selectedItem:e}),console.log("bing!"),document.addEventListener("mousedown",function(){a.setState({showInfoPanel:!1})})},a.goToPortfolioItem=function(e){a.setState({currentSlideshow:e,slideshowScrollDistance:-30*(e-1)+32.5}),S.map(function(e){return a.portfolioRefs[e.id-1].current.classList.add("unselected"),a.dotRefs[e.id-1].current.classList.remove("dotSelected")}),console.log(e),a.portfolioRefs[e-1].current.classList.remove("unselected"),a.dotRefs[e-1].current.classList.add("dotSelected")},a.moveDirection=function(e){a.state.currentSlideshow>1&&"left"===e&&a.setState({currentSlideshow:parseInt(a.state.currentSlideshow)-1},function(){a.goToPortfolioItem(a.state.currentSlideshow)}),a.state.currentSlideshow<6&&"right"===e&&a.setState({currentSlideshow:parseInt(a.state.currentSlideshow)+1},function(){a.goToPortfolioItem(a.state.currentSlideshow)})},a.portfolioRefs=[],a.dotRefs=[],S.map(function(e){return a.portfolioRefs[e.id-1]=n.a.createRef(),a.dotRefs[e.id-1]=n.a.createRef()}),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.portfolioRefs[0].current.classList.remove("unselected"),this.dotRefs[0].current.classList.add("dotSelected")}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"slideshow",className:"slideshow",style:{position:"relative",zIndex:10}},n.a.createElement("div",{className:"debugger"}),n.a.createElement("div",{className:"infoPanel",style:{opacity:this.state.showInfoPanel?1:0,visibility:this.state.showInfoPanel?"visible":"hidden"}},n.a.createElement("p",{className:"infoPanelDescription"},this.state.selectedItem.description),n.a.createElement("ul",null,this.state.selectedItem.technologies?this.state.selectedItem.technologies.map(function(e,t){return n.a.createElement("li",{className:"infoPanelListItem",key:t},e)}):"nothing")),n.a.createElement("div",{id:"portfolioItemsContainer",className:"portfolioItemsContainer",style:{left:this.state.slideshowScrollDistance+"vw"}},S.map(function(t){return n.a.createElement("div",{ref:e.portfolioRefs[t.id-1],key:"container"+t.id,id:"container"+t.id,className:"portfolioContainer unselected portfolioContainer"+t.id},n.a.createElement("img",{key:"image"+t.id,className:e.state.highlighted===t.id?"imgHighlighted portfolioImage":"portfolioImage",src:t.imgURL,alt:t.name}),n.a.createElement("div",{onMouseEnter:function(){return e.mouseEnter(t.id)},onMouseLeave:function(){return e.mouseLeave()},className:e.state.highlighted===t.id?"highlighted hiddenContainer":"hiddenContainer"},n.a.createElement("p",{key:"title"+t.id,className:"portfolioTitle"},t.name),n.a.createElement("div",{className:"buttonBox"},n.a.createElement(N.AwesomeButtonSocial,{size:"icon",href:t.github,type:"github"}),n.a.createElement(N.AwesomeButton,{size:"icon",href:t.liveLink},"DEMO"),n.a.createElement(N.AwesomeButton,{size:"icon",onPress:function(){return e.displayMoreInfo(t)}},"INFO")),n.a.createElement("h6",{key:"paragraph"+t.id,className:"portfolioTitle2"},t.shortDescription)))})),n.a.createElement("span",{className:"portfolioNavigation"},n.a.createElement("div",{onClick:function(){return e.moveDirection("left")},className:"navArrow portfolioLeftArrow"}),S.map(function(t){return n.a.createElement("div",{ref:e.dotRefs[t.id-1],key:t.id,onClick:function(){return e.goToPortfolioItem(t.id)},id:"dotNumber"+t.id,className:"dot"})}),n.a.createElement("div",{onClick:function(){return e.moveDirection("right")},className:"navArrow portfolioRightArrow"})))}}]),t}(o.Component)),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{ref:this.props.portfolioRef,className:"windowRef"},n.a.createElement("div",{id:"portfolio",className:"portfolio",style:{}},n.a.createElement("div",{className:"backgroundPseudo backgroundPortfolio",style:{backgroundImage:"url("+this.props.backgroundBlur+")",backgroundPositionY:this.props.backgroundScrollSpeed*this.props.scrollPercent}}),n.a.createElement(C,null)))}}]),t}(o.Component),P=a(10),B=(a(47),a(8)),O=a(11),R=a(20),I=a(12);B.b.add(R.a,I.a);var x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={firstName:"",lastName:"",subject:"",email:"",githubHover:!1,linkedinHover:!1,emailHover:!1},a.submitForm=function(e){e.preventDefault()},a.changeHandler=function(e){var t=e.target.name,o=e.target.value;a.setState(Object(P.a)({},t,o))},a.spinOnce=function(e){a.setState(Object(P.a)({},e,!0)),setTimeout(function(){return a.setState(Object(P.a)({},e,!1))},2e3)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"windowRef",ref:this.props.contactRef},n.a.createElement("div",{id:"contact",className:"contact",style:{}},n.a.createElement("div",{className:"backgroundPseudo backgroundContact",style:{backgroundImage:"url("+this.props.backgroundBlur+")",backgroundPositionY:this.props.backgroundScrollSpeed*this.props.scrollPercent}}),n.a.createElement("span",{className:"contactContent",style:{position:"relative",zIndex:10}},n.a.createElement("p",{style:{color:this.props.fontColor,position:"relative",zIndex:10},className:"contactParagraph"},"I am currently accepting freelance commissions. Please contact me using the links below."),n.a.createElement("a",{className:"btn socialMediaButtons",onMouseEnter:function(){return e.spinOnce("githubHover")},href:"https://github.com/sallan306"},n.a.createElement(O.a,{spin:this.state.githubHover,color:this.props.fontColor,size:"3x",icon:["fab","github"]})),n.a.createElement("a",{className:"btn socialMediaButtons",onMouseEnter:function(){return e.spinOnce("linkedinHover")},href:"http://www.linkedin.com/in/ScottAllanWebDesign"},n.a.createElement(O.a,{spin:this.state.linkedinHover,color:this.props.fontColor,size:"3x",icon:["fab","linkedin"]})),n.a.createElement("a",{className:"btn socialMediaButtons",onMouseEnter:function(){return e.spinOnce("emailHover")},href:"mailto:sallan306@gmail.com"},n.a.createElement(O.a,{spin:this.state.emailHover,color:this.props.fontColor,size:"3x",icon:I.a})))))}}]),t}(o.Component),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"mainWindow",className:"mainWindow",style:{marginTop:this.props.sideNavVisible?"15vh":0},onScroll:function(){return e.props.getPercentage()}},n.a.createElement(b,{homeRef:this.props.homeRef,scrollPercent:this.props.scrollPercent,goToPage:this.props.goToPage,navbarVisible:this.props.navbarVisible,backgroundPicture:this.props.backgroundPicture,fontColor:this.props.fontColor,backgroundScrollSpeed:this.props.backgroundScrollSpeed}),n.a.createElement(k,{selectedNav:this.props.selectedNav,aboutRef:this.props.aboutRef,backgroundColor:this.props.backgroundColor,fontColor:this.props.fontColor,scrollPercent:this.props.scrollPercent,backgroundBlur:this.props.backgroundBlur,backgroundScrollSpeed:this.props.backgroundScrollSpeed}),n.a.createElement(w,{servicesRef:this.props.servicesRef,selectedNav:this.props.selectedNav,backgroundColor:this.props.backgroundColor,fontColor:this.props.fontColor,scrollPercent:this.props.scrollPercent,backgroundBlur:this.props.backgroundBlur,backgroundScrollSpeed:this.props.backgroundScrollSpeed}),n.a.createElement(j,{selectedNav:this.props.selectedNav,portfolioRef:this.props.portfolioRef,backgroundColor:this.props.backgroundColor,fontColor:this.props.fontColor,scrollPercent:this.props.scrollPercent,backgroundBlur:this.props.backgroundBlur,backgroundScrollSpeed:this.props.backgroundScrollSpeed}),n.a.createElement(x,{selectedNav:this.props.selectedNav,contactRef:this.props.contactRef,backgroundColor:this.props.backgroundColor,fontColor:this.props.fontColor,scrollPercent:this.props.scrollPercent,backgroundBlur:this.props.backgroundBlur,backgroundScrollSpeed:this.props.backgroundScrollSpeed}))}}]),t}(o.Component),V=(a(51),a(13)),A=a.n(V),T=a(21),D=a.n(T),z=a(22),L=a.n(z),W=a(23),H=a.n(W),U=a(24),F=a.n(U),_=a(25),q=a.n(_),G=a(26),J=a.n(G),Y=a(14),K=a.n(Y),X=a(15),Z=a.n(X),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={selectedNav:"home",scrollPercent:0,backgroundColor:"rgb(105,105,105, 0.8)",navBackgroundColor:"transparent",navFontColor:"black",fontColor:"black",navbarVisible:!1,sideNavVisible:!1,backgroundPicture:K.a,backgroundBlur:Z.a,scrollThrottle:1,backgroundScrollSpeed:-8,width:0},a.updateWindowDimensions=function(){a.setState({width:window.innerWidth,height:window.innerHeight},function(){a.state.width>1800?a.setState({backgroundScrollSpeed:-8}):a.state.width>1200?a.setState({backgroundScrollSpeed:-5}):a.state.width>800?a.setState({backgroundScrollSpeed:-3}):a.state.width>550?a.setState({backgroundScrollSpeed:-1}):(a.state.width,a.setState({backgroundScrollSpeed:-1}))})},a.changeBackground=function(e){"elephant"===e?a.setState({backgroundPicture:D.a,backgroundBlur:L.a,fontColor:"black",navFontColor:"black"}):"giraffe"===e?a.setState({backgroundPicture:K.a,backgroundBlur:Z.a,fontColor:"black",navFontColor:"black"}):"pug"===e?a.setState({backgroundPicture:q.a,backgroundBlur:J.a,fontColor:"white",navFontColor:"white"}):"llama"===e&&a.setState({backgroundPicture:H.a,backgroundBlur:F.a,fontColor:"black",navFontColor:"black"})},a.goToPage=function(e){var t=0;switch(e){case"about":t=1;break;case"services":t=2;break;case"portfolio":t=3;break;case"contact":t=4}a.state.sideNavVisible?(a.setState({sideNavVisible:!1}),setTimeout(function(){A()("#mainWindow").animate({scrollTop:window.innerHeight*t-30},"slow"),a.getPercentage()},500)):(A()("#mainWindow").animate({scrollTop:window.innerHeight*t-30},"fast"),a.getPercentage())},a.getPercentage=function(){var e=document.getElementById("mainWindow"),t=e.clientHeight,o=e.scrollHeight-t,n=e.scrollTop,r=Math.floor(n/o*100);a.setState({scrollPercent:r}),!0===a.state.sideNavVisible&&a.setState({sideNavVisible:!1}),a.state.scrollPercent>80?a.setState({selectedNav:"contact"}):a.state.scrollPercent>60?a.setState({selectedNav:"portfolio"}):a.state.scrollPercent>40?a.setState({selectedNav:"services"}):a.state.scrollPercent>20?a.setState({selectedNav:"about"}):a.state.scrollPercent>0&&a.setState({selectedNav:"home"}),a.state.scrollPercent>=22?(a.setState({navbarVisible:!0}),console.log(a.state.navbarVisible)):a.setState({navbarVisible:!1})},a.toggleSideNav=function(){a.setState({sideNavVisible:!a.state.sideNavVisible,navbarVisible:!0})},a.closeSideNav=function(){a.setState({sideNavVisible:!1})},a.homeRef=n.a.createRef(),a.aboutRef=n.a.createRef(),a.servicesRef=n.a.createRef(),a.portfolioRef=n.a.createRef(),a.contactRef=n.a.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){return e.updateWindowDimensions()}),this.updateWindowDimensions()}},{key:"render",value:function(){return n.a.createElement("div",{id:"site"},n.a.createElement(g,{sideNavVisible:this.state.sideNavVisible,navbarVisible:this.state.navbarVisible,goToPage:this.goToPage,selectedNav:this.state.selectedNav,changeColor:this.changeColor,navBackgroundColor:this.state.navBackgroundColor,fontColor:this.state.navFontColor,toggleSideNav:this.toggleSideNav,changeBackground:this.changeBackground,backgroundBlur:this.state.backgroundBlur,scrollPercent:this.state.scrollPercent,backgroundScrollSpeed:this.state.backgroundScrollSpeed}),n.a.createElement(M,{closeSideNav:this.closeSideNav,navbarVisible:this.state.navbarVisible,scrollPercent:this.state.scrollPercent,getPercentage:this.getPercentage,selectedNav:this.state.selectedNav,homeRef:this.homeRef,aboutRef:this.aboutRef,servicesRef:this.servicesRef,portfolioRef:this.portfolioRef,contactRef:this.contactRef,fontColor:this.state.fontColor,backgroundColor:this.state.backgroundColor,goToPage:this.goToPage,sideNavVisible:this.state.sideNavVisible,backgroundPicture:this.state.backgroundPicture,backgroundBlur:this.state.backgroundBlur,backgroundScrollSpeed:this.state.backgroundScrollSpeed}))}}]),t}(o.Component),Q=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement($,null)}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[27,1,2]]]);
//# sourceMappingURL=main.e483cbbf.chunk.js.map