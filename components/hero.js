import React from 'react'
import Subscribe from '../components/subscribe'

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
          background-image: url(../static/images/hero.jpg);
          background-size: 55%;
          background-repeat: no-repeat;
          background-position: right top;
        }

        .hero h1 {
          font-size: 80px;
          color: #202529;
          font-weight: 900;
          font-family: 'hk_groteskbold', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, 'hk_groteskblack', helvetica;
          line-height: 80px;
        }

        .hero h2 {
          margin-top: 25px;
          font-size: 25px;
          color: #202529;
          line-height: 40px;
          font-weight: 300;
          width: 40%;
          font-family: 'hk_grotesklight', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, 'hk_grotesklight', helvetica;
        }

        .hero p {
          font-size: 14px;
          color: #808080;
          width: 40%;
          font-family: 'hk_grotesklight', helvetica;
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

        <h1>
          A hackable team<br/>
          collaboration<br/>
          platform
        </h1>
        {/*
          Idea:
          <h1>
            Communication<br/>
            & collaboration<br/>
            for teams
          </h1>
        */}
        <h2>
          Yack is a messaging platform
          that helps your team get things done - like they
          had superpowers.
        </h2>

        <Subscribe />

        <p>
          Yack is currently in development, but we're almost ready to launch.
          Sign up to our mailing and we’ll let you know when you can sign up.
        </p>
      </div>
    </React.Fragment>
  )
}
