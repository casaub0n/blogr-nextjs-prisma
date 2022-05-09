import 'videojs-youtube'

import * as React from 'react'
import videojs, { VideoJsPlayerOptions } from 'video.js'

export type PlayerProps = {
  videoJsOptions?: VideoJsPlayerOptions
}

const Player: React.FC<PlayerProps> = ({videoJsOptions}) => {
  const [videoEl, setVideoEl] = React.useState(null)
  const onVideo = React.useCallback((el: null): void => {
    setVideoEl(el)
  }, [])

  React.useEffect(() => {
    if (videoEl == null) return
    const player = videojs(videoEl, videoJsOptions)
    return () => {
      player.dispose()
    }
  }, [videoJsOptions, videoEl])

  return (
    <>
      <h1>The implementation below is using react functions</h1>
      <div data-vjs-player>
        <video ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  )
}

export default Player
