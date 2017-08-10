/**
 * Created by Administrator on 2017/7/28.
 */
//队列 尾部添加新元素，头部移除元素
function Queue(){
    var items = [];//私有变量
    //入队。队尾入队
    this.enqueue = function(element){
       items.push(element);
    }
    //出队，移除数组第一个元素并返回
    this.dequeue = function(){
        return items.shift();
    }
    //返回第一个元素
    this.front = function(){
        return items[0];
    }
    //队列是否为空
    this.isEmpty = function(){
        return items.length == 0;
    }
    //队列大小
    this.size = function(){
        return items.length;
    }
    //打印队列
    this.print = function (){
        console.log(items.toString());
    }
}
//击鼓传花, 循环队列，通过把队列头部元素放到尾部模拟
function hitDrumPassFlower(nameList,passCnt){
    var queue = new Queue();
    for(var i=0;i<nameList.length;i++)
    {
        queue.enqueue(nameList[i]);
    }

    while(queue.size() > 1){
        for(var j=0;j<passCnt;j++){
            queue.enqueue(queue.dequeue());
        }
        console.log("淘汰: "+queue.front());
        queue.dequeue();
    }

    console.log("胜利者: "+queue.dequeue());
}
var nameList  = ['John','Jack','Camila','Ingrid','Carl'];
hitDrumPassFlower(nameList,7);