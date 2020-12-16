const {MongoClient} = require('mongodb');

/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
async function main(){
const uri = "mongodb+srv://llspeedll:fruitloop98@4166cluster.4vvux.mongodb.net/test"
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