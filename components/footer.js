import React from 'react'
import Subscribe from './subscribe'
import Link from 'next/link'

export default function Footer(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .footer {
          background-color: #212835;
          padding: 50px;
        }

        .footer p {
          font-size: 15px;
          width: 50%;
          margin-right: auto;
          margin-left: auto;
          font-family: 'hk_grotesklight', helvetica;
          text-align: center;
          color: #8492A6;
          line-height: 25px;
        }

        .footer ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;

        }

        .footer ul li {
          list-style-type: none;
          margin: 10px;
          padding: 0px;
        }

        .footer ul li a {
          transition: opacity 0.25s linear;
          opacity: 1;
        }

        .footer ul li a:hover {
          opacity: 0.75;
        }
      `}</style>

      <div className="footer">
        <Subscribe />  
        <p>
          Yack &copy; All rights reserved
        </p>
        <p>
          <img src="https://yack-marketing.s3-us-west-2.amazonaws.com/logo.svg" height="30" alt="Yack"/>
        </p>
        <ul>
          <li><Link to="/termsofuse" className="button">Terms of use</Link></li>
          <li><Link to="/privacypolicy" className="button">Privacy policy</Link></li> 
          <li><a href="https://github.com/YackLabs" target="_blank"><img src="../static/icons/github.svg" border="0" height="20" /></a></li>
          <li><a href="https://twitter.com/yackhq" target="_blank"><img src="../static/icons/twitter.svg" border="0" height="20" /></a></li>
        </ul>
      </div>
    </React.Fragment>
  )
}
