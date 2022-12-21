'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable('currency', {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING
            },
            code: {
                type: Sequelize.STRING
            },
            symbol: {
                type: Sequelize.STRING
            },
            plural: {
                type: Sequelize.STRING
            },
            exchange_rate: {
                type: Sequelize.INTEGER
            }
        }, { transaction });

        await queryInterface.addIndex('currency', ['name', 'code'], { transaction });

        await transaction.commit();
    } catch (err) {
        await transaction.rollback();
        throw err;
    }
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('currency');
    }
};
