import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>A website for Monirul self</title>
        <meta name="description" content="A website for Monirul | Monirul is a web developer and a student" />
      </Head>
      <main>
        <h1>Hello World</h1>
        <h3>Monirul</h3>
      </main>
    </>
  )
}

Home.getInitialProps = () => {
  return { page: "home" };
};
