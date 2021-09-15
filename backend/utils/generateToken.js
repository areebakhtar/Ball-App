import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // 30 days
  });
  //first paramater is payload and second in secret key
};

export default generateToken;
