$(()=>{
    let  $width=$('#width'),
       $height=$('#height'),
      $btnCal=$('#calc'),
      $perimeter=$('#perimeter'),
      $widthValidate=$('#width-validate'),
      $heightValidate=$('#height-validate'),
      $area=$('#area'); 




$width.keypress((e)=>{
    let key=e.key,
    val=e.target.value,
    pos=e.target.selectionSatrt;


  val=val.slice(0,pos)+key+val.slice(pos,val.length);

   // if(!/[abcdf-zABCDF-Z`~!@#$%^&()=_+[\]{}|;:'",<>/?\\]/.test(val))
   //  // e.preventDefault();
   //
   //   // if(val.indexOf('e')!==-1) e.preventDefault();
   //
    if(!/^(0|[1-9]\d*)(\.\d+)?((e|E)(\+|-)?\d+)?$/.test(val))e.preventDefault();
   
    })
   
$height.keypress((e)=>{
      let key=e.key,
          val=e.target.value,
          pos=e.target.selectionSatrt;
          val=val.slice(0,pos)+key+val.slice(pos,val.length);
   
   if(!/^(0|[1-9]\d*)(\.\d+)?((e|E)(\+|-)?\d+)?$/.test(val))e.preventDefault();
  })
   
$width.focusout(()=>{
    if(!validate($width,$widthValidate)){
       $width.select();
      }
   })
   
$height.focusout(()=>{
    if(!validate($height,$heightValidate)){
       $height.select();
     } 
   })
  
  
$btnCal.click(()=>{
    //get value
    let w=Number($width.val()),
     h=Number($height.val()); 
   
   if(validate($width,$widthValidate)&&validate($height,$heightValidate
    )){
   //calc
   let p=(w+h)*2,
       a=w*h;
   //output
   $perimeter.val(p);
   $area.val(a);
  }})
});
   
function validate(input,output){
   //isempty
    if(input.val()===''){
      output.html('该字段不能为空');
      return false;
    }else{
      output.html('');
   }
   
   //isnumber
   let val=Number(input.val())
      console.log(val);
   if(isNaN(val)){
         output.html('该字段应该是数字');
             return false;
               
   }else{
       output.html('');
         
          
   };

   
   if(val<0){
       output.html('该字段不能小于0');
         return false

   }else{
       output.html('');
        
   }

   return true;
}
   
