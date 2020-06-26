import React from 'react'

export default function Features(props) {
  return (
    <React.Fragment>
      <a name="features"></a>
      <style jsx>{`
        .features {
          background-color: #212835;
          padding: 50px;
          padding-top: 0px;
          padding-bottom: 0px;
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
          width: 80%;
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
          width: 60%;
          margin-right: auto;
          margin-left: auto;
          margin-top: 100px;
          text-align: center;
          color: #F3F6FB;
          font-family: aktiv-grotesk-extended, sans-serif;
          font-weight: 600;
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
          align-items: flex-start;
          width: 80%;
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
              font-family: aktiv-grotesk-extended, sans-serif;
              font-weight: 400;
              margin-bottom: 10px;
            }

            .hero-features .feature a {
              font-size: 18px;
              color: #00aeff;
              line-height: 24px;
              text-decoration: none;
              margin-top: 10px;
              display: inline-block;
            }

            .hero-features .feature h3 .coming-soon {
              background: #b84592;
              color: white;
              font-size: 8px;
              font-weight: 800;
              padding: 5px;
              text-transform: uppercase;
              border-radius: 3px;
              position: relative;
              top: -2px;
              left: 5px;
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
          align-items: flex-start;
          width: 80%;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
        }

          .small-features .feature {
            flex: 1;
            text-align: left;
            padding: 10px;
          }

            .small-features .feature h3 {
              font-size: 18px;
              color: #929AAC;
              font-family: aktiv-grotesk-extended, sans-serif;
              font-weight: 400;
              margin-bottom: 10px;
            }

            .small-features .feature h3 a {
              font-size: 18px;
              color: #00aeff;
              font-family: aktiv-grotesk-extended, sans-serif;
              font-weight: 400;
              margin-bottom: 10px;
            }

            .small-features .feature h3 .app {
              background: #8e43e7;
              color: white;
              font-size: 8px;
              font-weight: 800;
              padding: 5px;
              text-transform: uppercase;
              border-radius: 3px;
              position: relative;
              top: -2px;
              left: 5px;
            }

            .small-features .feature h3 .coming-soon {
              background: #b84592;
              color: white;
              font-size: 8px;
              font-weight: 800;
              padding: 5px;
              text-transform: uppercase;
              border-radius: 3px;
              position: relative;
              top: -2px;
              left: 5px;
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
              <h3>Video & audio calls <span className="coming-soon">Coming soon</span></h3>
              <p>Catch up with your team using video or audio calls - keeping it all on one platform.</p>
              <p><a href="https://github.com/Yack" target="_blank">Keep me updated</a></p>
            </div>
            <div className="feature">
              <h3>We support OSS</h3>
              <p>The source code for the Yack client app is completely open source, along with other goodies.</p>
              <p><a href="https://github.com/Yack" target="_blank">Read more</a></p>
            </div>
            <div className="feature">
              <h3>Easily extendable</h3>
              <p>Easily extend the platform with tools & examples we're constantly refining and improving.</p>
              <p><a href="https://github.com/Yack" target="_blank">Read more</a></p>
            </div>
          </div>
        </div>
        <h1>
          Take back team collaboration
        </h1>
        <h2>
          Yack makes working in a team fun again. Here are some things Yack can help your team with.
        </h2>
        <div className="small-features">
          <div className="feature">
            <h3>Private & public channels</h3>
            <p>Yack channels can be public or private (when you need to talk one on one). Channels can also be one-way (broadcast) or limited to a group of people.</p>
          </div>
          <div className="feature">
            <h3>Archiving, muting & starring</h3>
            <p>When you need to focus on only a few projects, Yack lets you mute, archive or star channels to keep them nice and organised.</p>
          </div>
          <div className="feature">
            <h3>Granular permissions</h3>
            <p>Give only a few people power - or many. Permissions can be set on channels & teams independantly.</p>
          </div>
        </div>
        <div className="small-features">
          <div className="feature">
            <h3>Do not disturb, presences & notifications</h3>
            <p>When you need to focus, you can turn off notifications for a time period - or set your presence to busy or away.</p>
          </div>
          <div className="feature">
            <h3>Made for remote work</h3>
            <p>Yack will awlays let you know what timezone your fellow member is on. </p>
          </div>
          <div className="feature">
            <h3>Unlimited history</h3>
            <p>We won't limit the number of searchable messages for the alpha. Keep updated about premium plans by subscribing to our mailing list.</p>
          </div>
        </div>
        <div className="small-features">
          <div className="feature">
            <h3>Appstore & app platform</h3>
            <p>Build your own team apps, private apps or install other people's apps from the app store. </p>
          </div>
          <div className="feature">
            <h3>Polls <span className="app">App</span></h3>
            <p>Get feedback from your channel members by posting polls to the channel - there is no limit to how many polls are allowed.</p>
          </div>
          <div className="feature">
            <h3>Google Drive support <span className="app">App</span></h3>
            <p>Connect Google Drive accounts so you can access your files quickly & easily. </p>
          </div>
        </div>
        <div className="small-features">
          <div className="feature">   
            <h3>Zapier integration</h3>
            <p>Connect your favourite app to Yack by using our Zapier integration.</p>
          </div>
          <div className="feature">
            <h3>GDPR <span className="coming-soon">Coming Soon</span></h3>
            <p>We believe that your data is yours and want to do our best in making it as secure & accessible to you as possible.</p>
          </div>
          <div className="feature">
            <h3>... and more! Go and <a href="https://yack.app" target="_blank">see for youself.</a></h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
