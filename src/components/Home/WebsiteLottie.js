import React, {useRef,useEffect } from "react";
import lottie from 'lottie-web';
export default function WebsiteLottie(){

    const container = useRef(null)
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require("./websiteLottie.json")
      })
    }, [])
    return (
      <div className="App">
        <div className="container" ref={container}></div>
      </div>
    );
  
}
