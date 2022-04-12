var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();



const categoryController=require('../components/categories/controller');
const upload=require('../middle/upload');

const authentication=require('../middle/authentication');

/**
 * http://localhost:3000/san-pham/
 * method: get
 * desc: hiển thị danh sách sản phẩm
 */
 router.get('/',[],async function (req, res, next) {
  // lấy danh sách sản phẩm từ database và hiển thị

  const data=await categoryController.getCategories();
  console.log(data)

  res.render('category', {categories:data});  
});


/**
 * http://localhost:3000/san-pham/
 * method: post
 * desc: thêm mới 1 sản phẩm
 * * middleware : trung gian(upload hinh`, bat loi~,kiem tra login)
 */


 router.post('/',[],async function (req, res, next) {
  // thêm mới sp vào db
  //10.82.164.63 => ip FPT
let {body} =req;

await categoryController.insert(body);

res.redirect('/danh-muc');

 
});

/**
 * http://localhost:3000/san-pham/them-moi
 * method: get
 * desc: them moi' 1 sản phẩm
 * middleware : trung gian(upload hinh`, bat loi~,kiem tra login)
 */
 router.get('/them-moi',async function (req, res, next) {
  // lay danh sach danh muc
  const categories = await categoryController.getCategories();
  res.render('category_insert',{categories:categories});
  });

/**
 * http://localhost:3000/danh-muc/:id/edit
 * method: get
 * desc: hiển thị chi tiết 1 sản phẩm
 */
 router.get('/:id/edit',async function (req, res, next) {
  // lấy 1 sản phẩm từ database và hiển thị

const {id}=req.params;
// lay thong tin chi tiet cua san pham

// lay danh sach danh muc
const category= await categoryController.getCategoriesById(id);

  res.render('category_edit', {category:category });  
});



/**
 * http://localhost:3000/san-pham/:id/edit
 * method: post
 * desc: hiển thị chi tiết 1 sản phẩm
 */
 router.post('/:id/edit',[upload.single('image')], async function (req, res, next) {
  // update 1 sản phẩm vào db

  let {body,file,params} =req;
  
   body={...body,image}
  
  await categoryController.update(params.id,body);

  res.redirect('/danh-muc'); 
});



/**
 * http://localhost:3000/san-pham/:id/delete
 * method: delete
 * desc: xóa 1 sản phẩm
 */
 router.delete('/:id/delete',[],async function (req, res, next) {
  // xóa 1 sản phẩm 

const {id}=req.params;
await categoryController.delete(id);
// chuyen ve tran san pham
res.json({result: true});  
});
 


/**
 * http://localhost:3000/san-pham/thong-ke
 * method: get
 * desc: thống kê sp
 */
 router.get('/thong-ke', function (req, res, next) {
  // thống kê sản phẩm 



  res.render('products', {});  
});


module.exports = router;
