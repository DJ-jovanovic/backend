'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable('timezone', {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
            },
            timezone_id: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
            },
            abbr: {
                type: Sequelize.STRING
            },
            is_dst: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            offset: {
                type: Sequelize.INTEGER
            },
            utc: {
                type: Sequelize.STRING
            },
            current_time: {
                type: Sequelize.DATE
            }
        }, { transaction });

        await queryInterface.addIndex('timezone', ['timezone_id'], { transaction });

        await transaction.commit();
    } catch (err) {
        await transaction.rollback();
        throw err;
    }
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('timezone');
    }
};
