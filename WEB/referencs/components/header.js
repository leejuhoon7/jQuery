export default{
    template : `
    <header>
        <h2>자유 게시판</h2>
    </header>`,
    props : ['parentData'],
    methods : {
        
        saveBoardList : function(){
            let data = this.parentData.dataArray;

            if(data.length == 0){
                alert('저장할 게시판 내용이 없습니다.');
                return;
            }

            if(typeof data === 'object'){
                data = JSON.stringify(data, undefined, 4);
            }

            let blob = new Blob([data], {type:'text/json'});
            let a = document.createElement('a');
            a.download='board.json';
            a.href = window.URL.createObjectURL(blob);
            a.click();
        }
    }
}