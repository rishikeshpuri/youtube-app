import axios from 'axios';

const KEY = 'AIzaSyACDDdrpZpESOeqa7u2ZYYRNBbmwZVus8g';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key : KEY
    }
});