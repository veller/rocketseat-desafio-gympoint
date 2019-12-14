import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";
import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "user not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "incorrect password" });
    }

    const { id, name } = user;

    return res.status(200).json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
}

export default new SessionController();
