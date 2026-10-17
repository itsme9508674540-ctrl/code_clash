const { createClient }  = require('redis');


// const client = createClient({
//     username: 'default',
//     password: 'yzRQ63Mvale5GdrP8jFjOOcVzS4E6hsL',
//     socket:{
//         host: 'redis-10469.crce286.ap-south-1-1.ec2.cloud.redislabs.com',
//         port: 10469
//     }
// });


const client = createClient({
    username: 'default',
    password: 'Z7bR0SMgJGqsYRvAnWOcJzACQW05bSYc',
    socket: {
        host: 'redis-16692.c114.us-east-1-4.ec2.cloud.redislabs.com',
        port: 16692
    }
});



module.exports = client;