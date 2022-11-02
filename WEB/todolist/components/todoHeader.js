let template = `
<div id="myDIV" class="header">
  <h2>My To Do List</h2>
  <input type="text" v-model="title" placeholder="Title...">
  <span v-on:click="addItem" class="addBtn">Add</span>
</div>
`

export default {
    template : template,
    data : function(){
        return {
            title : ''
        }
    },
    methods : {
        addItem : function(){
            const component = this;

            $.ajax({
                url : 'http://localhost:8081/java/todoInsert',
                type : 'post',
                data : JSON.stringify({ id : 11, 
                    contents : component.title }),
                contentType : 'application/json',
                dataType : 'json',
                success : function(data){
                    if(data != null){
                        //component.$router.go(0);
                        console.log(data);
                        console.log('result : ', data.result);
                        console.log('count : ' + data.count);
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            })
        }
    }
}