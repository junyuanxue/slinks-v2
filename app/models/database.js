var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:8080/slinks';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE slinks(id SERIAL PRIMARY KEY, url )')
