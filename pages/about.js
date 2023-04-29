import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title>About Monirul self | munnyreol.com</title>
                <meta name="description" content="About Monirul self" />
            </Head>
            <main>
                <h1>About Me</h1>
            </main>
        </>
    )
}

About.getInitialProps = () => {
    return { page: "about" };
};
