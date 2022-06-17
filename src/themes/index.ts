export interface Theme {
  main: string
  background: string
  text: string
  highlight: string
  shadow: string
}

export interface Themes {
  default: Theme
}

const themesLibrary: Themes = {
  default: {
    main: '#3590F3',
    background: '#EAF6FF',
    text: '#232528',
    highlight: '#FFA400',
    shadow: '#7A82AB'
  }
}

export default themesLibrary
