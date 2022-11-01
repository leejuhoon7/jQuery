import empRead from '../components/empRead.js'
import {empSelect} from '../components/empSelect.js'
import empWrite from '../components/empWrite.js'

export default new VueRouter({
    mode : 'history',
    routes : [
        // 경로 저장소
        // 전체조회
        {
            path : '/',
            name : 'empSelect',
            component : empSelect
        },
        //읽기
        {
           //어느 파라미터에 값을 담을건지 알아야 함
            path : '/empRead/:empId',
            name : 'empRead',
            component : empRead,
            //값이 필요하기때문에 props : true추가
            props : true
        },
        //등록, 수정
        {
            path : '/empWrite/:empId',
            name : 'empWrite',
            component : empWrite,
            props : true
        },
        //기타
        {
            //위 3가지 외의 주소 값이 들어오면 route로 반환시킴
            path : '*',
            redirect : '/'
        }
    ]
})