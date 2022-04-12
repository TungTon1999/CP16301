var express = require('express');
var router = express.Router();
const jwt=require('jsonwebtoken');

const UserController=require('../components/users/controller');
const productController=require('../components/products/controller');
const authentication=require('../middle/authentication');
/*
http://localhost:3000/api/dang-nhap,
method: post
desc: tien hanh dang nhap
*/ 


    router.post('/dang-nhap',async function (req, res, next) {
        const { username, password } = req.body;
        // tiến hành đăng nhập
        const user= await UserController.login(username,password);
      if (user){
        // lưu thông tin login vào session
        const token=jwt.sign({id:user._id,username:user.username},'mykey');


       res.json({ status:true ,id:user._id,username:user.username,token})
      }
        // nếu thành công thì chuyển qua sản phẩm
       else {
          // nếu không thành công
        res.json({status:false})
        }
            
      });

/*
http://localhost:3000/api/dang-ky,
method: post
desc: tien hanh dang ky
*/ 


  router.post('/dang-ky',async function (req, res, next) {
      const { username, password , confirm_password} = req.body;
      // tiến hành đăng nhập
      const user= await UserController.register(username,password,confirm_password);
    if (user){
      // lưu thông tin login vào session
      res.json({status:true})
    }
      // nếu thành công thì chuyển qua sản phẩm
     else {
        // nếu không thành công
      res.json({status:false})
      }
          
    });

/*
http://localhost:3000/api/products,
method: get
desc: lay danh sach san pham
*/ 

        // products
  router.get('/products',[authentication.checkToken],async function (req, res, next) {
     
      // tiến hành đăng nhập
      const products= await productController.getProducts();
   res.json(products);
          
    });
/**
 * http://localhost:3000/api/products/:id/detail
 * method: get
 * desc: hiển thị chi tiết 1 sản phẩm
 */
 router.get('/products/:id/detail',[authentication.checkToken],async function (req, res, next) {
  // lấy 1 sản phẩm từ database và hiển thị
const {id}=req.params;
// lay thong tin chi tiet cua san pham
const product= await productController.getProductById(id);
 res.json(product);
});

module.exports = router;