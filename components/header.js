import React from 'react'
import Link from 'next/link'

export default function Header(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .header {
          width: 100%; 
          background: #151c26;
        }

        .header .container {
          margin-left: auto;
          margin-right: auto;
          width: 80%;
          padding-top: 75px;
          padding-bottom: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;
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
            color: #F3F6FB;
            font-size: 16px;
            cursor: pointer;
            font-weight: 500;
            margin-left: 30px;
            text-decoration: none;
          } 

          .header .links .bottom a.button {
            color: #b84592;
            cursor: pointer;
            border: none;
          }

          .header .links .bottom a.button:hover {
            color: #2b62e3;
          }
      `}</style>
      <div className="header">
        <div className="container">
          <a href="/" className="logo">
            <img src="../static/images/logo.png" height="30" alt="Weekday"/>
          </a>

          <div className="links">
            {/* <div className="top">
            </div> */}
            <div className="bottom">
              <a href="/">Home</a>
              <a href="/#features">Features</a>
              <a href="/#faq">FAQ</a>
              <a href="mailto:support@weekdayapp.com">Support</a>
              <a href="https://weekday.app" target="_blank" className="button">Login / Signup</a>            
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
