$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('html').on

    $("a[href='#aboutme']").click(function(){
      $("a[href='#aboutme']").addClass("active");
      $("a[href='#feature']").removeClass("active");
      $("a[href='#skills']").removeClass("active");
      $("a[href='#contact']").removeClass("active");
      $('html').animate({
        scrollTop: $("#aboutme").offset().top
    }, 1500);
    })
    $("a[href='#feature']").click(function(){
      $("a[href='#aboutme']").removeClass("active");
      $("a[href='#feature']").addClass("active");
      $("a[href='#skills']").removeClass("active");
      $("a[href='#contact']").removeClass("active");
      $('html').animate({
        scrollTop: $("#feature").offset().top
    }, 1500);
    })
    $("a[href='#skills']").click(function(){
      $("a[href='#aboutme']").removeClass("active");
      $("a[href='#feature']").removeClass("active");
      $("a[href='#skills']").addClass("active");
      $("a[href='#contact']").removeClass("active");
      $('html').animate({
        scrollTop: $("#skills").offset().top
    }, 1500);
    })
    $("a[href='#contact']").click(function(){
      $("a[href='#aboutme']").removeClass("active");
      $("a[href='#feature']").removeClass("active");
      $("a[href='#skills']").removeClass("active");
      $("a[href='#contact']").addClass("active");
    })

    $(document).mouseup(function(e)
      {
    var container = $("a[href='#aboutme']");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
     container.removeClass('active');
    }
    });
    $(document).mouseup(function(e)
      {
    var container = $("a[href='#feature']");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
     container.removeClass('active');
    }
    });
    $(document).mouseup(function(e)
      {
    var container = $("a[href='#skills']");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
     container.removeClass('active');
    }
    });
    $(document).mouseup(function(e)
      {
    var container = $("a[href='#contact']");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
     container.removeClass('active');
    }
    });
});
