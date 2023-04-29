import Head from 'next/head'

export default function Social() {
    return (
        <>
            <Head>
                <title>Social media account of Monirul self | munnyreol.com</title>
                <meta name="description" content="Social media account of Monirul self" />
            </Head>
            <main>
                <h1>Social Media</h1>
            </main>
        </>
    )
}

Social.getInitialProps = () => {
    return { page: "social" };
};
