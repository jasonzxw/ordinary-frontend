//链表 可以做通用泛型<T>做数据
物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的

特点:每个节点由数据部分Data和链部分Next，Next指向下一个节点，这样当添加或者删除时，只需要改变相关节点的Next的指向，效率很高。

类型: 单链表、双向链表、循环链表
function NodeList(val,node){
    this.val= val ;
    this.next= node ;
}