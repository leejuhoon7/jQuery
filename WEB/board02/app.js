import myHeader from './components/header.js'
import router from './router/router.js'

let template 
`<div> 
메롱
    <router-view></router-view>
</div>`

new Vue({
    el : '#app',
    template : template,
    router // router : router
})