import { Event } from './types/google-analytics/Event'

// TODO
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== ''

// PVを測定する
export const pageview = (path: string): void => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

// GAイベントを発火させる
export const event = ({action, category, label, value = ''}: Event): void => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}
