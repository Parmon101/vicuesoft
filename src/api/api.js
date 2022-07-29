class Api {
    url = 'https://punkapi.com/documentation/v2';

    performRequest(url, method = 'GET', body) {
        return fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-type': 'application/json',
            }),
        }).then((response) => response.json());
    }
}

export default new Api();
