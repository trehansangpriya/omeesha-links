import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                    {/* icon */}
                    <link rel="icon" href="/assets/icons/logo.png" />
                </Head>
                <body className='bg-layout-800 text-layout-100 flex justify-center w-full'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument