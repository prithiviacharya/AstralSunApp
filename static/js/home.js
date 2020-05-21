var a=$('#cityform')

a.on('submit',function(e){
 e.preventDefault();
 
/*
$.ajax({
    url:'/send',
    type:'POST',
    contentType: 'application/json',
    data:data,
    success:function(response){
     var res=JSON.parse(response);

    },
    error:function(error){
     alert("An error has occurred");

    }
  });
  */