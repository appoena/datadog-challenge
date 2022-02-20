const Sequelize = require('sequelize');
const database = require('..');

const Checkout = database.define('checkout', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    amount: { 
        type: Sequelize.DOUBLE,
        allowNull: false

    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Checkout;