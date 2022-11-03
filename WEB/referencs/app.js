import myHeader from './components/header.js'
import router from './router/router.js'

let template = `
<div>
    <my-header v-bind:parentData.sync="this.$data"></my-header>
    <router-view></router-view>
</div>`

new Vue({
    el : '#app',
    template : template,
    data : {
       dataArray : {}
    },
    components : {
        myHeader // myHeader : myHeader -> 'my-header' : myHeader
    },
    created : function(){
        this.loadData();
    },
    methods : {
        getParentData : function(){
            return this.dataArray['board'];
        },
        setParentData : function(dataList){
            this.dataArray['board'] = dataList;
        },
        loadData : function(){ // 파일을 읽어들이는 메소드

               fetch('/referencs/data/board.json')
               .then(response => response.json())
               .then(data => {
                    this.dataArray = data;
                    if(this.dataArray != null && this.dataArray['board'].length > 0){
                        this.listOk = true;
                    }
                    
                    this.$router.push({ name : 'boardList'});
                    
               }).catch(err => console.log(err));
            
        }
    },
    router  // router : router
})