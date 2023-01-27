import { useContext } from "react"
import { AppContext } from "../../ContextApi/AppContext"
import Loading from "../Loading/Loading";
import Video from "../Video/Video";
import './VideoList.scss'
function VideoList() {
  const { state } = useContext(AppContext);
  if (state.isLoading) {
    return <Loading />
  }
  return (
    <div className="VideosList">
      <div className="container">
        {state.videos.map((video , index) =>
          <Video key={index} video={video} />
        )}
      </div>
    </div>
  )
}

export default VideoList