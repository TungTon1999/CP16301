
const categoryModel=require('./model');

/*
description: lay danh sach san pham
author: Tung 
date: 22/3/2022
*/

exports.getCategories= async()=>{
    // return data;
    return await categoryModel.find({},'id name description');
}


/*
description: lay danh sach san pham theo id
author: Tung 8:55
date: 22/3/2022 
*/
exports.getCategoriesById = async(id)=>{
  // const product=data.filter(item=>item._id==id)[0];
  // return product;
  const category=categoryModel.findById(id);
  return  category;
}
/*
description:them moi san pham vao db
author: Tung 8:55
date: 24/3/2022 
*/
exports.insert = async(category)=>{
// data.push(product);
const p=new categoryModel(category);
await p.save();
}
/*
description: xoa san pham
author: Tung 9:01
date: 24/3/2022 
*/

exports.delete=async(id)=>{
// data=data.filter(item=>item._id != id);
await categoryModel.findByIdAndDelete(id);
}
/*
description: cap nhat san pham
author: Tung 8:03
date: 2/3/2022 
*/
exports.update=async(id,category)=>{
// data=data.map(item=>{
//   if(item._id==id){
//     item={...item,...product}
//   }
//   return item;
// })
await categoryModel.findByIdAndUpdate(id,category);
}
 


var data=[{
    "_id": 1,
    "name": "Beef Ground Medium",
    "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
  }, {
    "_id": 2,
    "name": "Buffalo - Tenderloin",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
  }, {
    "_id": 3,
    "name": "Napkin White",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
  }, {
    "_id": 4,
    "name": "Muffin - Zero Transfat",
    "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
  }, {
    "_id": 5,
    "name": "Iced Tea Concentrate",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
  }, {
    "_id": 6,
    "name": "Beets - Mini Golden",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
  }, {
    "_id": 7,
    "name": "Scrubbie - Scotchbrite Hand Pad",
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
  }, {
    "_id": 8,
    "name": "Beef - Kobe Striploin",
    "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
  }, {
    "_id": 9,
    "name": "Plasticknivesblack",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
  }, {
    "_id": 10,
    "name": "Veal - Eye Of Round",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
  }]