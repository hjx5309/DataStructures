/**
 * Created by Administrator on 2017/8/7.
 */
//图
function Graph(){
    //顶点数组
    var vertexs = [];
    //邻接表,字典是之前写好的,key为顶点，value为数组，存放邻接顶点
    var adjList = new Dictionary();
    //字典，存放各个边的权值
    var edgeLengthDic = new Dictionary();
    //每个节点的前置节点set
    var vertexPredDic = new Dictionary();
    //已经访问过的节点数组
    var visitedVertexList = [];
    //每个节点到源节点的距离set
    var distanceDic = new Dictionary();
    //成员函数:添加顶点
    this.addVertex = function(v){
        if(!adjList.has(v)) {
            vertexs.push(v);
            adjList.set(v, []);
        }
    }
    //成员函数：2个顶点间添加边,v,w是2个顶点
    this.addEdge = function(v,w,l){
        adjList.get(v).push(w);
        adjList.get(w).push(v);
        edgeLengthDic.set(v+w,l);
    }
    //输出图：邻接表
    this.printGraph = function(){
        for(var i=0;i<vertexs.length;i++){
            var s = vertexs[i]+" -> ";
            for(var j=0;j<adjList.get(vertexs[i]).length;j++){
                s+=adjList.get(vertexs[i])[j]+" ";
            }
            s+="\n";
            console.log(s);
        }
    }
    //遍历：dfs，深度优先
    this.depthFirstSearch = function(startVertex){
        //已经访问过的节点
        var visitedVertexs = [];
        //栈，存储将要访问的节点
        var stack = [];
        function dfs(v){
            //未访问过
            if(visitedVertexs.indexOf(v)==-1){
                //访问该节点
                visitedVertexs.push(v);
                console.log(v);
                //结束
                if(visitedVertexs.length == vertexs.length){
                    return;
                }
                //将未访问过的邻接点入栈
                for(var i=0;i<adjList.get(v).length;i++){
                    if(visitedVertexs.indexOf(adjList.get(v)[i])==-1)
                    stack.push(adjList.get(v)[i]);
                }
                var next = stack.pop();
                dfs(next);
            }
            else
            {
                return;
            }
        }

        dfs(startVertex);
    }

    //遍历，广度度优先，bfs,加上计算源点到每个点的最短路
    this.breadthFirstSearch = function(startVertex){
        //已经访问过的节点
        var visitedVertexs = [];
        //队列，存储将要访问的节点
        var queue = [];
        //字典，存储每个源点到每个顶点的距离，key为顶点，value为距离，按边的数量计算，初始为1000000，一个很大的数字
        var distanceDic = new Dictionary();
        var infinite = 100000;
        for(var i=0;i<vertexs.length;i++){
            distanceDic.set(vertexs[i],infinite);
        }
        distanceDic.set(startVertex,0);

        function bfs(v){
            //未访问过的节点
            if(visitedVertexs.indexOf(v)===-1){
                //访问该节点
                visitedVertexs.push(v);
                //console.log(v);

                //结束
                if(visitedVertexs.length === vertexs.length){
                    return;
                }

                for(var i=0;i<adjList.get(v).length;i++){
                    if(visitedVertexs.indexOf(adjList.get(v)[i])===-1){
                        queue.unshift(adjList.get(v)[i]);
                        //更新距离
                        if(distanceDic.get(v) + 1 < distanceDic.get(adjList.get(v)[i])){
                            distanceDic.set(adjList.get(v)[i],distanceDic.get(v) + 1);
                        }
                    }
                }
                var next = queue.pop();
                bfs(next);

            }
            else{
                return;
            }
        }

        bfs(startVertex);
        //输出最短路距离
        var keys = distanceDic.keys();
        for(var j=0;j<keys.length;j++){
            console.log(keys[j]+" "+distanceDic.get(keys[j]));
        }
    }

    //Dijkstra最短路算法，源节点s和目的节点d
    this.dijkstraShortestPath = function(s,d){
        //初始化，源节点已经访问
        //visitedVertexList.push(s);
        //初始化距离dic
        var infinite = 100000;
        for(var i=0;i<vertexs.length;i++){
            distanceDic.set(vertexs[i],infinite);
        }
        distanceDic.set(s,0);

        //当前节点
        var cur = s;
        //主循环，结束条件：访问完所有节点
        while(visitedVertexList.length<vertexs.length){
            //访问当前节点
            visitedVertexList.push(cur);
            //计算邻接节点
            var node;
            for(var j=0;j<adjList.get(cur).length;j++){
                node = adjList.get(cur)[j];
                //如果该节点未被访问过
                if(visitedVertexList.indexOf(node) === -1){
                    var tempDistance;
                    if(edgeLengthDic.get(cur+node) != undefined){
                        tempDistance = edgeLengthDic.get(cur+node);
                    }
                    else{
                        tempDistance = edgeLengthDic.get(node+cur);
                    }
                    if(distanceDic.get(cur) + tempDistance < distanceDic.get(node)){
                        //更新距离和前置节点
                        distanceDic.set(node,distanceDic.get(cur) + tempDistance);
                        vertexPredDic.set(node,cur);
                    }
                }
            }

            //找到未被访问过的距离源点最小距离的节点
            var minValue = 100000;
            var minNode = null;
            for(var k=0;k<vertexs.length;k++){
                if(visitedVertexList.indexOf(vertexs[k]) === -1){
                    if(distanceDic.get(vertexs[k]) < minValue){
                        minValue = distanceDic.get(vertexs[k]);
                        minNode = vertexs[k];
                    }
                }
            }

            //下一轮
            cur = minNode;
        }
        //输出最短距离
        var shortestDistance = distanceDic.get(d);
        console.log(shortestDistance);
        //输出源到目的最短路
        var startNode = d;
        while(startNode != s){
            console.log(startNode);
            startNode = vertexPredDic.get(startNode);
        }
        console.log(s);

    }

}
var graph = new Graph()
graph.addVertex('S');
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');


graph.addEdge('A','S',2);
graph.addEdge('S','B',1);
graph.addEdge('S','C',3);
graph.addEdge('B','F',5);
graph.addEdge('F','C',7);
graph.addEdge('A','E',8);
graph.addEdge('C','E',4);
graph.addEdge('D','E',6);
graph.addEdge('D','C',10 );
graph.addEdge('D','F',3);

//graph.depthFirstSearch('A')
//graph.breadthFirstSearch('A');
graph.dijkstraShortestPath('S','D');