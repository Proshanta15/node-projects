import { useState } from 'react'
import '../style/login.css'

export default function Login() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    setUser({
      email: '',
      password: ''
    })
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-copy">
          <p className="login-eyebrow">Welcome back</p>
          <h1>Login</h1>
          <p>Enter your email and password to access your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={user.email}
              onChange={(e)=> setUser({...user, email: e.target.value})}
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={user.password}
              onChange={(e)=> setUser({...user, password: e.target.value})}
            />
          </div>

          <button type="submit" className="login-button">
            Login Now
          </button>
        </form>
      </section>
    </main>
  )
}
