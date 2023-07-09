import httpRequest from '~/utils/httpRequest';

export const getSuggested = async () => {
    try {
        const res = await httpRequest.get('/users/suggested', {
            params: {
                page: 1,
                per_page: 5,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
