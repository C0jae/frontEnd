let text;

function strMethod() {
    text = prompt("문자열을 입력하세요.");

    document.getElementById('len').innerHTML = text.length;
    document.getElementById('last').innerHTML = text.lastIndexOf('am') + "번째";
}

function startNo() {
    let a, b;
    a = prompt('추출할 문자의 첫자리수를 입력하세요.');
    a = a-1;

    b = prompt('추출할 문자의 마지막 자릿수를 입력하세요.');
    b = b;

    if (a >= 0 && b <= text.length) {
        document.getElementById('subs').innerHTML = text.substring(a, b);
    }
    else {
        document.getElementById('subs').innerHTML = "입력한 자릿수가 올바르지 않습니다.";
    }
}

function endNo() {
    let a, b;
    a = prompt('추출 문자의 마지막 자리수를 입력하세요.');
    a = a-1;

    if (a >= 0 && a < text.length) {
        document.getElementById('slice').innerHTML = text.slice(0,a);
    }
    else {
        document.getElementById('slice').innerHTML = "입력한 자릿수가 올바르지 않습니다.";
    }
}