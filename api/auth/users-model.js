const db = require('../../data/dbConfig')

async function add(user_data) {
    const [newUserId] = await db('users').insert(user_data)
    const result = await db('users').where('id', newUserId).first()
    return result
}
async function getUser(user_id){
    const user = await db('users').where(user_id)
    return user
}

module.exports = {
    add,
    getUser
}