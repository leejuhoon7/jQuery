import todoHeader from './components/todoHeader.js'
import router from './router/router.js'


let template = `
<div>
    <todo-header></todo-header>
    <router-view></router-view>
</div>`

new Vue({
    el : '#app',
    template : template,
    components : {
        'todo-header' : todoHeader
    },
    router 
                
    
})