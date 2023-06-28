const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const server =  http.createServer(app)

// START TRY AND CATCH CONNECTION TO MONGODB SERVER
mongoose.connection.once('open', () =>{
    console.log('mongodb connection started successfully...');
});

mongoose.connection.on('error', (err) =>{
    console.log(err);
});
// END TRY AND CATCH CONNECTION TO MONGODB SERVER

const MONGO_URL = 'mongodb+srv://arjeloujelou:PpGREosggU7THZxD@cluster0.rogniex.mongodb.net/evemasy?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

async function startServer(){
    await mongoose.connect(MONGO_URL);

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}.....`);
    });
}

startServer();