const express = require("express");
const app = express();
const port = 8080;

// Faker
const faker = require("@faker-js/faker");

// Models
const Usuario = require("./Models/Usuario");
const Empresa = require("./Models/Empresa");
const { response } = require("express");

// funciones middleware en Express
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// --- Rutas ---
app.get("/api/users/new", (request, response) => {
    const user = new Usuario();
    console.log(user);
    response.json(user);
});

app.get("/api/companies/new", (request, response) => {
    const company = new Empresa();
    response.json(company);
})

// Ruta User-Company
app.get("/api/user/company", (request, response) => {
    const user = new Usuario();
    const company = new Empresa();
    response.json({...user, company: company})
})


// Listen
app.listen(port, () => console.log(`Listening to port : ${port}`));