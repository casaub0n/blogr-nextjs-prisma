import '../styles/index.css'
// import router from './newRouterMock'
import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

// const NextImage = props => <Image unoptimized {...props} />
// export default NextImage;

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
  // nextRouter: {
  //   path: "/",
  //   asPath: "/",
  //   query: {},
  //   push(path) {
  //     console.log(`router push to: ${path}`);
  //   },
  //   Provider: RouterContext.Provider,
  // },
  // nextRouter: {
  //   Provider: RouterContext.Provider,
  // },
}
