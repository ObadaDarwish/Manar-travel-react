import React from 'react';
import {Route, NavLink} from "react-router-dom";
import Landing from "../landing/landing";
import ManarProgram from "../manar-program/manar-program";
import Programs from "../programs/programs";


const Header = (props) => {


    return (
        <div>
            <div className="navBody">
                <div className="navigation">
                    <div className="tab logo">
                        <img src="/assets/imgs/manar_logo2.png" alt=""/>
                        <p>Manar Travel</p>
                    </div>
                    <NavLink to='/' className="tab"><p>Home</p></NavLink>
                    <div className="tab"><p>Aboutus</p></div>
                    <div  className="tab"><p>Contactus</p></div>
                    <div className="tab language_dropdown" placeholder="Select language">
                        Language
                        {/*<mat-option value="ar">*/}
                        {/*<img style="width: 30px;height: 30px;margin-right: 25%;" src="../../assets/imgs/flags/egypt.svg"*/}
                        {/*alt=""/> العربية*/}
                        {/*</mat-option>*/}
                        {/*<mat-option value="en">*/}
                        {/*<img style="width: 30px;height: 30px;margin-right: 25%;"*/}
                        {/*src="../../assets/imgs/flags/united-kingdom.svg" alt=""/> English*/}
                        {/*</mat-option>*/}
                    </div>
                </div>
            </div>
            <Route exact path="/" component={Landing}/>
            <Route path="/manar-program/:code/:id" component={ManarProgram}/>
            <Route path="/manar-programs" component={Programs}/>
        </div>
    )
}


export default Header;