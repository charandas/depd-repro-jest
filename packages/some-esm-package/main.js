import Sequelize from 'sequelize'

export default function aFn () {
  console.log('in a function')
  console.log(Sequelize)
  return true
}