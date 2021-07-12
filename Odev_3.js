

//JS DOM
// 1) Ekrana bir input bir buton koy. Butona tıkladığında inputtan aldığı verinin karesini console a yazdırsın.
//#region 
function kareAl() {
    let sayi = document.getElementById("kare").value;
    console.log(Number(sayi * sayi));
}

//#endregion

// 2) Ekrana bir 3 input bir buton koy. Butona tıkladığında en büyük sayıyı ekrana yazdırsın
//#region 


function bigOne() {

    var value1 = document.getElementById('val1').value;
    var value2 = document.getElementById('val2').value;
    var value3 = document.getElementById('val3').value;

    var values = [];

    values.push(value1, value2, value3);
    console.log(values);

    let tempMax = values[0];

    for (let i = 1; i < values.length; i++) {

        if (values[i] > tempMax) {
            tempMax = values[i];
        }

    }

    console.log(tempMax);

}

//#endregion

// 3) Ekrana bir input bir buton koy. Butona tıkladığında inputtan aldığı değeri büyük harfle console yazdırsın ( toUpper metodu ile)
//#region 
function upper() {

    let uppertext = document.getElementById("text1").value.toUpperCase();

    console.log(uppertext);

}
//#endregion

// 4) Ekrana bir input bir buton koy. Butona tıkladığında inputa girilen sayıya kadar olan sayıların toplamını console a yazdırsın
//#region 

function sum() {

    let number1 = document.getElementById("numb1").value;
    let sum = 0;

    for (let i = 1; i <= number1; i++) {

        sum = sum + i;

    }
    console.log(sum);
}

//#endregion

// 5) Ekrana bir input bir buton koy. Butona tıkladığında inputtaki sayı kadar butonu ekrana append etsin.
//#region 

function append1() {

    let number2 = document.getElementById("numb2").value;

    for (let i = 1; i <= number2; i++) {

        let newbutton = document.createElement("button");
        newbutton.style.margin = "10px";
        newbutton.innerHTML = i + ' new button';
        document.getElementById("bolum1").appendChild(newbutton);

    }

}

//#endregion

// 6) 4 propertisi olan bir webUser objesi tanımla ve bu objeyi console a yazdır
//#region 

let webUser = {

    Name: 'muaz',
    surname: "berkan",
    location: "Rize",
    Ip: "128.xxx.xxx"
}

console.log(webUser);

//#endregion

// 7) 4 propertisi olan bir product objesi tanımla ve bu objeyi console a yazdır.
//#region 

let Product = {

    Name: 'mobile Phone',
    Ram: "128 gb",
    screen: "UHD 4K",
    Price: "13000 ₺"
}

console.log(Product);

//#endregion

// 8) 4 elemanlı metinsel bir dizi tanımla. Her elemanı for ile dönerek console a yazdır
//#region 
let metinseldizi = ["seçkin", "berkan", "ismail", "melih", "şahin"];

for (let i = 0; i < 5; i++) {

    console.log(metinseldizi[i]);

}
//#endregion

// 9) 4 elemanlı sayısal bir dizi tanımla. Her elemanın 1.18 katını for ile dönerek console a yazdır
//#region 
let sayisaldizi = [3, 5, 9, 10, 15];

for (let i = 0; i < 5; i++) {
    var x1 = (sayisaldizi[i] * 1.18).toFixed(2);

    console.log(x1);

}
//#endregion

// 10) 4 elemanlı bir obje dizisi tanımla ve console a yazdır.
//#region 

let cars = [
    {
        name: "ford",
        model: "mustang",
        power: "2000hp",
        price: "250000 ₺"

    },

    {
        name: "mercedes",
        model: "amg",
        power: "10000hp",
        price: "100000 bitcoin"
    },

    {
        name: "porsche",
        model: "xts",
        power: "253000hp",
        price: "$800000"
    },

    {
        name: "lambo",
        model: "ggg",
        power: "353000hp",
        price: "$800000"
    }
];

cars.map((item) => { console.log(item); })

//#endregion

