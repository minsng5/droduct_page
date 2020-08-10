$(document).ready(function(){
    //이차배열 패턴 =["이미지파일", "타이틀", "콘텍스트" ,"가격정보", "업데이트 날짜", "좋아요 횟수" ]
    var $pd_arr = [
        ["img1.jpg", "거실 인테리어 4", "합리주의 실용 인테리어 4", "30000", "20200802", "23"],
        ["img2.jpg", "거실 인테리어 1", "합리주의 실용 인테리어 1", "150000", "20190202", "57"],
        ["img3.jpg", "침실 인테리어 8", "모더니즘 실용 인테리어 8", "190000", "20150702", "49"],
        ["img4.jpg", "침실 인테리어 2", "샘플 실용 인테리어 2", "50000", "20171102", "17"],
        ["img5.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 1", "90000", "20020807", "84"],
        ["img6.jpg", "침실 인테리어 4", "합리주의 실용 인테리어 2", "20000", "20140909", "22"],
        ["img7.jpg", "서재 인테리어 4", "합리주의 실용 인테리어 7", "80000", "20130510", "20"],
        ["img8.jpg", "욕실 인테리어 4", "합리주의 실용 인테리어 6", "40000", "20180215", "36"],
        ["img9.jpg", "거실 인테리어 4", "합리주의 실용 인테리어 4", "56000", "20111217", "42"],
    ];
    var $pd_box = `
    <div class="pd_box">
        <div class="pd_photo">
            <img src="img/img1.jpg" alt="">
        </div>
        <div class="pd_info">
            <h3 class="pd_title">Title</h3>
            <p class="pd_text">Context</p>
            <div class="pd_etc">
                <span class="pd_price">가격정보</span>
                <span class="pd_date">업데이트 날짜</span>
            </div>
            <p class="fav">좋아요&nbsp; <span>100</span></p>
        </div>
    </div>
    `;

    for (i=0; i<$pd_arr.length; i++){
        $(".pd_frame").append($pd_box);
    }
    function pd_sort(){
    $(".pd_box").each(function(index){
        $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
        $(this).find(".pd_title").text($pd_arr[index][1])
        $(this).find(".pd_text").text($pd_arr[index][2])
        $(this).find(".pd_price").text($pd_arr[index][3])
        $(this).find(".pd_date").text($pd_arr[index][4])
        $(this).find(".fav span").text($pd_arr[index][5])
    });
}
pd_sort(); //브라우저가 로딩되면서 함수문은 호출(sort가 적용되지 않은 상태)
    $(".date_sort").click(function(){
        //sort() 메서드 : 순차적으로 나열 시키는 메서드. 오름차순으로 나열
        $pd_arr.sort(function(a,b){
            return a[4] - b[4]; //작은 순으로 차례대로 정렬
        });
        console.log($pd_arr); //배열의 순서가 변경
        $pd_arr.reverse(); //reverse() : 배열을 역순으로 변경 -> 큰순으로 차례대로 변경
        console.log($pd_arr);

/*         
            $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find(".pd_title").text($pd_arr[index][1])
            $(this).find(".pd_text").text($pd_arr[index][2])
            $(this).find(".pd_price").text($pd_arr[index][3])
            $(this).find(".pd_date").text($pd_arr[index][4])
            $(this).find(".fav span").text($pd_arr[index][5])
        });
*/
        pd_sort();
    });
//낮은가격순 클릭시
    $(".low_sort").click(function(){
        $pd_arr.sort(function(a, b){
            return a[3] - b[3]; //왼쪽이 오른쪽보다 작으면 가만히
        });
        console.log($pd_arr);
/*  
            $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find(".pd_title").text($pd_arr[index][1])
            $(this).find(".pd_text").text($pd_arr[index][2])
            $(this).find(".pd_price").text($pd_arr[index][3])
            $(this).find(".pd_date").text($pd_arr[index][4])
            $(this).find(".fav span").text($pd_arr[index][5])
        }); 
*/
        pd_sort();
    });

//높은가격순 클릭시
    $(".high_sort").click(function(){
        $pd_arr.sort(function(a, b){
            return b[3] - a[3]; //왼쪽이 오른쪽보다 작으면 가만히
        });
        console.log($pd_arr);
/*         
            $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find(".pd_title").text($pd_arr[index][1])
            $(this).find(".pd_text").text($pd_arr[index][2])
            $(this).find(".pd_price").text($pd_arr[index][3])
            $(this).find(".pd_date").text($pd_arr[index][4])
            $(this).find(".fav span").text($pd_arr[index][5])
        }); 
*/
pd_sort();
    });

        //인기순 클릭시
        $(".fav_sort").click(function(){
            $pd_arr.sort(function(a, b){
                return b[5] - a[5]; //왼쪽이 오른쪽보다 작으면 가만히
            });
            console.log($pd_arr);
/*
            $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find(".pd_title").text($pd_arr[index][1])
            $(this).find(".pd_text").text($pd_arr[index][2])
            $(this).find(".pd_price").text($pd_arr[index][3])
            $(this).find(".pd_date").text($pd_arr[index][4])
            $(this).find(".fav span").text($pd_arr[index][5])
        }); 
*/

        });




});