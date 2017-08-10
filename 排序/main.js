/**
 * Created by Administrator on 2017/8/9.
 */
//排序
function  ArrayList() {
    var items = [];
    this.print = function(){
        return items.join();
    }
    this.add = function(v){
        items.push(v);
    }
    //冒泡排序
    this.bubbleSort = function(){
        for(var i=0;i<items.length;i++){
            for(var j=0;j<items.length-i-1;j++){
                if(items[j]>items[j+1]){
                    var temp = items[j];
                    items[j] = items[j+1];
                    items[j+1] = temp;
                }
            }
        }
    }
    //选择排序
    this.selectSort = function(){
        for(var i=0;i<items.length;i++){
            var min = items[i];
            var index = i;
            for(var j=i;j<items.length;j++){
                if(items[j]<min){
                    min = items[j];
                    index = j;
                }
            }
            var temp = items[i];
            items[i] = items[index];
            items[index] = temp;
        }
    }
    //2分搜索,数组已排序
    this.binarySearch = function(target){

        function bs(target,start,end){
            if(start<=end) {//大于则表示找不到
                var mid = Math.floor((start + end) / 2);
                if (target === items[mid]) {
                    return mid + 1;
                }
                else if (target > items[mid]) {
                    return bs(target, mid + 1, end);
                }
                else {
                    return bs(target, start, mid - 1);
                }
            }
            else{
                return -1;
            }

        }
        return bs(target,0,items.length-1);
    }
}
//二维数组
function Array2D(){
    var items = [];
    var xLength,yLength;
    this.init = function(initValue,x,y){
        xLength = x;
        yLength = y;
        for(var i=0;i<xLength;i++) {
            items[i] = [];
            for(var j=0;j<yLength;j++){
                items[i][j] = initValue;
            }
        }
    }

    this.print = function(){
        for(var i=0;i<xLength;i++) {
            var str = "";
            for(var j=0;j<yLength;j++){
                str+=items[i][j]+" ";
            }
            console.log(i+": "+str);//防止相同的输出重叠在一起
        }

    }
}

// var al = new ArrayList();
// al.add(3);
// al.add(2);
// al.add(1);
// al.add(4);
// al.selectSort();
// console.log(al.binarySearch(-1));

var array2d = new Array2D();
array2d.init(3,3,4);
array2d.print();


