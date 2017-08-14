var titleReg = /^[A-Za-z0-9_ ]{3,40}$/;
var descriptionReg = /^[A-Za-z0-9_ ]{3,500}$/;
var numChoicesReg =  /^[0-9]{1}$/;
var emailReg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i ;


$(document).ready(function(){

  $('ul li').hide().eq(0).show();//"eq" function in jquery define the child element number or position in DOM style.. :)

  $("#poll_title").keyup(function(){// keyup function trigger the keyup event. when user key up the key board buttion --it trigger.. :)
    var title=$(this).val();
    if(!titleReg.test(title)){
      $("#error_poll_title").show().html("enter valid alpha numeric title.").css("color","red").css("font-weight","400");
      $("#username").css("background-color","#fff99c");
      $(".password").css("display","none");
      $(".email").css("display","none");
      $(".submit").css("display","none");
    }
    else
    {
      $("#error_poll_title").hide();
      $("#poll_title").css("background-color","#c9ff83");
      $(".poll_description").slideDown("slow","swing");
    }

  });

  $("#poll_description").keyup(function(){// keyup function trigger the keyup event. when user key up the key board buttion --it trigger.. :)
    var description=$(this).val();
    if(!descriptionReg.test(description)){
      $("#error_poll_description").show().html("enter valid description").css("color","red").css("font-weight","400");
      $("#username").css("background-color","#fff99c");
      $(".password").css("display","none");
      $(".email").css("display","none");
      $(".submit").css("display","none");
    }
    else
    {
      $("#error_poll_description").hide();
      $("#poll_description").css("background-color","#c9ff83");
      $(".poll_num_choices").slideDown("slow","swing");
    }

  });

  $("#poll_num_choices").keyup(function(){// keyup function trigger the keyup event. when user key up the key board buttion --it trigger.. :)
    var sanitized = $(this).val().replace(/[^0-9]/g, '');
    $(this).val(sanitized);
    var numChoices=$(this).val();
    if(!numChoicesReg.test(numChoices)){
      $("#error_poll_num_choices").show().html("enter valid number of choices without space").css("color","red").css("font-weight","400");
      $("#username").css("background-color","#fff99c");
      $(".password").css("display","none");
      $(".email").css("display","none");
      $(".submit").css("display","none");
    }
    else
    {
      $("#error_poll_num_choices").hide();
      $("#poll_num_choices").css("background-color","#c9ff83");
      $(".username").slideDown("slow","swing");
    }

  });

  $("#email").keyup(function(){
    var mail=$(this).val();
    if(!emailReg.test(mail)){
      $("#error2").show().html("enter valid email").css("color","red").css("font-weight","400");
      $("#email").css("background-color","#fff99c");
      $(".submit").css("display","none");
    }
    else
    {
      $("#error2").hide();
      $("#email").css("background-color","#c9ff83");
      $(".submit").slideDown("slow","swing");
    }

  });
  $('#submit').click(function(){
    var email=$("#email").val();
    var username=$("#username").val();
    var password=$("#password").val();

    if(emailReg.test(email) && userReg.test(username) && passwordReg.test(password) )
    {

      $("#form").show().html("<h1>Thank you!</h1><br><h3>for registration..!!</h3>").css("text-align","center").css("color","green");
    }
    else
    {

    }
    return false;


  });


});
