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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <style global jsx>{`
        * {
          margin: 0px;
          padding: 0px;
          font-family: 'Montserrat', "neue-haas-unica", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        body {
          background-color: #151c26;
          background-color: #02081A;
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
