const apiToken: string = ' BQB-pp0RtmVwHlBM-I_xSjgbD1-jBNE5WyS2hHJO6xqLjAxjzj7kwdkoD-T24HY2TiovxbEV221xGQJ2PzNLrRzVRfX8DkZTeAzZeIO8pQOD_elNNVUtCUY3JjdH0hLhBIvybhnkk1-uQGTl6TK7ocbtrzmuBrELgHrc9AaGODApC8LPgzvuG_CzSgEj5kcnmd6lBlweqLb__sZe4dHCnzHja0v2uw';
import { SavedTrack } from 'spotify-types';

export const fetchTracks = async (): Promise< SavedTrack[] > => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};

