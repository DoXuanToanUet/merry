person = [
  {
    pass: "nht",
    header1: "Chào bạn ",
    nickname: "Nick name (Trung mò )",
    mess1: "Chuc som co nguoi yeu",
    mess2: "Chuc som truong thanh",
  },
  {
    pass: "ndk",
    header1: "Chào bạn ",
    nickname: "Khánh dẹo",
    mess1: "Chuc som co nguoi yeu",
    mess2: "Chuc som tim duoc viec",
  },
  {
    pass: "dtt",
    header1: "Chào bạn ",
    nickname: "Nick name (Thúy óc chó )",
    mess1: "Chuc sớm có gấu",
    mess2: "Chuc som tim duoc viec",
  },
  {
    pass: "dlh",
    header1: "Chào bạn ",
    nickname: "Nick name (Hương )",
    mess1: "Chuc sớm có gấu",
    mess2: "Chuc som tim duoc viec",
  },
  {
    pass: "nnt",
    header1: "Chào bạn ",
    nickname: "Nick name (Tốt đệ )",
    mess1: "Chuc sớm có gấu",
    mess2: "Chuc som tim duoc viec",
  },
];
console.log(person[0].pass);
$(document).ready(function () {
  //   console.log("object");
  //   Thay đổi vể pass
  $(".showeye").click(function () {
    if ("password" == $("#love-input").attr("type")) {
      $("#love-input").prop("type", "text");
    } else {
      $("#love-input").prop("type", "password");
    }
  });

  //   Thuật toán về lời chúc

  //   console.log(checkpass);
  function showInfo(nickname, title, mess, mess1) {
    content = `
    <p class="tt-title">  ${title} ${nickname}</p>
    <div class="tt-content">
       <p>${mess}</p>
       <p>${mess1}</p>
    </div>`;
    return content;
  }
  //   hiển thị popup

  $(".show-mess").click(function () {
    pasVal = $("#love-input").val();
    if (pasVal == "") {
      $(".popup").toggle();

      $(".mylove").html(
        showInfo(
          "",
          "Có thứ gì đó sai sai",
          "Dường như mật khẩu bạn nhập không đúng ",
          "Chúc bạn giáng sinh vui vẻ nhé :)"
        )
      );
    } else {
      //  duyet mảng trong person
      leng = person.length;
      console.log(leng);
      toandx = person.map(function (e) {
        return e.pass;
      });

      console.log(toandx);

      checkE = toandx.includes(pasVal);
      if (checkE) {
        console.log("có");
        // function findpass(pass) {
        //   return pass === pasVal;
        // }
        console.log(typeof pasVal);
        checktrue = toandx.indexOf(pasVal);
        console.log(checktrue);
        $(".popup").toggle();
        // console.log();
        $(".mylove").html(
          showInfo(
            person[checktrue].nickname,
            person[checktrue].header1,
            person[checktrue].mess1,
            person[checktrue].mess2
          )
        );
      } else {
        $(".popup").toggle();
        // console.log();
        $(".mylove").html(
          showInfo(
            "",
            "Có thứ gì đó sai sai",
            "Dường như mật khẩu bạn nhập không đúng ",
            "Chúc bạn giáng sinh vui vẻ nhé :)"
          )
        );
      }
    }
  });
  $(".btn-close").click(function () {
    $(".popup").toggle();
  });
});
