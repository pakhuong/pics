import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f5b6b0b12a05d66de3e09ea9ef63bfb1d5376acf34979dfe5047afdc36ca151f'
    }
});