import Layout from '../components/Layout'
import { VideoJsPlayerOptions } from 'video.js'
import Player from '../components/Player'
import PlayerStyle from '../components/PlayerStyle'
import { NextPage } from 'next'

const TryVideoPage: NextPage = () => {
  const videoJsOptions: VideoJsPlayerOptions = {
    techOrder: ['youtube'],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: 'https://www.youtube.com/watch?v=IxQB14xVas0',
        type: 'video/youtube',
      },
    ],
  }

  return (
    <Layout title="Try video.js">
      <h1>vido.js</h1>
      <Player {...videoJsOptions} />
      <PlayerStyle />
    </Layout>
  )
}

export default TryVideoPage
