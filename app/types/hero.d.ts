export interface Hero {
  title: string
  director: string
  description: string
  backgroundImage: string
  links: Array<{
    label: string
    to: string
    trailingIcon?: string
    size?: string
  }>
}
