/**
 * Created by Administrator on 2017/7/27.
 */
//栈的实现
function Stack(){
    //用数组模拟栈
    var items = [];
    //push方法
    this.push = function(element){
        items.push(element);
    }
    //pop方法
    this.pop = function(){
        items.pop();
    }
    //返回栈顶的元素
    this.peek = function(){
        return items[items.length-1];
    }
    //是否为空
    this.isEmpty = function(){
        return items.length == 0;
    }
    //栈的大小
    this.size = function(){
        return items.length;
    }
    //清空栈
    this.clear = function(){
        items.length = 0;
    }
    //输出栈
    this.print = function(){
        console.log(items.toString());
    }

}

//用栈实现字符串括号是否匹配(),比如(1+2)-(3+5)是成功匹配,而(1+1(1-1),)(1+1不是成功匹配,
function isBracketsMatch(str){
    var i = 0;
    var s = new Stack();
    while(i<str.length){
        if(str[i]==')'){
           if(s.size()==0){
               return false;
           }
           s.pop();
        }
        if(str[i]=='('){
            s.push(str[i]);
        }

        i++;
    }
    return s.size()==0;

}
var is = isBracketsMatch("");
alert(is);