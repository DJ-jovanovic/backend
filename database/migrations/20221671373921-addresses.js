'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable('ip_address', {
                ip: {
                    type: Sequelize.STRING(16),
                    allowNull: false,
                    primaryKey: true,
                },
                type: {
                    type: Sequelize.STRING(6),
                    allowNull: false
                },
                continent: {
                    type: Sequelize.STRING
                },
                continent_code: {
                    type: Sequelize.STRING(16)
                },
                country: {
                    type: Sequelize.STRING
                },
                country_code: {
                    type: Sequelize.STRING(16)
                },
                region: {
                    type: Sequelize.STRING
                },
                region_code: {
                    type: Sequelize.STRING(16)
                },
                city: {
                    type: Sequelize.STRING
                },
                latitude: {
                    type: Sequelize.FLOAT
                },
                longitude: {
                    type: Sequelize.FLOAT
                },
                is_eu: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
                },
                postal: {
                    type: Sequelize.STRING(16)
                },
                calling_code: {
                    type: Sequelize.STRING(8)
                },
                capital: {
                    type: Sequelize.STRING
                },
                borders: {
                    type: Sequelize.STRING(16)
                },
                security_id: {
                    type: Sequelize.UUID,
                    allowNull: true,
                    references: {
                        model: 'security',
                        foreignKey: 'id',
                    },
                },
                connection_id: {
                    type: Sequelize.UUID,
                    allowNull: true,
                    references: {
                        model: 'connection',
                        foreignKey: 'id',
                    },
                },
                timezone_id: {
                    type: Sequelize.UUID,
                    allowNull: true,
                    references: {
                        model: 'timezone',
                        foreignKey: 'uuid',
                    },
                },
                currency_id: {
                    type: Sequelize.UUID,
                    allowNull: true,
                    references: {
                        model: 'currency',
                        foreignKey: 'id',
                    },
                },
                created_at: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updated_at: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            }, { transaction });

            await queryInterface.addIndex('ip_address', ['ip'], { transaction });

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface
            .dropTable('ip_address');
    }
};
