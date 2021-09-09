let text = "I am Javascript sam.";
document.write('문자열 길이 :' + text.length);   //length 는 속성, () 가 있는 것은 메소드 입니다. 
document.write('<br>');
document.write('단어 위치찾기:' + text.indexOf('am'));
document.write('<br>');
document.write('단어 위치찾기:' + text.lastIndexOf('am'));
document.write('<br>');
let result = text.substring(7, 11); //11은 포함 안됨.
document.write('문자열 추출 1: ' + result);document.write('<br>');
document.write('문자열 추출 2: ' +text.slice(7,11));
document.write('<br>');

result = text.replace('javascript', 'jsp'); //대소문자구분해서 일치하는 것을 변환.


//아래 내용은 메소드 연습 마치고 하겠습니다. 
let x = "John";     //string 타입
let y = new String("John");    //객체 생성 
let z = new String("John");    //
document.write(typeof x);document.write('<br>');
document.write(typeof y);document.write('<br>');
document.write(typeof z);document.write('<br>');
document.write(x);document.write('<br>');
document.write(y);document.write('<br>');
document.write(z);document.write('<br>');

document.write("x,y 동등 비교 : " + (x==y) +"<br>");  //타입은 다르지만 문자열이 같으므로 true
document.write("x,y 일치 비교 : " + (x===y)+"<br>");   //타입이 다르므로 false
document.write("y,z 동등 비교 : " + (z==y)+ "<br>");   // 각각의 new 연산으로 만들어진 객체는 비교 할 수 없다. false
document.write("y,z 일치 비교 : " + (z===y)+ "<br>");  //                            위와 같음

//문자열 객체를 값으로 비교 : valueOf() 메소드로 문자열 자체로만 비교합니다.
document.write(y.valueOf() ==z.valueOf());document.write('<br>');   //true
document.write(y.valueOf() ===z.valueOf()); document.write('<br>');  //true