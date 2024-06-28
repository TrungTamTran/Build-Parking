//Block 1
const timeinRef1 = firebase.database().ref("/T0/BL1/Time_In");
const timeoutRef1 = firebase.database().ref("/T0/BL1/Time_Out");
let timein1, timeout1;
let timeoutHandler1;

timeinRef1.on('value', (snapshot) => {
    timein1 = snapshot.val();
    calculateDifference1();
    document.getElementById('timein').textContent = timein1;
});

timeoutRef1.on('value', (snapshot) => {
    timeout1 = snapshot.val();
    calculateDifference1();

    if (timeout1 !== '00:00') {
        timeoutHandler1 = setTimeout(() => {
            timeinRef1.set('00:00');
            timeoutRef1.set('00:00');
            firebase.database().ref("/T0/BL1").update({
                Status: 0
            });
        }, 60000);
    } else {
        clearTimeout(timeoutHandler1);
    }
});

function calculateDifference1() {
    if (timein1 && timeout1) {
        if (timeout1 === '00:00') {
            document.getElementById('result').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein1.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout1.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result').innerText = formattedResult;
        }
    }
}

// BLOCK 2 L1
const timeinRef2 = firebase.database().ref("/T0/BL2/Time_In");
const timeoutRef2 = firebase.database().ref("/T0/BL2/Time_Out");
let timein2, timeout2;
let timeoutHandler2;
timeinRef2.on('value', (snapshot) => {
    timein2 = snapshot.val();
    calculateDifference2();
    document.getElementById('timein2').textContent = timein2;
});

timeoutRef2.on('value', (snapshot) => {
    timeout2 = snapshot.val();
    calculateDifference2();

     if (timeout2 !== '00:00') {
           timeoutHandler2 = setTimeout(() => {
               timeinRef2.set('00:00');
               timeoutRef2.set('00:00');
               firebase.database().ref("/T0/BL2").update({
                   Status: 0
               });
           }, 60000);
       } else {
           clearTimeout(timeoutHandler2);
       }
   });
function calculateDifference2() {
    if (timein2 && timeout2) {
        if (timeout2 === '00:00') {
            document.getElementById('result2').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein2.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout2.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result2').innerText = formattedResult;
        }
    }
}
// BLOCK 5 L1
const timeinRef5 = firebase.database().ref("/T0/BL5/Time_In");
const timeoutRef5 = firebase.database().ref("/T0/BL5/Time_Out");
let timein5, timeout5;
let timeoutHandler5;
timeinRef5.on('value', (snapshot) => {
    timein5 = snapshot.val();
    calculateDifference5();
    document.getElementById('timein5').textContent = timein5;
});

timeoutRef5.on('value', (snapshot) => {
    timeout5 = snapshot.val();
    calculateDifference5();

    if (timeout5 !== '00:00') {
          timeoutHandler5 = setTimeout(() => {
              timeinRef5.set('00:00');
              timeoutRef5.set('00:00');
              firebase.database().ref("/T0/BL5").update({
                  Status: 0
              });
          }, 60000);
      } else {
          clearTimeout(timeoutHandler5);
      }
  });
function calculateDifference5() {
    if (timein5 && timeout5) {
        if (timeout5 === '00:00') {
            document.getElementById('result5').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein3.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout3.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result5').innerText = formattedResult;
        }
    }
}
// BLOCK 4 L1
const timeinRef4 = firebase.database().ref("/T0/BL4/Time_In");
const timeoutRef4 = firebase.database().ref("/T0/BL4/Time_Out");
let timein4, timeout4;
let timeoutHandler4;
timeinRef4.on('value', (snapshot) => {
    timein4 = snapshot.val();
    calculateDifference4();
    document.getElementById('timein4').textContent = timein4;
});

timeoutRef4.on('value', (snapshot) => {
    timeout4 = snapshot.val();
    calculateDifference4();

      if (timeout4 !== '00:00') {
            timeoutHandler4 = setTimeout(() => {
                timeinRef4.set('00:00');
                timeoutRef4.set('00:00');
                firebase.database().ref("/T0/BL4").update({
                    Status: 0
                });
            }, 60000);
        } else {
            clearTimeout(timeoutHandler4);
        }
    });
