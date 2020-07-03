import React from 'react'
import Link from 'next/link'
import Subscribe from './subscribe'

export default function Footer(props) {
  return (
    <React.Fragment>
      <a name="footer"></a>
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
          text-align: center;
          color: #8492A6;
          line-height: 25px;
        }

        .footer .image {
          padding: 10px;
          width: 50%;
          margin-right: auto;
          margin-left: auto;
          text-align: center;
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
          color: #929AAC;
          text-decoration: none;
        }

        .footer ul li a:hover {
          opacity: 0.75;
        }
      `}</style>

      <div className="footer">
        <Subscribe />  

        <p>
          Weekday &copy; 2020 - All rights reserved 
        </p>
        <div className="image">
          
        </div>
        <ul>
          {/* <li><a href="/"><img src="https://weekday-assets.s3-us-west-2.amazonaws.com/logo.svg" height="30" alt="Weekday" border="0" /></a></li> */}
          <li><a href="/privacypolicy">Privacy policy</a></li>
          <li><a href="/termsofuse">Terms of use</a></li>
          <li><a href="https://github.com/WeekdayApp" target="_blank"><img src="../static/icons/github.svg" border="0" height="20" /></a></li>
          {/* <li><a href="https://twitter.com/weekdayhq" target="_blank"><img src="../static/icons/twitter.svg" border="0" height="20" /></a></li> */}
        </ul>
      </div>
    </React.Fragment>
  )
}
