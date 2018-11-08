import {Row} from 'react-bootstrap/lib';
import React from 'react';

class ColorPallete extends React.Component {
    render() {
        return (               
                <div className="ColorPallete clearfix">
                    <p className="small">Note: 5% darker shade displayed in lower right corner of swatches represents hover color.</p>
                    <h2>Primary Brand Colors</h2>
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
                    
                    <h2>Secondary Brand Colors</h2>
                    <ul className="theme-colors clearfix">
                        <li className="brand2-yellow">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Brand Secondary Yellow</span>
                                <span className="color-hex" title="HEX Code">#fdda24</span>
                                <span className="color-rgb" title="Red Green Blue"><span className="rgb-red">253</span><span className="rgb-green">218</span><span className="rgb-blue">36</span></span>
                                <span className="color-var" title="LESS Variable">@brand2-yellow</span>
                            </div>
                        </li>
                        <li className="brand2-green">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Brand Secondary Green</span>
                                <span className="color-hex" title="HEX Code">#74aa50</span>
                                <span className="color-rgb" title="Red Green Blue"><span className="rgb-red">116</span><span className="rgb-green">170</span><span className="rgb-blue">80</span></span>
                                <span className="color-var" title="LESS Variable">@brand2-green</span>
                            </div>
                        </li>
                        <li className="brand2-blue">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Brand Secondary Blue / Information</span>
                                <span className="color-hex" title="HEX Code">#63acb4</span>
                                <span className="color-rgb" title="Red Green Blue"><span className="rgb-red">99</span><span className="rgb-green">172</span><span className="rgb-blue">180</span></span>
                                <span className="color-var" title="LESS Variable">@brand-info</span>
                                <span className="color-var" title="LESS Variable">@brand2-blue</span>
                            </div>
                        </li>
                    </ul>
                    
                    <h2>Medicare Brand Colors</h2>
                    <ul className="theme-colors clearfix">
                        <li className="medicare-red">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Medicare Red</span>
                                <span className="color-hex" title="HEX Code">#ad2624</span>
                                <span className="color-rgb" title="Red Green Blue"><span className="rgb-red">173</span><span className="rgb-green">38</span><span className="rgb-blue">36</span></span>
                                <span className="color-var" title="LESS Variable">@medicare-red</span>
                            </div>
                        </li>
                        <li className="medicare-purple">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Medicare Purple</span>
                                <span className="color-hex" title="HEX Code">#6d2077</span>
                                <span className="color-rgb" title="Red Green Blue"><span className="rgb-red">109</span><span className="rgb-green">32</span><span className="rgb-blue">119</span></span>
                                <span className="color-var" title="LESS Variable">@medicare-purple</span>
                            </div>
                        </li>
                        <li className="medicare-teal">
                            <div className="example">
                                <span className="color-swatch"></span>
                            </div>
                            <div className="info">
                                <span className="color-title" title="Color Name">Medicare Teal</span>
                                <span className="color-hex" title="HEX Code">#458a94</span>
                                <span className="color-rgb" title="Red Green Blue"><span className="rgb-red">69</span><span className="rgb-green">138</span><span className="rgb-blue">148</span></span>
                                <span className="color-var" title="LESS Variable">@medicare-teal</span>
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