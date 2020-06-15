import React from 'react'
import Link from 'next/link'

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
        }

        .header a {
          color: #202529;
          background-color: white;
          font-size: 16px;
          cursor: pointer;
          font-weight: 500;
          margin-right: 30px;
          text-decoration: none;
        }

        .header a.button {
          background-color: #3369E7;
          border-radius: 5px;
          color: white;
          font-weight: 500;
          cursor: pointer;
          border: none;
          padding: 15px 15px 15px 15px;
          font-size: 16px;
          transition: background-color 0.25s linear;
        }

        .header a.button:hover {
          background-color: #2b62e3;
        }
      `}</style>

      <div className="header">
        <a href="/" className="logo">
          <img src="https://yack-marketing.s3-us-west-2.amazonaws.com/logo-text.svg" height="30" alt="Yack"/>
        </a>

        <Link href="/privacypolicy"><a>Product</a></Link>
        <Link href="/privacypolicy"><a>Pricing</a></Link>
        <Link href="/privacypolicy"><a>FAQ</a></Link>
        <Link href="/privacypolicy"><a>Support</a></Link>
        <Link href="https://yack.app"><a target="_blank" className="button">Get started</a></Link>
      </div>
    </React.Fragment>
  )
}
