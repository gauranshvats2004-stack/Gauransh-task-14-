let n,i,j,sum=0,dsum=0,count=0,Armno=0;
function Multiplication(n){
for(i=1;i<=10;i++){
    console.log(n,"x",i,"=",n*i);
}
}
function SumofFirstnnumber(n){
    for(j=0;j<=n;j++){
        sum = j+sum;
    }
console.log(sum);
}


function SumofDigits(n){
    while (n!=0){
        dsum=dsum+n%10;
        n=Math.floor(n/10);
    }
    console.log(dsum)
}

function AmrstrongNo(n){
    let Armno=0;
    let m=n;
    while(n!=0){
        a=n%10;
        Armno=Armno+a*a*a;
        n=Math.floor(n/10);
    }
    if(m==dsum){
        console.log(dsum," is armstrong no.")
    }
    else{
        console.log(m," is not a armstrong no.")
    }
    
}






function PrimeNo(n){
    for(i=1;i<=n;i++){
        if(n%i==0){
            count++;
        }
    }
    if(count>2){
        console.log(n," is not a prime no")
    }
    else{
        console.log(n," is a prime no")
    }
}


console.log("Table for n")
Multiplication(5);
console.log("Prime No detection")
PrimeNo(8)
console.log("Armstrong No detection")
AmrstrongNo(153);
console.log("Sum of First n Number of Digits")
SumofFirstnnumber(5);
console.log("Sum of Digits")
SumofDigits(123);