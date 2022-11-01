let template = `
    <div>
        <ul id="myUL">
            <template v-for="item in itemList" >
                <li  v-bind:key="item.no"
                     v-bind:class="{ checked : item.yn }"
                     v-on:click="checkedItem(item.no)">
                        {{ item.contents }}
                        <span class="close" v-on:click="deleteItem(item.no)">x</span>
                </li>
            </template>
        </ul>
    </div>`


export default {
    template : template,
    data : function(){
        return {
            items : [],
            updateItem : {}
        }
    },
    computed : {
        itemList : function(){

        }
    },
    watch : {
        updateItem : function(){
            
        }
    },
    created : function(){
        this.loadData();
    },
    methods : {
        loadData : function(){
            

        },
        checkedItem : function(no){
           

        },
        deleteItem : function(no){
           
            
        }
    }
}