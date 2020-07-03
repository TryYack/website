import { useRouter, withRouter } from 'next/router';
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { useEffect, useState } from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig = {} } = getConfig() || {}

function Confirm(props) {
  const router = useRouter();
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    try {
      const { router: { query: { email, token } }} = props;

      if (!email || !token) return

      // If process is present, then we are running in dev mode
      // Otherwise we are in the browser on Netlify
      const CONFIRM_URL = 'https://api.weekdayapp.com/v1/account/email/confirmed'
      //const CONFIRM_URL = 'http://localhost:8181/v1/account/email/confirmed'

      fetch(CONFIRM_URL, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify({ email, token }),
      })
      .then(res => res.json())
      .then(data => {
        setLoading(false)

        if (!data.success) setError(true)
      })
      .catch(e => {
        setLoading(false)
        setError(true)
      })
    } catch (e) {
      setLoading(false)
      setError(true)
    }
  }, [props.router.query.email])

  return (
    <React.Fragment>
      <Head>
        <title>Weekday - Give your team superpowers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/static/images/favicon.png" rel="shortcut icon" />
        <link rel="stylesheet" href="https://use.typekit.net/wtx0nht.css"></link>
      </Head>

      <style global jsx>{`
        * {
          margin: 0px;
          padding: 0px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        body {
        }

        .container {
          background: #f3f3f3;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: center;
        }

        .inner {
          background: white;
          position: relative;
          height: 600px;
          width: 500px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: center;
          flex-direction: column;
        }

        .logo {
          position: absolute;
          top: 40px;
          left: 40px;
          z-index: 1000;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-content: center;
          align-items: center;
          margin-right: auto;
        }

        .logo .text {
          padding-left: 5px;
          position: relative;
          bottom: 2px;
          color: #007af5;
          font-size: 22px;
          font-weight: 400;
        }

        h1 {
          color: #585858;
          font-size: 50px;
          font-weight: 300;
          margin-top: 20px;
          text-align: center;          
        }

        h2 {
          color: #585858;
          font-size: 20px;
          font-weight: 400;
          padding-left: 20px;
          padding-right: 20px;
          text-align: center;
          margin-top: 20px;
        }

        h2 a {
          color: #007af5;
          text-decoration: none;
        }
      `}</style>
      <div className="container">
        <div className="inner">
          <div className="logo">
            <img src="../static/images/logo.svg" height="20" alt="Weekday"/>
          </div>

          {error && !loading &&
            <React.Fragment>
              <p><img src="../static/images/confirm_email_error.png" height="200" /></p>
              <h1>Whoops!</h1>
              <h2>Something has gone wrong!</h2>
            </React.Fragment>
          }

          {!error && !loading &&
            <React.Fragment>
              <p><img src="../static/images/confirm_email_confirmed.png" height="150" /></p>
              <h1>Congratulations!</h1>
              <h2>This email address is now confirmed! Please <a href="https://weekday.app" target="_blank">click here</a> to log in.</h2>
            </React.Fragment>
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Confirm);
