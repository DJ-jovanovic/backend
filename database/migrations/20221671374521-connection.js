'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('connection', {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
            },
            asn: {
                type: Sequelize.INTEGER
            },
            org: {
                type: Sequelize.STRING
            },
            isp: {
                type: Sequelize.STRING
            },
            domain: {
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('connection');
    }
};
