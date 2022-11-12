import api from '../service/base';
export const getSearchData = (params) => {
  const response = api(
    'get',
    'http://127.0.0.1:4523/m1/1730824-0-default/search/cert',
    params
  )
    .catch((err) => {
      console.log('err');
    })
    .then((result) => {
      //   console.log(result);
    });
};

export const testApi = () => {
  const response = api('get', 'http://127.0.0.1:8000/test')
    .catch((err) => {
      console.log('err');
    })
    .then((result) => {
      console.log(result);
    });
};
