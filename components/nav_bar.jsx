// import '../styles/nav_bar.css';
import Link from "next/link";
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Album,
    Logout,
    Person,
    Settings,
    Audiotrack,
    TrendingUp,
    MapOutlined,
} from '@mui/icons-material';
import { setIsVisible } from '@/controller/slices/bottom_controller_slice';
const CustomizedNavBar = () => {

    const dispatch = useDispatch();
    const [activePage, setActivePage] = useState(0);

    const pages = [
        { text: "Discover", path: "/", icon: <MapOutlined />, hasBottom: false },
        { text: "Trending", path: "/trending", icon: <TrendingUp />, hasBottom: true },
        { text: "Albums", path: "/albums", icon: <Album />, hasBottom: true },
        { text: "Playlist", path: "/playlist", icon: <Audiotrack />, hasBottom: true },
    ];
    const bottomPages = [
        { text: "Profile", path: "/profile", icon: <Person />, hasBottom: true },
        { text: "Settings", path: "/settings", icon: <Settings />, hasBottom: false },
        { text: "Logout", path: "/login", icon: <Logout />, hasBottom: false },
    ]

    const handleItemClick = (path, hasBottom) => {
        setActivePage(path);
        dispatch(setIsVisible({ isVisible: hasBottom }));
    }
    return (
        <nav className="main-menu col-12 d-flex flex-lg-column justify-content-lg-between justify-content-center align-items-lg-end py-lg-3 px-2 px-lg-0">
            <div className='col-12 d-flex flex-row-reverse flex-lg-column justify-content-between align-items-center'>
                <div className="user-info d-flex flex-column align-items-center ">
                    <Box
                        className="mb-lg-2 bg-light p-lg-5 p-4 rounded-5"
                        sx={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: 'url("https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/37e5ccfa-f9ee-458b-afa2-dcd85b495e4e")',
                        }}
                    >
                    </Box>

                    <p className='d-none d-md-block'>Jane Wilson</p>
                </div>
                <ul className={`d-flex flex-lg-column align-items-lg-center justify-content-lg-center justify-content-evenly list-unstyled flex-grow-1`}>
                    {pages.map((page) => (
                        <li key={page.path} className={`nav-item ${activePage === page.path ? 'active' : ''}`}>
                            <Link href={page.path} className='p-2 text-decoration-none' onClick={() => handleItemClick(page.path, page.hasBottom)}>
                                {page.icon}
                                <span className="nav-text ps-1 d-none d-md-block">{page.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>

            <ul className={`col-12 d-none d-lg-flex flex-column align-items-center justify-content-center list-unstyled`}>
                {bottomPages.map((page) => (
                    <li key={page.path} className={`nav-item ${activePage === page.path ? 'active' : ''} d-lg-flex`}>
                        <Link href={page.path} className='p-2 text-decoration-none'>
                            {page.icon}
                            <span className={`nav-text ps-1 d-none d-md-block`}>{page.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>

        </nav>
    );
}

export default CustomizedNavBar;
