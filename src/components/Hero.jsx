import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  // uso di useState per settare il video in base alla larghezza del del window
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );
  // la funzione per gesitre scelta del video in base alla larghezza delo schermo
  const handleVideoSrcSet = () => {
    window.innerWidth < 768
      ? setVideoSrc(smallHeroVideo)
      : setVideoSrc(heroVideo);
  };
  // useEffect che usa resize listener, quindi chiama funzione handleVideo... quando larghezza dello schermo si cambia
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-auto w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhon 17 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
