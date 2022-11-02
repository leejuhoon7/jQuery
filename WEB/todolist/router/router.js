import selectItems from '../components/selectItems.js'

export default new VueRouter({
    mode : 'hash', 
    routes : [
        {
            path : '/',
            name : 'todoList',
            component : selectItems,

        },
        {
            path : '*',
            redirect : '/'
            //component : errorPage
        }
    ]
})