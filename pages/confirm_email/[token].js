import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
import { useEffect, useState } from 'react'

function Index(props) {
  const router = useRouter();
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!router.query.token) return

    setLoading(true)
    setError(false)

    try {
      const payload = atob(router.query.token);
      const { token, email } = JSON.parse(payload);

      fetch('http://localhost:8181/api/v1/auth/confirm', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: payload,
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
  }, [router.query.token])

  return (
    <React.Fragment>
      <h1>{router.query.token}</h1>
    </React.Fragment>
  );
}

export default Index;
