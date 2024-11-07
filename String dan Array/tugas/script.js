class Antrian {
    constructor() {
        this.queue = [];
    }

    // Menambahkan pembeli ke akhir antrian
    enqueue(pembeli) {
        this.queue.push(pembeli);
    }

    // Menghapus pembeli dari awal antrian
    dequeue() {
        return this.queue.shift();
    }

    // Menghapus pembeli terakhir dari antrian
    removeLast() {
        return this.queue.pop();
    }

    // Menambahkan pembeli ke depan antrian (nyerobot)
    enqueueFront(pembeli) {
        this.queue.unshift(pembeli);
    }

    // Menampilkan antrian saat ini
    display() {
        console.log("Antrian saat ini: " + this.queue.join(", "));
    }
}

// Membuat instance antrian
let antrian = new Antrian();

// Langkah 1: Antrian awal
antrian.enqueue("Ray");
antrian.enqueue("Fiki");
antrian.enqueue("Fadhilla");
antrian.enqueue("Farah");

// Langkah 2: Datang pembeli baru, Nabila
antrian.enqueue("Nabila");

// Langkah 3: Datang 2 pembeli baru, Maza dan Elsi
antrian.enqueue("Maza");
antrian.enqueue("Elsi");

// Langkah 4: Antrian terakhir (Elsi) pulang
console.log("Pembeli terakhir (Elsi) pulang.");
antrian.removeLast();

// Langkah 5: Antrian pertama (Ray) sudah mendapatkan belanjaannya
console.log("Ray sudah mendapatkan belanjaannya.");
antrian.dequeue(); // Menghapus Ray dari antrian

// Langkah 6: Antrian kedua (Fiki) juga sudah mendapatkan belanjaannya
console.log("Fiki sudah mendapatkan belanjaannya.");
antrian.dequeue(); // Menghapus Fiki dari antrian

// Langkah 7: Datang pembeli baru yang nyerobot antrian, Tomi
console.log("Tomi nyerobot antrian.");
antrian.enqueueFront("Tomi");

// Menampilkan hasil akhir antrian
antrian.display();
