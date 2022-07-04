import '../styles/index.css'
import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

import { RouterContext } from "next/dist/shared/lib/router-context";

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
  nextRouter: {
    path: "/",
    asPath: "/",
    query: {},
    push(path) {
      console.log(`router push to: ${path}`);
    },
    Provider: RouterContext.Provider,
  },
}
