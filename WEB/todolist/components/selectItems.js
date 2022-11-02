let template = `
<div>
    <ul id="myUL">
        <template v-for="item in itemList">
        <li v-bind:key="item.no"
            v-bind:class="{ checked : item.yn }"
            v-on:click="checkedItem(item.no)" >
            {{ item.contents }}
            <span class="close" v-on:click.self.stop="deleteItem(item.no)">x</span>
        </li>
        </template>
    </ul>
</div>
`

export default {
    template : template,
    data : function(){
        return{
            items : [],
            updateItem : {}
        }
    },
    computed : {
        itemList : function(){
            return $.map(this.items, function(obj, idx){
                obj.todoyn = obj.todoyn == 1 ? 0 : 1;
                return obj;
            })
        }
    },
    watch : {
        updateItem : function(){
            const component = this;
            $.ajax({
                uri : 'http://localhost:8081/java/todoUpdate',
                type : 'get',
                data : component.updateItem,
                success : function(data){
                    if( data != null){
                        alert('update success!');
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            })
        }
    },

    created : function(){
        this.loadDate();
    }, 
    methods : {
        loadDate : function(){
            const component = this;

            $.ajax({
                url : 'http://localhost:8081/java/todoSelect',
                type : 'get',
                data : { id : 11 },
                dataType : 'json',
                success : function(data){
                    if(data.length != 0){
                        component.items = data;
                    }                   
                },
                error : function(reject){
                    console.log(reject)
                }
            })
        },
        checkedItem : function(no){
            const component = this;
            $(this.items).each(function(index, item){
                if(item.no == no){
                    // item.yn = !item.yn;
                    item.todoyn = item.todoyn == 1? 0 : 1;
                    component.updateItem = item;
                    
                }
            })


        },
        deleteItem : function(no){
            const component = this;
            // $(this.items).each(function(idx, item){
            //     if(item.no == no){
            //         index = idx; 
            //     }
            // })
            $.ajax({
                url : 'http://localhost:8081/java/todoDelete',
                type : 'get',
                data : { id : 11, no : no},
                dataType : 'json',
                success : function(data){
                    if(data != null){
                        component.items = $.grep(component.items, function(item){
                                                return !(item.no == no);
                                            });
                    }
                },
                error : function(reject){
                    console.log(reject);
                }

            })
        }

    }
}