function calculateDifference4() {
    if (timein4 && timeout4) {
        if (timeout4 === '00:00') {
            document.getElementById('result4').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein4.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout4.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result4').innerText = formattedResult;
        }
    }
}
// BLOCK 1 L2
const timeinRef1L2 = firebase.database().ref("/T1/BL1/Time_In");
const timeoutRef1L2 = firebase.database().ref("/T1/BL1/Time_Out");
let timein1L2, timeout1L2;
let timeoutHandler1L2;
timeinRef1L2.on('value', (snapshot) => {
    timein1L2 = snapshot.val();
    calculateDifference1L2();
    document.getElementById('timein1L2').textContent = timein1L2;
});

timeoutRef1L2.on('value', (snapshot) => {
    timeout1L2 = snapshot.val();
    calculateDifference1L2();

      if (timeout1L2 !== '00:00') {
            timeoutHandler1L2 = setTimeout(() => {
                timeinRef1L2.set('00:00');
                timeoutRef1L2.set('00:00');
                firebase.database().ref("/T1/BL1").update({
                    Status: 0
                });
            }, 60000);
        } else {
            clearTimeout(timeoutHandler1L2);
        }
    });
function calculateDifference1L2() {
    if (timein1L2 && timeout1L2) {
        if (timeout1L2 === '00:00') {
            document.getElementById('result1L2').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein1L2.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout1L2.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result1L2').innerText = formattedResult;
        }
    }
}
// BLOCK 2 L2
const timeinRef2L2 = firebase.database().ref("/T1/BL2/Time_In");
const timeoutRef2L2 = firebase.database().ref("/T1/BL2/Time_Out");
let timein2L2, timeout2L2;
let timeoutHandler2L2;
timeinRef2L2.on('value', (snapshot) => {
    timein2L2 = snapshot.val();
    calculateDifference2L2();
    document.getElementById('timein2L2').textContent = timein2L2;
});

timeoutRef2L2.on('value', (snapshot) => {
    timeout2L2 = snapshot.val();
    calculateDifference2L2();

     if (timeout2L2 !== '00:00') {
                 timeoutHandler2L2 = setTimeout(() => {
                     timeinRef2L2.set('00:00');
                     timeoutRef2L2.set('00:00');
                     firebase.database().ref("/T1/BL2").update({
                         Status: 0
                     });
                 }, 60000);
             } else {
                 clearTimeout(timeoutHandler2L2);
             }
         });
function calculateDifference2L2() {
    if (timein2L2 && timeout2L2) {
        if (timeout2L2 === '00:00') {
            document.getElementById('result2L2').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein2L2.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout2L2.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result2L2').innerText = formattedResult;
        }
    }
}
// BLOCK 3 L2
const timeinRef3L2 = firebase.database().ref("/T1/BL3/Time_In");
const timeoutRef3L2 = firebase.database().ref("/T1/BL3/Time_Out");
let timein3L2, timeout3L2;
let timeoutHandler3L2;
timeinRef3L2.on('value', (snapshot) => {
    timein3L2 = snapshot.val();
    calculateDifference3L2();
    document.getElementById('timein3L2').textContent = timein3L2;
});

timeoutRef3L2.on('value', (snapshot) => {
    timeout3L2 = snapshot.val();
    calculateDifference3L2();

   if (timeout3L2 !== '00:00') {
               timeoutHandler3L2 = setTimeout(() => {
                   timeinRef3L2.set('00:00');
                   timeoutRef3L2.set('00:00');
                   firebase.database().ref("/T1/BL3").update({
                       Status: 0
                   });
               }, 60000);
           } else {
               clearTimeout(timeoutHandler3L2);
           }
       });
