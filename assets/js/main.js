

person = [
  {
    pass: "mylove",
    avatar: "mylove/mylove.jpg",
    nickname: 'Tình iu của anh ',
    mess: [
      "Chuc em iu luon khoe manh",
      "Iu anh nhieu hun nhe"
    ]

  },
  {
    pass: "ndk",
    avatar: "khanh/khanhdeo.jpg",
    nickname: 'Bạn Khánh dẹo',
    mess: [
      "Chúc bạn hiền khỏe mạnh.",
      "Nhiều tiền.",
      "Sớm tán được em bạn nhé ☺️."
    ]

  },
  {
    pass: "nvh",
    avatar: "hieumo/hieumo.jpg",
    nickname: 'Bạn Hiếu mõ',
    mess: [
      "Chúc bạn hiền khỏe mạnh.",
      "Nhiều tiền.",
      "Sớm có người iu bạn nhé ☺️."
    ]

  },
  {
    pass: "nht",
    avatar: "trungmo/trungmo.jpg",
    nickname: 'Bạn Trung mò',
    mess: [
      "Chúc bạn hiền khỏe mạnh.",
      "Nhiều tiền.",
      " ☺️."
    ]

  },
  {
    pass: "dlh",
    avatar: "sister/sister.jpg",
    nickname: 'Em gái iu',
    mess: [
      "Chúc em gái khỏe mạnh.",
      "Nhìu tìn.",
      "Đi làm cho anh tìn tiêu nhá  ☺️."
    ]

  },
  {
    pass: "dxs",
    avatar: "sonbeo/sonbeo.jpg",
    nickname: 'Ông sơn béo',
    mess: [
      "Chúc ông anh mạnh khỏe.",
      "Nhìu tìn.",
      "Ra trường okie nhé  ☺️."
    ]

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
  function showInfo(avatar, nickname,mess) {

    let text = "";
    // console.log()
    for (let elm of mess) {
      text += `<p>${elm}</p>`;
    }
    content = `
    <div class="person">
    <ul class="lightrope">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <img class="santa" src="assets/img/santa-claus-illustration-free-vector.jpg"/>
  <img class="pine-tree" src="assets/img/tree.png"/>
    <div class="person-infomation">
          <div class="image">
                <img class="avatar" src="${avatar}" alt="">
                <img class="ring" src="/assets/img/pngtree-christmas-snowman-avatar-frame-png-image_5920660.png" alt="">
                <div class="name">
                      <p>😘 ${nickname} 😘</p>
                </div>
          </div>

    </div>
    <div class="persion-desc">
          <div class="christmas-card">
                <input id="open" type="checkbox">
                <label class="open" for="open"></label>
              <div class="card-front">
                <div class="christmas-tree"></div>
                <div class="ribbon"></div>
                <div class="text">- Nhấp để mở  </div>
                <div class="star"></div>
                <div class="balls"></div>
              </div>

                <div class="card-inside">
                  <div class="title">Merry</br>Christmas!</div>
                <div class="wishes">
                      ${text}

                </div>
                <div class="gift">
                  <div class="bow"></div>
                </div>
              </div>
              </div>
          <!-- <p>This is test</p> -->
    </div>
</div>

    `;
    return content;
  }
  //   hiển thị popup

  $(".show-mess").click(function () {
    pasVal = $("#love-input").val();
    if (pasVal == "") {
      $(".popup").toggle();

      $(".mylove").html(
        showInfo(
          '',
          'Vo danh',
          [
            'Chuc ban giang sinh vui ve',
            'Nhap mat khau de thay loi chuc cho rieng ban nhe'
          ]

        )
      );
    } else {
      //  duyet mảng trong person
      leng = person.length;
      // console.log(leng);
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
            `assets/img/`+person[checktrue].avatar,
            person[checktrue].nickname,
            person[checktrue].mess,
            // person[checktrue].mess,
            // person[checktrue].mess1,
            // person[checktrue].mess2
          )
        );
      } else {
        $(".popup").toggle();
        // console.log();
        $(".mylove").html(
          showInfo(
            '',
            'Vo danh',
            [
              'Chuc ban giang sinh vui ve',
              'Nhap mat khau de thay loi chuc cho rieng ban nhe'
            ]

          )
        );
      }
    }
  });
  $(".btn-close").click(function () {
    $(".popup").toggle();
  });
});

