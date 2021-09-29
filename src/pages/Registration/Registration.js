
import './Registration.scoped.css';

import React from 'react';

import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import '../../shared/Container/Container.scoped.css';


function Registration () {

    
    return (
            <div className="container">
            
            <div className="d-flex flex-column ">
                <img alt="Slack" src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" height="34" title="Slack" />
                <h1>First, enter your email</h1>
                <div className="description">We suggest using the <strong>email address you use at work.</strong></div>
               <div className="input">
                <Input 
                    placeholder='name@work-email.com'
                    type='text'
                />
                <Input 
                    placeholder='Create Password'
                    type='text'
                />
                <Input 
                    placeholder='Confirm Password'
                    type='text'
                />  
               

                 <Button 
                    text='Continue'
                />
            </div>
               
            <div className="checkbox">
                <li>
                <label for="checkid"  >
                <input id="checkid"  type="checkbox" value="test" />It’s okay to send me emails about Slack.
                </label>
                </li>
            </div>
        
      

                <div className="desc">By continuing, you’re agreeing to our <a href="">Customer Terms of Service</a>,  <a href="">Privacy Policy</a>, and  <a href="">Cookie Policy</a>.</div>
                <nav>
                    <ul>
                    <li><a href="">Privacy & Terms</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">&#127760; Change Region</a></li>
                    </ul>
                </nav>
            </div>
            </div>
        
    );
}

export default Registration;
