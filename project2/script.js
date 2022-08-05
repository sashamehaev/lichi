let a = [];

for(let i = 1; i<= 10000; i++) {
    a.push(i);
}

let sum = 0;
a.forEach((i) => {
    sum = sum + i;
    const arr = i.toString().split('').map(Number);

    if(arr.length==3) {
        let res = 0;
        for(let i = 1; i<arr.length; i++) {
            const isAllow = arr[i-1]+1 == arr[i];
            if(isAllow) {
                res++;
            }
        }
        if(res==2) {
            sum = sum - i;
        }
    }

});

alert(sum);

