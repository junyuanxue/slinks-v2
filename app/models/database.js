var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost/slinks';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE slinks(id SERIAL PRIMARY KEY, url TEXT not null, starred BOOLEAN)');
query.on('end', function() { client.end(); });