function calculateDifference3L2() {
    if (timein3L2 && timeout3L2) {
        if (timeout3L2 === '00:00') {
            document.getElementById('result3L2').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein3L2.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout3L2.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result3L2').innerText = formattedResult;
        }
    }
}
// BLOCK 4 L2
const timeinRef4L2 = firebase.database().ref("/T1/BL4/Time_In");
const timeoutRef4L2 = firebase.database().ref("/T1/BL4/Time_Out");
let timein4L2, timeout4L2;
let timeoutHandler4L2;
timeinRef4L2.on('value', (snapshot) => {
    timein4L2 = snapshot.val();
    calculateDifference4L2();
    document.getElementById('timein4L2').textContent = timein4L2;
});

timeoutRef4L2.on('value', (snapshot) => {
    timeout4L2 = snapshot.val();
    calculateDifference4L2();

   if (timeout4L2 !== '00:00') {
               timeoutHandler4L2 = setTimeout(() => {
                   timeinRef4L2.set('00:00');
                   timeoutRef4L2.set('00:00');
                   firebase.database().ref("/T1/BL4").update({
                       Status: 0
                   });
               }, 60000);
           } else {
               clearTimeout(timeoutHandler4L2);
           }
       });
function calculateDifference4L2() {
    if (timein4L2 && timeout4L2) {
        if (timeout4L2 === '00:00') {
            document.getElementById('result4L2').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein4L2.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout4L2.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result4L2').innerText = formattedResult;
        }
    }
}
// BLOCK 5 L2
const timeinRef5L2 = firebase.database().ref("/T1/BL5/Time_In");
const timeoutRef5L2 = firebase.database().ref("/T1/BL5/Time_Out");
let timein5L2, timeout5L2;
let timeoutHandler5L2;
timeinRef5L2.on('value', (snapshot) => {
    timein5L2 = snapshot.val();
    calculateDifference5L2();
    document.getElementById('timein5L2').textContent = timein5L2;
});

timeoutRef5L2.on('value', (snapshot) => {
    timeout5L2 = snapshot.val();
    calculateDifference5L2();

   if (timeout5L2 !== '00:00') {
               timeoutHandler5L2 = setTimeout(() => {
                   timeinRef5L2.set('00:00');
                   timeoutRef5L2.set('00:00');
                   firebase.database().ref("/T1/BL5").update({
                       Status: 0
                   });
               }, 60000);
           } else {
               clearTimeout(timeoutHandler5L2);
           }
       });
function calculateDifference5L2() {
    if (timein5L2 && timeout5L2) {
        if (timeout5L2 === '00:00') {
            document.getElementById('result5L2').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein5L2.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout5L2.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result5L2').innerText = formattedResult;
        }
    }
}
// BLOCK 0 L2
const timeinRef0L2 = firebase.database().ref("/T1/BL0/Time_In");
const timeoutRef0L2 = firebase.database().ref("/T1/BL0/Time_Out");
let timein0L2, timeout0L2;
let timeoutHandler0L2;
timeinRef0L2.on('value', (snapshot) => {
    timein0L2 = snapshot.val();
    calculateDifference0L2();
    document.getElementById('timein0L2').textContent = timein0L2;
});

timeoutRef0L2.on('value', (snapshot) => {
    timeout0L2 = snapshot.val();
    calculateDifference0L2();

    if (timeout0L2 !== '00:00') {
                timeoutHandler0L2 = setTimeout(() => {
                    timeinRef0L2.set('00:00');
                    timeoutRef0L2.set('00:00');
                    firebase.database().ref("/T1/BL0").update({
                        Status: 0
                    });
                }, 60000);
            } else {
                clearTimeout(timeoutHandler0L2);
            }
        });
function calculateDifference0L2() {
    if (timein0L2 && timeout0L2) {
        if (timeout0L2 === '00:00') {
            document.getElementById('result0L2').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein0L2.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout0L2.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result0L2').innerText = formattedResult;
        }
    }
}
// BLOCK 1 L3
const timeinRef1L3 = firebase.database().ref("/T2/BL1/Time_In");
const timeoutRef1L3 = firebase.database().ref("/T2/BL1/Time_Out");
let timein1L3, timeout1L3;
let timeoutHandler1L3;
timeinRef1L3.on('value', (snapshot) => {
    timein1L3 = snapshot.val();
    calculateDifference1L3();
    document.getElementById('timein1L3').textContent = timein1L3;
});

