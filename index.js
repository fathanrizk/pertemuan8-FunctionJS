function tambah(){
    return "Tambah"
}

function perkalian(){
    return "Ini perkalian"
}

function kurang(){
    return "Ini pengurangan"
}

function pembagian(){
    return "Ini pembagian"
}

//Hitung Umur
function hitungUmur(yearBorn){
    let time = new Date()
    const yearNow = time.getFullYear()
    const age = yearNow - yearBorn
    return `Umur saya saat ini : ${age} Tahun`

}

function hitungGaji(a,b){
    let hasil = a*b
    return hasil
}

function modulo(){
    return "Ini Modulo"
}

function Menyapa(param1){
    // return "Halo $" + param1
    return `Halo ${param1}`
}

function doubleGreeting (param1,param2){
    return `Halo ${param1} \nHai ${param2}`
}

//3 Bulan, 10%, 40%, 70% , harga 250000
function hitungDiskon(param1){
    const harga = 250000
    const diskon = harga - (param1 * harga / 100)
    // const hargaDiskon = harga-diskon
    return `Harga Setelah diskon untuk barang ini adalah RP ${diskon}`
}

const hitungKuadrat = (nilai1, nilai2) => {
    const hasil = Math.pow(nilai1,nilai2)
    return `Hasil dari ${nilai1} pangkat ${nilai2} adalah ${hasil}`
}

//Sapaan
const sapaAldo = Menyapa("Aldo")
const sapaIvan = Menyapa("Ivan")
const sapaDua = doubleGreeting("aldo", "ivan")
console.log(sapaDua)
// console.log(sapaIvan)
// console.log(sapaAldo)

//Menghitung diskon Barang
const jan = hitungDiskon(10)
const feb = hitungDiskon(40)
const mar = hitungDiskon(70)
console.log(jan)

//Menghitung Umur
const umur = hitungUmur(1999)
console.log(umur)

//Fungsi perpangkatan
const perpangkatan = hitungKuadrat(5,3)
console.log(perpangkatan)


