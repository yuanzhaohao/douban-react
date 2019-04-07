import * as reqwest from 'reqwest';

const LIST_URL = {
  // showing: '//m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
  showing: '//api.douban.com/v2/movie/in_theaters',
  free: '//m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items',
  latest: '//m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items'
};

export async function getListData({
  type,
  start = 0,
  count = 10,
}: {
  type: 'showing' | 'free' | 'latest';
  start: number;
  count: number;
}) {
  console.log(LIST_URL[type])
  const resp = await reqwest({
    url: LIST_URL[type],
    data: {
      loc_id: '108288',
      start,
      count
    },
    type: 'jsonp',
  });

  return resp;
}

export async function getDetailData({ id }) {
  const resp = reqwest({
    url: `//api.douban.com/v2/movie/subject/${id}`,
    type: 'jsonp'
  });

  return resp;
};