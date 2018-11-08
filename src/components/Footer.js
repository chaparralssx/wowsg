import React from 'react';
import link from '../utils/bootstrapLink'

class Footer extends React.Component {
    render() {
        return (
            <footer className="Footer">

                <div className="container">

                    <div className="primary">

                        <div className="brandcontact" aria-labelledby="brandcontact-title">
                            <div className="logo">
                                <a onClick={(e) => link.handleLink(e, '/')} href="/"><img src="/static/images/logo-wow-logistics.png" alt="WOW Logistics" title="Return to the homepage" itemProp="name" /></a>
                            </div>
                            <div className="contact">
                                <div className="title" id="brandcontact-title">Customer Service</div>
                                <div itemProp="telephone" className="telephone">800-888-8888</div>
                                <p className="link"><a href="">Contact Us</a></p>
                            </div>
                        </div>

                        <div className="links">

                            <div className="links-col1">
                                <ul className="nav">
                                    <li><a href="">Warehousing</a></li>
                                    <li><a href="">Transportation</a></li>
                                    <li><a href="">Commodity Purchase</a></li>
                                    <li><a href="">Locations</a></li>
                                    <li><a href="">About WOW</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                </ul>
                            </div>

                            <div className="links-col1">
                                <ul className="nav">
                                    <li><a href="">Terms of Use</a></li>
                                    <li><a href="">Careers</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="social">
                            <ul className="nav">
                                <li><a href=""><span className="icon"><img src="/static/images/icon-t.png" alt="Twitter icon" /></span><span className="text"><span className="hidden-sm">Follow us on </span>Twitter</span></a></li>
                                <li><a href=""><span className="icon"><img src="/static/images/icon-fb.png" alt="Facebook icon" /></span><span className="text"><span className="hidden-sm">Like us on </span>Facebook</span></a></li>
                                <li><a href=""><span className="icon"><img src="/static/images/icon-li.png" alt="LinkedIn icon" /></span><span className="text"><span className="hidden-sm">Find us on </span>LinkedIn</span></a></li>
                                <li><a href=""><span className="icon"><img src="/static/images/icon-yt.png" alt="YouTube icon" /></span><span className="text"><span className="hidden-sm">Watch us on </span>YouTube</span></a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="fineprint">
                        <div className="legal">
                            <p>Copyright <span itemProp="copyrightYear">2017</span> <span itemProp="copyrightHolder">WOW Logistics</span>. All Rights Reserved.</p>
                            <p>Corporate Offices 3040 W. Wisconsin Avenue, Appleton, WI 54914</p>
                        </div>
                    </div>

                </div>

            </footer>
        )
    }
}

export default Footer;