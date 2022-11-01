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
            items : ['id', 'no', 'contents', 'todoyn'], // 서버에서 가져온 원본 데이터
            updateItem : {
                id : '',
                no : '',
                contents : '',
                todoyn : ''
            } // 완료여부가 변경된 데이터를 별도로 저장
        }
    },
    computed : {
        itemList : function(){
            // boolean 타입의 yn 필드 추가 -> items 안의 객체의 todoyn 
            let itemArray = [];

            for(let i=0; i<this.items.length; i++){
                let temp = this.items[i];
                temp.yn = temp.todoyn == 1 ? true : false;
                itemArray.push(temp);
            }
            return ;
        }
    },
    watch : {
        updateItem : function(){
            // 실제로 서버와 통신을 해서 업데이트 진행
            const vueObject = this;

            $.ajax({
                url : 'http://192.168.0.2:8081/myserver/todoUpdate',
                type : 'get',
                dataType : 'json',
                success : function(data){
                    console.log(data);
                    if(data != null){
                        vueObject.selectItems = data;
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            })
        }
    },
    created : function(){
        this.loadData();

    },
    methods : {
        loadData : function(){
            // 서버에 있는 데이터를 가지고 오는 것
            const vueObject = this;

            $.ajax({
                url : 'http://192.168.0.2:8081/myserver/todoUpdate',
                type : 'get',
                dataType : 'json',
                success : function(data){
                    console.log(data);
                    if(data != null){
                        vueObject.selectItems = data;
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            })
           

        },
        checkedItem : function(no){
           // 해당 건의 스타일을 변경

        },
        deleteItem : function(no){
           // 페이지
           const vueObject = this;

           $.ajax({
            url : 'http://192.168.0.2:8081/myserver/tododelete',
            type : 'get',
            dataType : 'json',
            success : function(data){
                console.log(data);
                if(data != null){
                    vueObject.selectItems = data;
                }
            },
            error : function(reject){
                console.log(reject);
            }
        })
        }
    }
}