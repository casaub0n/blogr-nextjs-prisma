import '../styles/index.css'
import router from './newRouterMock'
import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#F7F8FA' },
      { name: 'dark', value: '#314565' },
      { name: 'white', value: '#FFFFFF' },
      { name: 'black', value: '#000000' },
    ],
  },
}
