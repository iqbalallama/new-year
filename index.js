document.getElementById('login').addEventListener('click',function(){
   const userId = document.getElementById('user-id');
   const userIdNw = userId.value ;
   const password = document.getElementById('password');
   const passwordNw = password.value ;
   if(userId.value == '' && password.value == '' ){
       alert('please input your user id and password');
   }
   else{
       const displays = document.getElementById('display');
       displays.style.display = 'none';
       const mid = document.getElementById('mid');
       mid.style.display = 'block';
   }
})