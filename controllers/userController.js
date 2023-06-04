const User = require(‘…/database/models/User’);
const jwt = require(‘jsonwebtoken’);
const config = require(‘…/config/config.json’);

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(201).json({ message: ‘User registered’, user });
  } catch (error) {
    res.status(500).json({ message: ‘Error registering user’, error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !user.validPassword(password)) {
      return res.status(401).json({ message: ‘Invalid email or password’ });
    }

    const token = jwt.sign({ id: user.id }, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    });

    res.status(200).json({ message: ‘User logged in’, token });
  } catch (error) {
    res.status(500).json({ message: ‘Error logging in user’, error });
  }
};
