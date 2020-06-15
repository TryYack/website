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

        .subscribe input {
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
        <form className="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="2BE4EF332AA2E32596E38B640E905619E8F2A4A9BC5AFAFD1F79F545ED49CE1EF043DFD1E8F58B5970CD8C352A910033FC84CEB3C085CB0E46333793E01E92F8">
          <div>
            <div>
              <input aria-label="Name" id="fieldName" maxLength="200" name="cm-name" placeholder="Name" />
            </div>
            <div>
              <input autoComplete="Email" aria-label="Email" className="js-cm-email-input qa-input-email" id="fieldEmail" maxLength="200" name="cm-ydlkhut-ydlkhut" required="" type="email" placeholder="Email" />
            </div>
          </div>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </React.Fragment>
  )
}
