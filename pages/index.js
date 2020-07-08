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
        <title>Weekday - Give your team superpowers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/static/images/favicon.png" rel="shortcut icon" />
        <script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>
        <link rel="stylesheet" href="https://use.typekit.net/jze8wix.css"></link>
      </Head>

      <style global jsx>{`
        * {
          margin: 0px;
          padding: 0px;
          font-family: "neue-haas-unica", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        body {
          background-color: #151c26;
          background-image: url(../static/images/bg.png);
          background-size: 100%;
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
