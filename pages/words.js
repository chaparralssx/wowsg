import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'


export default class extends Page {
    render() {
        return (
            <Layout title="Words | " pathname={this.props.pathname}>
                <section className="Words clearfix">
                    <h2>Words</h2>

                    <article>
                        <h3>Capitalization</h3>

                        <p>Always use UPPERCASE for</p>
                        <ul>
                            <li>SCALE</li>
                            <li>LPN</li>
                            <li>RF</li>
                        </ul>

                        <p>Always Capitalize these words when they refer to the WOW or SCALE systems</p>
                        <ul>
                            <li>Calendar</li>
                            <li>Portal</li>
                            <li>Line</li>
                            <li>Lot</li>
                        </ul>
                    </article>

                    <article>
                        <h3>Hyphenation</h3>
                        <p>Always hyphenate these words</p>
                        <ul>
                            <li>Re-print (not Reprint)</li>
                        </ul>
                        <p>Do not hyphenate these words</p>
                        <ul>
                            <li>Checklist</li>
                        </ul>
                    </article>

                    <article>
                        <h3>Spaces in Words</h3>
                        <p>Always place a space in these words</p>
                        <ul>
                            <li></li>
                        </ul>
                        <p>Do not place a space in these words</p>
                        <ul>
                            <li>Checklist</li>
                        </ul>
                    </article>

                    <article className="unapproved">
                        <h3>Industry Terms</h3>
                    </article>

                    <article>
                        <h3>Abbreviations</h3>
                        <dt>Number</dt>
                        <dd>Use "#" not "No.", "No", "no"</dd>
                    </article>

                </section>
            </Layout>
        )
    }
}