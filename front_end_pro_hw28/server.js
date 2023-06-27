const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.options('*', cors());

const port = 3000;
const host = 'localhost';

// app.get('/', async (req, res) => {

//     res.send('AAAAA');

// })




app.get('/', (req, res) => {
    res.json({ name: "Nameless", status: true, id: 1 });
});




app.get('/:city', async (req, res) => {

    const city = req.params.city;
    const data = await getInfo(city);
    res.json(data);

})

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port} `)
})



async function getInfo(city) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (err) {
        console.log('Something went wrong >>>>>>', err);
    }
}