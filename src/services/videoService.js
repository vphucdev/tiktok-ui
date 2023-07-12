import httpRequest from '~/utils/httpRequest';

export const getVideo = async (type, page) => {
    try {
        const res = await httpRequest.get('/videos', {
            params: { type, page },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
