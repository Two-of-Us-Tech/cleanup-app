const header = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const API_URL = 'https://cleanup-api.herokuapp.com';

const get = (path, authToken) =>
  fetch(`${API_URL}${path}`, {
    headers: {
      ...header,
      ...(authToken && {
        Authorization: `Bearer ${authToken}`,
      }),
    },
    method: 'GET',
  });

// eslint-disable-next-line default-param-last
const post = (path, body = {}, authToken) =>
  fetch(`${API_URL}${path}`, {
    headers: {
      ...header,
      ...(authToken && {
        Authorization: `Bearer ${authToken}`,
      }),
    },
    method: 'POST',
    body: JSON.stringify(body),
  });

export default { post, get };
