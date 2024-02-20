const apiToken: string = 'BQAhiEZqAuC77BHS8IzeIof-JdDGhBKZZHWDwPEnLrEKqZyDTQ-1tz_Ni3Cm_B-AKbcURxK-Tx-xpN7WIaEMLZ_goRTIyvhRqcYnYt0JjyBe7jmLe56cNYwMTMzm_uzQdKO6m_zdej32bQvTsr8Jzu_mMA8mIQhmcTKN-YnkS8Nf98DcnXwI_ObWzfuxW-nlUC9REijJ3GF_zXSv5HE7KVZ9j2JgnA';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};