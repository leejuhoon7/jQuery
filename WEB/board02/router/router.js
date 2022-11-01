import main from '../components/main.js'
import myBoardList from '../components/myBoardList.js'
import myBoardRead from '../components/myBoardRead.js'
import myBoardWrite from '../components/myBoardWrite.js'

export default new VueRouter({
    mode : 'history',
    routes : [
      

        //boardList
        {
            path : '/boardList',
            name : 'boardList',
            component : myBoardList
        },
        //boardRead
        {
            path : '/boardRead:item',
            name : 'boardRead',
            component : myBoardRead,
            props : true
        },
        //boardWrite
        {
        path : '/boardWrite',
        name : 'boardWrite',
        component : myBoardWrite
        },
        //default
        {
            path : '*', // 위에 4가지 경로 제외하고 나머리 경로 redirect
            redirect : '/boardList'
        }
    ]
})