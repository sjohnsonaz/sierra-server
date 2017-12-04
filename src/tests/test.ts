import { expect } from 'chai';

import * as http from 'http';
import RequestHandler from '../scripts/main';

let handler = new RequestHandler();

handler.use(async function (context, result) {
    return context.send('test');
});

let server = http.createServer(handler.create());

let port = 3001;
server.listen(port, () => {
    console.log('Listening to port: ' + port);
});