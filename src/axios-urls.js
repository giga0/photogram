import axios from 'axios';

export const photogramApi = axios.create({
	baseURL: 'http://54.37.227.57/api/'
});

export const auth = axios.create({
	baseURL: 'http://54.37.227.57/api/auth/'
});

export const users = axios.create({
	baseURL: 'http://54.37.227.57/api/users/'
});

export const posts = axios.create({
	baseURL: 'http://54.37.227.57/api/posts/'
});

export const comments = axios.create({
	baseURL: 'http://54.37.227.57/api/comments/'
});

export const likes = axios.create({
	baseURL: 'http://54.37.227.57/api/likes/'
});
