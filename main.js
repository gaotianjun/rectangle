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

   if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(val)){
      e.preventDefault}
})
   
$height.keypress((e)=>{
      let key=e.key,
          val=e.target.value,
          pos=e.target.selectionSatrt;
          val=val.slice(0,pos)+key+val.slice(pos,val.length);
   
  
  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(val)) {
    e.preventDefault}
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

//保留小数点位数
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
  
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
   $perimeter.val(roundFractional(p,2));
   $area.val(roundFractional(a,2));
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
   let val=Number(input.val());
   //isnumber
   if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(val)) {
        output.html('该字段应该是数字');
        return false;         
   }else{
       output.html('');     
   };

   //小于0
   if(val<0){
       output.html('该字段不能小于0');
         return false
   }else{
       output.html('');      
   }

   return true;
}
   
