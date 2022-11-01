// bootstrap에서 navbar 하나 긁어옴
// <!-- 기존의 a링크 삭제후 router-link직접추가 -->
let template =`
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand"
                 v-bind:to="{'name' : 'empSelect'}">
                 사원 정보 목록
    </router-link>
  </div>
</nav>`
//위의 템플릿을 변수에 담아서 export시켜줌
export default {
    template
}