import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap/lib'

class ContrastToggle extends React.Component {
    constructor() {
        super();
        
    }
    
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    handleClick() {
        var $bodyTag=document.querySelector('body');
        if(this.getCookie('highContrast')==='true'){
            $bodyTag.classList.remove("hc");
            this.setCookie('highContrast', false, 365);
        }
        else{
            $bodyTag.className += " hc";
            this.setCookie('highContrast', true, 365);
        }
    }

    render() {
        return (
            <Button type="button" bsSize="small" onClick={() => this.handleClick()} ><Glyphicon glyph="adjust" title="Toggle high-contrast mode" /><span className="hidden">Toggle high-contrast mode</span> Contrast</Button>
        )
    }
}

export default ContrastToggle;