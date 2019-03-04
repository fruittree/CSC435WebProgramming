function crazyCaps(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            result += s[i].toLowerCase();
        } else {
            result += s[i].toUpperCase();
        }
    }
    console.log(result);
}
crayCaps("helloworld");


