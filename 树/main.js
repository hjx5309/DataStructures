/**
 * Created by Administrator on 2017/8/3.
 */
//树,二叉搜索数，左小于根，右大于等于根
function BinarySearchTree(){
    //树的节点
    var Node = function(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
    //根节点
    var root = null;

    //插入一个节点
    this.insert = function(value){
        //辅助函数，递归插入节点
        function insertNode(node,newNode){
            //左子树
            if(newNode.value < node.value){
                if(node.left == null){
                    node.left = newNode;
                }
                else{
                    insertNode(node.left,newNode);
                }
            }
            else{
                if(node.right == null){
                    node.right = newNode;
                }
                else{
                    insertNode(node.right,newNode);
                }
            }
        }


        var newNode = new Node(value);
        if(root == null){
            root = newNode;
        }
        else{
            insertNode(root,newNode);
        }

    }

    //查找，存在返回true，否则false
    this.search = function(value){
        //辅助函数
        function  searchNode(node,value) {
            if(node === null){
                return false;
            }

            if(node.value === value){
                return true;
            }
            else if(node.value > value){
                return searchNode(node.left,value);
            }
            else{
                return searchNode(node.right,value);
            }
        }
       return searchNode(root,value);
    }

    //中序遍历
    this.inOrderTraverse = function(){
        function inOrderTraverseNode(node){
            if(node === null){
                return;
            }
            else{
                console.log(node.value+ " ");
                inOrderTraverseNode(node.left);
                inOrderTraverseNode(node.right);
            }
        }
        inOrderTraverseNode(root);
    }

    //先序遍历
    this.preOrderTraverse = function(){
        function preOrderTraverseNode(node){
            if(node === null){
                return;
            }
            else{
                preOrderTraverseNode(node.left);
                console.log(node.value+ " ");
                preOrderTraverseNode(node.right);
            }
        }
        preOrderTraverseNode(root);
    }

    //后序遍历
    this.postOrderTraverse = function(){
        function postOrderTraverseNode(node){
            if(node === null){
                return;
            }
            else{
                postOrderTraverseNode(node.left)
                postOrderTraverseNode(node.right);
                console.log(node.value+ " ");
            }
        }
        postOrderTraverseNode(root);
    }

    //搜索树中的最小值，由于是bst
    this.searchMin = function (){
       function searchMinNode(node){
           if(node.left == null){
               return node.value;
           }
           return searchMinNode(node.left);
       }
       return searchMinNode(root);
    }

    //搜索树中的最大值，由于是bst
    this.searchMax = function (){
        function searchMaxNode(node){
            if(node.right == null){
                return node.value;
            }
            return searchMaxNode(node.right);
        }
        return searchMaxNode(root);
    }

    //树的深度
    this.depth = function(){

        function getDepth(node){
            if(node == null){
                return 0;
            }
            var leftDepth = getDepth(node.left) + 1;
            var rightDepth = getDepth(node.right) + 1;
            return leftDepth > rightDepth ? leftDepth:rightDepth;

        }
        return getDepth(root);
    }

    //树的特殊节点个数：同时有左右子节点的节点个数
    this.nodeNumHasLeftAndRightNode = function () {
         function hasBothNode(node){
             if(node.left != null && node.right!=null){
                 return 1+hasBothNode(node.left) + hasBothNode(node.right);
             }
             else{
                 return 0;
             }
         }
         return hasBothNode(root);
    }


}


//测试
var bst = new BinarySearchTree();

bst.insert(3);
bst.insert(4);
bst.insert(5);


//alert(bst.search(5))
bst.postOrderTraverse();
//alert(bst.searchMax());
alert(bst.nodeNumHasLeftAndRightNode());