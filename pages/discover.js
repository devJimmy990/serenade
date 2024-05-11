import RecommendedSongs from "@/components/song/songs";
import FeaturedSongs from "@/components/artist/artists";
import PopularSongs from "@/components/popular/populars";
import RecommendedAlbums from "@/components/album/albums";
import PlayerController from "@/components/player-controller/player";
import { useEffect, useState } from "react";

export default function DiscoverPage() {
  const [title, setTitle] = useState("");
  const appName = "Serenade";
  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= appName.length) {
          setTitle(appName.substring(0, index));
          index++;
        } else { clearTimeout(interval); }
      }, 800);
    });
    return () => clearTimeout(timer);
  }, [])
  return (
    <div>
      <div className='overflow-hidden d-flex flex-column-reverse flex-lg-row col-12 pt-2 p-lg-0'>
        <div className='left-content col-12 col-lg-9'>
          <PopularSongs />
          <FeaturedSongs />
          <RecommendedAlbums />
        </div>
        <div className='right-content col-12 col-lg-3 m-0 p-0'>
          <div className="d-lg-none text-center" style={{ fontWeight: 'bold', fontSize: '1.5rem', fontStyle: 'italic' }}>{title}</div>
          <div><RecommendedSongs /></div>
          <div className="d-none d-lg-block"><PlayerController /></div>
        </div>
      </div>

    </div>
  );
}
