class FetchApi {

    constructor() {
        console.log("FetchApi");
    }

    async get(url) {
        const res = await fetch(url)
        return await res.json()
    }
}

export default new FetchApi();