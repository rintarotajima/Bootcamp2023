const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchFormInput = form.elements.query;
    const config = {
        params: {
            q: searchFormInput.value
        }
    }
    const res = await axios.get('https://api.tvmaze.com/search/shows?', config)
    makeImages(res.data);
    searchFormInput.value = '';
})

const makeImages = (results) => {
    for (let result of results) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium
            document.body.append(img);
        }
    }
}