import { name as MyName } from './lib'
import MyEmail from './lib' //export default emailをimportしている
// 波括弧なしの場合はdefaultでexportされたものを読み込む
// この場合、名前を揃える必要がない

console.log(`I'm ${MyName}. My Email is ${MyEmail}.`)

