$(document).ready(function () {
  $("#btn-search-email").on("click", function (e) {
    e.preventDefault();
    $('.email-search-form').css('display', 'block');
    $('.phone-search-form').css('display', 'none');
  });
  $("#btn-search-phone").on("click", function (e) {
    e.preventDefault();
    $('.phone-search-form').css('display', 'block');
    $('.email-search-form').css('display', 'none');
  });

  $("#email-search").on("click", function (e) {
    e.preventDefault();
    localStorage.clear(); //Clears storage for next request
    email = $('input[type="text"]').val().toLowerCase();

    var x, y;
    regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(regEx)) {
      x = true;
    } else {
      x = false;
    }

    if (x === true) {
      document.querySelector('input[type="text"]').parentNode.classList.remove("error");
      const proxyurl = "";
      const url =
        'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
          $('.email-search-form')[0].reset();
        })
        .catch((e) => console.log(e));
    } else if (x !== true) {
      document.querySelector('input[type="text"]').parentNode.classList.add("error");
      var x = window.matchMedia("(max-width: 767px)")
      if (x.matches) {
        $('.btn-form-submit').css('margin-top', '40px');
      }
    }

  });

  $('input[type="text"]').keypress(function (e) {

    email = $('input[type="text"]').val().toLowerCase();
    regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regEx)) {
      x = true;
      document.querySelector('input[type="text"]').parentNode.classList.remove("error");
    } else {
      x = false;
    }
    keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      /**
       * Makes a request to ltv API to search an specific email address.
       * If there's a response, it gets stored in the local storage and redirects to results page
       */
      e.preventDefault();
      localStorage.clear(); //Clears storage for next request

      var x, y;

      if (x === true) {
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
            $('.email-search-form')[0].reset();
          })
          .catch((e) => console.log(e));
      } else if (x !== true) {
        document.querySelector('input[type="text"]').parentNode.classList.add("error");
        var x = window.matchMedia("(max-width: 767px)")
        if (x.matches) {
          $('.btn-form-submit').css('margin-top', '40px');
        }
      }
    }

  });


  $("#phone-search").on("click", function (e) {
    e.preventDefault();
    localStorage.clear(); //Clears storage for next request
    phone = $("#phone-search-field").val();

    var x;

    if (phone.length == 10 && !isNaN(phone)) {
      x = true;
    } else {
      x = false;
    }

    if (x === true) {
      document.querySelector('input[name="phone"]').parentNode.classList.remove("error");
      const proxyurl = "";
      const url =
        'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phone;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
          $('.phone-search-form')[0].reset();
        })
        .catch((e) => console.log(e));
    } else if (x !== true) {
      document.querySelector('input[name="phone"]').parentNode.classList.add("error");
      var x = window.matchMedia("(max-width: 767px)")
      if (x.matches) {
        $('.btn-form-submit').css('margin-top', '40px');
        $('.input-group.error .error-msg ').css('padding', '4px 25px');
      }
    }
  });

  $("#phone-search-field").keypress(function (e) {
    phone = $("#phone-search-field").val();

    var x;

    if (phone.length == 10 && !isNaN(phone)) {
      x = true;
      document.querySelector('input[name="phone"]').parentNode.classList.remove("error");
    } else {
      x = false;
    }
    keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      /**
       * Makes a request to ltv API to search an specific email address.
       * If there's a response, it gets stored in the local storage and redirects to results page
       */
      e.preventDefault();
      localStorage.clear(); //Clears storage for next request

      if (x === true) {
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phone;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
            $('.phone-search-form')[0].reset();
          })
          .catch((e) => console.log(e));
      } else if (x !== true) {
        document.querySelector('input[name="phone"]').parentNode.classList.add("error");
        if (x.matches) {
          $('.btn-form-submit').css('margin-top', '40px');
          $('.input-group.error .error-msg ').css('padding', '4px 25px');
        }
      }
    }
    $('.phone-search-form').val('');
  });

});
