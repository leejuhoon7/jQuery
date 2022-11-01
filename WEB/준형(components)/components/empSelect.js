// <!-- body, 이중포문 사용하여 구성-->
// <!-- <tr></tr> 한 사원에 대한 정보 ㅡ v-for="empInfo in empList" -->
// <!-- <td></td> -> 한 사원이 가지고 있는 항목 중에서 출력될 항목 -->
// <!--           v-for="info in empInfo" ->empInfo[info] -->

let template=`
<div>
    <table id="list">
        <tr>
            <td v-for="info in headerInfo">{{info}}</td>
        </tr>
        <template v-for="empInfo in empList">
            <router-link tag="tr" v-bind:to="{name : 'empRead',
                                     params : {empId : empInfo.employee_id} }">
                <td v-for="info in headerInfo">{{empInfo[info]}}</td>
            </router-link>
        </template>
    </table>
    <!-- 페이지 네이션 -->
    <!--  -->
    <!-- 글쓰기로 넘어가는 라우터 링크 -->
    <router-link tag="button" v-bind:to="{name : 'empWrite'}">직원 등록</router-link>
</div>`

const empSelect = {
    template,
    data : function(){
        return{
            // 헤더에 대한 정보 따로 지정해서 들고있음
            headerInfo : ['employee_id', 'first_name', 'last_name', 'email', 'job_id'],
            // 정보를 실제로 뿌려줄때는 empList에 넣어서 뿌림
            empList : []
        }
    },
    // 데이터 가져오기 진행하는부분
    created : function(){
        // 제이쿼리문 안에서 this를 사용하면 jquery객체의 this를 불러오기 때문
        const vueObject = this;

        $.ajax({
            url : 'http://192.168.0.2:8081/myserver/empSelect',
            type : 'get',
            dataType : 'json',
            success : function(data){
                console.log(data);
                if(data != null){
                    vueObject.empList = data;
                }
            },
            error : function(reject){
                console.log(reject);
            }
        })
    }
}
// 위와같이 변수에 변수를 담아서
// 여러개의 변수를 한번에 export 시키는 것도 가능
export {empSelect}