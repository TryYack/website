import React from 'react'
import Link from 'next/link'

export default function Header(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .header {
          width: 100%;
        }

        .header .h-container {
          width: 100%;
          padding-top: 75px;
          padding-bottom: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;
        }

        .header .h-container .flexer {
          flex: 1;
        }

        .header .h-container .logo {
          position: relative;
          z-index: 1000;
          display: block;
          margin-left: 50px;
        }

        .header .h-container .links {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-content: center;
          align-items: center;
          margin-right: 50px;
        }

          .header .h-container .links a {
            color: white;
            font-size: 16px;
            display: block;
            cursor: pointer;
            font-weight: 500;
            margin-left: 30px;
            text-decoration: none;
          }

            .header .h-container .links a:first-child {
              margin-left: 0px;
            }

          .header .h-container .links a.button {
            color: #b84592;
          }

          .header .h-container .links a:hover {
            opacity: 0.8;
          }
      `}</style>
      <div className="header">
        <div className="h-container">
          <a href="/" className="logo">
            <img src="../static/images/logo.png" height="50" alt="Weekday"/>
          </a>

          <div className="flexer"></div>

          <div className="links">
            <a href="/">Home</a>
            <a href="/#features">Features</a>
            <a href="/#faq">FAQ</a>
            <a href="mailto:support@weekdayapp.com">Support</a>
            <a href="https://app.weekdayapp.com" target="_blank" className="button">Login / Signup</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
