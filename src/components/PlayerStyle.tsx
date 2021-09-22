import 'videojs-youtube'

const PlayerStyle: React.FC = () => {
  return (
    <>
      <h2>The implementation below is without react functions</h2>
      <div data-vjs-player>
        <video
          id="my-video"
          className="video-js vjs-theme-city"
          playsInline
          controls
          preload="auto"
          data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=IkOVe40Sy0U"}] }'
        />
      </div>
    </>
  )
}

export default PlayerStyle
