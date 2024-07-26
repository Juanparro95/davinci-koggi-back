const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const users = []

const secretKey = 'parro-secret-power'


exports.register = (req, res) => {
    const {username, password} = req.body;
    const hashPassword = bcrypt.hashSync(password, 0)
    users.push({ username, password: hashPassword })
    res.status(201).json({message: 'Usuario registrado con éxito'});
}

exports.login = (req, res) => {
    const {username, password} = req.body
    const user = users.find (u => u.username === username)
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({username}, secretKey, {expiresIn: '1h'})
        res.json({ token })
        return;
    }

    res.status(401).json({message: 'Usuario y/o contraseña invalidos'});
}

