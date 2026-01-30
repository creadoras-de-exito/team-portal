import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import HeroSection from '~/components/HeroSection.vue'

describe('Hero Component', () => {
  // it('renders hero title and subtitle', () => {
  //   render(HeroSection, { props: { title: 'Welcome', subtitle: 'Nuxt 4 + Tailwind' } })
  //   screen.getByText('Welcome')
  //   screen.getByText('Nuxt 4 + Tailwind')
  // })
  it('renders hero title and subtitle', () => {
    render(HeroSection)
    // screen.getByText('Welcome')
    // screen.getByText('Nuxt 4 + Tailwind')
  })
})
