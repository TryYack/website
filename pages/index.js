import React from 'react'
import Head from 'next/head'
import Features from '../components/features'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'

export default function Home(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Weekday - Give your team superpowers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/static/font/stylesheet.css" rel="stylesheet" />
        <link href="/static/images/favicon.png" rel="shortcut icon" />
      </Head>

      <style global jsx>{`
        * {
          margin: 0px;
          padding: 0px;
        }

        body {
          background: white;
        }
      `}</style>

      <Header />
      <Hero />
      <Features />
      <Footer />
    </React.Fragment>
  )
}
