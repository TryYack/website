import React from 'react'
import Subscribe from '../components/subscribe'
import Link from 'next/link'

export default function Hero(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .hero {
          margin: 0px;
          padding: 0px;
          padding-bottom: 50px;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
          background-color: white;
          /* background-image: url(../static/images/hero.jpg); */
          background-size: 55%;
          background-repeat: no-repeat;
          background-position: right top;
        }

        .hero h1 {
          font-size: 82px;
          color: #151B26;
          font-weight: 900;
          font-family: roc-grotesk, sans-serif;
          font-weight: 500;
          font-style: normal;
          line-height: 75px;
          text-align: center;
          margin-right: auto;
          margin-left: auto;
          margin-top: 50px;
          width: 50%;
        }

        .hero h2 {
          margin-top: 25px;
          font-size: 22px;
          color: #212835;
          line-height: 40px;
          width: 100%;
          font-weight: 400;
          text-align: center;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
          width: 700px;
        }

        .hero p {
          font-size: 12px;
          color: #515D79;
          width: 100%;
          text-align: center;
          margin-right: auto;
          margin-left: auto;
          width: 350px;
        }

        .hero a.button {
          background-color: #3369E7;
          border-radius: 5px;
          color: white;
          font-weight: 500;
          cursor: pointer;
          border: none;
          padding: 15px 15px 15px 15px;
          font-size: 20px;
          transition: background-color 0.25s linear;
          text-decoration: none;
          font-family: roc-grotesk, sans-serif;
        }

        .hero a.button:hover {
          background-color: #2b62e3;
        }

        .center {
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
          text-align: center;
        }

        @media only screen and (max-width: 1000px) {
          .hero {
            background-image: none;
          }

          .hero h1 {
            font-size: 50px;
          }

          .hero h2 {
            width: 100%;
          }

          .hero p {
            width: 100%;
          }
        }
      `}</style>

      <div className="hero">
        <h1>Bring your team together</h1>
        <h2>Yack is a messaging & collaboration platform that makes sure your team doesn't miss a beat. Even people outside your team will love it.</h2>

        {/* <Subscribe /> */}

        <div className="center"><Link href="https://yack.app"><a target="_blank" className="button">Get started</a></Link></div>
        <div className="center">
          <p>Yack is free to use for teams of any size. We also offer paid plans with additional features, storage, and support.</p>
        </div>
        
      </div>
    </React.Fragment>
  )
}
