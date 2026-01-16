import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import Hero from '~/components/home-hero.vue'

describe('Hero Component', () => {
  it('renders hero title and subtitle', () => {
    render(Hero, { props: { title: 'Welcome', subtitle: 'Nuxt 4 + Tailwind' } })
    screen.getByText('Welcome')
    screen.getByText('Nuxt 4 + Tailwind')
  })
})