timeoutRef1L3.on('value', (snapshot) => {
    timeout1L3 = snapshot.val();
    calculateDifference1L3();

    if (timeout1L3 !== '00:00') {
                timeoutHandler1L3 = setTimeout(() => {
                    timeinRef1L3.set('00:00');
                    timeoutRef1L3.set('00:00');
                    firebase.database().ref("/T2/BL1").update({
                        Status: 0
                    });
                }, 60000);
            } else {
                clearTimeout(timeoutHandler1L3);
            }
        });
function calculateDifference1L3() {
    if (timein1L3 && timeout1L3) {
        if (timeout1L3 === '00:00') {
            document.getElementById('result1L3').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein1L3.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout1L3.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result1L3').innerText = formattedResult;
        }
    }
}
// BLOCK 2 L3
const timeinRef2L3 = firebase.database().ref("/T2/BL2/Time_In");
const timeoutRef2L3 = firebase.database().ref("/T2/BL2/Time_Out");
let timein2L3, timeout2L3;
let timeoutHandler2L3;
timeinRef2L3.on('value', (snapshot) => {
    timein2L3 = snapshot.val();
    calculateDifference2L3();
    document.getElementById('timein2L3').textContent = timein2L3;
});

timeoutRef2L3.on('value', (snapshot) => {
    timeout2L3 = snapshot.val();
    calculateDifference2L3();

    if (timeout2L3 !== '00:00') {
                timeoutHandler2L3 = setTimeout(() => {
                    timeinRef2L3.set('00:00');
                    timeoutRef2L3.set('00:00');
                    firebase.database().ref("/T2/BL2").update({
                        Status: 0
                    });
                }, 60000);
            } else {
                clearTimeout(timeoutHandler2L3);
            }
        });
function calculateDifference2L3() {
    if (timein2L3 && timeout2L3) {
        if (timeout2L3 === '00:00') {
            document.getElementById('result2L3').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein2L3.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout2L3.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result2L3').innerText = formattedResult;
        }
    }
}
// BLOCK 3 L3
const timeinRef3L3 = firebase.database().ref("/T2/BL3/Time_In");
const timeoutRef3L3 = firebase.database().ref("/T2/BL3/Time_Out");
let timein3L3, timeout3L3;
let timeoutHandler3L3;
timeinRef3L3.on('value', (snapshot) => {
    timein3L3 = snapshot.val();
    calculateDifference3L3();
    document.getElementById('timein3L3').textContent = timein3L3;
});

timeoutRef3L3.on('value', (snapshot) => {
    timeout3L3 = snapshot.val();
    calculateDifference3L3();

     if (timeout3L3 !== '00:00') {
                    timeoutHandler3L3 = setTimeout(() => {
                        timeinRef3L3.set('00:00');
                        timeoutRef3L3.set('00:00');
                        firebase.database().ref("/T2/BL3").update({
                            Status: 0
                        });
                    }, 60000);
                } else {
                    clearTimeout(timeoutHandler3L3);
                }
            });
function calculateDifference3L3() {
    if (timein3L3 && timeout3L3) {
        if (timeout3L3 === '00:00') {
            document.getElementById('result3L3').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein3L3.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout3L3.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result3L3').innerText = formattedResult;
        }
    }
}
// BLOCK 4 L3
const timeinRef4L3 = firebase.database().ref("/T2/BL4/Time_In");
const timeoutRef4L3 = firebase.database().ref("/T2/BL4/Time_Out");
let timein4L3, timeout4L3;
let timeoutHandler4L3;
timeinRef4L3.on('value', (snapshot) => {
    timein4L3 = snapshot.val();
    calculateDifference4L3();
    document.getElementById('timein4L3').textContent = timein4L3;
});

