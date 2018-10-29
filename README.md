# cross-domain-worker-url

#### Convert a cross-domain url to an available url.

If your current domain is `http://www.a.com/`, but you want to try `const myWorker = new Worker('http://www.b.com/hello.js')`, it will throw cross-domain error.

##### We can solve the problem by using `cross-domain-worker-url`

```js
const { getLocalWorkerUrl } from 'cross-domain-worker-url';

// If in async function, you can use in this way:
// const localWorkerUrl = await getLocalWorkerUrl(originWorkerUrl);
getLocalWorkerUrl(originWorkerUrl).then(localWorkerUrl => {
    const myWorker = new Worker(localWorkerUrl);
});
```

## MIT Licenced
