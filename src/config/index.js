const URL_BACKEND = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'http://leticiacamposs2-aluraflix.herokuapp.com';

export default {
    URL_BACKEND,
};