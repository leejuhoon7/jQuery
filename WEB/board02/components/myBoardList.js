
export default{
    template: `<div>
                    <table id="list">
                        <!-- HEADER -->
                        <tr>
                            <th style="width:50px;">글번호</th>
                            <th>글제목</th>
                            <th style="width:50px;">조회수</th>
                            <th style="width:70px;"></th>
                        </tr>
                        <!-- DATA -->
                        <tr v-for="item in object" v-bind:key="item.no">
                            <td>{{item.no}}</td>
                            
                            <router-link tag="td" 
                                         v-bind:to="{ name : 'boardRead', params : {'item' : item} }">
                                        {{ item.title}}</router-link>
                            <td>{{item.view}}</td>
                            <td><button @click="boardDelete(item.no)">삭제</button></td>
                        </tr>
                    </table>
        
                    <router-link tag="button" style="float:right;"
                     v-bind:to="{ name : 'boardWrite'}">글쓰기</router-link>
                </div>`,
    data : function(){
        return {
            Object : []
        }
    },
    created : function(){
        this.object = this.$parent.getParentData();
    },

    // props: ['object'], // 외부에서 가져옴
    methods: {
        boardDelete : function(no){
            for(let i=0; i< this.object.length; i++){
                if(this.object[i].no == no){
                    this.object.splice(i, 1);
                }
            }

            this.$parent.setParentData(this.object);
        }
    }
};