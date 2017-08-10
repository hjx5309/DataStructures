/**
 * Created by Administrator on 2017/7/31.
 */
//单链表定义
function SingleLinkedList(){
    //节点
    function Node(element) {
        this.element = element;
        this.next = null;
        //页面上显示节点
        var node = document.createElement('div');
        var pText = document.createElement('p');
        //箭头div
        var img = document.createElement('img');
        img.src="img/arrow.png";
        pText.innerHTML = element;
        node.className = 'node';
        node.id = length;
        node.onclick = selectDiv;//不能写成 selectDiv(this)，这是函数调用
        node.appendChild(pText);
        node.appendChild(img);
        document.body.appendChild(node);
    }
    //长度
    var length = 0;
    //头部指针
    var head = null;

    //成员函数:长度
    this.size = function(){
        return length;
    }
    //成员函数:在尾部新增节点
    this.append = function(element){
        //新的节点
        var node = new Node(element);
        var currentNode = null;
        //空链表
        if(head == null){
            head = node;
        }
        else{
            currentNode = head;
            while(currentNode.next != null){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    }
    //成员函数:插入
    this.insert = function(pos,element){
        //检查pos是否越界
        if(pos >=0 && pos <= length){
            var node = new Node(element);
            //头部插入,即位置0
            if(pos === 0){
                node.next = head;
                head = node;
            }
            //中间或者尾部插入
            else{
                var index = 0;
                var cur = head,previous;
                while(index < pos){
                    previous = cur;
                    cur = cur.next;
                    index++;
                }
                previous.next = node;
                node.next = cur;
            }
            length++;
            return true;
        }
        else{
            return false;
        }
    }
    //移除元素
    this.removeAt = function(pos){
        if(pos>=0 && pos<=length){
            //空链表
            if(head == null){
                return false;
            }
            else{
                if(pos === 0){
                    head = head.next;
                }else {
                    var cur = head, index = 0;
                    var previous;
                    while (index < pos) {
                        previous = cur;
                        cur = cur.next;
                        index++;
                    }
                    previous.next = cur.next;
                }
            }
            length--;
            return true;
        }
        else{
            return false;
        }

    }

    //返回要查找元素的位置，找不到返回-1
    this.indexOf = function(element){
        if(head == null){
            return -1;
        }
        else{
            var index=0;
            var cur = head;
            while(cur){
                if(cur.element === element){
                    return index;
                }
                cur = cur.next;
                index++;
            }
            return -1;
        }
    }

    //成员函数:打印链表
    this.printList = function(){
        if(head == null){
            console.log("空链表");
        }
        else{
            var cur = head;
            var retStr = "";
            var cnt=0;
            while(cur!=null){
                if(!cnt) {
                    retStr += cur.element;
                }
                else{
                    retStr += "->"+cur.element;
                }
                cur = cur.next;
                cnt++;
            }
            console.log(retStr);
        }

    }
}

var linkedList = new SingleLinkedList();
var nodeValue = 1;
var selectedNode = null;
function selectDiv(div) {
    //清楚之前选中过的div
    var divList = document.getElementsByClassName("node");
    for(var i=0;i<divList.length;i++){
        if(divList[i].style.background == "red"){
            divList[i].style.background = "green";
        }
    }

    var tempSelectedNode = this;
    this.style.background = "red";//更改style样式
    selectedNode = tempSelectedNode;
}
function addNode(){
    linkedList.append(nodeValue);
    nodeValue++;
}
function deleteNode(){
    if(linkedList.size() > 0) {
        if(selectedNode!=null) {
            var pos = selectedNode.id;
            alert("pos  "+pos);
            document.body.removeChild(selectedNode);
            linkedList.removeAt(pos-1);
            selectedNode = null;
        }
        else{
            alert("请用鼠标点击选中要删除的节点")
        }
    }
    else{
        alert("空链表");
    }


    linkedList.printList();

}
