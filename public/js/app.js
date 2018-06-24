 var config = {
     apiKey: "AIzaSyAWIlJEnf-FhUCXVm4Zoy-51qIfpHGQA-Q",
     authDomain: "wallpaperapp-6b6bc.firebaseapp.com",
     databaseURL: "https://wallpaperapp-6b6bc.firebaseio.com",
     projectId: "wallpaperapp-6b6bc",
     storageBucket: "wallpaperapp-6b6bc.appspot.com",
     messagingSenderId: "817655009002"
 };
 firebase.initializeApp(config);

 firebase.auth.Auth.Persistence.LOCAL; 

 $("#btn-login").click(function(){
     
     var email = $("#email").val();
     var password = $("#password").val(); 

     var result = firebase.auth().signInWithEmailAndPassword(email, password);
 
     result.catch(function(error){
         var errorCode = error.code; 
         var errorMessage = error.message; 

         console.log(errorCode);
         console.log(errorMessage);
     });

 });
  
  $("#btn-logout").click(function(){
      firebase.auth().signOut();
  });

  function switchView(view){
      $.get({
          url:view,
          cache: false,
      }).then(function(data){
          $("#container").html(data);
      });
  }
  