//Block1 l0-------------------------------------------------------------------------------------------------------------
var btnOn = document.getElementById("btnOnId_01");
var inputField1 = document.getElementById("inputId_01");
var timer;
var isReserved1 = false;
var licensePlateNumber1 = "";
function onBodyLoad() {
    firebase
    .database()
    .ref("/T0/BL1/Status").get().then(snapshot => {
      if (snapshot.exists()) {
        if (snapshot.val() == 1)
          document.getElementById("denId_01").src = "./assets/img/anh xe on.jpg";
        else
          document.getElementById("denId_01").src = "./assets/img/anh xe off.jpg";

        document.getElementById("loader").style.display = "none";
        document.getElementById("main").style.display = "flex";
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}

btnOn.onclick = function () {
  document.getElementById("denId_01").src = "./assets/img/anh xe on.jpg";
  firebase.database().ref("/T0/BL1").update({
    Status: 1,
    QR:pin,
  });

  timer = setTimeout(function() {
    document.getElementById("denId_01").src = "./assets/img/anh xe off.jpg";
    firebase.database().ref("/T0/BL1").update({
      Status: 0,
    });
    inputField1.value = "";
    inputField1.style.display = 'none';  //  ẩn trường nhập
  }, 60000);

  isReserved1 = true;
};

firebase
  .database()
  .ref("/T0/BL1/Status")
  .on("value", function (snapshot) {
    var ss = snapshot.val();
    if (ss == 1) {
      document.getElementById("denId_01").src = "./assets/img/anh xe on.jpg";
      btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
    } else {
      document.getElementById("denId_01").src = "./assets/img/anh xe off.jpg";
    }
  });

document.getElementById('btnOnId_01').addEventListener('click', function() {
  document.getElementById('inputId_01').style.display = 'block';
});

inputField1.addEventListener('change', function() {
  var licensePlateNumber = inputField1.value;
  var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
  if (licensePlateFormat.test(licensePlateNumber)) {
    firebase.database().ref("/T0/BL1").update({
      License_plate: licensePlateNumber,
    });
    licensePlateNumber1 = licensePlateNumber;
  } else {
    alert("The license plate is not in the correct format. Please re-enter.");
    inputField1.value = "";
  }
});
  //Block2 l0------------------------------------------------------------------------------------------------------------
var btnOn = document.getElementById("btnOnId_02");
var inputField2 = document.getElementById("inputId_02");
var timer;
var isReserved2 = false;
var licensePlateNumber2 = "";
function onBodyLoad() {
  firebase
  .database()
  .ref("/T0/BL2/Status").get().then(snapshot => {
    if (snapshot.exists()) {
      if (snapshot.val() == 1)
        document.getElementById("denId_02").src = "./assets/img/anh xe on.jpg";
      else
        document.getElementById("denId_02").src = "./assets/img/anh xe off.jpg";

      document.getElementById("loader").style.display = "none";
      document.getElementById("main").style.display = "flex";
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

btnOn.onclick = function () {
  document.getElementById("denId_02").src = "./assets/img/anh xe on.jpg";
  firebase.database().ref("/T0/BL2").update({
    Status: 1,
    QR:pin,
  });
 localStorage.setItem("reservationStartTime", Date.now());
  timer = setTimeout(function() {
    document.getElementById("denId_02").src = "./assets/img/anh xe off.jpg";
    firebase.database().ref("/T0/BL2").update({
      Status: 0,
    });
    inputField2.value = "";
    inputField2.style.display = 'none';
  }, 60000);

  isReserved2 = true;
};

firebase
  .database()
  .ref("/T0/BL2/Status")
  .on("value", function (snapshot) {
    var ss = snapshot.val();
    if (ss == 1) {
      document.getElementById("denId_02").src = "./assets/img/anh xe on.jpg";
      btnOn.style.display = 'block';
    } else {
      document.getElementById("denId_02").src = "./assets/img/anh xe off.jpg";
    }
  });

document.getElementById('btnOnId_02').addEventListener('click', function() {
  document.getElementById('inputId_02').style.display = 'block';
});

inputField2.addEventListener('change', function() {
  var licensePlateNumber = inputField2.value;
  var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
  if (licensePlateFormat.test(licensePlateNumber)) {
    firebase.database().ref("/T0/BL2").update({
      License_plate: licensePlateNumber,
    });
    licensePlateNumber2 = licensePlateNumber;
  } else {
    alert("The license plate is not in the correct format. Please re-enter.");
    inputField2.value = "";
  }
});
    //Block4 L1---------------------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_04");
     var inputField4 = document.getElementById("inputId_04");

     var isReserved4 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber4 = "";  // Biến để lưu số biển kiểm soát
     const timeInRef4 = firebase.database().ref("/T0/BL4/Time_In");

     timeInRef4.on('value', (snapshot) => {
         const timeIn = snapshot.val();
         document.getElementById('timeInValue4').textContent = timeIn;
     });

     function onBodyLoad() {
       firebase
       .database()
       .ref("/T0/BL4/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_04").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_04").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_04").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T0/BL4").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_04").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T0/BL4").update({
           Status: 0,
         });
         inputField4.value = "";
         inputField4.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved4 = true;
     };

     firebase
       .database()
       .ref("/T0/BL4/Status")
       .on("value", function (snapshot) {
         var ss = snapshot.val();
         if (ss == 1) {
           document.getElementById("denId_04").src = "./assets/img/anh xe on.jpg";
           btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
         } else {
           document.getElementById("denId_04").src = "./assets/img/anh xe off.jpg";
         }
       });

     document.getElementById('btnOnId_04').addEventListener('click', function() {
       document.getElementById('inputId_04').style.display = 'block';
     });

     inputField4.addEventListener('change', function() {
       var licensePlateNumber = inputField4.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T0/BL4").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber4 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField4.value = "";
       }
     });
     //Block5 L0------------------------------------------------------------------------------------------------------------
            var btnOn = document.getElementById("btnOnId_05");
            var inputField5 = document.getElementById("inputId_05");

            var isReserved5 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
            var licensePlateNumber5 = "";  // Biến để lưu số biển kiểm soát
            const timeInRef5 = firebase.database().ref("/T0/BL5/Time_In");

            timeInRef5.on('value', (snapshot) => {
                const timeIn = snapshot.val();
                document.getElementById('timeInValue5').textContent = timeIn;
            });

            function onBodyLoad() {
              firebase
              .database()
              .ref("/T0/BL5/Status").get().then(snapshot => {
                if (snapshot.exists()) {
                  if (snapshot.val() == 1)
                    document.getElementById("denId_05").src = "./assets/img/anh xe on.jpg";
                  else
                    document.getElementById("denId_05").src = "./assets/img/anh xe off.jpg";

                  document.getElementById("loader").style.display = "none";
                  document.getElementById("main").style.display = "flex";
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
            }

            btnOn.onclick = function () {
              document.getElementById("denId_05").src = "./assets/img/anh xe on.jpg";
              firebase.database().ref("/T0/BL5").update({
                Status: 1,
                QR:pin,
              });

              timer = setTimeout(function() {
                document.getElementById("denId_05").src = "./assets/img/anh xe off.jpg";
                firebase.database().ref("/T0/BL5").update({
                  Status: 0,
                });
                inputField5.value = "";
                inputField5.style.display = 'none';  //  ẩn trường nhập
              }, 60000);

              isReserved5 = true;
            };

            firebase
              .database()
              .ref("/T0/BL5/Status")
              .on("value", function (snapshot) {
                var ss = snapshot.val();
                if (ss == 1) {
                  document.getElementById("denId_05").src = "./assets/img/anh xe on.jpg";
                  btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
                } else {
                  document.getElementById("denId_05").src = "./assets/img/anh xe off.jpg";
                }
              });

            document.getElementById('btnOnId_05').addEventListener('click', function() {
              document.getElementById('inputId_05').style.display = 'block';
            });

            inputField5.addEventListener('change', function() {
              var licensePlateNumber = inputField5.value;
              var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
              if (licensePlateFormat.test(licensePlateNumber)) {
                firebase.database().ref("/T0/BL5").update({
                  License_plate: licensePlateNumber,
                });
                licensePlateNumber5 = licensePlateNumber;
              } else {
                alert("The license plate is not in the correct format. Please re-enter.");
                inputField5.value = "";
              }
            });

            //Block1 L2------------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_01L2");
     var inputField1L2 = document.getElementById("inputId_01L2");

     var isReserved1L2 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber1L2 = "";  // Biến để lưu số biển kiểm soát
     const timeInRef1L2 = firebase.database().ref("/T1/BL1/Time_In");

          timeInRef1L2.on('value', (snapshot) => {
              const timeIn = snapshot.val();
              document.getElementById('timeInValue1L2').textContent = timeIn;
          });

     function onBodyLoad() {
       firebase
       .database()
       .ref("/T1/BL1/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_01L2").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_01L2").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_01L2").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T1/BL1").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_01L2").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T1/BL1").update({
           Status: 0,
         });
         inputField1L2.value = "";
         inputField1L2.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved1L2 = true;
     };

    firebase
      .database()
      .ref("/T1/BL1/Status")
      .on("value", function (snapshot) {
        var ss = snapshot.val();
        if (ss == 1) {
          document.getElementById("denId_01L2").src = "./assets/img/anh xe on.jpg";
          btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
        } else {
          document.getElementById("denId_01L2").src = "./assets/img/anh xe off.jpg";
        }
      });

     document.getElementById('btnOnId_01L2').addEventListener('click', function() {
       document.getElementById('inputId_01L2').style.display = 'block';
     });

     inputField1L2.addEventListener('change', function() {
       var licensePlateNumber = inputField1L2.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T1/BL1").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber1L2 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField1L2.value = "";
       }
     });
            //Block2 L2------------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_02L2");
     var inputField2L2 = document.getElementById("inputId_02L2");

     var isReserved2L2 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber2L2 = "";  // Biến để lưu số biển kiểm soát
      const timeInRef2L2 = firebase.database().ref("/T1/BL2/Time_In");

               timeInRef2L2.on('value', (snapshot) => {
                   const timeIn = snapshot.val();
                   document.getElementById('timeInValue2L2').textContent = timeIn;
               });


     function onBodyLoad() {
       firebase
       .database()
       .ref("/T1/BL2/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_02L2").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_02L2").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_02L2").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T1/BL2").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_02L2").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T1/BL2").update({
           Status: 0,
         });
         inputField2L2.value = "";
         inputField2L2.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved2L2 = true;
     };

    firebase
          .database()
          .ref("/T1/BL2/Status")
          .on("value", function (snapshot) {
            var ss = snapshot.val();
            if (ss == 1) {
              document.getElementById("denId_02L2").src = "./assets/img/anh xe on.jpg";
              btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
            } else {
              document.getElementById("denId_02L2").src = "./assets/img/anh xe off.jpg";
            }
          });

     document.getElementById('btnOnId_02L2').addEventListener('click', function() {
       document.getElementById('inputId_02L2').style.display = 'block';
     });

     inputField2L2.addEventListener('change', function() {
       var licensePlateNumber = inputField2L2.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T1/BL2").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber2L2 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField2L2.value = "";
       }
     });
              //Block3 l2-----------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_03L2");
     var inputField3L2 = document.getElementById("inputId_03L2");

     var isReserved3L2 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber3L2 = "";  // Biến để lưu số biển kiểm soát
      const timeInRef3L2 = firebase.database().ref("/T1/BL3/Time_In");

               timeInRef3L2.on('value', (snapshot) => {
                   const timeIn = snapshot.val();
                   document.getElementById('timeInValue3L2').textContent = timeIn;
               });


     function onBodyLoad() {
       firebase
       .database()
       .ref("/T1/BL3/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_03L2").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_03L2").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_03L2").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T1/BL3").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_03L2").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T1/BL3").update({
           Status: 0,
         });
         inputField3L2.value = "";
         inputField3L2.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved3L2 = true;
     };

     firebase
           .database()
           .ref("/T1/BL3/Status")
           .on("value", function (snapshot) {
             var ss = snapshot.val();
             if (ss == 1) {
               document.getElementById("denId_03L2").src = "./assets/img/anh xe on.jpg";
               btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
             } else {
               document.getElementById("denId_03L2").src = "./assets/img/anh xe off.jpg";
             }
           });

     document.getElementById('btnOnId_03L2').addEventListener('click', function() {
       document.getElementById('inputId_03L2').style.display = 'block';
     });

     inputField3L2.addEventListener('change', function() {
       var licensePlateNumber = inputField3L2.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T1/BL3").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber3L2 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField3L2.value = "";
       }
     });
              //Block4 L2------------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_04L2");
     var inputField4L2 = document.getElementById("inputId_04L2");

     var isReserved4L2 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber4L2 = "";  // Biến để lưu số biển kiểm soát
      const timeInRef4L2 = firebase.database().ref("/T1/BL4/Time_In");

               timeInRef4L2.on('value', (snapshot) => {
                   const timeIn = snapshot.val();
                   document.getElementById('timeInValue4L2').textContent = timeIn;
               });


     function onBodyLoad() {
       firebase
       .database()
       .ref("/T1/BL4/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_04L2").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_04L2").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_04L2").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T1/BL4").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_04L2").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T1/BL4").update({
           Status: 0,
         });
         inputField4L2.value = "";
         inputField4L2.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved4L2 = true;
     };

    firebase
          .database()
          .ref("/T1/BL4/Status")
          .on("value", function (snapshot) {
            var ss = snapshot.val();
            if (ss == 1) {
              document.getElementById("denId_04L2").src = "./assets/img/anh xe on.jpg";
              btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
            } else {
              document.getElementById("denId_04L2").src = "./assets/img/anh xe off.jpg";
            }
          });

     document.getElementById('btnOnId_04L2').addEventListener('click', function() {
       document.getElementById('inputId_04L2').style.display = 'block';
     });

     inputField4L2.addEventListener('change', function() {
       var licensePlateNumber = inputField4L2.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T1/BL4").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber4L2 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField4L2.value = "";
       }
     });
                //Block5 L2-------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_05L2");
     var inputField5L2 = document.getElementById("inputId_05L2");
      const timeInRef5L2 = firebase.database().ref("/T1/BL5/Time_In");

               timeInRef5L2.on('value', (snapshot) => {
                   const timeIn = snapshot.val();
                   document.getElementById('timeInValue5L2').textContent = timeIn;
               });


     var isReserved5L2 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber5L2 = "";  // Biến để lưu số biển kiểm soát

     function onBodyLoad() {
       firebase
       .database()
       .ref("/T1/BL5/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_05L2").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_05L2").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_05L2").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T1/BL5").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_05L2").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T1/BL5").update({
           Status: 0,
         });
         inputField5L2.value = "";
         inputField5L2.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved5L2 = true;
     };

    firebase
          .database()
          .ref("/T1/BL5/Status")
          .on("value", function (snapshot) {
            var ss = snapshot.val();
            if (ss == 1) {
              document.getElementById("denId_05L2").src = "./assets/img/anh xe on.jpg";
              btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
            } else {
              document.getElementById("denId_05L2").src = "./assets/img/anh xe off.jpg";
            }
          });

     document.getElementById('btnOnId_05L2').addEventListener('click', function() {
       document.getElementById('inputId_05L2').style.display = 'block';
     });

     inputField5L2.addEventListener('change', function() {
       var licensePlateNumber = inputField5L2.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T1/BL5").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber5L2 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField5L2.value = "";
       }
     });
                    //Block6 L2--------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_00L2");
     var inputField0L2 = document.getElementById("inputId_00L2");

     var isReserved0L2 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber0L2 = "";  // Biến để lưu số biển kiểm soát
      const timeInRef0L2 = firebase.database().ref("/T1/BL0/Time_In");

               timeInRef0L2.on('value', (snapshot) => {
                   const timeIn = snapshot.val();
                   document.getElementById('timeInValue0L2').textContent = timeIn;
               });


     function onBodyLoad() {
       firebase
       .database()
       .ref("/T1/BL0/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_00L2").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_00L2").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_00L2").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T1/BL0").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_00L2").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T1/BL0").update({
           Status: 0,
         });
         inputField0L2.value = "";
         inputField0L2.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved0L2 = true;
     };

     firebase
           .database()
           .ref("/T1/BL0/Status")
           .on("value", function (snapshot) {
             var ss = snapshot.val();
             if (ss == 1) {
               document.getElementById("denId_00L2").src = "./assets/img/anh xe on.jpg";
               btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
             } else {
               document.getElementById("denId_00L2").src = "./assets/img/anh xe off.jpg";
             }
           });

     document.getElementById('btnOnId_00L2').addEventListener('click', function() {
       document.getElementById('inputId_00L2').style.display = 'block';
     });

     inputField0L2.addEventListener('change', function() {
       var licensePlateNumber = inputField0L2.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T1/BL0").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber0L2 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField0L2.value = "";
       }
     });
            //Block1 L3-------------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_01L3");
     var inputField1L3 = document.getElementById("inputId_01L3");

     var isReserved1L3 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber1L3 = "";  // Biến để lưu số biển kiểm soát
     const timeInRef1L3 = firebase.database().ref("/T2/BL1/Time_In");

                    timeInRef1L3.on('value', (snapshot) => {
                        const timeIn = snapshot.val();
                        document.getElementById('timeInValue1L3').textContent = timeIn;
                    });

     function onBodyLoad() {
       firebase
       .database()
       .ref("/T2/BL1/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_01L3").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_01L3").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_01L3").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T2/BL1").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_01L3").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T2/BL1").update({
           Status: 0,
         });
         inputField1L3.value = "";
         inputField1L3.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved1L3 = true;
     };


          firebase
           .database()
           .ref("/T2/BL1/Status")
           .on("value", function (snapshot) {
             var ss = snapshot.val();
             if (ss == 1) {
               document.getElementById("denId_01L3").src = "./assets/img/anh xe on.jpg";
               btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
             } else {
               document.getElementById("denId_01L3").src = "./assets/img/anh xe off.jpg";
             }
           });

     document.getElementById('btnOnId_01L3').addEventListener('click', function() {
       document.getElementById('inputId_01L3').style.display = 'block';
     });

     inputField1L3.addEventListener('change', function() {
       var licensePlateNumber = inputField1L3.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T2/BL1").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber1L3 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField1L3.value = "";
       }
     });
             //Block2 l3-----------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_02L3");
     var inputField2L3 = document.getElementById("inputId_02L3");

     var isReserved2L3 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber2L3 = "";  // Biến để lưu số biển kiểm soát
       const timeInRef2L3 = firebase.database().ref("/T2/BL2/Time_In");

                    timeInRef2L3.on('value', (snapshot) => {
                        const timeIn = snapshot.val();
                        document.getElementById('timeInValue2L3').textContent = timeIn;
                    });

     function onBodyLoad() {
       firebase
       .database()
       .ref("/T2/BL2/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_02L3").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_02L3").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_02L3").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T2/BL2").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_02L3").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T2/BL2").update({
           Status: 0,
         });
         inputField2L3.value = "";
         inputField2L3.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved2L3 = true;
     };

                firebase
                .database()
                .ref("/T2/BL2/Status")
                .on("value", function (snapshot) {
                  var ss = snapshot.val();
                  if (ss == 1) {
                    document.getElementById("denId_02L3").src = "./assets/img/anh xe on.jpg";
                    btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
                  } else {
                    document.getElementById("denId_02L3").src = "./assets/img/anh xe off.jpg";
                  }
                });

     document.getElementById('btnOnId_02L3').addEventListener('click', function() {
       document.getElementById('inputId_02L3').style.display = 'block';
     });

     inputField2L3.addEventListener('change', function() {
       var licensePlateNumber = inputField2L3.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T2/BL2").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber2L3 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField2L3.value = "";
       }
     });
             //Block3 l3-------------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_03L3");
     var inputField3L3 = document.getElementById("inputId_03L3");

     var isReserved3L3 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber3L3 = "";  // Biến để lưu số biển kiểm soát
     const timeInRef3L3 = firebase.database().ref("/T2/BL3/Time_In");

                         timeInRef3L3.on('value', (snapshot) => {
                             const timeIn = snapshot.val();
                             document.getElementById('timeInValue3L3').textContent = timeIn;
                         });

     function onBodyLoad() {
       firebase
       .database()
       .ref("/T2/BL3/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_03L3").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_03L3").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_03L3").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T2/BL3").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_03L3").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T2/BL3").update({
           Status: 0,
         });
         inputField3L3.value = "";
         inputField3L3.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved3L3 = true;
     };

               firebase
               .database()
               .ref("/T2/BL3/Status")
               .on("value", function (snapshot) {
                 var ss = snapshot.val();
                 if (ss == 1) {
                   document.getElementById("denId_03L3").src = "./assets/img/anh xe on.jpg";
                   btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
                 } else {
                   document.getElementById("denId_03L3").src = "./assets/img/anh xe off.jpg";
                 }
               });

     document.getElementById('btnOnId_03L3').addEventListener('click', function() {
       document.getElementById('inputId_03L3').style.display = 'block';
     });

     inputField3L3.addEventListener('change', function() {
       var licensePlateNumber = inputField3L3.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T2/BL3").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber3L3 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField3L3.value = "";
       }
     });
              //Block4 L3-----------------------------------------------------------------------------------------------
          var btnOn = document.getElementById("btnOnId_04L3");
                  var inputField4L3 = document.getElementById("inputId_04L3");

                  var isReserved4L3 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
                  var licensePlateNumber4L3 = "";  // Biến để lưu số biển kiểm soát
                  const timeInRef4L3 = firebase.database().ref("/T2/BL4/Time_In");

                                      timeInRef4L3.on('value', (snapshot) => {
                                          const timeIn = snapshot.val();
                                          document.getElementById('timeInValue4L3').textContent = timeIn;
                                      });

                  function onBodyLoad() {
                    firebase
                    .database()
                    .ref("/T2/BL4/Status").get().then(snapshot => {
                      if (snapshot.exists()) {
                        if (snapshot.val() == 1)
                          document.getElementById("denId_04L3").src = "./assets/img/anh xe on.jpg";
                        else
                          document.getElementById("denId_04L3").src = "./assets/img/anh xe off.jpg";

                        document.getElementById("loader").style.display = "none";
                        document.getElementById("main").style.display = "flex";
                      } else {
                        console.log("No data available");
                      }
                    }).catch((error) => {
                      console.error(error);
                    });
                  }

                  btnOn.onclick = function () {
                    document.getElementById("denId_04L3").src = "./assets/img/anh xe on.jpg";
                    firebase.database().ref("/T2/BL4").update({
                      Status: 1,
                      QR:pin,
                    });

                    timer = setTimeout(function() {
                      document.getElementById("denId_04L3").src = "./assets/img/anh xe off.jpg";
                      firebase.database().ref("/T2/BL4").update({
                        Status: 0,
                      });
                      inputField4L3.value = "";
                      inputField4L3.style.display = 'none';  //  ẩn trường nhập
                    }, 60000);

                    isReserved4L3 = true;
                  };

                             firebase
                             .database()
                             .ref("/T2/BL4/Status")
                             .on("value", function (snapshot) {
                               var ss = snapshot.val();
                               if (ss == 1) {
                                 document.getElementById("denId_04L3").src = "./assets/img/anh xe on.jpg";
                                 btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
                               } else {
                                 document.getElementById("denId_04L3").src = "./assets/img/anh xe off.jpg";
                               }
                             });

                  document.getElementById('btnOnId_04L3').addEventListener('click', function() {
                    document.getElementById('inputId_04L3').style.display = 'block';
                  });

                  inputField4L3.addEventListener('change', function() {
                    var licensePlateNumber = inputField4L3.value;
                    var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
                    if (licensePlateFormat.test(licensePlateNumber)) {
                      firebase.database().ref("/T2/BL4").update({
                        License_plate: licensePlateNumber,
                      });
                      licensePlateNumber4L3 = licensePlateNumber;
                    } else {
                      alert("The license plate is not in the correct format. Please re-enter.");
                      inputField4L3.value = "";
                    }
                  });
             //Block5 L3------------------------------------------------------------------------------------------------
     var btnOn = document.getElementById("btnOnId_05L3");
     var inputField5L3 = document.getElementById("inputId_05L3");

     var isReserved5L3 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber5L3 = "";  // Biến để lưu số biển kiểm soát
     const timeInRef5L3 = firebase.database().ref("/T2/BL5/Time_In");

                         timeInRef5L3.on('value', (snapshot) => {
                             const timeIn = snapshot.val();
                             document.getElementById('timeInValue5L3').textContent = timeIn;
                         });

     function onBodyLoad() {
       firebase
       .database()
       .ref("/T2/BL5/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_05L3").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_05L3").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_05L3").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T2/BL5").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_05L3").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T2/BL5").update({
           Status: 0,
         });
         inputField5L3.value = "";
         inputField5L3.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved5L3 = true;
     };

                firebase
                .database()
                .ref("/T2/BL5/Status")
                .on("value", function (snapshot) {
                  var ss = snapshot.val();
                  if (ss == 1) {
                    document.getElementById("denId_05L3").src = "./assets/img/anh xe on.jpg";
                    btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
                  } else {
                    document.getElementById("denId_05L3").src = "./assets/img/anh xe off.jpg";
                  }
                });

     document.getElementById('btnOnId_05L3').addEventListener('click', function() {
       document.getElementById('inputId_05L3').style.display = 'block';
     });

     inputField5L3.addEventListener('change', function() {
       var licensePlateNumber = inputField5L3.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T2/BL5").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber5L3 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField5L3.value = "";
       }
     });

             //Block0 L3
     var btnOn = document.getElementById("btnOnId_00L3");
     var inputField0L3 = document.getElementById("inputId_00L3");

     var isReserved0L3 = false;  // Biến để kiểm tra xem chỗ đỗ đã được đặt chưa
     var licensePlateNumber0L3 = "";  // Biến để lưu số biển kiểm soát
     const timeInRef0L3 = firebase.database().ref("/T2/BL0/Time_In");

                         timeInRef0L3.on('value', (snapshot) => {
                             const timeIn = snapshot.val();
                             document.getElementById('timeInValue0L3').textContent = timeIn;
                         });

     function onBodyLoad() {
       firebase
       .database()
       .ref("/T2/BL0/Status").get().then(snapshot => {
         if (snapshot.exists()) {
           if (snapshot.val() == 1)
             document.getElementById("denId_00L3").src = "./assets/img/anh xe on.jpg";
           else
             document.getElementById("denId_00L3").src = "./assets/img/anh xe off.jpg";

           document.getElementById("loader").style.display = "none";
           document.getElementById("main").style.display = "flex";
         } else {
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       });
     }

     btnOn.onclick = function () {
       document.getElementById("denId_00L3").src = "./assets/img/anh xe on.jpg";
       firebase.database().ref("/T2/BL0").update({
         Status: 1,
         QR:pin,
       });

       timer = setTimeout(function() {
         document.getElementById("denId_00L3").src = "./assets/img/anh xe off.jpg";
         firebase.database().ref("/T2/BL0").update({
           Status: 0,
         });
         inputField0L3.value = "";
         inputField0L3.style.display = 'none';  //  ẩn trường nhập
       }, 60000);

       isReserved0L3 = true;
     };

               firebase
                .database()
                .ref("/T2/BL0/Status")
                .on("value", function (snapshot) {
                  var ss = snapshot.val();
                  if (ss == 1) {
                    document.getElementById("denId_00L3").src = "./assets/img/anh xe on.jpg";
                    btnOn.style.display = 'block';  // Hiển thị lại nút "RESERVE"
                  } else {
                    document.getElementById("denId_00L3").src = "./assets/img/anh xe off.jpg";
                  }
                });

     document.getElementById('btnOnId_00L3').addEventListener('click', function() {
       document.getElementById('inputId_00L3').style.display = 'block';
     });

     inputField0L3.addEventListener('change', function() {
       var licensePlateNumber = inputField0L3.value;
       var licensePlateFormat = /^[0-9]{2}[A-Z][0-9]{3}[0-9]{2}$/;
       if (licensePlateFormat.test(licensePlateNumber)) {
         firebase.database().ref("/T2/BL0").update({
           License_plate: licensePlateNumber,
         });
         licensePlateNumber0L3 = licensePlateNumber;
       } else {
         alert("The license plate is not in the correct format. Please re-enter.");
         inputField0L3.value = "";
       }
     });
               //Nút submit book
var checkoutButton = document.getElementById("checkout-button");
checkoutButton.onclick = function () {
  var r = window.confirm("Are you sure you want to make a reservation?");
  if (r && ((((((((((isReserved1 && licensePlateNumber1 !== "") || (isReserved2 && licensePlateNumber2 !== "") || (isReserved5 && licensePlateNumber5 !== "") || (isReserved4 && licensePlateNumber4 !== "") || (isReserved1L2 && licensePlateNumber1L2 !== "") || (isReserved2L2 && licensePlateNumber2L2 !== "") || (isReserved3L2 && licensePlateNumber3L2 !== "") || (isReserved4L2 && licensePlateNumber4L2 !== "") || (isReserved5L2 && licensePlateNumber5L2 !== "") || (isReserved0L2 && licensePlateNumber0L2 !== "") || (isReserved1L3 && licensePlateNumber1L3 !== "") || (isReserved2L3 && licensePlateNumber2L3 !== "") || (isReserved3L3 && licensePlateNumber3L3 !== "") || (isReserved4L3 && licensePlateNumber4L3 !== "") || (isReserved5L3 && licensePlateNumber5L3 !== "") || (isReserved0L3 && licensePlateNumber0L3 !== ""))))))))))) {
    var pinParam = "pin=" + encodeURIComponent(pin);
    var url = "./thanh toan ve.html?" + pinParam;
    window.location.href = url;
  } else {
    alert("Please make a reservation and enter your license plate number.");
  }
};






