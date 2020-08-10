$(document).ready(function(){
    var $price = $(".pd_price span").text();
    console.log("현재 가격의 원본 정보 : " + $price);
    console.log("현재 가격의 원본 정보의 데이터 타입 : " + typeof $price);
    var $origin_price = $price.replace(",","");
    console.log("숫자정보의 값 : " + $origin_price);
    console.log("숫자정보의 데이터 타입 : " + typeof $origin_price);

    var $basic_price = parseFloat($origin_price);

    var $total_price;
    var $opt_val="";
    var $total_price_result = "";
    var $num = $(".pd_count_box input").val();

function calc_price(){
    $(".pd_count_box input").val($num);

    $opt_val = $(".pd_option select").val();
    console.log($opt_val);
    console.log(typeof $opt_val);
    
    $total_price_opt = $basic_price * $num + parseFloat($opt_val);
    $total_price_result = $total_price_opt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $(".total_price_num span").text($total_price_result);
    var $detail_img = $(".pd_img img").attr("src");
    $(".cart_img img").attr("src", $detail_img);
    var $detail_title = $(".pd_title h3").text();
    $(".cart_info h4").text($detail_title);

    $(".buy_price span").text($total_price_result);

    var $sel_opt_txt = $(".pd_option select option:selected").text();

    $(".bottom_list p span").text($sel_opt_txt);

    var $opt_default = $(".pd_option select option:selected").attr("value");
    if($opt_default == "0"){
        $(".bottom_list").hide();
    }else{
        $(".bottom_list").show();
    }
}


    $(".pd_count_box a:first").click(function(){
        if($num < 2){//현재 구매수량이 1일 경우, 작동 금지

        }else{//현재 구매수량이 2이상일 경우, 1씩 감소
            $num--; //10 -> 9 -> 8....-> 1
            calc_price();
            return false;


        }
        
        return false;
    });
    $(".pd_count_box a:last").click(function(){
        $num++;
        calc_price();
        return false;
    });

    $(".pd_option select").change(function(){
        calc_price();
    });

    $(".pd_btn li:last-child input").click(function(){
        $(".mycart").addClass("active");
        $(".dark").addClass("active");
        calc_price();
    });
    $(".dark, .close_btn, .close_btn li:last-child input").click(function(){
        $(".mycart").removeClass("active");
        $(".dark").removeClass("active");
    });

});