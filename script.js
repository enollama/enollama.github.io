$('header').hover(
  function(){
    $('#nick').fadeTo(150,.1);
    $('#name').fadeTo(150,1);
  },
  function(){
    $('#nick').fadeTo(150,1);
    $('#name').fadeTo(150,.1);
  }
);
