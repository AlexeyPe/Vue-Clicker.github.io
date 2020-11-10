$(".langswitcher a").on("click",function(e){
    e.preventDefault();
    $(".langswitcher div").removeClass("active");
    $("html").attr("lang",$(this).data("lang"));
    $(this).parent().addClass("active");
  });