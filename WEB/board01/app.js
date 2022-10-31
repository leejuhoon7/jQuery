import myHeader from './components/header.js'
import myBoardList from './components/myBoardList.js'
import myBoardWrite from './components/myBoardWrite.js'
import myBoardRead from './components.myBoardRead.js'

let template = `
<div>
    <my-header v-bind:parentData.sync="this.$data"></my-header>
    <router-view></router-view>
</div>`



new Vue ({
    el : '#app',
    template : template,
    data : {
    
        dataArray : {},     // 파일에서 읽은 데이터
    },
    components : {
        myHeader // myHeader : myHeader -> 'my-header' : myHeader
        
    },
    methods : {
        get
    }
        
})