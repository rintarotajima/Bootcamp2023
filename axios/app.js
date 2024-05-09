axios.get('https://swapi.dev/api/people/1')
.then(response => {
    console.log('RESOLVE',response);
})
.catch(error => {
    console.log('エラー',error);
})

const getPerson = async (id) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(response.data);
    }
    catch (e) {
        console.log(e);
    }
}


