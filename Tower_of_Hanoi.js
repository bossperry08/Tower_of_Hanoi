const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

//Ham
function move(moveDisc, fromRod, toRod)
{
    console.log(`Di chuyen dia so ${''+moveDisc} tu cot ${fromRod} sang cot ${toRod}`);
}
function towerOfHanoi(numDisc, fromRod, toRod, midRod){
    //Phan dung
    if(numDisc == 1)
    {
        move(numDisc, fromRod, toRod);
        return;
    }
    //Phan de quy
    else
    {
        towerOfHanoi(numDisc - 1, fromRod, midRod, toRod);  //Di chuyen n - 1 so dia tu cot goc sang cot trung gian
        move(numDisc, fromRod, toRod);  //Di chuyen dia thu n tu cot goc sang cot dich
        towerOfHanoi(numDisc - 1, midRod, toRod, fromRod);  //Di chuyen n - 1 so dia tu cot trung gian sang cot dich
    }
}

//Chuong trinh chinh
function main()
{
    readline.question('', (number)=>{
        let n = number;
        let cotBatDau = 'A';
        let cotTrungGian = 'B';
        let cotDich = 'C';
        console.log(`Giai bai toan Tower of Hanoi voi n = ${n}`);
        towerOfHanoi(n, cotBatDau, cotDich, cotTrungGian);
    })
    return 0;
}
main();