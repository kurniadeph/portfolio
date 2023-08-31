$(document).ready(function () {


   //FORM VALIDATE
  $('.contact-form').validate({
     rules: {
        email: {
           required: true,
           email: true
        },
        
        message: {
           required: true
        }
     },
     messages: {
        email: {
           required: 'Masukan Email Anda',
           email: 'Email tidak valid'
        },
        
        message: {
           required: 'Pesan tidak boleh kosong'
        }
     },
     submitHandler: function (form) {
        ajaxFormSubmit();
     }

  });

  //*************************************************** */
  // Fungsi ruquest AJAX ke server

  function ajaxFormSubmit() {

     let string = $(".contact-form").serialize(); // menempatkan data yang dimasukkan dalam formulir ke dalam baris.

     //Request
     $.ajax({
        type: "POST", // Jenis Request - POST
        url: "/php/mail.php", // Tujuan Request
        data: string, // Jenis data yang di kirim, dalam hal ini kita kirim variable string

        // Berfungsi jika semuanya berjalan dengan baik
        success: function (html) {
           $(".contact-form").slideUp(800);
           $('#answer').html(html);
        }
     });
     // Agar tidak ada lagi yang dieksekusi oleh Submit, kita return false untuk mencegah operasi fungsi lainnya.
     return false;
  }



});