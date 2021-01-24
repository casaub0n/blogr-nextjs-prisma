/**
 * @see https://hoangtrinhj.com/using-google-analytics-with-next-js
 */
export const GA_TRACKING_ID = 'UA-XXXXXXXXX-X'

/**
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/4d4da2106dcd54af4a0ddeb5e0360f322fd8a5bf/types/gtag.js/index.d.ts
 */
type Window = {
  gtag: (arg1: string, arg2: string, arg3: any ) => void
}

declare var window: Window

export const pageview = (url: string): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

type Event = {
  action: string,
  category: string,
  label: string,
  value: string
}

export const event = ({ action, category, label, value }: Event): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
