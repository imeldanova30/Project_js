

//case 4 menghitung umur anak
 const  a = 4;
 const b = a +1;
 const total = 80;

const umurAnak = total / b;
console.log(umurAnak);

// case 5 Buatlah algoritma untuk menghitung jumlah karakter tertentu dalam string

const sentence = "algoritma untuk menghitung jumlah karakter";
const NumberOfCharacter = sentence.length;

console.log(NumberOfCharacter);


//case 3 Tampilkan hari, tanggal, bulan, tahun besok, lusa, kemarin;

let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
let hari = ["Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu" ];

var date = new Date();
var tahun = date.getFullYear();
var bulanI = date.getMonth();
var tanggal = date.getDate();
var tanggalBesok = tanggal + 1;
var tanggalKemarin = tanggal - 1;
var hariH = date.getDay();

for(i=0; i<=hari.length; i++){

    if (hariH === i){
        hariini = hari[i];
    }
    if (hariH === i){
        besok = hari[i+1]
    }

    if (hariH === i){
        kemarin = hari[i-1];
        
    }
 
}

for(i=0; i<=bulan.length; i++){
    if (bulanI === i){
        bulanI = bulan[i];
    }
 
}


 var today = "Hari Ini: " + hariini + ", " + tanggal + " " + bulanI + " " + tahun;
 var tomorrow = "Besok: " + besok + ", " + tanggalBesok + " " + bulanI + " " + tahun;
 var kemarin = "Kemarin: " + kemarin + ", " + tanggalKemarin + " " + bulanI + " " + tahun;

 console.log(today);
 console.log(tomorrow);
 console.log(kemarin);


