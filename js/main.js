var titleReg = /^[A-Za-z0-9_ ]{3,40}$/;
var descriptionReg = /^[A-Za-z0-9_ ]{3,500}$/;
var numChoicesReg =  /^[2-9]{1}$/;
var emailReg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i ;


$(document).ready(function(){

  $('ul li').hide().eq(0).show();//"eq" function in jquery define the child element number or position in DOM style.. :)

  $("#poll_title").keyup(function(){// keyup function trigger the keyup event. when user key up the key board buttion --it trigger.. :)
    var title=$(this).val();
    if(!titleReg.test(title)){
      $("#error_poll_title").show().html("enter valid alpha numeric title.").css("color","red").css("font-weight","400");
      $(".submit").css("display","none");
      $("#poll_title").css("background-color","#ffffff");
      $(".options_list").hide(500);
      $(".poll_description").hide(500);
      $(".poll_num_choices").hide(500);
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
      $(".submit").css("display","none");
      $("#poll_description").css("background-color","#ffffff");
      $(".options_list").hide(500);
      $(".poll_num_choices").hide(500);
    }
    else
    {
      $("#error_poll_description").hide();
      $("#poll_description").css("background-color","#c9ff83");
      $(".poll_num_choices").slideDown("slow","swing");
    }
  });

  $("#poll_num_choices").keyup(function(){// keyup function trigger the keyup event. when user key up the key board buttion --it trigger.. :)
    var sanitized = $(this).val().replace(/[^2-9]/g, '');
    $(this).val(sanitized);
    var numChoices=$(this).val();
    if(!numChoicesReg.test(numChoices)){
      $("#error_poll_num_choices").show().html("Number of choices should be between 2 and 9").css("color","red").css("font-weight","400");
      $("#poll_num_choices").css("background-color","#ffffff");
      $(".options_list").hide(500);
      $(".submit").css("display","none");
    }
    else
    {
      $("#error_poll_num_choices").hide();
      $("#poll_num_choices").css("background-color","#c9ff83");
      $(".options_list").slideDown("slow","swing");
      $("#choice").empty();
      for (var i = 1; i <=numChoices; i++) {
        $("#choice").append('<input type="text" id="choice-'+i+'" >');
      }

      $("#choice input").keyup(function(){
        var canShowSubmit=true;
        $("#choice :input").each(function(){
          var value=$(this).val();
          if(!value){
            canShowSubmit=false;
          }
        });
        if(canShowSubmit)
        {
          $(".submit").slideDown("slow","swing");
        }
        else
        {
          $(".submit").hide(500);
        }
      });
    }
  });

  $('#submit').click(function(){
    console.log("submit");
  });
});
