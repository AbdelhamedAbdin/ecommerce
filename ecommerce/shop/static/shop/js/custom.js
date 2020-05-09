$(document).ready(function() {
    // Add Active On Navbar Lists
    $('.navbar li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // Resize And Configure The Height In User Image (Copied)
    function setHeight() {
      windowHeight = $(window).innerHeight();
      $('.overlay').css('min-height', windowHeight);
    }
    setHeight();

    $(window).resize(function() {
      setHeight();
    });

    // Add Active On Link When You Click On
    $('.profile .caption li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // Add Class Show To Show The Presentation You Want
    $(".trigger").click(function() {
        $($(this).data("target")).addClass('show').siblings().removeClass('show');
    });

    // Set A Minimum Height For Information Section
    //$('.profile .information').css('min-height', $('.profile .thumbnail').height() + 8 + 'px');

    $(window).resize(function() {
        windowHeight = $(window).height();
        $('.user-image .overlay img').css('height', windowHeight);
    });
    // link details
    $(function () {
        $('[data-tooltip="tooltip"]').tooltip()
    });

    // Add Placeholder Attribute Instead Of Django form_class
            // register
    $('.register input[name="username"]').attr({"placeholder": "Username", 'class': 'form-control'});
    $('.register input[name="first_name"]').attr({"placeholder": "First Name", 'class': 'form-control'});
    $('.register input[name="last_name"]').attr({"placeholder": "Last Name", 'class': 'form-control'});
    $('.register input[name="password1"]').attr({"placeholder": "Password", 'class': 'form-control'});
    $('.register input[name="password2"]').attr({"placeholder": "Confirm Password", 'class': 'form-control'});
    $('.register input[name="email"]').attr({"placeholder": "E-mail", 'class': 'form-control'});
            // login
    $('.login input[type="text"]').attr({"placeholder": "Username", 'class': 'form-control'});
    $('.login input[type="password"]').attr({"placeholder": "Password", 'class': 'form-control'});
            // Password-reset-confirm
    $('.password-reset-confirm input[type="password"]').attr({'class': 'form-control'});

    // Show Comment Field
    $(".showin").click(function() {
        $($(this).data("showin")).removeClass('hide');
    });

    // Show Number Phone
    $('.contact-us a').click(function () {

        $(this).hide(function() {
            $('.contact-us .number').show();
        });

    });
});