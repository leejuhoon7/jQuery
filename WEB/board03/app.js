import myHeader from './components/header.js'
import router from './router/router.js'

let template 
`<div>
    <my-header v-bind:parentData.sync="this.$data"></my-header>
    <router-view></router-view>
</div>`

new Vue({
    
})