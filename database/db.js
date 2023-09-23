import {Sequelize} from 'sequelize';

// const db = new Sequelize('database_app', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

const db = new Sequelize('database_app', 'admin', '#Edubdaws321', {
    host: 'database-blog-react.cyugz1puwxdy.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
});

//AWS: 

export default db