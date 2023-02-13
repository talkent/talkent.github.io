$(document).ready(function () {
  var users = [
    { fullname: 'معین بنای زحمتی', phone: '09029441787', password: '123456' },
  ];
  var posts = [];

  if (getCookie('phone').length > 0) {
    $('.login-nav-btn').css('display', 'none');
    $('.login-name').css('display', 'block').text(getCookie('fullname'));
  } else {
    $('.login-name').css('display', 'none');
  }

  $('.login').css('display', 'none');
  $('.register').css('display', 'none');
  $('.profile').css('display', 'none');
  $('.home-link').css({ color: '#c006e6' });
  $('.description-section').css({
    display: 'flex',
    'justify-content': 'space-around',
    'align-items': 'center',
  });

  $('.home-link').click(function () {
    $('.login').css('display', 'none');
    $('.register').css('display', 'none');
    $('.profile').css('display', 'none');
  });

  $('.login-nav-btn').click(function () {
    $('.login-err-msg').css('display', 'none').text('');
    $('.description-section').css('display', 'none');
    $('.landing').css('display', 'none');
    $('.login').css({
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    });
    $('body .container').addClass('login-center');
  });

  $('.login-brand').click(function () {
    $('.login').css('display', 'none');
    $('.register').css('display', 'none');
    $('body .container').removeClass('login-center');
    $('.landing').css('display', 'block');
    $('.description-section').css({
      display: 'flex',
      'justify-content': 'space-around',
      'align-items': 'center',
    });
  });

  $('.register-link').click(function () {
    $('.landing').css('display', 'none');
    $('.login').css('display', 'none');
    $('.register').css({
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    });
    $('body .container').addClass('login-center');
  });

  $('.login-link').click(function () {
    $('.login-err-msg').css('display', 'none').text('');
    $('.landing').css('display', 'none');
    $('.register').css('display', 'none');
    $('.login').css({
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    });
    $('body .container').addClass('login-center');
  });

  $('#login-submit').click(function () {
    var phone = $('input[name=login_phone_number]').val();
    var password = $('input[name=login_password]').val();

    if (phone.length === 0 || password.length === 0) {
      return $('.login-err-msg')
        .css('display', 'block')
        .text('فیلدها را کامل نمایید');
    }

    for (var j = 0; j < users.length; j++) {
      if (users[j].phone === phone) {
        if (users[j].password === password) {
          setCookie('phone', users[j].phone, 1);
          setCookie('fullname', users[j].fullname, 1);
          $('.login').css('display', 'none');
          $('.register').css('display', 'none');
          $('body .container').removeClass('login-center');
          $('.landing').css('display', 'block');
          $('.login-nav-btn').css('display', 'none');
          $('.login-name').css('display', 'block').text(getCookie('fullname'));
          $('.description-section').css({
            display: 'flex',
            'justify-content': 'space-around',
            'align-items': 'center',
          });
          $('input[name=login_f_name]').val('');
          $('input[name=login_phone_number]').val('');
          $('input[name=login_password]').val('');
        } else {
          $('.login-err-msg')
            .css('display', 'block')
            .text('کاربری با این مشخصات یافت نشد');
        }
      } else {
        $('.login-err-msg')
          .css('display', 'block')
          .text('کاربری با این مشخصات یافت نشد');
      }
    }
  });

  $('#logout-submit').click(function () {
    $('.login').css('display', 'none');
    $('.register').css('display', 'none');
    $('.profile').css('display', 'none');
    $('.login-nav-btn').css('display', 'block');
    $('.login-name').css('display', 'none');
    $('.home-link').css({ color: '#c006e6' });
    $('.description-section').css({
      display: 'flex',
      'justify-content': 'space-around',
      'align-items': 'center',
    });
    eraseCookie('phone');
    eraseCookie('fullname');
  });

  $('#register-submit').click(function () {
    var fullname = $('input[name=register_f_name]').val();
    var phone = $('input[name=register_phone_number]').val();
    var password = $('input[name=register_password]').val();

    if (fullname.length === 0 || phone.length === 0 || password.length === 0) {
      return $('.login-err-msg')
        .css('display', 'block')
        .text('فیلدها را کامل نمایید');
    }
    users.push({ fullname, phone, password });
    setCookie('phone', phone, 1);
    setCookie('fullname', fullname, 1);
    $('.login').css('display', 'none');
    $('.register').css('display', 'none');
    $('body .container').removeClass('login-center');
    $('.landing').css('display', 'block');
    $('.description-section').css({
      display: 'flex',
      'justify-content': 'space-around',
      'align-items': 'center',
    });
    $('.login-nav-btn').css('display', 'none');
    $('.login-name').css('display', 'block').text(getCookie('fullname'));
    $('input[name=register_f_name]').val('');
    $('input[name=register_phone_number]').val('');
    $('input[name=register_password]').val('');
  });

  $('.login-name').click(function () {
    $('.login').css('display', 'none');
    $('.register').css('display', 'none');
    $('.description-section').css('display', 'none');
    $('.profile').css({
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    });
    $('input[name=profile_f_name]').val(getCookie('fullname'));
    $('input[name=profile_phone_number]').val(getCookie('phone'));
  });

  $('#edit-submit').click(function () {
    var fullname = $('input[name=profile_f_name]').val();
    var phone = $('input[name=profile_phone_number]').val();
    var password = $('input[name=profile_password]').val();

    if (fullname.length === 0 || phone.length === 0) {
      return $('.login-err-msg')
        .css('display', 'block')
        .text('فیلدها را کامل نمایید');
    }

    for (var k = 0; k < users.length; k++) {
      if (getCookie('phone') === users[k].phone) {
        if (password.length > 0) {
          users[k].password = password;
        }
        users[k].fullname = fullname;
        users[k].phone = phone;

        setCookie('phone', users[k].phone, 1);
        setCookie('fullname', users[k].fullname, 1);
      }

      break;
    }

    $('.login').css('display', 'none');
    $('.register').css('display', 'none');
    // $('body .container').removeClass('login-center');
    $('.landing').css('display', 'block');
    $('.login-nav-btn').css('display', 'none');
    $('.login-name').css('display', 'block').text(getCookie('fullname'));
    $('.login-err-msg').css('display', 'none').text('');
  });

  $('.start-link').click(function () {
    $('.login-err-msg').css('display', 'none').text('');
    $('.landing').css('display', 'none');
    $('.description-section').css('display', 'none');
    $('.register').css('display', 'none');
    $('.login').css({
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    });
    $('body .container').addClass('login-center');
  });

  // functions
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
  }

  function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
});
