let template = `
<div>
    <table id="list">
        <tr>
            <td v-for="info in headerInfo">{{ info }}</td>
        </tr>
        <!-- body -->
        <template v-for="empInfo in empList">
            <router-link tag="tr" v-bind:to="{ name : 'empRead', 
                                               params : { empId : empInfo.employee_Id }}">
                <td v-for="info in headerInfo">{{ empInfo[info] }}</td>                                               
            </router-link>
        </template>
    </table>
    <!-- 페이지 네이션 -->
    <router-link tag="button" v-bind:to="{ name : 'empWrite'}">직원등록</router-link>    
</div>
`

const empSelect = {
    template,
    data : function (){
        return {
        headerInfo : ['employee_id', 'first_name', 'last_name', 'email', 'job_id'],
        empList : []
        }      
    },
    created : function(){
        
        const vueObject = this; // this가 Vue나 component 객체를 가르킴

        $.ajax({
                // this -> jQuery 객체
            url : 'http://192.168.0.2:8081/myserver/empSelect',
            type : 'get',
            datatype : 'json',
            success : function(data){
                if(data != null){
                    vueObject.empList = data;
                }
                
            },
            error : function(reject){
                console.log(reject)
            }
        })
    }
}

export { empSelect }

