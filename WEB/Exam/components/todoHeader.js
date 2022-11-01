let template = `
<div id="myDIV" class="header">
    <h2 style="margin:5px">My To Do List</h2>
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
            // 등록
            
        }
    }

}