import React from 'react';

const HeaderPlayerController = ({ song:{rotated, audio:{cover, title, name}} }) => {
    return (
        <>
            <div className='album-cover' style={{ position: "relative" }}>
                <img src={cover} alt={title}
                    style={{ animationPlayState: rotated ? "running" : "paused", }}
                />
                <span className='point' ></span>
            </div>

            <h2>{title}</h2>
            <p>{name}</p>
        </>
    );
}

export default HeaderPlayerController;
