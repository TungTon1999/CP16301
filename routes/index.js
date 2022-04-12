/*
route: điều hướng cái xảy ra tiếp theo

*/

var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
const jwt=require('jsonwebtoken');
const authentication=require('../middle/authentication');
const userController = require('../components/users/controller');

/* GET home page. */
// http://localhost:3000/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello there' });
});
// http://localhost:3000/tinhdientich?chieudai=10&chieurong=8
router.get('/tinhdientich/:type/', function(req, res, next) {
  // params => :type (id)
  const {type}=req.params;
  let dienTich=0;
  if(type=='hv'){
    // http://localhost:3000/tinhdientich/hv/?canh=10
    let{canh}=req.query;
    dienTich= Number(canh)*Number(canh);
  } else if(type == 'ht') {
    // http://localhost:3000/tinhdientich/ht/?duongcheo1=10&duongcheo2=10
    let{duongcheo1,duongcheo2}= req.query;
    dienTich= Number(duongcheo1)*Number(duongcheo2) /2;
  } else if(type =='hbh'){
    let{day,chieucao}=req.query;
    dienTich=Number(day)*Number(chieucao);
  }
  //query : (?....... canh&duongcheo1)
  // const {chieudai,chieurong}=req.query;
  // const dientich=Number(chieudai)*Number(chieurong);
  res.render('index', { result: `dien tich ${type}: ${dienTich}` });
});



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello there' });
});



router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Hello there' });
});

/**
 * http://localhost:3000/dang-nhap
 * method: get
 * desc: hiển thị trang đăng nhập
 */
 router.get('/dang-nhap',[authentication.checkLogin] , function(req, res, next) {
  

  res.render('login');
});
/**
 * http://localhost:3000/dang-nhap
 * method: post
 * desc: tiến hành đăng nhập
 */
 router.post('/dang-nhap',async function (req, res, next) {
  const { username, password } = req.body;
  // tiến hành đăng nhập
  const user= await userController.login(username,password);
if (user){
 // lưu thông tin login vào session
  const token=jwt.sign({id:user._id,username:user.username},'mykey');
  req.session.token = token;
   // nếu thành công thì chuyển qua sản phẩm
  res.redirect('/san-pham');
 }
  
  else {
    // nếu không thành công
  res.redirect('/dang-nhap');
  }
  


  
});
/**
 * http://localhost:3000/dang-xuat
 * method: get
 * desc: tiến hành đăng xuất, thành công chuyển qua đăng nhập
 */
 router.get('/dang-xuat',[authentication.checkLogin] ,function (req, res, next) {

req.session.destroy(function(err){
   // nếu thành công thì chuyển đăng nhập
   res.redirect('/dang-nhap');
})
});



module.exports = router;

// render : hien thi giao dien cho hbs


