import Control from '../components/Control/Control';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import { Outlet } from 'react-router-dom';
import Player from '../components/Player/Player';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { getDetailPlaylist, getHome, getInfo, getSong } from '../../services/homeService';
import ModalSm from '../../components/Modal/Modal';
import RightSidebar from '../components/RightSidebar/RightSidebar';

export const ThemeContext = createContext();

function DefaultLayout() {
    const [smShow, setSmShow] = useState(false);

    const handleChangeSong = (id) => {
        const getData = async () => {
            setData((prev) => {
                return {
                    ...prev,
                    loading: true,
                };
            });

            const infoSong = await getInfo(id);
            const song = await getSong(id);
            const dataSong = song.data;

            if (dataSong.err === 0) {
                const { thumbnailM, title, artistsNames, duration } = infoSong.data.data;
                const audio = dataSong.data[128];
                const dataAudio = {
                    img: thumbnailM,
                    name: title,
                    adult: artistsNames,
                    linkAudio: audio,
                    time: duration,
                };

                setData((prev) => {
                    return {
                        ...prev,
                        player: dataAudio,
                        playing: true,
                        loading: false,
                    };
                });
            } else {
                setSmShow(true);
                setData((prev) => {
                    return {
                        ...prev,
                        loading: false,
                        playing: false,
                    };
                });
            }
        };

        getData();
    };

    const controlMusic = () => {
        setData((prev) => {
            const playing = !prev.playing;
            return { ...prev, playing: playing, loading: false };
        });
    };

    const getPlaylist = (id) => {
        setData((prev) => {
            return {
                ...prev,
                loadPage: true,
            };
        });

        const getData = async () => {
            const detailPlaylist = await getDetailPlaylist(id);

            setData((prev) => {
                return {
                    ...prev,
                    detailPlaylist: detailPlaylist.data.data,
                };
            });

            setData((prev) => {
                return {
                    ...prev,
                    loadPage: false,
                };
            });
        };

        getData();
    };

    const toggleRightSidebar = () => {
        setData((prev) => {
            return {
                ...prev,
                rightSidebar: !prev.rightSidebar,
            };
        });
    };

    const defaultData = {
        player: {},
        detailPlaylist: {},
        mix: {},
        playlist: {},
        playlist2: {},
        weekChart: {},
        artistSpotlight: {},
        newRelease: {},
        top100: {},
        banner: [],
        newMusic: [],
        musics: [],
        playing: false,
        loading: true,
        loadPage: false,
        rightSidebar: false,
        methodRenderSong: handleChangeSong,
        methodControlMusic: controlMusic,
        methodGetPlaylist: getPlaylist,
        methodToggeSidebar: toggleRightSidebar,
        currentMusic: 0,
    };

    const [data, setData] = useState(defaultData);

    useEffect(() => {
        const getData = async () => {
            const items = await getHome();
            console.log('items', items);

            const banner = items.find((item) => item.sectionType === 'banner');
            const newMusic = items.find((item) => item.sectionType === 'new-release');
            const playList = items.find((item) => item.sectionType === 'playlist');
            const mix = items.find((item) => item.sectionType === 'mix');
            const playlist2 = items.find((item) => item.sectionId === 'hAutoTheme2');
            const weekChart = items.find((item) => item.sectionType === 'weekChart');
            const artistSpotlight = items.find((item) => item.sectionType === 'artistSpotlight');
            const top100 = items.find((item) => item.sectionId === 'h100');
            const newRelease = items.find((item) => item.sectionId === 'hNewrelease');

            setData({
                ...data,
                banner,
                newMusic,
                playlist: playList,
                mix: mix,
                playlist2: playlist2,
                weekChart: weekChart,
                artistSpotlight: artistSpotlight,
                top100: top100,
                newRelease: newRelease,
            });
        };

        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ThemeContext.Provider value={data}>
            <div className="d-flex">
                <LeftSidebar />
                <div className="content">
                    <div className="content-header">
                        <Control />
                    </div>
                    <div className="content-container">
                        <Outlet></Outlet>
                    </div>
                    <Player />
                </div>
                <RightSidebar active={data.rightSidebar} />
            </div>
            <ModalSm smShow={smShow} onHide={() => setSmShow(false)} />
        </ThemeContext.Provider>
    );
}

export default DefaultLayout;
