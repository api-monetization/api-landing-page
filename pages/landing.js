
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Intro from '../components/intro'


export default function Index() {
        return (
          <>
            <Layout preview={false}>
              <Head>
                <title>API Product</title>
              </Head>
              <Container>
                <Intro />
              </Container>
            </Layout>
          </>
        )
      }
 
