import React from 'react'

export default function Downloads(props) {
  return (
    <React.Fragment>
      <style global jsx>{`
        .downloads {
          background: #011126;
          margin: 0px;
          padding: 0px;
          padding-top: 30px;
          padding-bottom: 30px;
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          align-content: center;
          justify-content: center;
        }

        .downloads h1 {
          font-size: 48px;
          width: 60%;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
          text-align: center;
          color: #515D79;
          font-weight: 700;
          font-style: normal;
          display: none;
        }

        .downloads h2 {
          font-size: 20px;
          display: inline-block;
          text-align: center;
          color: #6E7E97;
          font-weight: 500;
          margin-right: 20px;
        }

        @media only screen and (max-width: 1000px) {
          .downloads {
            width: 500px;
          }
        }

        .downloads .platforms {
          display: flex;
          flex-direction: row;
          align-items: center;
          align-content: center;
          justify-content: center;
        }

        .downloads .platforms .platform {
          margin: 10px;
        }
      `}</style>

      <div className="downloads">
        {/*
        <h1>
          Join our mailing list
        </h1>
        */}
        <h2>
          Download for your platform:
        </h2>
        <div className="platforms">
          <div className="platform">
            <a href="https://weekday-builds.s3.eu-central-1.amazonaws.com/v0.1.0/Weekday.v0.1.0.Windows.zip" target="_blank"><img src="../static/icons/windows.svg" border="0" height="30" /></a>
          </div>
          <div className="platform">
            <a href="https://weekday-builds.s3.eu-central-1.amazonaws.com/v0.1.0/Weekday.v0.1.0.MacOS.zip" target="_blank"><img src="../static/icons/apple.svg" border="0" height="30" /></a>
          </div>
          <div className="platform">
            <a href="https://weekday-builds.s3.eu-central-1.amazonaws.com/v0.1.0/Weekday.v0.1.0.Linux.zip" target="_blank"><img src="../static/icons/linux.svg" border="0" height="30" /></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
