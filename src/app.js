import express from 'express';
const app= express();
app.use (express.json ());
app.use (express.urlencoded ({extended:true}));
app.use(express.static('./src/public'))

const PUERTO= 8080;
app.listen (PUERTO, ()=> { console.log(`Escuchando el puerto ${PUERTO}`);})