// 11) 5 elemanlı bir dizi tanımla (metinsel veya numeric). Dizinin son elemanını console a tanımla
//#region 
let dizi1 = [3, 5, 6, 8, 101];
console.log(dizi1[4]);
//#endregion

//12) Tanımladığın dizinin ilk elemanını console a yazdır
//#region
console.log(dizi1[0]);
//#endregion

//13) Tanımladığın dizinin 2. elemanını sil
//#region
delete dizi1[2];
console.log("dizinin uzunluğu " + dizi1.length);
dizi1.map((item) => { console.log(item); })
//#endregion

//14) Tanımladığın dizinin 3. elemanınından sonraki elemanları console a yazdır
//#region 
let yenidizi = ["a", "b", "c", "d", "e", "f"];
yenidizi.map((item) => { console.log(item); })
console.log("yeni dizinin uzunluğu " + yenidizi.length);

let yenidizislice = yenidizi.slice(3);
yenidizislice.map((item) => { console.log(item); })
console.log("yeni dizinin slicesinin uzunluğu " + yenidizislice.length);
//#endregion

//15) bir dizi daha tanımla ve iki diziyi birleştirip tek dizi olarak console a yazdır
//#region 
let combinedizi = dizi1.concat(yenidizi);
combinedizi.map((item) => { console.log(item); })
//#endregion

// 16) https://northwind.vercel.app/api/categories den dataları çekip console a yazdır
//#region 

fetch("https://northwind.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => {

        data.map((item) => { console.log(item.name); })

    });



//#endregion

// 17) https://northwind.vercel.app/api/categories adresinde kaç data olduğunu çekip console a yazdır
//#region 
let adet = 0;
fetch("https://northwind.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => {

        data.map((item) => {
            adet++;
        })
        console.log(adet);
    });
//#endregion

// 18) https://northwind.vercel.app/api/customers adresindeki dataları çekip console a yazdır.
//#region 

fetch("https://northwind.vercel.app/api/customers")
    .then((res) => res.json())
    .then((data) => {

        data.map((item) => { console.log(item); })


    })
//#endregion

// 19) https://northwind.vercel.app/api/products ürünlerin unitPrice toplamını console a yazdır.
//#region 

var toplam = 0;

fetch("https://northwind.vercel.app/api/products")
    .then((res) => res.json())
    .then((data) => {

        data.map((item) => {

            toplam = toplam + item.unitPrice;


        })

        console.log(toplam);

    })

//#endregion

// 20) **  https://northwind.vercel.app/api/orders country değeri USA olan siparişleri console a yazdır.
//#region 

fetch('https://northwind.vercel.app/api/orders')
    .then((res) => res.json())
    .then((data) => {
        console.log('" 20-COUNTRY = USA ORDERS FROM NORTHWIND"');
        data.map((item) => {
            if (item.shipAddress.country === "USA") {
                console.log(item);
            }
        })
    })

//#endregion

// 21) ***** https://northwind.vercel.app/api/orders her bir siparişin TOPLAM tutarını console a yazdır.
//#region 

fetch('https://northwind.vercel.app/api/orders')
    .then((res) => res.json())
    .then((data) => {
        console.log('"21-SUM OF ORDERS PRICE FROM NORTHWIND OF ORDERS"');
        data.map((item) => {
            var a = Number(item.details[0].unitPrice);
            var b = Number(item.details[0].quantity);
            var sum3 = a * b;
            console.log('CustomerId: ' + item.customerId + '   Total price of order: ' + sum3.toFixed(2));

        })

    })

//#endregion

// 22) Ekrana 3 input ve bir buton koy. Butona tıkladığında https://northwind.vercel.app/api/suppliers adresine bir data POST etsin. ( fetch POST işlemi )
//#region 

function add() {
    let val1 = document.getElementById('in1').value;
    let val2 = document.getElementById('in2').value;
    let val3 = document.getElementById('in3').value;

    let newSupp = {
        companyName: val1,
        contactName: val2,
        contactTitle: val3
    };

    let requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        //js objesini json a çevirir
        body: JSON.stringify(newSupp)
    }

    fetch('https://northwind.vercel.app/api/suppliers', requestOptions)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
}


//#endregion






