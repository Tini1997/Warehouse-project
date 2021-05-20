const Product = require('../models/product');

exports.addProducts = async (req, res, next) => {
    console.log("Produuct", req.body)
    const newproduct = new Product({
        productId: req.body.productId,
        productName: req.body.productName
    });
  newproduct.save(function (err, user) {
    if (err) {
            console.log('Err: ', err);
            return res.status(500).send({
              success: false,
              msg: 'Internal Error',
            });
          }
       else {
        console.log('saved: ', newproduct);
        return res.status(200).send({
          success: true,
          msg: 'Successfully created ',
          createdobject: newproduct,
        })
      }
    });
  }

  //getAllProduct
  exports.getAllProduct = async (req, res,next) => {
    Product.find()
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

   