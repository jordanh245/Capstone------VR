

const pg = require("pg");
require("dotenv").config();
const token = process.env.REACT_APP_elephant

const creds = new pg.Client(
	"postgres://kjtwwmvu:cjGdbEUKTgOi8Ztz4nHtkTjygOEJazWD@fanny.db.elephantsql.com/kjtwwmvu"
  );
  

module.exports =creds;