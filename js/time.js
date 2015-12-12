$(function (){ 
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
                "key":"00",
                "value":"zhj"
            },
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
            console.log(up1Data);
            console.log(up2Data);
            console.log( $("#start_time").val())
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
            console.log(dateTime)

            if (year == 'zhj') {
            	if(time == "begin"){
                    $("#start_time").val(year).trigger('datepick');
                    $("#start_time").trigger('focus');
                }else{
                    $("#end_time").val(year).trigger('datepick');
                    $("#end_time").trigger('focus');
                }
            }else{
            	if(time == "begin"){
                    $("#start_time").val(dateTime).trigger('datepick');
                    $("#start_time").trigger('focus');
                }else{
                    $("#end_time").val(dateTime).trigger('datepick');
                    $("#end_time").trigger('focus');
                }
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
           // 	var data2= data.splice(1,1)
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
                    console.log(data);
                    up2Data = data;
                }
            }) );
            !animaed &&(animaed = CAAnimation.createAnimation({id:'region-picker'}) );
            animaed.start();
            console.log(animaed);
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
                    console.log(data);
                    up2Data = data;
                }
            }) );
            !animaed &&(animaed = CAAnimation.createAnimation({id:'region-picker'}) );
            animaed.start();
            //console.log(animaed);
        });
        
        var anArray = [pickerCreate,endTimepicker];  
        $.each(anArray,function(n,value) {  
            //do something here  
            //alert(n+' '+value);  
        });  

});        