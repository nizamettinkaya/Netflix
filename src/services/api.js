const API_KEY = '6ca014c078ab885f23a1f191a11bbd08'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async endpoint => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()
  return json
}
// eslint-disable-next-line
export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: 'Netflix Originals',
        items: await basicFetch(`/discover/tv?with_network=213&language=en-BR&api_key=${API_KEY}`)
      },
      {
        slug: "trending",
        title: "Recommended for You",
        items: await basicFetch(`/trending/all/week?language=en-BR&api_key=${API_KEY}`)
      },
      {
        slug: "toprated",
        title: "On the rise",
        items: await basicFetch(`/movie/top_rated?language=en-BR&api_key=${API_KEY}`)
      }
      ,
      {
        slug: "action",
        title: "Action",
        items: await basicFetch(`/discover/movie?with_genres=28&language=en-BR&api_key=${API_KEY}`)
      },
      {
        slug: "comedy",
        title: "comedy",
        items: await basicFetch(`/discover/movie?with_genres=35&language=en-BR&api_key=${API_KEY}`)
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFetch(`/discover/movie?with_genres=27&language=en-BR&api_key=${API_KEY}`)
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie?with_genres=10749&language=en-BR&api_key=${API_KEY}`)
      },
      {
        slug: "documentary",
        title: "Documentaries",
        items: await basicFetch(`/discover/movie?with_genres=99&language=en-BR&api_key=${API_KEY}`)
      },
    ]
  },
  getMovieInfo: async (movieId, type) =>{
    let info = {};

    if(movieId){
      switch(type){
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=en-BR&api_key=${API_KEY}`)
        break;

        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=en-BR&api_key=${API_KEY}`)
        break
        
        default:
          info = null;
        break
      }
    }

    return info;
  }
}