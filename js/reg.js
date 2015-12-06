$(function(){


	var normal = function(){
        this.nextAll('.error').hide();
      }
      , wrong = function(text){
        this.nextAll('.error').html(text).show();
      }
      ,time =5
      ,$getCode = $('#getCode') 
     // ,validA = function ys() {}
    // ,t = false;
      ;
 


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
                    callback:function(){ 
                     // t = true;
                      //$getCode.addClass('active').prop('disabled',false);
                         }
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
            time = 5;
            return false;
          } else {
            obj.prop("disabled",true).removeClass('active').val('还有' + time + '秒剩余');
            time--;
          }
          setTimeout(function() {
            settime(obj)
          },1000)
        }



          /*时间控件*/
        var pickerCreate = document.getElementById('start_time');
        var endTimepicker = document.getElementById('end_time');
        var pickerOpen = document.getElementById('open-picker');
        var pickerClose = document.getElementById('close-picker');
        var pickerSelect = document.getElementById('select-picker');
        var pickerRender = document.getElementById('render-picker');
        var up,up1,up2,animaed;
        var selectYes = document.getElementById('selectYes');
        var selectClose = document.getElementById('selectClose');
        var data = [
            {
                "key":"01",
                "value":"1986"
            },
            {
                "key":"02",
                "value":"1987"
            },
            {
                "key":"03",
                "value":"1988"
            },
            {
                "key":"04",
                "value":"1989"
            },
            {
                "key":"05",
                "value":"1990"
            },
            {
                "key":"06",
                "value":"1991"
            },
            {
                "key":"07",
                "value":"1992"
            }
        ], data1 = [
            {
                "key":"01",
                "value":"01"
            },
            {
                "key":"02",
                "value":"02"
            },
            {
                "key":"03",
                "value":"03"
            },
            {
                "key":"04",
                "value":"04"
            },
            {
                "key":"05",
                "value":"05"
            },
            {
                "key":"06",
                "value":"06"
            },
            {
                "key":"07",
                "value":"07"
            },
            {
                "key":"08",
                "value":"08"
            },
            {
                "key":"09",
                "value":"09"
            },
            {
                "key":"10",
                "value":"10"
            },
            {
                "key":"11",
                "value":"11"
            },
            {
                "key":"12",
                "value":"12"
            }
        ];
        var up1Data,up2Data,time;
        selectYes.addEventListener('click',function(){
            animaed.finish();
            //console.log(up1Data);
           // console.log(up2Data);
          //  console.log( $("#start_time").val())
            //if up1Data or up2Data is empty ,so use UPSelectRowIndexPath and UPThen
            if (!up1Data&& up) {
                up.UPSelectRowIndexPath(1).UPThen(function(indexPath,value){
                })
            };
            var year,month;
            if(!up1Data){
                year = data[0].value;
            }else{
                year = up1Data.value;
            }
            if(!up2Data){
                month = data1[0].value;
            }else{
                month = up2Data.value;
            }
            dateTime = year+"-"+month;
            //console.log(dateTime)
                if(time == "begin"){
                    $("#start_time").val(dateTime).trigger('datepick');
                    $('#start_time').trigger('focus');
                }else{
                    $("#end_time").val(dateTime).trigger('datepick');
                    $('#end_time').trigger('focus');
                }
            // if (!up2Data&& up1) {
            //  up1.UPSelectRowIndexPath(1).UPThen(function(indexPath,value){
            //      console.log(value);
            //  })
            // };
            //maybe use your datasource is relatively good
            //data[0]  //你的数据默认选择第一行
        })
        selectClose.addEventListener('click',function(){
            animaed.finish();
        });
        pickerCreate.addEventListener('click',function(){
            !up && (up = UIPickerView.createPickerView({
                dataSource:data,
                id:'provincePicker',
                constraintsId:'wower',
                kUP:{
                    kUPCELLHEIGHT:26,
                    kUPFRICTION:0.003
                },
                valueChange:function(data){
                    up1Data = data;
                }
            }) );
            time = "begin";
           // console.log(up);
            !up1 && (up1 = UIPickerView.createPickerView({
                dataSource:data1,
                id:'cityPicker',
                constraintsId:'wower1',
                kUP:{
                    kUPCELLHEIGHT:26,
                    kUPFRICTION:0.003
                },
                valueChange:function(data){
                    console.log(data);
                    up2Data = data;
                }
            }) );
            !animaed &&(animaed = CAAnimation.createAnimation({id:'region-picker'}) );
            animaed.start();
           // console.log(animaed);
        });
        
        
        endTimepicker.addEventListener('click',function(){
            !up && (up = UIPickerView.createPickerView({
                dataSource:data,
                id:'provincePicker',
                constraintsId:'wower',
                kUP:{
                    kUPCELLHEIGHT:26,
                    kUPFRICTION:0.003
                },
                valueChange:function(data){
                    up1Data = data;
                }
            }) );
            time = "end";
            console.log(up);
            !up1 && (up1 = UIPickerView.createPickerView({
                dataSource:data1,
                id:'cityPicker',
                constraintsId:'wower1',
                kUP:{
                    kUPCELLHEIGHT:26,
                    kUPFRICTION:0.003
                },
                valueChange:function(data){
                    //console.log(data);
                    up2Data = data;
                }
            }) );
            !animaed &&(animaed = CAAnimation.createAnimation({id:'region-picker'}) );
            animaed.start();
          //  console.log(animaed);
        });
        
        var anArray = [pickerCreate,endTimepicker];  
        $.each(anArray,function(n,value) {  
            //do something here  
            //alert(n+' '+value);  
        });  
});