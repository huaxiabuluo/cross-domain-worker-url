# cross-domain-worker-url

Convert a cross-domain url to an available url.

## Usage
```js
const { getLocalWorkerUrl } from 'cross-domain-worker-url';

// If in async function, you can use in this way:
// const localWorkerUrl = await getLocalWorkerUrl(originWorkerUrl);
getLocalWorkerUrl(originWorkerUrl).then(localWorkerUrl => {
    const myWorker = new Worker(localWorkerUrl);
});
```

## MIT Licenced
