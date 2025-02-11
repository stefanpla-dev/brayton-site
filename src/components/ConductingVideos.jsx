import React from 'react';
import VideoCard from './VideoCard';
import '../styles/ConductingVideos.css'

const videos = [
  {
    title: "CGMC Gala 2024",
    url: "https://vimeo.com/985252159",
    // thumbnail: "https://vumbnail.com/985252159.jpg"
  },
  {
    title: "Sound of Silence",
    url: "https://vimeo.com/733445539",
    // thumbnail: "https://vumbnail.com/733445539.jpg"
  },
  {
    title: "Dancing Queen",
    url: "https://vimeo.com/694448290",
    // thumbnail: "https://vumbnail.com/733445539.jpg"
  },
  {
    title: "Banned Together",
    url: "https://www.youtube.com/watch?v=faFREilPbTA",
    // thumbnail: "https://img.youtube.com/vi/faFREilPbTA/maxresdefault.jpg"
  },
  {
    title: "Lost in the Wilderness",
    url: "https://www.youtube.com/watch?v=vh5qQ2Auevg",
    // thumbnail: "https://img.youtube.com/vi/vh5qQ2Auevg/maxresdefault.jpg"
  },
  {
    title: "Morning Hymn / Alleluia",
    url: "https://www.youtube.com/watch?v=7YCGwE9zfCA",
    // thumbnail: "https://img.youtube.com/vi/7YCGwE9zfCA/maxresdefault.jpg"
  },
  {
    title: "When We Were Young",
    url: "https://www.youtube.com/watch?v=Rn1dMbmvso8",
    // thumbnail: "https://img.youtube.com/vi/Rn1dMbmvso8/maxresdefault.jpg"
  },
  {
    title: "I Wanna Be Like You",
    url: "https://www.youtube.com/watch?v=IakhIW-ka9U",
    // thumbnail: "https://img.youtube.com/vi/IakhIW-ka9U/maxresdefault.jpg"
  },
  {
    title: "Here Comes the Light",
    url: "https://www.youtube.com/watch?v=kdn5Itb7JcA",
    // thumbnail: "https://img.youtube.com/vi/kdn5Itb7JcA/maxresdefault.jpg"
  },
  {
    title: "Ramkali",
    url: "https://www.youtube.com/watch?v=hahmfiMAiOE",
    // thumbnail: "https://img.youtube.com/vi/hahmfiMAiOE/maxresdefault.jpg"
  },
  {
    title: "Boundless Light",
    url: "https://www.youtube.com/watch?v=vffjyEGfcXA",
    // thumbnail: "https://img.youtube.com/vi/vffjyEGfcXA/maxresdefault.jpg"
  },
  {
    title: "Oseh Shalom",
    url: "https://www.youtube.com/watch?v=0O9XfDbHKi0",
    // thumbnail: "https://img.youtube.com/vi/0O9XfDbHKi0/maxresdefault.jpg"
  },
]

function ConductingVideos() {
  return (
    <div className="video-container">
      <div className="video-grid">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            url={video.url}
          />
        ))}
      </div>
    </div>
  )
}

export default ConductingVideos