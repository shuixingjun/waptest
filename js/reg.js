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
                    text:['手机号码不正确','该手机已被注册'],
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
                },
                code:{
                    type: ['required', '请输入验证码'],
                     valid:[
                        ['length', 6, 6]
                    ],
                    text:['6-16'],
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
                    ],
                    text:['end_time'],
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

      $reg_form = $.validator({
        selector: '#reg_form'
        , normal: normal
        , right: normal       
        , wrong: wrong
        }).on('submit', function(event) {//登录
      event.preventDefault();
      	console.log(111);
          })

      $('.row i').on('click',function(){
        $(this).addClass('checked').siblings('i').removeClass('checked');
      });
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
        }).on('submit', function(event) {//登录
      event.preventDefault();
      	console.log(111);
          }) 

       $edu_form = $.validator({
        selector: '#edu_form'
        , normal: normal
        , right: normal       
        , wrong: wrong
        }).on('submit', function(event) {//登录
      event.preventDefault();
        console.log(111);
          })   

});