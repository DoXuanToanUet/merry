person = [
  {
    pass: "nht",
    header1: "Chào bạn hiền ",
    nickname: "Nick name ( Trung mò )",
    mess: "Chúc bạn sớm có người yêu",
    mess1:
      "Chúc bạn sớm thành công nhiều tiền để mình còn đi du lịch với bạn nhé ",
    mess2: "",
  },
  {
    pass: "ndk",
    header1: "Chào bạn hiền",
    nickname: "Nick name (Khánh dẹo)",
    mess: "Chúc bạn và Đậu sớm có tiến triển nhé",
    mess1:
      "Chúc bạn sớm thành công nhiều tiền để mình còn đi du lịch với bạn nhé ",
    mess2: ":v",
  },
  {
    pass: "nvh",
    header1: "Chào bạn hiền",
    nickname: "Nick name (Hiếu mõ)",
    mess: "Chúc bạn lương 20 củ còn vào nhà mình mời mình gói bim bim chứ",
    mess1: "Kiếm nhiều tiền, tiền mình nợ bao giờ bạn lấy vợ mình trả nhé ",
    mess2: "Nhớ ủng hộ youtube của Trun G idol nhé.À bạn mở rương đen vl :v",
  },
  {
    pass: "dtt",
    header1: "Chào dom  ",
    nickname: "Nick name (Thúy óc chó )",
    mess: "Chúc bạn sớm có người yêu",
    mess1: "Kiếm nhiều tiền,nhớ nhổ tóc đấy không ăn đấm",
    mess2: "Giới thiệu cho mình bạn của bạn xinh xinh vào ",
  },
  {
    pass: "dothithu",
    header1: "Chào người chị dấu yêu  ",
    nickname: "Nick name (Thu lợ* )",
    mess: "Chúc chị tôi sớm học xong mà còn về lấy chồng chứ ",
    mess1:
      "Kiếm nhiều tiền thỉnh thoảng còn cho thằng em 1 tí uống trà sữa chứ ",
    mess2: "Hehe",
  },
  {
    pass: "dxs",
    header1: "Chào ông anh   ",
    nickname: "Nick name (Sơn béo )",
    mess: "Chúc ông anh sớm học xong ",
    mess1: "Thỉnh thoảng về anh em còn chạy cho khỏe người chứ ",
    mess2: "Thúy đom và Hương còi nhắc ông anh mãi",
  },
  {
    pass: "dlh",
    header1: "Chào em gái",
    nickname: "Nick name (Hương Còi)",
    mess: "Học chăm vào",
    mess1: "Về nhà sớm thì về nấu cơm ",
    mess2: ":v",
  },
  {
    pass: "nnt",
    header1: "Chào đệ đề ",
    nickname: "Nick name (Tốt đệ )",
    mess: "Anh em cố gắng lương còn có cơm mà ăn",
    mess1: "Chả biết chúc gì nữa ...",
    mess2: ":v",
  },
  {
    pass: "ttl",
    header1: "Chúc em",
    nickname: "Nick name (Linh + anh cũng chưa biết biệt danh )",
    mess: "Chúc em giáng sinh vui vẻ nhé ",
    mess1: "Đi quân sự vui vẻ nha ",
    mess2: ":v",
  },
  {
    pass: "huyen",
    header1: "Chúc chị ",
    nickname: "Nick name ( Huyền + chưa biết nick name :)) )",
    mess: "Tuy hơi muộn nhưng giáng sinh vui vẻ.",
    mess1: "Chúc chị dấu ba chấm là tất cả mọi chuyện tốt đẹp.",
    mess2: ":v",
  },
];
// console.log(person[0].pass);
$(document).ready(function () {
  //   console.log("object");
  //   Thay đổi vể pass
  $(".showeye").click(function () {
    if ("password" == $("#love-input").attr("type")) {
      $("#love-input").prop("type", "text");
    } else {
      $("#love-input").prop("type", "password");
    }
    $(this).toggleClass("lnr-heart-pulse");
  });

  //   Thuật toán về lời chúc

  //   console.log(checkpass);
  function showInfo(nickname, title, mess, mess1, mess2) {
    content = `
    <p class="tt-title">  ${title} ${nickname}</p>
    <div class="tt-content">
       <p><span class="lnr lnr-gift tt-gift"></span> ${mess}</p>
       <p><span class="lnr lnr-gift tt-gift"></span> ${mess1}</p>
       <p> <span class="lnr lnr-gift tt-gift"></span> ${mess2}</p>
       <p class="toandev">Lời chúc đến từ người dấu tên:Toandx</p>
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
          "Chúc bạn giáng sinh vui vẻ nhé :)",
          ""
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
            person[checktrue].mess,
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
            "Chúc bạn giáng sinh vui vẻ nhé :)",
            ""
          )
        );
      }
    }
  });
  $(".btn-close").click(function () {
    $(".popup").toggle();
  });
});
