import ReactGA from 'react-ga'

export const initGA = (): void => {
  // console.log('GA init')
  ReactGA.initialize('UA-xxxxxxxxx-1')
}

export const logPageView = (): void => {
  // console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = ''): void => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false): void => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
