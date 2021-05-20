const wareHouse = require('../models/wareHouse');

exports.CreateWareHouse = async (req, res, next) => {
    console.log("Produuct", req.body)
    const newwarehouse = new wareHouse({
      warehouse_number:req.body.warehouse_number,
         warehouse_Name:req.body.warehouse_Name,
    });
    newwarehouse.save(function (err, user) {
    if (err) {
            console.log('Err: ', err);
            return res.status(500).send({
              success: false,
              msg: 'Internal Error',
            });
          }
       else {
        console.log('saved: ', newwarehouse);
        return res.status(200).send({
          success: true,
          msg: 'Successfully created ',
          createdobject: newwarehouse,
        })
      }
    });
  }

  
   //getAllWarehouse
   exports.getAllWareHouse = async (req, res,next) => {
    wareHouse.find()
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
   
    // //add warehouse
    // exports.CreateWareHouse = async (req, res, next) => {
    //   const newwareHouse = new wareHouse({
    //    warehouse_number:req.body.warehouse_number,
    //    warehouse_Name:req.body.warehouse_Name,
    //    products:[],
    //        });
    //      Product.find({_id:req.body.productId},function(err,productData){
    //        if(!productData){
    //          res.status(404).send({
    //            status:false,
    //            msg:"not found"
    //          });
    //        }else{
    //          newwareHouse.products.push(productData)
    //        }
    //      })
   
    //       newwareHouse.save(function (err, user) {
    //        if (err) {
    //          console.log('Err: ', err);
    //          return res.status(500).send({
    //            success: false,
    //            msg: 'Internal Error',
    //          });
    //        } else {
    //               console.log('saved: ', newwareHouse);
    //               return res.status(200).send({
    //                   success: true,
    //                   msg: 'Successfully created ',
    //                   createdobject: newwareHouse,
    //               })
    //           }
    //       });
        
        
        
    //   }
   