// Bài tập Function

// Bài 4: Cho người dùng nhập vào 1 số bất kỳ. Kiểm tra xem số đó có phải số
// nguyên tố hay không?
// input: 13
// output: true



//Bài làm
            //    function prime(number){
            //         if (number <= 1) {
            //                 alert(`Số ${number} không phải là số nguyên tố `)
            //                 return;
            //             }
            //             for (let i = 2; i < number; i++) {
            //                 if (number % i === 0) {
            //                     alert(`Số ${number} không phải là số nguyên tố `)
            //                  return;
            //                 }
            //                 alert(`Số ${number} là số nguyên tố `)
            //                 return;
            //             }
            //         }
                
            //       let number = +prompt("Nhập một số bất kỳ: ")
            //       prime(number);

//Bài 5: Xây dựng hàm, kiểm tra chuỗi nào dài nhất
// input: ["Black", "Pink", "Green", "Blue", "Yellow"]
// output: Yellow


//Bài làm
            // function maxColor(){
            //     let maxLength = 0;
            //     let maxColor = "";
            //     for (let i = 0; i < color.length; i++) {
            //        let element = color[i];
            //        if(element.length > maxLength ){
            //         maxLength = element.length;
            //         maxColor = element;
            //        }
            //     }
            //     return maxColor;
            // }

            // let color=["Black" , "Pink" , "Green" , "Blue" , "Yellow"];
            // alert(maxColor(color));


// Nâng cao: Cho người dùng nhập vào cách nhau bằng dấu ","
// input: black, pink, green, blue, yellow
// output: yellow


//Bài làm
            // function maxColor(input) {
            //     let colors = input.split(",");
            //     let maxLength = 0;
            //     let maxColor = "";
            //     for (let i = 0; i < colors.length; i++) {
            //                let element = colors[i];
            //                if(element.length > maxLength ){
            //                 maxLength = element.length;
            //                 maxColor = element;
            //                }
            //             }
            //             return maxColor;
            //   }

            //   let input = prompt("Nhập các màu sắc cách nhau bằng dấu ","");
            //   console.log(maxColor(input));


// Bài 6: Xây dựng hàm, tính tổng các số chẵn trong mảng
// input: [1,2,2,3,4,5,6,6,7]
// output: 20

//Bài làm

            // function even(arr){
            //     let count=0;
            //     for (let i = 0; i < arr.length; i++) {
            //        if(arr[i] % 2 ==0){
            //         count+=arr[i];
            //        }
            //     }
            //     return count;
            // }

            // let arr=[1,2,2,3,4,5,6,6,7,8]
            // alert(even(arr));

// Bài 7: Cho người dùng nhập vào, xây dựng hàm tìm số lớn thứ 2 trong mảng
// input: 3,5,7,6,4,8,20,55
// ouput: 20


//Bài làm
            // function findSecondLargest(input) {
            //     let numbers = input.split(",").map((number) => parseInt(number));
            //     let largest = 0;
            //     let secondLargest = 0;
            
            //     for (let i = 0; i < numbers.length; i++)    {
            //         if (numbers[i] > largest) {
            //           secondLargest = largest;
            //           largest = numbers[i];
            //         } else if (numbers[i] > secondLargest) {
            //           secondLargest = numbers[i];
            //           break;
            //         }
            //       }
            //     return secondLargest;
            //   }
            //   let input = prompt("Nhập các số cách nhau bằng dấu ","");
            //   let secondLargest = findSecondLargest(input);
            
            //   // In ra kết quả
            //     alert(`Số lớn thứ 2 là: ${secondLargest}`);

// Bài 8: Cho người dùng nhập vào, tính trung bình cộng của các số đó
// input: 8,9,7,4,8
// output: 7.2


//Bài làm
            function average(numbers) {
                let number = numbers.split(",").map((number) => parseInt(number));
                let sum = 0;
                let count = 0;
            
                for (let i = 0;  i<number.length ; i++) {
                sum += number[i];
                count++;
                }
            
                return sum / count;
            }
            
            const numbers = prompt("Nhập các số cách nhau bằng dấu ","");
            
            const result = average(numbers);
            
            console.log(`Trung bình cộng là: ${result}`);