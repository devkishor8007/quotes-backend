const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./model/user-model");
const Quote = require("./model/quote-model");
const { JWT_SECRET } = require("./config");

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, args) => await User.findById({ _id: args._id }),
    quotes: async () => await Quote.find({}),
  },

  User: {
    quotes: async (url) => await Quote.find({ by: url._id }),
  },

  Mutation: {
    signup: async (_, args) => {
      const foundUser = await User.findOne({ email: args.input.email });

      if (foundUser) {
        throw new Error("user already exist");
      }
      const hashPassword = await bcrypt.hash(args.input.password, 11);

      const user = await User.create({
        username: args.input.username,
        email: args.input.email,
        password: hashPassword,
      });

      return user;
    },

    signin: async (_, args) => {
      const foundUser = await User.findOne({ email: args.input.email });

      if (!foundUser) {
        throw new Error("user is not exist");
      }

      const checkPassword = await bcrypt.compare(
        args.input.password,
        foundUser.password
      );

      if (!checkPassword) {
        throw new Error("email or password is incorrect!!");
      }

      const token = jwt.sign({ userId: foundUser._id }, JWT_SECRET);

      return { token };
    },

    createQuote: async (_, args, { userId }) => {
      console.log(args);
      if (!userId) throw new Error("must be logged in");
      const addQuote = new Quote({
        category: args.input.category,
        desc: args.input.desc,
        by: userId,
      });
      await addQuote.save();
      return "Save Quotes";
    },
  },
};

module.exports = resolvers;