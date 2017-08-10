/**
 * Created by Administrator on 2017/8/2.
 */
function a(){
    alert("1");
}

//字典
function Dictionary(){
    var items = {};
    //是否存在键
    this.has = function(key){
        return key in items;
    }
    //添加新元素,或者更新已有元素
    this.set = function(key,value){
        items[key] = value;
    }
    //移除元素
    this.remove = function(key){
        if(this.has(key)){
            delete items[key];
            return true;
        }
        else{
            return false;
        }
    }
    //通过查找键值返回value
    this.get = function(key){
        if(this.has(key)){
            return items[key];
        }
        return undefined;
    }
    //清空字典
    this.clear = function(){
        items = {};
    }
    //返回键名的数组
    this.keys = function(){
        var ret = [];
        for(var i in items){
            ret.push(i);
        }
        return ret;
    }
    //返回values
    this.values = function(){
        var ret = [];
        for(var i in items){
            if(this.hasOwnProperty(i)) {
                ret.push(items[i]);
            }
        }
        return ret;
    }
    //按value排序
    this.sort = function(){

    }


}

