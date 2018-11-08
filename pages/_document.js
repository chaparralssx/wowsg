import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps ({ renderPage }) {
        const page = renderPage()
        return { ...page }
    }

    render () {
        return (
            <html lang="en">
                <Head>
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}