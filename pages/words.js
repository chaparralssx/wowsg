import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import Words from '../src/components/Words'


export default class extends Page {
    render() {
        return (
            <Layout title="Words | " pathname={this.props.pathname}>
                <section className="Words clearfix">
                    <h2>Words</h2>

                    <article>
                        <h3>WOW Terms</h3>

                        <p>Always use UPPERCASE for</p>
                        <ul>
                            <li>SCALE</li>
                            <li>LPN</li>
                            <li>RF</li>
                        </ul>

                        <p>Always Capitalize these WMS (Calendar, RF, Portal) words no matter where they are used in sentences</p>
                        <ul>
                            <li>Calendar</li>
                            <li>Portal</li>
                            <li>Line</li>
                            <li>Lot</li>
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