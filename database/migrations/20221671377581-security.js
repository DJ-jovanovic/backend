'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('security', {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
            },
            anonymous: {
                type: Sequelize.BOOLEAN
            },
            proxy: {
                type: Sequelize.BOOLEAN
            },
            vpn: {
                type: Sequelize.BOOLEAN
            },
            tor: {
                type: Sequelize.BOOLEAN
            },
            hosting: {
                type: Sequelize.BOOLEAN
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('security');
    }
};
