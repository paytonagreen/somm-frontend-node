import Sequelize from 'sequelize';

const sequelize = new Sequelize(`postgres://localhost:5432/somm`);

export default sequelize;
