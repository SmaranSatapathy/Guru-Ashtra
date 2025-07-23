const Pool=require('pg').Pool

const pool=new Pool({
    user:"postgres",
    password:"smaran",
    host:"localhost",
    port: 5432,
    database:"guru_ashtra"
})

module.exports=pool