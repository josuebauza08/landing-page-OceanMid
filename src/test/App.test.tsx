import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App', () => {
  it('renders the OceanMid heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /OceanMid/i })).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    const heroImg = screen.getByAltText('OceanMid Hero')
    expect(heroImg).toBeInTheDocument()
  })

  it('renders the Explore the Depths link', () => {
    render(<App />)
    expect(screen.getByText(/Explore the Depths/i)).toBeInTheDocument()
  })

  it('renders the Our Vision section', () => {
    render(<App />)
    expect(screen.getByText(/Our Vision/i)).toBeInTheDocument()
  })

  it('renders the Connect section', () => {
    render(<App />)
    expect(screen.getByText(/Connect/i)).toBeInTheDocument()
  })

  it('renders GitHub link with correct href', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /GitHub/i })
    expect(link).toHaveAttribute('href', 'https://github.com/oceanmid')
  })
})
