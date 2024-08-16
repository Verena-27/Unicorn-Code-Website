import React from "react";

function Header(){
    return(
        <div className="header">
            <div className="flex-container-top">
                <div className="animation-container">
                    <div className="header-container">
                        <img className="logo2" src={require("../img/unicornonly.png")} alt="UnicornsLogo"></img>
                    </div>
                </div>

                <div className="header-container">
                    <img className="logo1" src={require("../img/unicornonly.png")} alt="UnicornsLogo"></img>
                </div>
                <div className="header-container">
                    <img className="font" src={require("../img/fontonly.png")} alt="UnicornsFont"></img>

                </div>
                
            </div>
            
        </div>
    );
}

export default Header;

/*<div class="header">
            <div class="flex-container-top">
                <div class="animation-container">
                    <div class="header-container">
                        <!--<img class="logo2" src="img/rainbow_scroll.png" alt="UnicornsLogo"> altes Logo-->
                        <img class="logo2" src="img/UnicornLogo/unicornonly.png" alt="UnicornsLogo">
                    </div>
                </div>

                <div class="header-container">
                    <!--<img class="logo1" src="img/unicorn_plain.png" alt="UnicornsLogo">-->
                    <img class="logo1" src="img/UnicornLogo/unicornonly.png" alt="UnicornsLogo">
                </div>
                <div class="header-container">
                    <!--<img class="font" src="img/Logo_Font.png" alt="UnicornsFont"> -->
                    <img class="font" src="img/UnicornLogo/fontonly.png" alt="UnicornsFont">

                </div>
                
            </div>*/