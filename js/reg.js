$(function(){


	var normal = function(){
        this.nextAll('.error').hide();
      }
      , wrong = function(text){
        this.nextAll('.error').html(text).show();
      }
      ,time =5
      ,$getCode = $('#getCode') 
      ,interval
    // ,t = false;
      ;
 
    var validV = function(rs){ 
          if(rs && !interval){
              $getCode.addClass('active').prop('disabled',false)
          }else{
              $getCode.removeClass('active').prop('disabled',true);
          }
    }

     $.validator.validType = {
                username: {
                    type: ['required', '手机号码不正确'],
                    trim: true, 
                    valid:[
                        ['regexp', /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/]
                        //['ajax', 'url', '']
                    ],
                    text:['手机号码不正确','该手机已被注册'],
                    right:'',
                    callback:validV
                },
                password:{
                    type: ['required', '请输入密码'],
                     valid:[
                        ['length', 6, 16]
                    ],
                    text:['6-16'],
                    callback:function(){}
                },
                code:{
                    type: ['required', '请输入验证码'],
                     valid:[
                        ['length', 6, 6]
                    ],
                    text:['6'],
                    callback:function(){}
                },
                city:{
                    type: ['required', '请选择城市'],
                     valid:[
                        ['required']
                    ],
                    text:['请选择城市'],
                    callback:function(){}
                },
                 name: {
                    type: ['required', '请输入姓名'],
                    trim: true, 
                    valid:[
                        
                    ],
                    text:['请输入姓名'],
                    right:'',
                    callback:function(){ 
                    }
                },
                job:{
                    type: ['required', '请输入当前职务'],
                     valid:[
                    ],
                    text:['请输入当前职务'],
                    callback:function(){}
                },
                birthday:{
                    type: ['required', '请输入birthday'],
                     valid:[
                    ],
                    text:['请输入birthday'],
                    callback:function(){}
                },
                exp:{
                    type: ['required', '请选择exp'],
                     valid:[
                    ],
                    text:['exp'],
                    callback:function(){}
                },
                edu:{
                    type: ['required', 'edu'],
                     valid:[
                    ],
                    text:['edu'],
                    callback:function(){}
                },
                email: {
                    type: ['required', '请填写邮箱'],
                    valid:[
                         ['regexp', /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/]
                    ],
                    
                    text:['请填写有效邮箱'],
                    callback: function(){}
                },
                major:{
                    type: ['required', 'major'],
                     valid:[
                    ],
                    text:['major'],
                    callback:function(){}
                },
                school:{
                    type: ['required', 'school'],
                     valid:[
                    ],
                    text:['school'],
                    callback:function(){}
                },
                degree:{
                    type: ['required', 'degree'],
                     valid:[
                    ],
                    text:['degree'],
                    callback:function(){}
                },  
                start_time:{
                    type: ['required', 'start_time'],
                     valid:[
                    ],
                    text:['start_time'],
                    callback:function(){}
                },
                end_time:{
                    type: ['required', 'end_time'],
                     valid:[
                          ['timevalid'],
                    ],
                    text:['end_time1'],
                    callback:function(){}
                }, 
                company:{
                    type: ['required', 'company'],
                     valid:[
                    ],
                    text:['company'],
                    callback:function(){}
                }, 
                jobdesc:{
                    type: ['required', 'jobdesc'],
                     valid:[
                    ],
                    text:['jobdesc'],
                    callback:function(){}
                }, 
       	    }   

       $.validator.validEvent = {
        '#username': 'blur'  
       ,'#password': 'blur'
       ,'#code': 'blur'
       ,'#city': 'blur'
       ,'#name': 'blur'  
       ,'#job': 'blur'
       ,'#birthday': 'blur'
       ,'#exp': 'blur'
       ,'#edu': 'blur'
       ,'#school': 'blur'
       ,'#degree': 'blur'
       ,'#major': 'blur'
       ,'#start_time': 'blur'
       ,'#end_time': 'blur'
      };



      $.validator.validMethods.timevalid = function (){
        var rs = false;
        if (!$(this).parents('.container').find('#start_time').val()) {
           rs = false;
        }else if( $(this).val().replace('-','') < $(this).parents('.container').find('#start_time').val().replace('-','') ){
           rs = false; 
        }else {
           rs = true;
        }
        return rs;
      }

      $reg_form = $.validator({
        selector: '#reg_form'
        , normal: normal
        , right: normal       
        , wrong: wrong
        }).on('submit', function(event) {
      event.preventDefault();
      	console.log(111);
          }) 

      $('.row i').on('click',function(){
        $(this).addClass('checked').siblings('i').removeClass('checked');
      });
      $('.row input,textarea').on('focusin', function(event) {
      	event.preventDefault();
      	$(this).siblings('label').hide();
      });
      $('.row input,.row textarea').on('focusout', function(event) {
      	event.preventDefault();
      	if (!$(this).val()) {
      		$(this).siblings('label').fadeIn('fast');
      	}
      });


      $('#city').on('click',function() {
        $('#city_form').animate({
          left: 0},
          1000, function() {
            $('.indexes').show();
        });
      }) 
      $('#city_form .return').on('click',function() {
        $('#city_form').animate({
          left: 500},
          1000, function() {
            $('.indexes').hide();
        });
      })

      $getCode.on('click',function(){
          settime($(this));
          //ajax
      });

      $('.selfverse').on('click',function(){ //自我评价
          $(this).fadeOut('fast');
          $(this).siblings('p').hide().siblings('#me_form').show();
      })
      $('.cancel').on('click',function(){ //自我评价
          var $desc_info =  $(this).parents('.desc_info')
          $desc_info.find('p').fadeIn('fast').siblings('.selfverse').show();
          $desc_info.find('#me_form').hide();
      })

      $basic_form = $.validator({
        selector: '#basic_form'
        , normal: normal
        , right: normal       
        , wrong: wrong
        }).on('submit', function(event) {
      event.preventDefault();
      	console.log(111);
          }) 

       $edu_form = $.validator({
        selector: '#edu_form'
        , normal: normal
        , right: normal       
        , wrong: wrong
        }).on('submit', function() {
      event.preventDefault();
        console.log(111);
          })   

        $exp_form = $.validator({
        selector: '#exp_form'
        , normal: normal
        , right: normal       
        , wrong: wrong
        }).on('submit', function(event) {
      event.preventDefault();
        console.log(111);
          })   


        function settime(obj) {
          if (time == 0) {
            obj.prop("disabled",false).addClass('active').val('发送验证码');
            interval = null;
            time = 5;
            return false;
          } else {
            obj.prop("disabled",true).removeClass('active').val('还有' + time + '秒剩余');
            time--;
            interval = 5;
          }
          setTimeout(function() {
            settime(obj)
          },1000)
        }

});