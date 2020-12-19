const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const {MongoClient} = require('mongodb');

app.use(cors());

/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */

username = ""
fs = require('fs')
username = fs.readFileSync("../personal-budget-final/username", 'utf8')
password = ""
password = fs.readFileSync("../personal-budget-final/password", 'utf8')
    console.log(username)
    console.log(password)

async function main(){
const uri = "mongodb+srv://{}"+username+":"+password+"@4166cluster.4vvux.mongodb.net/test"
const client = new MongoClient(uri);
await client.connect();
await listDatabases(client);

try {
    await client.connect();

    await listDatabases(client);
 
} catch (e) {
    console.error(e);
}

finally {
    await client.close();
}
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});

try {
    var credentials = {
        key: fs.readFileSync('./privkey.pem', 'utf8'),
        cert: fs.readFileSync('./cert.pem', 'utf8')
    }

    var httpsServer = https.createServer(credentials, app)
    httpsServer.listen(PORTHS)
} catch (er) { }