timeoutRef4L3.on('value', (snapshot) => {
    timeout4L3 = snapshot.val();
    calculateDifference4L3();

    if (timeout4L3 !== '00:00') {
                   timeoutHandler4L3 = setTimeout(() => {
                       timeinRef4L3.set('00:00');
                       timeoutRef4L3.set('00:00');
                       firebase.database().ref("/T2/BL4").update({
                           Status: 0
                       });
                   }, 60000);
               } else {
                   clearTimeout(timeoutHandler4L3);
               }
           });
function calculateDifference4L3() {
    if (timein4L3 && timeout4L3) {
        if (timeout4L3 === '00:00') {
            document.getElementById('result4L3').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein4L3.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout4L3.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result4L3').innerText = formattedResult;
        }
    }
}
// BLOCK 5 L3
const timeinRef5L3 = firebase.database().ref("/T2/BL5/Time_In");
const timeoutRef5L3 = firebase.database().ref("/T2/BL5/Time_Out");
let timein5L3, timeout5L3;
let timeoutHandler5L3;
timeinRef5L3.on('value', (snapshot) => {
    timein5L3 = snapshot.val();
    calculateDifference5L3();
    document.getElementById('timein5L3').textContent = timein5L3;
});

timeoutRef5L3.on('value', (snapshot) => {
    timeout5L3 = snapshot.val();
    calculateDifference5L3();
 if (timeout5L3 !== '00:00') {
                timeoutHandler5L3 = setTimeout(() => {
                    timeinRef5L3.set('00:00');
                    timeoutRef5L3.set('00:00');
                    firebase.database().ref("/T2/BL5").update({
                        Status: 0
                    });
                }, 60000);
            } else {
                clearTimeout(timeoutHandler5L3);
            }
        });
function calculateDifference5L3() {
    if (timein5L3 && timeout5L3) {
        if (timeout5L3 === '00:00') {
            document.getElementById('result5L3').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein5L3.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout5L3.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result5L3').innerText = formattedResult;
        }
    }
}
// BLOCK 0 L3
const timeinRef0L3 = firebase.database().ref("/T2/BL0/Time_In");
const timeoutRef0L3 = firebase.database().ref("/T2/BL0/Time_Out");
let timein0L3, timeout0L3;
let timeoutHandler0L3;
timeinRef0L3.on('value', (snapshot) => {
    timein0L3 = snapshot.val();
    calculateDifference0L3();
    document.getElementById('timein0L3').textContent = timein0L3;
});

timeoutRef0L3.on('value', (snapshot) => {
    timeout0L3 = snapshot.val();
    calculateDifference0L3();

    if (timeout0L3 !== '00:00') {
                   timeoutHandler0L3 = setTimeout(() => {
                       timeinRef0L3.set('00:00');
                       timeoutRef0L3.set('00:00');
                       firebase.database().ref("/T2/BL0").update({
                           Status: 0
                       });
                   }, 60000);
               } else {
                   clearTimeout(timeoutHandler0L3);
               }
           });
function calculateDifference0L3() {
    if (timein0L3 && timeout0L3) {
        if (timeout0L3 === '00:00') {
            document.getElementById('result0L3').innerText = '00:00';
        } else {
            const [timeinHours, timeinMinutes] = timein0L3.split(':').map(Number);
            const [timeoutHours, timeoutMinutes] = timeout0L3.split(':').map(Number);

            const timeinTotalMinutes = timeinHours * 60 + timeinMinutes;
            const timeoutTotalMinutes = timeoutHours * 60 + timeoutMinutes;
            let resultMinutes = timeinTotalMinutes - timeoutTotalMinutes;

            const absoluteResultMinutes = Math.abs(resultMinutes);
            const resultHours = Math.floor(absoluteResultMinutes / 60);
            const resultRemainingMinutes = absoluteResultMinutes % 60;

            const formattedResult = `${resultHours.toString().padStart(2, '0')}:${resultRemainingMinutes.toString().padStart(2, '0')}`;
            document.getElementById('result0L3').innerText = formattedResult;
        }
    }
}