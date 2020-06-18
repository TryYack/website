import React from 'react'

export default function Features(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .features {
          background-color: #212835;
          padding: 50px;
          padding-top: 0px;
          padding-bottom: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
        }

        .features .hero {
          margin-top: -100px;
          text-align: center;
          width: 100%;
        }

        .features .hero .image {
          width: 75%;
          margin-right: auto;
          margin-left: auto;
        }

        .features .hero .image img {
          display: inline-block;
          border-radius: 10px;
          width: 100%;
        }

        .features h1 {
          font-size: 48px;
          width: 40%;
          margin-right: auto;
          margin-left: auto;
          margin-top: 100px;
          text-align: center;
          color: #F3F6FB;
          font-family: nimbus-sans-extended, sans-serif;
          font-weight: bold;
          font-style: normal;
        }

        .features h2 {
          font-size: 24px;
          margin-top: 20px;
          width: 40%;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 100px;
          text-align: center;
          color: #929AAC;
          font-weight: 400;
          line-height: 30px;
          font-style: normal;
        }

        .hero-features {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;
          width: 75%;
          margin-right: auto;
          margin-left: auto;
        }

          .hero-features .feature {
            flex: 1;
            text-align: left;
            padding: 10px;
            margin-top: 50px;
          }

            .hero-features .feature h3 {
              font-size: 22px;
              color: #929AAC;
              font-family: nimbus-sans-extended, sans-serif;
              font-weight: 400;
              margin-bottom: 10px;
            }

            .hero-features .feature p {
              font-size: 18px;
              color: #F3F6FB;
              line-height: 24px;
            }

        .small-features {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;
          width: 75%;
          margin-right: auto;
          margin-left: auto;
        }

          .small-features .feature {
            flex: 1;
            text-align: left;
            padding: 10px;
          }

            .small-features .feature h3 {
              font-size: 18px;
              color: #929AAC;
              font-family: nimbus-sans-extended, sans-serif;
              font-weight: 400;
              margin-bottom: 10px;
            }

            .small-features .feature p {
              font-size: 14px;
              color: #F3F6FB;
              line-height: 24px;
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
        <div className="hero">
          <div className="image">
            <img src="../static/images/screenshot.png" />
          </div>
          <div className="hero-features">
            <div className="feature">
              <h3>Video meetings that are easy</h3>
              <p>Archive, mute or favourite any channel  in the sidebar - these are only updated for your account. </p>
            </div>
            <div className="feature">
              <h3>Video meetings that are easy</h3>
              <p>Archive, mute or favourite any channel  in the sidebar - these are only updated for your account. </p>
            </div>
            <div className="feature">
              <h3>Video meetings that are easy</h3>
              <p>Archive, mute or favourite any channel  in the sidebar - these are only updated for your account. </p>
            </div>
          </div>
        </div>
        <h1>
          Team back team collaboration
        </h1>
        <h2>
          Yack makes working on a team fun again. This is also some copy about some cool new thingy ma bob.
        </h2>
        <div className="small-features">
          <div className="feature">
            <h3>Video meetings that are easy</h3>
            <p>Archive, mute or favourite any channel  in the sidebar - these are only updated for your account. </p>
          </div>
          <div className="feature">
            <h3>Video meetings that are easy</h3>
            <p>Archive, mute or favourite any channel  in the sidebar - these are only updated for your account. </p>
          </div>
          <div className="feature">
            <h3>Video meetings that are easy</h3>
            <p>Archive, mute or favourite any channel  in the sidebar - these are only updated for your account. </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
