import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestPage from '../TestPage'

describe('TestPage', () => {
  it('renders the TEST badge', () => {
    render(<TestPage />)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  it('renders the page title', () => {
    render(<TestPage />)
    expect(screen.getByText(/Página de Pruebas/i)).toBeInTheDocument()
  })

  it('renders the DESIGN SYSTEM section', () => {
    render(<TestPage />)
    expect(screen.getByText(/Design System/i)).toBeInTheDocument()
  })

  it('renders the counter starting at 0', () => {
    render(<TestPage />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('increments counter when + button is clicked', async () => {
    const user = userEvent.setup()
    render(<TestPage />)
    const incBtn = screen.getByRole('button', { name: '+' })
    await user.click(incBtn)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('decrements counter when - button is clicked', async () => {
    const user = userEvent.setup()
    render(<TestPage />)
    const decBtn = screen.getByRole('button', { name: '−' })
    await user.click(decBtn)
    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  it('resets counter when Reset is clicked', async () => {
    const user = userEvent.setup()
    render(<TestPage />)
    await user.click(screen.getByRole('button', { name: '+' }))
    await user.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders the GitHub Pages footer link', () => {
    render(<TestPage />)
    const link = screen.getByRole('link', { name: /GitHub Pages/i })
    expect(link).toBeInTheDocument()
  })
})
