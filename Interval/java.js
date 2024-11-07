//console.log ("paragraf 1");
//setTimeout(() =>{
  //  console.log("paragraf 2");
//}, 9000);
//console.log("paragraf 3");
//console.log("paragraf 3");

function divideNumbers(a, b) {
    try {
        // cek kedua input adalah angka
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka.");
        }
        
        // cek pembagi (b) bukan nol
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }

        // Jika semua validasi terpenuhi, lakukan pembagian
        let result = a / b;
        return result;
        
    } catch (error) {
        // Tangkap kesalahan dan tampilkan pesan kesalahan
        console.error(error.message);
        return null; // Mengembalikan null jika terjadi kesalahan
    }
}

// Output
console.log(divideNumbers(10, 2)); // 5
console.log(divideNumbers(10, 0)); // Pembagian dengan nol tidak diperbolehkan.
console.log(divideNumbers(10, 'a')); // Input harus berupa angka.

