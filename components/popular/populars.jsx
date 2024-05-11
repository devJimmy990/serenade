import 'swiper/swiper-bundle.css';
import SongCard from './song_card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCallback, useEffect, useState } from 'react';
const PopularSongs = () => {
    // const [index, setIndex] = useState(0);
    // useEffect(() => {
    //     const autoSlide = () =>
    //         setIndex((index + 1) % popular.length);

    //     const interval = setInterval(autoSlide, 5000);
    //     return () => clearInterval(interval);
    // }, [index]);
    return (
        <div className='slider-container col-12 '>
            <h1>Popular Playlist</h1>
            {/* <div className='swiper'> <SongCard song={popular[index]} /></div> */}
            <Swiper
                className='swiper'
                loop={true}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                speed={600}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 10,
                    stretch: 20,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
            >
                {popular.map((song, index) => (
                    <SwiperSlide key={index}>
                       <SongCard song={song} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='swiper-pagination' />

        </div >
    );
};

export default PopularSongs;

const popular = [
    { title: "Midnight Moods", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/95b52c32-f5da-4fe6-956d-a5ed118bbdd2" },
    { title: "Party Starters", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6ddf81f5-2689-4f34-bf80-a1e07f14621c" },
    { title: "Relaxing Tones", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ab52d9d0-308e-43e0-a577-dce35fedd2a3" },
    { title: "Smooth Jazz Journey", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/20c8fdd5-9f4a-4917-ae90-0239a52e8334" },
    { title: "Uplifting Rhythms", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/df461a99-2fb3-4d55-ac16-2e0c6dd783e1" },
]


