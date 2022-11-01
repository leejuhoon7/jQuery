import empHeader from './components/empHeader.js'
import router from './router/router.js'

let template = `
<div>
    <emp-header></emp-header>
    <!--라우터가 동작할 때 마다 뿌려줄 공간 꼭 생성!!-->
    <router-view></router-view>
</div>`

new Vue ({
    el : '#app',
    template, // template : template라는 뜻
    components : {
        empHeader // empHeader : empHeader
    },
    router // router : router라는 뜻
})