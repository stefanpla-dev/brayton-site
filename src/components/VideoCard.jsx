import React from 'react'

function VideoCard({ title, url }) {
    let embedUrl = "";

    if (url.includes("youtube.com")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`
    } else if (url.includes("vimeo.com")) {
      const videoId = url.split("/").pop();
      embedUrl = `https://player.vimeo.com/video/${videoId}`
    }

  return (
    <div className="video-card">
        <h3>{title}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer"></a>
        <iframe
            src={embedUrl}
            title={title}
            className="video-player"
            allow="autoplay; fullscreen"
            allowFullScreen
        ></iframe>
    </div>
  )
}

export default VideoCard