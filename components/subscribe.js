import React from 'react'

export default function Subscribe(props) {
  return (
    <React.Fragment>
      <style global jsx>{`
        .subscribe {
          background-color: #212835;
          margin: 0px;
          padding: 0px;
          margin-top: 30px;
          margin-bottom: 30px;
          width: 500px;
          position: relative;
          margin-left: auto;
          margin-right: auto;
        }

        .subscribe h1 {
          font-size: 48px;
          width: 60%;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
          text-align: center;
          color: #F3F6FB;
          font-family: aktiv-grotesk-extended, sans-serif;
          font-weight: 600;
          font-style: normal;
        }

        .subscribe h2 {
          font-size: 24px;
          margin-top: 20px;
          width: 100%;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 100px;
          text-align: center;
          color: #929AAC;
          font-weight: 400;
          line-height: 30px;
          font-style: normal;
        }

        @media only screen and (max-width: 1000px) {
          .subscribe {
            width: 500px;
          }
        }

        .subscribe div {
          position: relative;
        }

        .subscribe input {
          border: 0px;
          padding: 20px;
          height: 75px;
          font-size: 14px;
          color: #F3F6FB;
          background: #374352;
          outline: none;
          width: 500px;
          box-sizing: border-box;
          border-radius: 5px;
          margin-top: 10px;
        }

        .subscribe input::placeholder {
          color: #929AAC;
        }

        .subscribe button {
          background: #151c26;
          border-radius: 0px 5px 5px 0px;
          width: 150px;
          height: 75px;
          border: none;
          font-size: 18px;
          font-family: aktiv-grotesk-extended, helvetica;
          color: #929AAC;
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
        <h1>
          Join our mailing list
        </h1>
        <h2>
          Keep up to date with releases & news.
        </h2>

        <form className="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="2BE4EF332AA2E32596E38B640E905619E8F2A4A9BC5AFAFD1F79F545ED49CE1EF043DFD1E8F58B5970CD8C352A910033FC84CEB3C085CB0E46333793E01E92F8">
          <div>
            <div>
              <input aria-label="Name" id="fieldName" maxLength="200" name="cm-name" placeholder="Enter full name" />
            </div>
            <div>
              <input autoComplete="Email" aria-label="Email" className="js-cm-email-input qa-input-email" id="fieldEmail" maxLength="200" name="cm-ydlkhut-ydlkhut" required="" type="email" placeholder="Enter email" />
            </div>
          </div>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </React.Fragment>
  )
}
