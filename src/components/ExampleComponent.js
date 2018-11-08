import React from 'react'
export default ({ children }) => (
    <h1 className="example-component">
        {children}
        <style jsx>{`
            .example-component {
                border: 1pc solid red;
                padding: 1em;
                margin: 1em 0;
            }
        `}</style>
    </h1>
)