import axios from 'axios';

export const GetDateInterval = async (data: any) => {
    const array = data.map((item: any) => new Date(item[0]).getTime());
    const dateMin = new Date(Math.min.apply(null, array));
    const dateMax = new Date(Math.max.apply(null, array));
    const lowerThatNull = (num: number) => {
        return num < 10 ? `0${num}` : num;
    };
    const min = `${lowerThatNull(dateMin.getDate())}/${lowerThatNull(
        dateMin.getMonth() + 1
    )}/${dateMin.getFullYear()}`;
    const max = `${lowerThatNull(dateMax.getDate())}/${lowerThatNull(
        dateMax.getMonth() + 1
    )}/${dateMax.getFullYear()}`;
    const response = await axios
        .post(
            // 'https://api.lambda.direct/search/off-days',
            '#',
            {
                from: min,
                to: max,
            },
            {
                headers: {
                    'Content-type': 'application/json',
                },
            }
        )
        .catch(() => console.log('error!'));
    return response?.data ? response.data : null;
};