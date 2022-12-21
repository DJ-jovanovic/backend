'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('flag', {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
            },
            img: {
                type: Sequelize.STRING
            },
            emoji: {
                type: Sequelize.STRING
            },
            emoji_unicode: {
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('flag');
    }
};
