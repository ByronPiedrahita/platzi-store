const getData = api => {
  return fetch(api)
    .then(response => response.json())
    .then(response => response)
    .catch(response => error);
};

export default getData;
