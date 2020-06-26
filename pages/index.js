import React from 'react'
import Head from 'next/head'
import Features from '../components/features'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'
import Faq from '../components/faq'
import Subscribe from '../components/subscribe'

export default function Home(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Yack - Give your team superpowers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/static/images/favicon.png" rel="shortcut icon" />
        <script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>
        <link rel="stylesheet" href="https://use.typekit.net/wtx0nht.css"></link>
      </Head>

      <style global jsx>{`
        * {
          margin: 0px;
          padding: 0px;
          font-family: "proxima soft", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        body {
          background: #151c26;
        }
      `}</style>

      <Header />
      <Hero />
      <Features />
      <Faq />
      <Footer />
    </React.Fragment>
  )
}
