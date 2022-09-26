const { RequestError } = require("../../helpers");
const { User } = require("../../models/user");

const updateSubscription = async (req, res) => {
  const subscriptions = ["starter", "pro", "business"];
  const { subscription: userSubscription, _id } = req.user;
  const { subscription: bodySubscription } = req.body;

  if (userSubscription === bodySubscription) {
    throw RequestError(400, "You already have the same subscription");
  } else if (!subscriptions.includes(bodySubscription)) {
    throw RequestError(
      400,
      "Subscription can only includes starter, pro or business"
    );
  }

  const updatedUserBySubscription = await User.findByIdAndUpdate(_id, req.body);

  res.json(updatedUserBySubscription);
};

module.exports = updateSubscription;
