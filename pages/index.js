// import React, { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CustomizedNavBar from '@/components/nav_bar';
// import BottomPlayerController from '@/components/bottom_player/player';
// import { setAudioReference } from '@/controller/slices/audio_slice';

// const AppModule = ({ Component, pages }) => {
//   const audioRef = useRef(null);
//   const dispatch = useDispatch();
//   const isVisible = useSelector((state) => state.bottom_controller.isVisible);
//   const source = useSelector((state) => state.audio.source);
//   useEffect(() => {
//     dispatch(setAudioReference({ reference: audioRef.current }));
//   }, [dispatch])
//   return (
//     <div className="col-11 d-flex flex-column justify-content-between head">
//       {source && <audio ref={audioRef} src={source} />}
//       <div className='content'>
//         <Component {...pages} />
//       </div>
//       <div className="col-8 justify-content-center align-items-center align-self-center">
//         {isVisible && <BottomPlayerController />}
//       </div>
//     </div>
//   );
// }

// export default AppModule;

import RecommendedSongs from "@/components/song/songs";
import FeaturedSongs from "@/components/artist/artists";
import PopularSongs from "@/components/popular/populars";
import RecommendedAlbums from "@/components/album/albums";
import PlayerController from "@/components/player-controller/player";

export default function Home() {
  console.log(`Home`);
  return (
    <div>
      <div className='overflow-hidden d-flex flex-column-reverse flex-lg-row col-12'>
        <div className='left-content col-12 col-lg-9'>
          <PopularSongs />
          <FeaturedSongs />
          <RecommendedAlbums />
        </div>
        <div className='right-content col-12 col-lg-3 bg-dark m-0 p-0'>
          <div><RecommendedSongs /></div>
          <div className="d-none d-lg-block"><PlayerController /></div>
        </div>
      </div>

    </div>
  );
}
