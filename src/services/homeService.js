import * as httpRequest from '../utils/httpRequest';

export const getHome = async () => {
    try {
        const res = await httpRequest.get('/home');
        return res.data.data.items;
    } catch (error) {
        console.log(error);
    }
};

export const getSong = async (sid) => {
    try {
        const res = await httpRequest.get('/song', {
            params: {
                id: sid,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getInfo = async (sid) => {
    try {
        const res = await httpRequest.get('/infosong', {
            params: {
                id: sid,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getDetailPlaylist = async (sid) => {
    try {
        const res = await httpRequest.get('/detailplaylist', {
            params: {
                id: sid,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
