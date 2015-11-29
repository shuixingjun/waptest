$(function(){


	var normal = function(){
        this.nextAll('.error').hide();
      }
      , wrong = function(text){
        this.nextAll('.error').html(text).show();
      }
 


     $.validator.validType = {
                username: {
                    type: ['required', '请输入手机号'],
                    trim: true, 
                    valid:[
                        ['regexp', /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/]
                        //['ajax', 'url', '']
                    ],
                    text:['手机号码不正确','账号或密码不正确'],
                    right:'',
                    callback:function(){ 
                    }
                },
                password:{
                    type: ['required', '请输入密码'],
                    focus: '请输入密码',
                     valid:[
                        ['length', 6, 16]
                    ],
                    text:['6-16'],
                    callback:function(){}
                }
       	    }            
        $.validator.validEvent = {
         '#username': 'blur'  
       ,'#password': 'blur'
      };

       $('.row input').on('focusin', function(event) {
        event.preventDefault();
        $(this).siblings('label').hide();
      });
      $('.row input').on('focusout', function(event) {
        event.preventDefault();
        if (!$(this).val()) {
          $(this).siblings('label').fadeIn('fast');
        }
      });

      $login_form = $.validator({
        selector: '#login_form'
        , normal: normal
        , right: normal       
        , wrong: wrong
        }).on('submit', function(event) {//登录
      event.preventDefault();
      	console.log(111);
          })

});