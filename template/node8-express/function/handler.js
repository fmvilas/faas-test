"use strict"

module.exports = (req, res) => {
    let err;
    const result = {
      status: "You said: " + JSON.stringify(req.body)
    };

    res
      .status(200)
      .send(result);
}
