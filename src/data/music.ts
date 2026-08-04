/* Music Catalog */
export interface Track {
  slug: string;
  title: string;
  imageUrl: string;
  appleMusicUrl: string;
  spotifyUrl: string;
  youtubeUrl: string;
  soundCloudUrl: string;
  audioMackUrl: string;
  type: "album" | "single";
  lastest: boolean;
}

const Tracks: Track[] = [
  {
    slug: "amazing",
    title: "Amazing",
    imageUrl: "/music-arts/amazing.png",
    appleMusicUrl:
      "https://music.apple.com/us/album/amazing/1665203661?i=1665203663",
    spotifyUrl: "https://open.spotify.com/track/7HFPFNvm84vO7El1D8FluW",
    youtubeUrl: "https://youtu.be/xs7NS3YGR4Y?si=piE9OBr0F4RX2YVg",
    soundCloudUrl: "https://soundcloud.com/user-680998830-981257809/amazing",
    audioMackUrl: "https://audiomack.com/demy-thekidd/song/amazing",
    type: "single",
    lastest: false,
  },
  {
    slug: "loml",
    title: "LOML",
    imageUrl: "/music-arts/loml.png",
    appleMusicUrl:
      "https://music.apple.com/us/album/l-o-m-l/1690533760?i=1690533762",
    spotifyUrl: "https://open.spotify.com/track/3FMgk8ZjXKc3RQSpquOJ9e",
    youtubeUrl: "https://youtu.be/FA2hGQOPGUo?si=4ki3u1jDPqopmp74",
    soundCloudUrl:
      "https://soundcloud.com/user-680998830-981257809/l-o-m-l-prod-by-ross-gossage",
    audioMackUrl: "https://audiomack.com/demy-thekidd/song/loml",
    type: "single",
    lastest: false,
  },
  {
    slug: "scared-to-fall-inlove",
    title: "Scared To Fall Inlove",
    imageUrl: "/music-arts/scared-to-fall-inlove.png",
    appleMusicUrl:
      "https://music.apple.com/us/album/scared-to-fall-inlove/1678603987?i=1678603988",
    spotifyUrl: "https://open.spotify.com/track/3EE3WV9DzndmGK61n06AA8",
    youtubeUrl: "https://youtu.be/z1wsvdIaCic?si=kQjb0HJ6qTZf-z67",
    soundCloudUrl:
      "https://soundcloud.com/user-680998830-981257809/scared-to-fall-in-love",
    audioMackUrl:
      "https://audiomack.com/demy-thekidd/song/scared-to-fall-inlove",
    type: "single",
    lastest: false,
  },
  {
    slug: "untill-i-am-rich",
    title: "Untill I Am Rich",
    imageUrl: "/music-arts/untill-i-am-rich.png",
    appleMusicUrl:
      "https://music.apple.com/us/album/until-am-rich/1708601913?i=1708602141",
    spotifyUrl: "https://open.spotify.com/track/4bq3hRDjj92J6nLu3xnQQX",
    youtubeUrl: "https://youtu.be/n_W5Szrxgwc?si=mEIGjE_3X8FTeIkx",
    soundCloudUrl:
      "https://soundcloud.com/user-680998830-981257809/untill-am-rich",
    audioMackUrl: "https://audiomack.com/demy-thekidd/song/until-am-rich",
    type: "single",
    lastest: false,
  },
  {
    slug: "special-lady",
    title: "Special Lady",
    imageUrl: "/music-arts/special-lady.jpg",
    appleMusicUrl:
      "https://music.apple.com/us/album/special-lady/1737406018?i=1737406020",
    spotifyUrl: "https://open.spotify.com/track/61LsSjOUkLwlXAIaX0kDnB",
    youtubeUrl: "https://youtu.be/OQidsZ3XJls?si=2Zek1DI1shPXPhxk",
    soundCloudUrl: "https://soundcloud.com/demythekidd/special-lady",
    audioMackUrl: "https://audiomack.com/demy-thekidd/song/special-lady",
    type: "single",
    lastest: false,
  },
  {
    slug: "genesis-ep",
    title: "Genesis EP",
    imageUrl: "/music-arts/genesis-ep-hd.jpg",
    appleMusicUrl: "https://music.apple.com/us/album/genesis-ep/1769621984",
    spotifyUrl: "https://open.spotify.com/album/0bKKyaVBM6DDqSdkgIaWGh",
    youtubeUrl:
      "https://www.youtube.com/watch?v=1flxK6QL0IM&list=OLAK5uy_l5cSksgxd5BO9TULgN4n9aRsqN6pYd6Tg",
    soundCloudUrl: "https://soundcloud.com/demythekidd/sets/genesis-159683479",
    audioMackUrl: "https://audiomack.com/demy-thekidd/album/genesis",
    type: "album",
    lastest: true,
  },
];

export function getTrackBySlug(slug: string | undefined) {
  if (slug) {
    return Tracks.find((track) => track.slug === slug);
  } else {
    return Tracks.find((track) => track.lastest === true);
  }
}

export default Tracks;
