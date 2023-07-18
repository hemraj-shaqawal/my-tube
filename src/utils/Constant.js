const key = 'AIzaSyCkFDPWQjGO-lCT3nAMoBldLRPWi9Cobz0'
const mostPopularVideo = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=' + key
const suggestionApi = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
const LIVECHATOFFSET = 50

export { mostPopularVideo, suggestionApi, LIVECHATOFFSET }
