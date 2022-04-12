// const async = require("hbs/lib/async");
const productModel=require('./model');
/*
description: lay danh sach san pham
author: Tung 
date: 22/3/2022
*/
exports.getProducts= async()=>{
    // return data;
    return await productModel.find().populate('category_id');
}
/*
description: lay danh sach san pham theo id
author: Tung 8:55
date: 22/3/2022 
*/
exports.getProductById= async(id)=>{
    // const product=data.filter(item=>item._id==id)[0];
    // return product;
    return productModel.findById(id).populate('category_id');
}
/*
description:them moi san pham vao db
author: Tung 8:55
date: 24/3/2022 
*/
exports.insert = async(product)=>{
  // data.push(product);
  const p=new productModel(product);
  await p.save();
}
/*
description: xoa san pham
author: Tung 9:01
date: 24/3/2022 
*/

exports.delete=async(id)=>{
  // data=data.filter(item=>item._id != id);
  await productModel.findByIdAndDelete(id);
}
/*
description: cap nhat san pham
author: Tung 8:03
date: 2/3/2022 
*/
exports.update=async(id,product)=>{
  // data=data.map(item=>{
  //   if(item._id==id){
  //     item={...item,...product}
  //   }
  //   return item;
  // })
  await productModel.findByIdAndUpdate(id,product);
}
var data=[{
    
  "_id": 3,
  "name": "Chocolate Liqueur - Godet White",
  "price": 69,
  "quantity": 29,
  "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "category_id": 3,
  "image": "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-600x600.jpg",
  "release": "2021-06-26"
}, {
  "_id": 4,
  "name": "Rootbeer",
  "price": 35,
  "quantity": 40,
  "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
  "category_id": 4,
  "image": "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-600x600.jpg",
  "release": "2021-05-23"
}, {
  "_id": 5,
  "name": "Cheese - Gorgonzola",
  "price": 87,
  "quantity": 38,
  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "category_id": 5,
  "image": "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-600x600.jpg",
  "release": "2022-03-12"
}, {
  "_id": 6,
  "name": "Flour - Pastry",
  "price": 80,
  "quantity": 24,
  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "category_id": 6,
  "image": "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-600x600.jpg",
  "release": "2021-06-14"
}, {
  "_id": 7,
  "name": "Truffle Cups - Red",
  "price": 84,
  "quantity": 13,
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "category_id": 7,
  "image": "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-600x600.jpg",
  "release": "2022-03-02"
}, {
  "_id": 8,
  "name": "Gelatine Leaves - Envelopes",
  "price": 8,
  "quantity": 82,
  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "category_id": 8,
  "image": "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-600x600.jpg",
  "release": "2021-09-13"
}, {
  "_id": 9,
  "name": "Marjoram - Fresh",
  "price": 27,
  "quantity": 47,
  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
  "category_id": 9,
  "image": "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-600x600.jpg",
  "release": "2021-08-05"
}, {
  "_id": 10,
  "name": "Coconut - Creamed, Pure",
  "price": 49,
  "quantity": 13,
  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  "category_id": 10,
  "image": "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-600x600.jpg",
  "release": "2021-06-21"
}]
  