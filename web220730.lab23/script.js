// // // Synchronus - Đồng bộ: Chương trình thực hiện lần lượt từng câu lênh trong mã
// // //  theo thứ tự câu lệnh kết thúc mới đến câu lệnh tiếp theo

// // // Ưu điểm: Chương trình dễ kiểm soát
// // //          Nếu chương trình có lỗi sẽ dừng không chạy tiếp

// // // Nhược điểm:

// // // console.log("Before");
// // // for (let index = 1; index < 1_000_000; index++) {
// // //   total += index;
// // // }

// // // console.log("After");
// // // console.log(total);

// // const loadScript = (src, callback) => {
// //   const script = document.createElement("script");
// //   script.src = src;

// //   script.onload = () => callback(script);
// //   document.head.append(script);
// // };

// // loadScript(
// //   "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
// //   (script) => {
// //     console.log("Load script successfully");

// //     $("h1").text("Hello JQuery")
// //   }
// // );

// // console.log("After script loaded")
// // // đặt lịch cho 1 hành động (hàm handler) chạy sau 1 khoảng thời gian nhất định
// // // setTimeout(() => {
// // //   console.log(sum(1, 2));
// // // }, 300);

// // mua rau, nhặt rau, rửa rau, luộc rau, cho ra đĩa

// // Mua rau => 10p
// // Nhặt rau => 5p
// // Rửa rau => 3p
// // Luộc => 10p
// // Cho ra bát

// function async(doSomething, callback) {
//   doSomething();

//   setTimeout(() => {
//     callback();
//   }),
//     10000;
// }

// async(
//   () => {
//     console.log("di mua rau");
//   },
//   () => {
//     async(
//       () => console.log("nhat rau"),
//       () => {}
//     );
//   }
// );

// Promise -> nhận vào 2 tham só
// Tham số đầu tiên executor (hành động mà mình cần làm)
// Tham số thứ 2 là 1 callback (có 2 tham số
// resolve - thông báo cho biết thành công
// reject - thông báo hành động thât bại)

// doSomething =. Sang mua một lon bò húc
//  Có bò húc => mua => về dưa lon bò húc => gọi hàm resolve
//  Không có => tìm quán khác => Có => Mua về
//  Không có => Huỷ, báo là hết => gọi hàm reject

// Mỗi promise có 3 trạng thái:
// Pending (đang chờ)
// Fullfilled (thành công)
// Rejected (từ chối)

// const promise = new Promise((resolve, reject) => {
//   console.log("Đi mua bò húc");

//   let yes = Math.round(Math.random());

//   setTimeout(() => {
//     if (yes) {
//       resolve("Bò húc");
//     } else {
//       reject("Hết bò húc");
//     }
//   }, 5000);
// });

// promise
//   .then((value) => {
//     console.log("Oh yeah!!");
//     console.log("Uống " + value);
//   })
//   .catch(
//     (reason) =>
//       new Promise((resolve, reject) => {
//         console.log("Đi tìm quán khác");
//         const yes = Math.round(Math.random());

//         setTimeout(() => {
//           yes ? resolve("Bò húc") : reject("Hết bò húc");
//         }, 5000);
//       })
//   );

//   Async
async function dimuabohuc() {
  return new Promise((resolve, reject) => {
    console.log("Đi mua bò húc");

    setTimeout(() => {
      if (Math.round(Math.random())) {
        resolve("Bò húc");
      } else {
        reject("Hết bò húc");
      }
    },5000);
  });
}

async function actions() {
  dimuabohuc()
    .then((value) => console.log("Uống " + value))
    .catch((reason) => {
      console.log(reason);

      dimuabohuc()
        .then((value) => {
          console.log("Uống bò húc");
        })
        .catch((reason) => {
          console.log(reason);
          console.log("Đéo uóng nữa !");
        });
    });
}

// async function actions() {
//   try {
//     const value = await dimuabohuc();
//     console.log("Uống " + value);
//   } catch (err) {
//     try {
//       await dimuabohuc();
//       console.log("Uống " + value);
//     } catch (err) {
//       console.log("Méo uống nữa");
//     }
//   }
// }

actions(dimuabohuc);
