#  delete 操作

DELETE /data/1

这里的data往往是一个数组，但是这里的1并不是数组中的第一个元素，而是指的id为1的元素。在URI里面添加了对应的id后，进行删除操作。

# patch 操作

 patch  http://localhost:3000/data/3

 
{
"cardNum": 1234567,
"date": 20170150,
"status": 4
}