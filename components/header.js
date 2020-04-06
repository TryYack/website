import React from 'react'

export default function Header(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .header {
          padding-top: 50px;
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
          text-decoration: none !important;
        }

        .header .logo a {
          text-decoration: none !important;
        }

        .header .logo .text {
          padding-left: 5px;
          position: relative;
          bottom: 2px;
          color: #007af5;
          font-size: 22px;
          font-weight: 400;
          font-family: 'hk_groteskmedium', helvetica;
          text-decoration: none !important;
        }

        .header .button {
          color: #202529;
          background-color: white;
          font-size: 16px;
          cursor: pointer;
          font-weight: 400;
          font-family: 'hk_grotesksemibold', helvetica;
          border-radius: 5px;
          border: none;
          padding: 15px 30px 15px 0px;
          position: relative;
          margin-left: 5px;
          transition: opacity 0.25s linear;
          opacity: 1;
          text-decoration: none;
        }

        .header .button:hover {
          opacity: 0.75;
        }

        .header .button.solid {
          border: 2px solid #202529;
          padding: 15px 20px 15px 20px;
        }
      `}</style>

      <div className="header">
        <a href="/" className="logo">
          <img src="https://yack-marketing.s3-us-west-2.amazonaws.com/logo.svg" height="20" alt="Yack"/>

          <div className="text">
            yack
          </div>
        </a>

        <a href="/termsofuse" className="button">Terms of use</a>
        <a href="/privacypolicy" className="button">Privacy policy</a>

        {/*
          For later:
          <button>Home</button>
          <button>Tour</button>
          <button>Pricing</button>
          <button>Developers</button>
          <button>Support</button>
          <button className="solid">Sign in</button>
        */}
      </div>
    </React.Fragment>
  )
}
