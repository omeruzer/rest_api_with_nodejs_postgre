const pool = require('../helpers/db')
const all = (req, res) => {
    pool.query('SELECT * FROM students', (err, result) => {
        if (err) throw err;

        res.status(200).json(result.rows)
    })
}

const detail = (req, res) => {
    const id = req.params.id
    pool.query('SELECT * FROM students WHERE id = $1', [id], (err, result) => {
        if (err) throw err;

        res.status(200).json(result.rows[0])
    })
}

const add = (req, res) => {
    const { name, email, age, dob } = req.body
    pool.query('INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)', [name, email, age, dob], (err, result) => {
        if (err) throw err;

        res.status(200).json({ status: 200, message: 'Success' });
    })
}
const edit = (req, res) => {
    const { name, email, age, dob } = req.body
    const id = req.params.id

    pool.query('UPDATE students SET name = $1 ,email = $2, age = $3, dob = $4 WHERE id = $5', [name, email, age, dob, id], (err, result) => {
        if (err) throw err;
        res.status(200).json({ status: 200, message: 'Updated' });
    })


}
const remove = (req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM students WHERE id = $1', [id], (err, result) => {
        if (err) throw err;

        res.status(200).json({ status: 200, message: 'Deleted' });
    })
}

module.exports = {
    all,
    add,
    detail,
    edit,
    remove,
}