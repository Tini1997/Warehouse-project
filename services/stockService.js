const Stock = require('../models/stock');

exports.addStock = async (req, res, next) => {
    console.log("Stock", req.body)
    const newstock = new Stock({
        productId: req.body.productId,
        warehouse_number: req.body.warehouse_number,
        quantity:req.body.quantity

    });
    newstock.save(function (err, user) {
    if (err) {
            console.log('Err: ', err);
            return res.status(500).send({
              success: false,
              msg: 'Internal Error',
            });
          }
       else {
        console.log('saved: ', newstock);
        return res.status(200).send({
          success: true,
          msg: 'Successfully created ',
          createdobject: newstock,
        })
      }
    });
  }

  //getAllStock
  exports.getAllStock = async (req, res,next) => {
    Stock.find()
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while retrieving ."
         });
       });
   };