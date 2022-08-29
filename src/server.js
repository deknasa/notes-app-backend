const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {   // menerapkan CORS pada cakupan server (diaktifkan di seluruh route yang ada di server)
            cors: { // Cross-origin resource sharing (CORS).
              origin: ['*'],
            },
        },
    })

    server.route(routes)

    await server.start();
    console.log(`Server is running on port ${server.info.uri}`);
}

init();