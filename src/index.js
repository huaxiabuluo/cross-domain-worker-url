/**
 * @author luxiaolong
 * @DateTime 2018-10-29
 * @param    originWorkerUrl
 * @return   Promise
 */
export const getLocalWorkerUrl = async (originWorkerUrl) => {
    // get JavaScript code string
    const codeString = await fetch(originWorkerUrl).then(res => res.text());

    // 得到一个同源的 URL, 如果直接使用 originSassWorkerFileUrl 会引起跨域问题
    // URL format: blob:http://localhost:8089/cd2930c0-f4ca-4a9f-b6b1-8242e520dd62
    const localWorkerUrl = window.URL.createObjectURL(new Blob([codeString], {
        type: 'application/javascript'
    }));

    return localWorkerUrl;
};