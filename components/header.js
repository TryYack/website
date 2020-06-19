import React from 'react'
import Link from 'next/link'

export default function Header(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .header {
          padding-top: 75px;
          padding-bottom: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
        }

        .header .logo {
          position: relative;
          z-index: 1000;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-content: center;
          align-items: center;
          margin-right: auto;
        }

        .header .links {

        }

        .header .links .top {
          text-align: right;
          margin-bottom: 20px;
        }

          .header .links .top a {
            color: #ACB5BD;
            background-color: white;
            font-size: 12px;
            cursor: pointer;
            font-weight: 600;
            margin-left: 20px;
            text-decoration: none;
          } 

        .header .links .bottom {
          text-align: right;
        }

          .header .links .bottom a {
            color: #202529;
            background-color: white;
            font-size: 16px;
            font-family: roc-grotesk;
            cursor: pointer;
            font-weight: 500;
            margin-left: 30px;
            text-decoration: none;
          } 

          .header .links .bottom a.button {
            color: #3369E7;
            font-weight: 600;
            cursor: pointer;
            border: none;          
            font-size: 16px;
          }

          .header .links .bottom a.button:hover {
            color: #2b62e3;
          }

        .strip {
          background-color: #b84592;          
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;
          position: fixed;
          top: 0px;
          left: 0px;
          width: 100%;
        }

          .strip .text {
            color: white;
            font-size: 11px;
            font-weight: 500;
            flex: 1;
            padding: 10px;
          }

          .strip a {
            font-size: 11px;
            font-weight: 700;
            color: white;
            text-decoration: none;
            display: inline-block;
            margin-left: 10px;
          }

          .strip a:hover {
            text-decoration: underline;
          }
      `}</style>

      <div className="strip">
        <span className="text">
          We're in alpha at the moment, keep up to date about releases & news by subscribing to our mailing list. <a href="#footer">Subscribe now</a>
        </span>
      </div>

      <div className="header">
        <a href="/" className="logo">
          <img src="https://yack-marketing.s3-us-west-2.amazonaws.com/logo-text.svg" height="30" alt="Yack"/>
        </a>

        <div className="links">
          <div className="top">
            <a href="/privacypolicy" target="_blank">Privacy policy</a>
            <a href="/termsofuse" target="_blank">Terms of use</a>
            <a href="mailto:support@yack.co">Support / help</a>
          </div>
          <div className="bottom">
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
            <a href="https://yack.app" target="_blank" className="button">Login / Signup</a>            
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
