import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react"
import Layout from '@/components/Layout';

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <>
    {
      (["/_error"].includes(router.pathname)) ?
        <Component {...pageProps} />
        :
        <Layout page={pageProps.page}>
          <Component {...pageProps} />
        </Layout>
    }
  </>
}
