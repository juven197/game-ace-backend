const cart = require("./cart.mongo");

// create and update in one function -> 'UPSERT'  update-insert
async function saveToDatabaseCart(item) {
  try {
    console.log(item);

    const data = await cart
      .findOneAndUpdate(
        { itemName: item.name },
        {
          $inc: { itemCount: 1 },
          itemPrice: item.price,
          pictureLink: item.pictureLink,
        },
        { upsert: true, new: true }
      )
      .select("-__v");
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
// READ -> with .find()
async function getAllItem() {
  try {
    const items = await cart.find().select("-__v");
    return items;
  } catch (err) {
    throw new Error(err);
  }
}

//delete with .deleteOne()
async function deleteItem(itemName) {
  try {
    const items = await cart.deleteOne({ itemName: itemName });
    return true;
  } catch (err) {
    throw new Error(err);
  }
}
module.exports = {
  saveToDatabaseCart,
  getAllItem,
  deleteItem,
};
