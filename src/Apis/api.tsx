import axios from "axios";

let baseURL = 'https://www.googleapis.com/youtube/v3/search';
let key = 'AIzaSyC3TXIaOIJ-n7mq1lCg0v-rENzVKnDKISg'

export const getVideos = (term:string) => axios.get(`${baseURL}?key=${key}&q=${term}&part=snippet&maxResults=20`) 