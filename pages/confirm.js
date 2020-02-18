import { useRouter, withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
import { useEffect, useState } from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig = {} } = getConfig() || {}

// This doesn't work when using proces.env.variables
const { CONFIRM_URL } = publicRuntimeConfig

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

      fetch('https://api.yack.co/v1/account/email/confirmed', {
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
        console.log(data)
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
      <style global jsx>{`
        * {
          margin: 0px;
          padding: 0px;
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
          font-family: 'hk_groteskmedium', helvetica;
        }

        h1 {
          color: #585858;
          font-size: 50px;
          font-weight: 300;
          margin-top: 20px;
          text-align: center;
          font-family: 'hk_groteskmedium', helvetica;
        }

        h2 {
          color: #585858;
          font-size: 20px;
          font-weight: 400;
          padding-left: 20px;
          padding-right: 20px;
          text-align: center;
          margin-top: 20px;
          font-family: 'hk_groteskmedium', helvetica;
        }

        h2 a {
          color: #007af5;
          text-decoration: none;
        }
      `}</style>
      <div className="container">
        <div className="inner">
          <div className="logo">
            <img src="../static/images/logo.png" height="20" alt="Yack"/>

            <div className="text">
              yack
            </div>
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
              <h2>This email address is now confirmed! Please <a href="https://app.yack.co" target="_blank">click here</a> to log in.</h2>
            </React.Fragment>
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Confirm);
