const db = require('./db')
const helper = require('../helper')

//Realizamos la query a la base de datos buscando el nombre y rol pertenecientes al login y password proporcionados
async function getUserData (user, password) {
    const rows = await db.query(`
        select nombre, rol 
        from usuarios
        where login = '${user}'
        and password = '${password}' 

    `)

    const data = helper.emptyOrRows(rows[0])

    return {
        data 
    }
}
async function insertDataUser (req, res) {
   const data = req.query
   const result = await db.query(
`INSERT INTO usuarios (id,nombre, login, password, rol) VALUES (default,'${data.nombre}','${data.login}','${data.password}','${data.rol}')`
)
  return result.affectedRows
}

async function getDataUser (req, res) {
    const rows = await db.query(
         `select * from usuarios`
   )
   const data = helper.emptyOrRows(rows)
   return {
     data 
      }
   }

module.exports = {
    getUserData,
    insertDataUser,
    getDataUser
}
