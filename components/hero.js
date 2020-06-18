import React from 'react'
import Subscribe from '../components/subscribe'
import Link from 'next/link'
import { ArrowRight } from 'react-feather'

export default function Hero(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .hero {
          margin: 0px;
          padding: 0px;
          padding-bottom: 200px;
          width: 100%;
          background-color: white;              
          background-repeat: no-repeat;
          background-position: right top;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;  
        }

        .hero h1 {
          font-size: 82px;
          color: #151B26;
          font-family: nimbus-sans-extended, sans-serif;
          font-weight: 300;
          font-style: normal;
          line-height: 75px;
          text-align: center;
          margin-right: auto;
          margin-left: auto;
          margin-top: 50px;
          width: 50%;
        }

        .hero h2 {
          margin-top: 25px;
          font-size: 22px;
          color: #212835;
          line-height: 40px;
          width: 100%;
          font-weight: 400;
          text-align: center;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
          width: 700px;
        }

        .hero a.button {
          background-color: #3369E7;
          border-radius: 5px;
          color: white;
          font-weight: 500;
          cursor: pointer;
          border: none;
          padding: 20px;
          font-size: 20px;
          transition: background-color 0.25s linear;
          text-decoration: none;
          font-family: nimbus-sans-extended, sans-serif;
          width: 200px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;   
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 20px;
        }

          .hero a.button .icon {
            margin-left: 10px;
            position: relative;
            top: 2px;
          }

          .hero a.button:hover {
            background-color: #2b62e3;
          }

        .hero p {
          font-size: 12px;
          color: #515D79;
          width: 100%;
          text-align: center;
          margin-right: auto;
          margin-left: auto;
          width: 350px;
        }

        @media only screen and (max-width: 1000px) {
          .hero {
            background-image: none;
          }

          .hero h1 {
            font-size: 50px;
          }

          .hero h2 {
            width: 100%;
          }

          .hero p {
            width: 100%;
          }
        }
      `}</style>

      <div className="hero">
        <h1>Bring your team together</h1>
        <h2>Yack is a messaging & collaboration platform that makes sure your team doesn't miss a beat. Even people outside your team will love it.</h2>
        <a target="_blank" className="button" href="https://yack.app">
          <span>Get started</span>
          <span className="icon"><ArrowRight color="white" size="25" /></span>
        </a>  
        <p>Yack is free to use for teams of any size. We also offer paid plans with additional features, storage, and support.</p>    
      </div>
    </React.Fragment>
  )
}
