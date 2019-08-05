import React from 'react'

export default function Footer(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .footer {
          background-color: #0f1c2e;
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
        <p>
          Weekday &copy; All rights reserved
        </p>
        <ul>
          <li><a href="https://github.com/getweekday" target="_blank"><img src="../static/icons/github.svg" border="0" height="20" /></a></li>
          <li><a href="https://twitter.com/getweekday" target="_blank"><img src="../static/icons/twitter.svg" border="0" height="20" /></a></li>
        </ul>
      </div>
    </React.Fragment>
  )
}
