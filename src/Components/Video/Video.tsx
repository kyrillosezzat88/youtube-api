import { VideoProps } from "./Video.types"
import './Video.scss';
function Video({ video }: VideoProps) {
  let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div className="video">
      <iframe src={videoSrc} allowFullScreen title="Video player" className="video_iframe" />
      <div className="video_content">
        <h3 className="video_content_title">{video.snippet.title}</h3>
        <p className="video_content_description">{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default Video