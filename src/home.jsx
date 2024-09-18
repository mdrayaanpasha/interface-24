import { sha3_512 } from "js-sha3";

import card1Img from "./assets/home-cover-1.jpeg"
import card2Img from "./assets/home-cover-2.jpeg"
import card3Img from "./assets/home-cover-3.jpeg"
import card4Img from "./assets/home-cover-4.jpeg"
import Nav from "./nav";
function Home() {
    return (
        <>
            <style>
                {`
               .no-padding{
               margin:0 !important;
                padding:0 !important;
               }
                .gradient {
                margin:0 !important;
                padding:0 !important;

                    background: linear-gradient(90deg, lightpink, lightblue, lightgreen, yellow); 
                    font-weight:normal;
                    -webkit-background-clip: text; /* Clip the background to the text */
                    -webkit-text-fill-color: transparent; /* Make the text color transparent to show the gradient */
                    background-clip: text; /* Standard property for background clipping */
                    color: transparent; /* Fallback for browsers that do not support the text fill color property */
                ma
                    }
                .hero{
                height:100vh;
                }
                
                .flex-hero{
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    background-color:#1A1C1F;
                    width:90vw;
                    padding:1vw;
                      
                }
                
                .flex-hero div{
                    padding:5vw;
                    justify-content:left;
                    margin-right:15vw;
                }
                .flex-hero img{
                    height:25vw;
                    width:60vw;
                    background-size:cover;
                    object-fit:cover;
                    border-radius:1vw;
                    
                }
                .flex-hero p{
                    color:grey;
                }
                .hero-a{
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                margin-top:5vh;
                }

            button{
                    background-color:black;
                    color:white;
                    padding:2vh;
                    padding-right:2vw;
                    padding-left:2vw;
                    
                    border:none;
                    border-radius:2vw;
                    cursor:pointer;
                    font-weight:bolder;
                    font-size:2.5vh;
                    
                }
                svg{
                font-size:2.5vh !important; 
                }

                .other{
                margin-top:2.5vw;
                margin-left:5vw;
                }
                .other h1{
                font-size:5vh ;
                font-weight:normal;
                }
                .container-card img{
                height:30vh;
                width:25vw;
                border-radius:1vw;
                object-fit:cover;
                }
                .container-card{
                background-color:#1A1C1F;
                width:auto;
                max-width:26.5vw;
             
                flex-direction:column;
                padding:1vw;
                border-radius:1vw;
                }
                .container{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-wrap:wrap;
                    
                    gap:2vw;
                    margin-bottom:5vh;
                }
             
               .container-card h2, .container-card button, .container-card h5{
                    margin:2.3vh;
              }
                .container-card p{
                   color:#8A9094;
                  
                }
                
                .container-card button{
                    width:14vw;
                    align-items:center;
                    border-radius:1.5vw;
                }
                

.container-card {
  position: relative;

  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for zoom and shadow effect */
}

.container-card:hover {
  transform: scale(1.05); /* Zoom in effect */
  box-shadow: 0 0 10px 5px rgba(255, 105, 180, 0.2), /* Light pink shadow */
              0 0 10px 5px rgba(173, 216, 230, 0.2), /* Light blue shadow */
              0 0 10px 5px rgba(144, 238, 144, 0.2), /* Light green shadow */
              0 0 10px 5px rgba(255, 255, 0, 0.2); /* Yellow shadow */
}
              
                html {
  scroll-behavior: smooth;
}

             @keyframes slideInLeft {
  from {
    transform: translateX(-60%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.typewriter {
  animation: slideInLeft 2s ease-out;
}

@media(max-width:450px){
.other h1{
font-size:4vh;
}
.flex-hero{
display:block;

}
.flex-hero img{
width:99%;
height:30vh;
}
.div button, .container-card button{
width:60vw;
}
.container{
margin-top:10vh;
}
.container-card{
width:100vw;
}
.container-card{
max-width:90vw;
}

.container-card img{

width:100%;
}
}




                
                `}
            </style>
            <main>
                <Nav></Nav>
                <section className="hero">
                    <div className="other">
                    <h1 className="gradient typewriter" >Secure Your Digital Footprint</h1>
                    <h1 className="no-padding">Protect your online identity.<br/>
                    Identify breaches & Make Safe Passwords- all in one place.</h1>
                    
                    </div>
                    <div className="hero-a">
                    <div className="flex-hero">
                        <img src={card1Img} alt="Cover for home section" />
                        <div className="div">
    <h1>Check for Data Breaches</h1>
    <p>Scan your credentials or domain to see if they have been compromised in a data breach.</p>
    <button onClick={e => window.location.href="./am-i-breached"}>
        Scan Now
        <svg viewBox="0 0 24 24" fill="currentColor" width="2.5vw" height="2.5vh" className="xfungia xxk0z11 xvy4d1p x1yfc4yt">
            <g clip-path="url(#a)">
                <path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path>
            </g>
            <defs>
                <clipPath>
                    <path d="M0 0H24V24H0z"></path>
                </clipPath>
            </defs>
        </svg>
    </button>
</div>

                    </div>
                    </div>
                </section>
                <section className="container">
                <div className="container-card">
                    <img src={card2Img} alt="" />
                    <h2>Is your password strong?</h2>
                    <p>Check if your password is safe, or hackable with the magic of sha3_512</p>
                    <h5 className="gradient">Strong Password!</h5>
                    <button onClick={e=>window.location.href="./password-strenght"}>Check out! <svg viewBox="0 0 24 24" fill="currentColor" width="2.5vw" height="2.5vh" class="xfungia xxk0z11 xvy4d1p x1yfc4yt"><g clip-path="url(#a)"><path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path></g><defs><clipPath><path d="M0 0H24V24H0z"></path></clipPath></defs></svg></button>
                </div>

            <div className="container-card">
                <img src={card3Img} alt="" />
                <h2>is your domain safe?</h2>
                <p>Enter Domains to get details of all breaches the domain has.</p>
                <h5 className="gradient">Fav Breach</h5>
                <button onClick={e=>window.location.href="./check-breaches"}>Check out! <svg viewBox="0 0 24 24" fill="currentColor" width="2.5vw" height="2.5vh" class="xfungia xxk0z11 xvy4d1p x1yfc4yt"><g clip-path="url(#a)"><path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path></g><defs><clipPath><path d="M0 0H24V24H0z"></path></clipPath></defs></svg></button>
            </div>

           
            <div className="container-card">
                <img src={card4Img} alt="" />
                <h2>Check All Breaches!</h2>
                <p>Check most common breaches that has ever happened!</p>
                <h5 className="gradient">Breached?</h5>
                <button onClick={e=>window.location.href="./breaches"}>Learn More! <svg viewBox="0 0 24 24" fill="currentColor" width="2.7vw" height="2.7vh" class="xfungia xxk0z11 xvy4d1p x1yfc4yt"><g clip-path="url(#a)"><path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path></g><defs><clipPath><path d="M0 0H24V24H0z"></path></clipPath></defs></svg></button>
            </div>

            



                </section>
                <section className="nav-e">
                    <a href="./">&copy; PassProtect</a>
                 
                </section>
            </main>
            
        </>
    );
}

export default Home;