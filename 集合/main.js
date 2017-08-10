/**
 * Created by Administrator on 2017/8/1.
 */
//集合
function Set(){
    //私有变量
    var items = [];
    //打印
    this.print = function(){
        var ret = "";
        for(var i in items){
            ret += items[i] + " "; //i是数组索引
        }
        console.log(ret);
    }
    //存在元素,不能使用for in ,因为对于数组来说，是变量其索引而不是值
    this.hasValue = function(element){
        for(var i = 0;i<items.length;i++){
            if(items[i] == element){
                return true;
            }
        }
        return false;
    }
    //添加元素
    this.add = function(element){
        if(!this.hasValue(element)){
            items.push(element);
            return true;
        }
        return false;
    }
    //删除元素
    this.remove = function(element){
        if(this.hasValue(element)){
            var index = items.indexOf(element);
            items.splice(index,1);
            return true;
        }
        return false;
    }
    //清空set
    this.clear = function(){
        items = [];
    }
    //返回集合
    this.values = function(){
        return items;
    }


    //并集
    this.union = function(otherSet){
        var unionSet = new Set();
        for(var i=0;i<otherSet.values().length;i++){
            unionSet.add(otherSet.values()[i]);
        }
        for(var i=0;i<items.length;i++){
            unionSet.add(items[i]);
        }
        return unionSet;
    }
    //交集
    this.intersection = function(otherSet){
        var interSet = new Set();
        for(var i=0;i<otherSet.values().length;i++){
            if(this.hasValue(otherSet.values()[i])) {
                interSet.add(otherSet.values()[i]);
            }
        }
        return interSet;
    }
    //差集
    this.difference = function(otherSet){
        var diffSet = new Set();
        for(var i=0;i<items.length;i++){
            if(!otherSet.hasValue(items[i])){
                diffSet.add(items[i]);
            }
        }
        return diffSet;
    }
    //公共差
    this.commonDifference = function(otherSet){
        var d1 = this.difference(otherSet);
        var d2 = otherSet.difference(this);
        var ret = d1.union(d2);
        return ret;
    }
}


var s = new Set();
var s1 = new Set();
s.add(1);
s.add(2);
s.add(3);

s1.add(4);
s1.add(1);
s1.add(2);

var us = s.commonDifference(s1);
us.print();