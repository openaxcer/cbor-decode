const { request } = require('http');
const bodyParser = require('body-parser')
const app = require('express')();
const PORT = 8080;
const cbor = require('cbor')

app.use(bodyParser.json());

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT} `)
)

app.post('/getcode', (req, res, next) => {
    console.log(">>", req.body.data);

    if (req.body.isencoded) {
        const test = cbor.encode(req.body.data);

        res.send({ data: test });

    } else {
        // const test1 = cbor.decode(req.body.data);
        res.send({ data: "test1" });
    }

});
