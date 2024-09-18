function Nav(){
    return (
        <>
        <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            body{
            background:black;
            color:white;
            font-family:'Poppins';
            }
            nav{
            display:flex;
            align-items:center;
            justify-content:space-between;
            font-weight:bold;
            }
            nav button{
                width:10vw;
                height:6vh;
                font-weight:bold;
                font-size:2vh;
                border-radius:1vw;
                border:none;
                background:#181818;
                color:white;
            }
                .gradient {
                

                    background: linear-gradient(90deg, lightpink, lightblue, lightgreen, yellow); 
                    font-weight:normal;
                    -webkit-background-clip: text; /* Clip the background to the text */
                    -webkit-text-fill-color: transparent; /* Make the text color transparent to show the gradient */
                    background-clip: text; /* Standard property for background clipping */
                    color: transparent; /* Fallback for browsers that do not support the text fill color property */
                }
            `}
        </style>
        <nav>
            <div className="section1">
                <h2>PassProtect</h2>
            </div>
            <div className="section2">
                <button>Try Now <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" class="xfungia x1qx5ct2 xw4jnvo"><g clip-path="url(#a)"><path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path></g><defs><clipPath><path d="M0 0H24V24H0z"></path></clipPath></defs></svg></button>
            </div>
        </nav>
        </>
    )
}

export default Nav