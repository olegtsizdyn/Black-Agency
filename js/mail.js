$('.left_input input')[1].oninput = function() {
  if($($('.left_input input')[1]).val().length>0){
    var email = $($('.left_input input')[1]).val();
    $.ajax({
      type: "POST",
      url: "./chek.php",
      data : ({email:email,}),
      dataType: "html",
    	success: function(data){
        if(data=='success'){
          $($('.left_input input')[1]).css('border-color','green');
        }else{
          $($('.left_input input')[1]).css('border-color','red');
        }
   		}});
  }else{
    $($('.left_input input')[1]).css('border-color','red');
  }
};
$($('.left_input input')[2]).click(function () {
  $($('.left_input input')[2]).val('+7 ');
})
$('.left_input input')[2].oninput = function(){
  if($($('.left_input input')[2]).val().length<16){
    $($('.left_input input')[2]).css('border-color','red');
  }else{
    $($('.left_input input')[2]).css('border-color','green');
  }
};
$('.left_input input')[0].oninput = function(){
  if($($('.left_input input')[0]).val().length<1){
    $($('.left_input input')[0]).css('border-color','red');
  }else{
    $($('.left_input input')[0]).css('border-color','green');
  }
};
$($('.left_input input')[2]).mask('+7 000 000-00-00');
$('.send').click(function () {
  var send = true;
  var plans = [];
  if($($('.left_input input')[0]).val().length<1){
    $($('.left_input input')[0]).css('border-color','red');
    send = false;
  }else{
    $($('.left_input input')[0]).css('border-color','green');
  }
  if($($('.left_input input')[2]).val().length<16){
    $($('.left_input input')[2]).css('border-color','red');
    send = false;
  }else{
    $($('.left_input input')[2]).css('border-color','green');
  }
  if($($('.left_input input')[1]).val().length>0){
    var email = $($('.left_input input')[1]).val();
    $.ajax({
      type: "POST",
      url: "./chek.php",
      data : ({email:email,}),
      dataType: "html",
    	success: function(data){
        $($('.left_input input')[1]).css('border-color','green');
   		}});
  }else{
    $($('.left_input input')[1]).css('border-color','red');
    send = false;
  }
  plans = $('.wrap_select div').text();
  if(plans == 'Выберете план' || plans == 'Выберете план' ){
    send = false;
    $('.wrap_select, .wrap_select ul').css('border-color','red');
  }else{
    $('.wrap_select, .wrap_select ul').css('border-color','green');
  }
  if(send){
    var name = $($('.left_input input')[0]).val();
    var email = $($('.left_input input')[1]).val();
    var phone = $($('.left_input input')[2]).val();
    var text = $('textarea').val();
    $.ajax({
     		type: "POST",
     		url: "./mail.php",
     		data : ({name: name,mail: email,text: text,phone:phone,plans:plans}),
    		dataType: "html",
    	 	success: function(data){
          if(data == 'success'){
            $($('.left_input input')[0]).val('');
            $($('.left_input input')[1]).val('');
            $($('.left_input input')[2]).val('');
            $('textarea').val('');
            $('.wrap_select, .wrap_select ul').css('border-color','#ebebeb');
            $($('.left_input input')[0]).css('border-color','#ebebeb');
            $($('.left_input input')[1]).css('border-color','#ebebeb');
            $($('.left_input input')[2]).css('border-color','#ebebeb');
            $('.contact,.inputs,.send').css('opacity','0');
            $('.thanks').css('opacity','1');
            setTimeout(function () {
              $('.contact,.inputs,.send').css('opacity','1');
              $('.thanks').css('opacity','0');
            },3000);
          }else{
            console.log('err');

            return;
          }

     		}
 		});
  }
});
