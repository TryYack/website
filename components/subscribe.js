import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

export default function Subscribe(props) {
  return (
    <React.Fragment>
      <style global jsx>{`
        .subscribe {
          margin: 0px;
          padding: 0px;
          background: #FFFFFF;
          margin-top: 30px;
          margin-bottom: 30px;
          width: 500px;
          position: relative;
        }

        @media only screen and (max-width: 1000px) {
          .subscribe {
            width: 500px;
          }
        }

        .subscribe div {
          font-family: 'hk_groteskmedium', helvetica;
          position: relative;
        }

        .subscribe input[type="email"] {
          border: 0px;
          padding: 20px;
          height: 75px;
          font-size: 18px;
          color: #333;
          font-family: 'hk_groteskmedium', helvetica;
          background: transparent;
          outline: none;
          width: 500px;
          border: 5px solid #F1F1F1;
          box-sizing: border-box;
          border-radius: 40px;
          margin-top: 10px;
        }

        .subscribe button {
          background: #F1F1F1;
          border-radius: 0px 33px 33px 0px;
          width: 150px;
          height: 75px;
          border: none;
          font-size: 18px;
          font-family: 'hk_groteskmedium', helvetica;
          color: #0D0D0D;
          transition: opacity 0.25s linear;
          opacity: 1;
          cursor: pointer;
          position: relative;
          left: 350px;
          transform: translateY(-100%);
          outline: none;
        }

        .subscribe button:hover {
          opacity: 0.75;
        }

        @media only screen and (max-width: 500px) {
          .subscribe,
          .subscribe input[type="email"] {
            width: 300px;
          }

          .subscribe button {
            left: 150px;
          }
        }
      `}</style>



      <div className="subscribe">
        <MailchimpSubscribe
          url="https://yack.us3.list-manage.com/subscribe/post?u=5db567ea876fe7ae1444db9f3&amp;id=851e307826"
        />
      </div>
    </React.Fragment>
  )
}
