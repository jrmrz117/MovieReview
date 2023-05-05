const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mysql_user',
    password: 'mysql_password',
    database: 'movie_review'
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
    }
    else {
        console.log('Connected to MySQL database!');
    }
});