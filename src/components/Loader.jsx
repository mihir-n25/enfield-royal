import React from "react";
import bulletVideo from '/assets/videos/bullet.mp4';
import './loader.css'
function Loader() {

    return (
       <div className="loader">
         <video className="logo" autoPlay muted playsInline={true} key={bulletVideo}>
            <source src={bulletVideo} type="video/mp4" />
          </video>
       </div>
    );
}
export default Loader;