import selectItems from '../components/selectItems.js'

export default new VueRouter({
    routes : [

        // 전체조회
        {
            path : '/',
            name : 'todoList',
            component : selectItems            
        },

        // 기타
        {
            path : '*',
            redirect : '/'
        }
    ]
})