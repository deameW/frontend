import api from './base';
export const getPercentages = () => {
  api('get', 'http://127.0.0.1:8000/dashboard/percentages').then((result) => {
    console.log(result);
  });
};

export const getWordCloud = () => {
  api('get', 'http://127.0.0.1:8000/dashboard/wordcloud').then((result) => {
    console.log(result);
  });
};

export const get12Month = () => {
  api('get', 'http://127.0.0.1:8000/dashboard/statistics').then((result) => {
    console.log(result);
  });
};

export const getOverall = () => {
  api('get', 'http://127.0.0.1:8000/dashboard/overall').then((result) => {
    console.log(result);
  });
};
