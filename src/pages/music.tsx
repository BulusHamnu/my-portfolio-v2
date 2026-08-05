import type { ReactNode } from "react";
import Header from "../components/header";
import {
  Spotify,
  // AppleMusic,
  Soundcloud,
  Audiomack,
  Youtube,
} from "@thesvg/react";
import { SiApplemusic } from "react-icons/si";
import Tracks, { getTrackBySlug } from "../data/music";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaSoundcloud,
} from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

/* Music Page */
function PlatformLink({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="button-primary w-full p-4 flex flex-row flex-nowrap gap-6 items-center"
    >
      {children}
    </a>
  );
}

function Music() {
  const { slug } = useParams();

  const [currentTrack, setCurrentTrack] = useState(() => {
    return getTrackBySlug(slug);
  });

  useEffect(() => {
    const changeTrack = () => {
      setCurrentTrack(() => {
        return getTrackBySlug(slug);
      });
    };

    changeTrack();
  }, [slug]);

  const [singles] = useState(Tracks.filter((track) => track.type === "single"));
  const [albums] = useState(Tracks.filter((track) => track.type === "album"));

  return (
    <>
      <Header />
      <main className="pt-25 p-3 max-lg:mb-20" id="music">
        {!currentTrack ? (
          <section>
            <h1>No Track Available.</h1>
          </section>
        ) : (
          <section className="flex flex-col md:flex-row mx-auto max-w-250 gap-2 px-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={currentTrack.slug}
              id="current-track"
              className="flex-2"
            >
              <span className="text-left special-heading text-xl md:text-2xl inline-block mt-4 mb-10">
                Checkout Demy Thekidd new release!
              </span>
              <div
                id="release-info"
                className="flex flex-col lg:flex-row md:gap-10"
              >
                <div id="release-card-top" className="">
                  <motion.div
                    id="cover-image-cont"
                    className="border border-white min-w-70 max-w-70 min-h-70 max-h-70 mx-auto"
                  >
                    <motion.img
                      className="w-full h-full object-contain"
                      src={currentTrack.imageUrl}
                      alt={`${currentTrack.title} Cover Image`}
                    />
                  </motion.div>
                  <span className="block mt-4 mb-10" id="track-title">
                    <p>{currentTrack.title}</p>
                  </span>
                </div>
                <div id="release-card-bottom" className="mb-8">
                  <div
                    id="streaming-links"
                    className="flex flex-col gap-3 max-w-70 mx-auto"
                  >
                    <PlatformLink link={currentTrack.spotifyUrl}>
                      <Spotify width={24} height={24} />
                      Stream On Spotify
                    </PlatformLink>
                    <PlatformLink link={currentTrack.appleMusicUrl}>
                      <SiApplemusic fill="#FA586A" size={24} />
                      Stream On Apple Music
                    </PlatformLink>
                    <PlatformLink link={currentTrack.audioMackUrl}>
                      <Audiomack width={24} height={24} />
                      Stream On AudioMack
                    </PlatformLink>
                    <PlatformLink link={currentTrack.soundCloudUrl}>
                      <Soundcloud width={24} height={24} />
                      Stream On SoundCloud
                    </PlatformLink>
                    <PlatformLink link={currentTrack.youtubeUrl}>
                      <Youtube width={24} height={24} />
                      Stream On Youtube
                    </PlatformLink>
                  </div>
                </div>
              </div>
            </motion.div>
            <div
              id="more-releases"
              className="flex gap-10 flex-col min-[440px]:flex-row min-[440px]:px-5 md:flex-col justify-between card flex-2 min-[550px]:flex-1 py-6 min-h-full"
            >
              <div id="singles-cont" className="max-md:flex-1">
                <h2 style={{ marginBottom: "18px" }}>Singles</h2>
                {/* Singles */}
                {singles && singles.length > 0 ? (
                  singles.map((track) => (
                    <p
                      style={{ marginBottom: "14px" }}
                      key={track.slug}
                      className="music-links"
                    >
                      <Link to={`/music/${track.slug}`}>{track.title}</Link>
                      <ArrowUpRight size={18} />
                    </p>
                  ))
                ) : (
                  <p style={{ marginBottom: "8px" }}>No Single Yet.</p>
                )}
              </div>
              <div id="album-cont" className="flex-1">
                <h2 style={{ marginBottom: "18px" }}>Album</h2>
                {/* Albums */}
                {albums && albums.length > 0 ? (
                  albums.map((track) => (
                    <p
                      style={{ marginBottom: "14px" }}
                      key={track.slug}
                      className="music-links"
                    >
                      <Link to={`/music/${track.slug}`}>{track.title}</Link>
                      <ArrowUpRight size={18} />
                    </p>
                  ))
                ) : (
                  <p style={{ marginBottom: "8px" }}>No Ablum Yet.</p>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      <footer className="lg:mb-3 py-7 md:py-5 px-10 flex flex-col min-[600px]:flex-row min-[500px]:justify-between gap-10 items-center">
        <a
          href="#"
          title="Help fund Yo Demy projects."
          className="max-w-62.5 flex flex-row flex-nowrap gap-3 text-gray-900 p-3 w-full rounded bg-[#a0ecce] cursor-pointer"
        >
          Support Demy Thekidd <FaMoneyBill size={22} />
        </a>
        <div className="flex flex-row justify-between min-w-50 max-w-50 items-center">
          <a
            href="https://open.spotify.com/artist/60gF69GCzSyh9VbOAk5iQ0?si=EUcs8jguSj6BpegGnUYICw"
            target="_blank"
          >
            <FaSpotify
              className="hover:text-amber-500 transition-colors duration-300 hover:scale-110"
              size={28}
            />
          </a>
          <a
            href="https://soundcloud.com/user-680998830-981257809"
            target="_blank"
          >
            <FaSoundcloud
              className="hover:text-amber-500 transition-colors duration-300 hover:scale-125"
              size={28}
            />
          </a>
          <a href="https://www.instagram.com/demy_thekidd" target="_blank">
            <FaInstagram
              className="hover:text-amber-500 transition-colors duration-300 hover:scale-125"
              size={24}
            />
          </a>
          <a href="http://www.youtube.com/@bulus_hamnu" target="_blank">
            <FaYoutube
              className="hover:text-amber-500 transition-colors duration-300 hover:scale-125"
              size={33}
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Music;
