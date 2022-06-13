const User = require("../model/user");

module.exports = {
    index: async (req, res) => {
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        try {
          const savedUser = await user.save();
          res.status(200).send(savedUser);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    }
}