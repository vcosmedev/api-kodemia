/*

index.js
Punto de inicio de la aplicacion - entrypoint

- Conectar a la base de datos
- Levantar el server (el que va a inciar todo)

Acceso al servidor y a la base de datos

*/

import dbConnect from './src/libs/db.js'
import {server} from './src/server.js'


/* 


Aplicando CLEAN ARCHITECTURE:
git
GET /koders?gender=vaule&age=16
POST /koders
PATCH /koders/:id
GET /koders/:id

GET /mentors?gender=vaule&age=16&module=value
POST /mentors
PATCH /mentors/:id
GET /mentors/:id


*/


dbConnect()
    .then(() => {
        console.log('Database connected c:');

        server.listen(8080, () => {
            console.log('Server listening on port 8080');
        })


    })
    .catch((error) => console.log('Error: ', error))