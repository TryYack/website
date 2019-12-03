import React from 'react'

export default function Features(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .features {
          background-color: #08111d;
          background-image: url(../static/images/pattern.png);
          background-size: 1000px;
          background-repeat: no-repeat;
          background-position: center center;
          padding: 50px;
          padding-bottom: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
        }

        .features h1 {
          font-size: 40px;
          width: 40%;
          margin-right: auto;
          margin-left: auto;
          text-align: center;
          color: #EFF7FC;
          font-family: 'hk_groteskmedium', helvetica;
        }

        .features h2 {
          font-size: 20px;
          margin-top: 20px;
          width: 50%;
          margin-right: auto;
          margin-left: auto;
          font-family: 'hk_grotesklight', helvetica;
          text-align: center;
          color: #EFF7FC;
          line-height: 30px;
        }

        .features h3 {
          font-size: 15px;
          margin-top: 50px;
          width: 50%;
          margin-right: auto;
          margin-left: auto;
          font-family: 'hk_grotesklight', helvetica;
          text-align: center;
          color: #007AF5;
          line-height: 25px;
        }

        .features img {
          display: block;
          border-radius: 10px;
          width: 75%;
          margin-top: 50px;
          box-shadow: 0px 0px 100px 20px rgba(0,47,110,0.25);
        }

        @media only screen and (max-width: 1000px) {
          .hero {
            background-image: none;
          }

          .features h1 {
            width: 100%;
          }

          .features h2 {
            width: 100%;
          }

          .features h3 {
            width: 100%;
          }
        }
      `}</style>

      <div className="features">
        <h1>
          Empower your team
        </h1>
        <h2>
          Channels, private messaging, security, team management,
          markdown support, replies, reactions, attachments, an app store - it's all here.
        </h2>
        <img src="../static/images/screenshot.png" />
        <h3>
          We plan on rolling out even more tools to keep your team productive.
          For more information - follow us on social media or sign up to our mailing list & we'll let you know as soon as they're available.
        </h3>
      </div>
    </React.Fragment>
  )
}
