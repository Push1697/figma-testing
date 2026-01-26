import React, { useState } from 'react'
import './LoginContainer.css'

export default function LoginContainer() {
  const [formData, setFormData] = useState({
    customerId: '',
    name: '',
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login form submitted:', formData)
    // Add your login logic here
    alert(`Login attempt with Customer ID: ${formData.customerId}`)
  }

  const handleSignUp = () => {
    console.log('Navigate to sign up')
    alert('Redirecting to Sign Up page...')
    // Add your sign up navigation logic here
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-circle">
            <span className="logo-text">L</span>
          </div>
          <h1 className="welcome-title">Welcome Back</h1>
          <p className="welcome-subtitle">Please enter your details to sign in</p>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Customer ID Field */}
          <div className="form-group">
            <label className="form-label">Customer ID</label>
            <input
              type="text"
              name="customerId"
              className="form-input"
              placeholder="Enter your customer ID"
              value={formData.customerId}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Full Name Field */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="forgot-password-link">
              <a href="#forgot">Forgot password?</a>
            </div>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Sign Up Link */}
        <div className="signup-link">
          <span>Don't have an account? </span>
          <a href="#signup" onClick={(e) => {
            e.preventDefault()
            handleSignUp()
          }}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}
