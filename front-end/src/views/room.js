import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

import Receiver from "components/video/receiver";

const Room = () => {
  const videoRef = useRef(undefined);

  useEffect(() => {
    if (Hls.isSupported()) {
      var hls = new Hls();

      hls.attachMedia(videoRef.current);
      // MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log("video and hls.js are now bound together !");
        hls.loadSource("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          console.log("manifest loaded, found " + data.levels.length + " quality level");
        });
      });
    }
  }, []);

  return (
    <>
      <div>Room</div>
      <Receiver videoRef={videoRef} />
    </>
  );
};

export default Room;
