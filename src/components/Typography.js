import React from 'react';

class Typography extends React.Component {
    render() {
        return (
            <div className="Typography clearfix">
                <h2>Typography</h2>

                <h3 id="type-headings">Headings</h3>

                <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.</p>

                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <h1>h1. Heading Text</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h2>h2. Heading Text</h2>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>h3. Heading Text</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>h4. Heading Text</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>h5. Heading Text</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6>h6. Heading Text</h6>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <figure className="highlight">
                    <pre>
                        <code className="language-html" data-lang="html">
                            <span className="nt">&lt;h1&gt;</span>h1. Heading Text<span className="nt">&lt;/h1&gt;</span> <br/>
                            <span className="nt">&lt;h2&gt;</span>h2. Heading Text<span className="nt">&lt;/h2&gt;</span> <br/>
                            <span className="nt">&lt;h3&gt;</span>h3. Heading Text<span className="nt">&lt;/h3&gt;</span> <br/>
                            <span className="nt">&lt;h4&gt;</span>h4. Heading Text<span className="nt">&lt;/h4&gt;</span> <br/>
                            <span className="nt">&lt;h5&gt;</span>h5. Heading Text<span className="nt">&lt;/h5&gt;</span> <br/>
                            <span className="nt">&lt;h6&gt;</span>h6. Heading Text<span className="nt">&lt;/h6&gt;</span>
                        </code>
                    </pre>
                </figure>

                <p>Create lighter, secondary text in any heading with a generic <code>&lt;small&gt;</code> tag or the <code>.small</code> class.</p>

                <div className="bs-example bs-example-type" data-example-id="small-headings">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <h1>h1. Heading Text <small>Secondary text</small></h1>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2>h2. Heading Text <small>Secondary text</small></h2>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>h3. Heading Text <small>Secondary text</small></h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>h4. Heading Text <small>Secondary text</small></h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>h5. Heading Text <small>Secondary text</small></h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>h6. Heading Text <small>Secondary text</small></h6>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <figure className="highlight">
                    <pre>
                        <code className="language-html" data-lang="html">
                            <span className="nt">&lt;h1&gt;</span>h1. Heading Text <span className="nt">&lt;small&gt;</span>Secondary text<span className="nt">&lt;/small&gt;&lt;/h1&gt;</span> <br />
                            <span className="nt">&lt;h2&gt;</span>h2. Heading Text <span className="nt">&lt;small&gt;</span>Secondary text<span className="nt">&lt;/small&gt;&lt;/h2&gt;</span> <br />
                            <span className="nt">&lt;h3&gt;</span>h3. Heading Text <span className="nt">&lt;small&gt;</span>Secondary text<span className="nt">&lt;/small&gt;&lt;/h3&gt;</span> <br />
                            <span className="nt">&lt;h4&gt;</span>h4. Heading Text <span className="nt">&lt;small&gt;</span>Secondary text<span className="nt">&lt;/small&gt;&lt;/h4&gt;</span> <br />
                            <span className="nt">&lt;h5&gt;</span>h5. Heading Text <span className="nt">&lt;small&gt;</span>Secondary text<span className="nt">&lt;/small&gt;&lt;/h5&gt;</span> <br />
                            <span className="nt">&lt;h6&gt;</span>h6. Heading Text <span className="nt">&lt;small&gt;</span>Secondary text<span className="nt">&lt;/small&gt;&lt;/h6&gt;</span>
                        </code>
                    </pre>
                </figure>

                <h3 id="type-body-copy">Teaser text</h3>

                <p>Create teaser text with the <code>.teaser</code> class.</p>

                <div className="bs-example bs-example-type" data-example-id="small-headings"><p className="teaser">Teaser Text</p></div>

                <figure className="highlight">
                    <pre>
                        <code className="language-html" data-lang="html">
                            <span className="nt">&lt;p class="teaser"&gt;</span>Teaser Text<span className="nt">&lt;/p&gt;</span>
                        </code>
                    </pre>
                </figure>

                <h3 id="type-body-copy">Body copy</h3>

                <p>Network Health's global default <code>font-size</code> is <strong>16px</strong>, with a <code>line-height</code> of <strong>1.428</strong>. This is applied to the <code>&lt;body&gt;</code> and all paragraphs. In addition, <code>&lt;p&gt;</code> (paragraphs) receive a bottom margin of half their computed line-height (10px by default).</p>

                <div className="bs-example" data-example-id="body-copy"> <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p> <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p> <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p> </div>

                <figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;p&gt;</span>...<span className="nt">&lt;/p&gt;</span></code></pre></figure>


                <h3 id="type-body-copy">Link text</h3>

                <p>Create link text with the <code>&lt;a&gt;</code> tag.</p>

                <div className="bs-example bs-example-type" data-example-id="small-headings"><p>This is a <a
                    href="#">link</a></p></div>

                <figure className="highlight">
                    <pre>
                        <code className="language-html" data-lang="html">
                                <span className="nt">&lt;p&gt;</span>This is a <span className="nt">&lt;a&gt;link</span><span className="nt">&lt;/a&gt;</span><span className="nt">&lt;/p&gt;</span>
                        </code>
                    </pre>
                </figure>
            </div>
        )
    }
}

export default Typography;