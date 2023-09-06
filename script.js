// // // // onload = function () {
// // // //     const _sl = document.querySelector('#sidelength'),
// // // //         _p = document.querySelector('#res_p'),
// // // //         _s = document.querySelector('#res_s');

// // // //     _sl.addEventListener('keyup', function () {
// // // //         this.value = this.value.replace(/[^\d]+/ig, '');
// // // //         _p.innerHTML = this.value * 4;
// // // //         _s.innerHTML = this.value ** 2;
// // // //     });


// // // //     _sl.focus();


// // // // }




// // // // // onload = function () {
// // // // //     const _sl = document.querySelector('#sidelength'),
// // // // //         _p = document.querySelector('#res_p'),
// // // // //         _s = document.querySelector('#res_s');


// // // // //     _sl.addEventListener('keyup', function () {
// // // // //         this.value = this.value.replace(/[^\d]+/ig, '');
// // // // //         _p.innerHTML = this.value * 4;
// // // // //         _s.innerHTML = this.value ** 2;

// // // // //     });

// // // // //     _sl.focus();
// // // // // }






// // // // let a = '';
// // // // let b = '';
// // // // let sign = '';
// // // // let finish = false;

// // // // const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// // // // const action = ['_', '+', 'X', '/'];


// // // // const out = document.querySelector('.calc-screen p');

// // // // function clearAll() {
// // // //     a = '';
// // // //     b = '';
// // // //     sign = '';
// // // //     finish = false;
// // // //     out.textContent = 0;

// // // // }

// // // // document.querySelector('.ac').onclick = clearAll;

// // // // document.querySelector('.buttons').onclick = (event) => {
// // // //     if (!event.target.classList.contains('btn')) return;

// // // //     if (event.target.classList.contains('ac')) return;

// // // //     out.textContent = '';

// // // //     const key = event.target.textContent;

// // // //     if (digit.includes(key)) {
// // // //         if (b === '' && sign === '') {
// // // //             a += key;
// // // //             out.textContent = a;
// // // //         }
// // // //         else if (a !== '' && b !== '' && finish) {
// // // //             b = key;
// // // //             finish = false;
// // // //             out.textContent = b;
// // // //         }
// // // //         else {
// // // //             b += key;
// // // //             out.textContent = b;
// // // //         }
// // // //         return
// // // //     }

// // // //     if (action.includes(key)) {
// // // //         sign = key;
// // // //         out.textContent = sign;
// // // //         console.log(sign);
// // // //         return;

// // // //     }

// // // //     if (key === '=') {
// // // //         if (b === '') b = a;
// // // //         switch (sign) {
// // // //             case "+":
// // // //                 a = (+a) + (+b);
// // // //                 break;

// // // //             case "-":
// // // //                 a = a - b;
// // // //                 break;

// // // //             case "X":
// // // //                 a = a * b;
// // // //                 break;

// // // //             case "/":
// // // //                 a = a / b;
// // // //                 break;
// // // //         }
// // // //         finish = true;
// // // //         out.textContent = a;

// // // //     }
// // // // }



// // // // let offset = 0;
// // // // const sliderline = document.querySelector('.slider-line');

// // // // document.querySelector('.slider-nex').addEventListener('click', function () {
// // // //     offset += 256;
// // // //     if (offset > 768) {
// // // //         offset = 0;
// // // //     }
// // // //     sliderline.style.left = - offset + 'px';

// // // // });

// // // // document.querySelector('.slider-prev').addEventListener('click', function () {
// // // //     offset -= 256;
// // // //     if (offset < 0) {
// // // //         offset = 768;
// // // //     }
// // // //     sliderline.style.left = - offset + 'px';

// // // // });




// // // let offset = 0;
// // // const sliderline = document.querySelector('.slider-line');

// // // document.querySelector('.slider-nex').addEventListener('click', function () {
// // //     offset += 256;
// // //     if (offset > 756) {
// // //         offset = 0;
// // //     }
// // //     sliderline.style.left = + offset + 'px';
// // // })
// // // document.querySelector('.slider-prev').addEventListener('click', function () {

// // //     offset -= 256;
// // //     if (offset < 0) {
// // //         offset = 756;
// // //     }
// // //     sliderline.style.left = - offset + 'px';

// // // })


// // let offset = 0;
// // const sliderline = document.querySelector('.slider-line');

// // document.querySelector('.slider-nex').addEventListener('click', function () {
// //     offset += 256;
// //     if (offset > 756) {
// //         offset = 0;
// //     }
// //     sliderline.style.left = - offset + 'px';

// // })

// // document.querySelector('.slider-prev').addEventListener('click', function () {
// //     offset -= 256;
// //     if (offset < 0) {
// //         offset = 756;
// //     }
// //     sliderline.style.left = - offset + 'px';
// // }




// // let s = 10000;
// // let result;
// // function addLeadingZero(num, zeroCount) {
// //     let out = num.toString();
// //     while (out.length < zeroCount) {
// //         out = '0' + out;
// //     }
// //     return out;
// // }


// // document.querySelector('button').addEventListener('click', () => {
// //     // s++;
// //     // result = addLeadingZero(s, 4);
// //     // result = result.split('').map(item => +item)
// //     result = s.toString().split('').map(item => +item);
// //     result.shift();
// //     s++;
// //     console.log(result);
// // })


// let width = document.querySelector('#width');
// let length = document.querySelector('#length');
// let height = document.querySelector('#height');
// let area = document.querySelector('#area');

// go.addEventListener('click', function () {
//     let halfPermetr = (+width.value + +length.value + +height.value) / 2;
//     area.value = Math.sqrt(halfPermetr * (halfPermetr - width.value) * (halfPermetr - length.value) * (halfPermetr
//         - height.value));
// });

let arr = Array.from(document.body.childNodes);
for (let child of document.body.childNodes) {
    console.log(child);
}



