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

const jokes = document.querySelector('#jokes');

const getDadJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const res =  await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);

}

const button = document.querySelector('#button');
button.addEventListener('click', addNewJoke)



