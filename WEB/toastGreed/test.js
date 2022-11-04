"use strict"

const TEST = {
    dataSet : new Object(),

    init : new function(){},
    gridSet : new function(){},
}

TEST.init = () => {
    TEST.gridSet();
}

TEST.gridSet = () => {
    // 임시 테스트 데이터
    TEST.dataSet = [
        {
            'name' : '가',
            'year' : '1990',
            'date' : '0905',
            'region' : '부천',
            '아오' : '아오',
        },
        {
            'name' : '나',
            'year' : '1989',
            'date' : '1231',
            'region' : '충주',
            '아오' : '아오',
        },
        {
            'name' : '다',
            'year' : '1985',
            'date' : '1231',
            'region' : '충주',
            '아오' : '잠온다',
        },
        {
            'name' : '라',
            'year' : '1933',
            'date' : '1231',
            'region' : '충주',
            '아오' : '자고싶다',
        },
        {
            'name' : '마',
            'year' : '1957',
            'date' : '1231',
            'region' : '충주',
        },
        {
            'name' : '바',
            'year' : '1968',
            'date' : '1231',
            'region' : '충주',
        },
        {
            'name' : '사',
            'year' : '1969',
            'date' : '1231',
            'region' : '충주',
        },
        {
            'name' : '아',
            'year' : '1994',
            'date' : '1231',
            'region' : '충주',
        },
    ];
}

// 실행
$(function(){
    TEST.init();
})