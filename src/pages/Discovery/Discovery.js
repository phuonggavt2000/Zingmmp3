import { useContext, useEffect, useState } from 'react';
import Artist from '../../components/Artist/Artist';
import SectionPlaylist from '../../components/SectionPlaylist/SectionPlaylist';
import NewMusic from '../../layouts/components/NewMusic/NewMusic';
import NewRelease from '../../layouts/components/NewRelease/NewRelease';
import Slides from '../../layouts/components/Slides/Slides';
import Sponsor from '../../layouts/components/Sponsor/Sponsor';
import WeekChart from '../../layouts/components/WeekChart/WeekChart';
import { ThemeContext } from '../../layouts/DefaultLayout/DefaultLayout';
import { Placeholder } from 'react-bootstrap';

function Discovery() {
    const [top100Discovery, setTop100Discovery] = useState([]);

    const { playlist, playlist2, methodGetPlaylist, weekChart, artistSpotlight, top100, newRelease } =
        useContext(ThemeContext);

    useEffect(() => {
        if (top100.items) {
            const convertTop100 = top100.items.filter((value, index) => {
                return index <= 4;
            });
            setTop100Discovery(convertTop100);
        }
    }, [top100]);

    return (
        <div>
            {playlist.items ? (
                <>
                    <Slides />
                    <NewMusic />
                    <SectionPlaylist title={playlist.title} playlist={playlist.items} getPlaylist={methodGetPlaylist} />
                    <SectionPlaylist
                        title={playlist2.title}
                        playlist={playlist2.items}
                        getPlaylist={methodGetPlaylist}
                        artist
                    />
                    <WeekChart items={weekChart.items} />
                    <Artist artists={artistSpotlight.items} getPlaylist={methodGetPlaylist} />

                    <SectionPlaylist
                        title={top100.title}
                        playlist={top100Discovery}
                        getPlaylist={methodGetPlaylist}
                        artist
                    />
                    <NewRelease items={newRelease.items} title={newRelease.title} link={newRelease.link} />
                    <Sponsor />
                </>
            ) : (
                <Placeholder className="row w-100 gx-2 gy-2 overflow-hidden" animation="glow">
                    <div
                        className="col-4 "
                        style={{
                            height: 300,
                        }}
                    >
                        <Placeholder xs={4} className="rounded w-100 h-100" />
                    </div>{' '}
                    <div
                        className="col-4 "
                        style={{
                            height: 300,
                        }}
                    >
                        <Placeholder xs={4} className="rounded w-100 h-100" />
                    </div>{' '}
                    <div
                        className="col-4 "
                        style={{
                            height: 300,
                        }}
                    >
                        <Placeholder xs={4} className="rounded w-100 h-100" />
                    </div>{' '}
                    <div
                        className="col-4 "
                        style={{
                            height: 300,
                        }}
                    >
                        <Placeholder xs={4} className="rounded w-100 h-100" />
                    </div>{' '}
                    <div
                        className="col-4 "
                        style={{
                            height: 300,
                        }}
                    >
                        <Placeholder xs={4} className="rounded w-100 h-100" />
                    </div>{' '}
                    <div
                        className="col-4 "
                        style={{
                            height: 300,
                        }}
                    >
                        <Placeholder xs={4} className="rounded w-100 h-100" />
                    </div>{' '}
                </Placeholder>
            )}
        </div>
    );
}

export default Discovery;
