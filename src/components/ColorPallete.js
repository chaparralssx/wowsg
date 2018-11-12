import {Row} from 'react-bootstrap/lib';
import React from 'react';

class ColorPallete extends React.Component {
    render() {
        return (               
                <div className="ColorPallete clearfix">
                    <h2>Primary Brand Colors</h2>
                    <p className="small">Note: 5% darker shade displayed in lower right corner of swatches represents hover color.</p>
                    <ul className="theme-colors clearfix">
                        <li className="brand-primary">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Brand Primary</span>
                                <span className="color-hex" title="HEX Code">#F8971D</span>
                                <span className="color-rgb" title="Red Green Blue"><span className="rgb-red">248</span><span className="rgb-green">151</span><span className="rgb-blue">29</span></span>
                                <span className="color-var" title="LESS Variable">@brand-primary</span>
                            </div>
                        </li>
                        <li className="brand-success">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Brand Green / Success</span>
                                <span className="color-hex" title="HEX Code">#b2d234</span>
                                <span className="color-rgb" title="Red Green Blue"><span className="rgb-red">178</span><span className="rgb-green">210</span><span className="rgb-blue">52</span></span>
                                <span className="color-var" title="LESS Variable">@brand-success</span>
                            </div>
                        </li>
                        <li className="brand-warning">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Warning</span>
                                <span className="color-hex" title="HEX Code">#f7941e</span>
                                <span className="color-rgb" title="Red Green Blue"><span className="rgb-red">247</span><span className="rgb-green">148</span><span className="rgb-blue">30</span></span>
                                <span className="color-var" title="LESS Variable">@brand-warning</span>
                            </div>
                        </li>
                        <li className="brand-danger">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Brand Red / Danger</span>
                                <span className="color-hex" title="HEX Code">#c9442a</span>
                                <span className="color-rgb" title="Red Green Blue"><span className="rgb-red">201</span><span className="rgb-green">68</span><span className="rgb-blue">42</span></span>
                                <span className="color-var" title="LESS Variable">@brand-danger</span>
                            </div>
                        </li>
                    </ul>
    
                    <h2>Grays</h2>
                    <ul className="theme-colors clearfix">
                        <li className="gray-base">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Gray - Base</span>
                                <span className="color-hex" title="HEX Code">#000</span>
                                <span className="color-var" title="LESS Variable">@gray-base</span>
                            </div>
                        </li>
                        <li className="gray-darker">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Gray - Darker</span>
                                <span className="color-hex" title="HEX Code">#222</span>
                                <span className="color-var" title="LESS Variable">@gray-darker</span>
                            </div>
                        </li>
                        <li className="gray-dark">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Gray - Dark</span>
                                <span className="color-hex" title="HEX Code">#333</span>
                                <span className="color-var" title="LESS Variable">@gray-dark</span>
                            </div>
                        </li>
                        <li className="gray">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Gray</span>
                                <span className="color-hex" title="HEX Code">#555</span>
                                <span className="color-var" title="LESS Variable">@gray</span>
                            </div>
                        </li>
                        <li className="gray-light">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Brand Gray / Gray - Light</span>
                                <span className="color-hex" title="HEX Code">#717073</span>
                                <span className="color-var" title="LESS Variable">@gray-light</span>
                                <span className="color-desc" title="Description">Network Health Gray (Corporate Style Manual - Logo and Name Use)</span>
                            </div>
                        </li>
                        <li className="gray-lighter">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Gray - Lighter</span>
                                <span className="color-hex" title="HEX Code">#eee</span>
                                <span className="color-var" title="LESS Variable">@gray-lighter</span>
                            </div>
                        </li>
                    </ul>
                </div>
        )
    }
}

export default ColorPallete;