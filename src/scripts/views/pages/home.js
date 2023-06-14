const Home = {
  async render() {
    return `
    <div class="content">
                <div class="information">
                    <div class="content-description">
                        <h1 class="title">Discover Your Destination</h1>
                        <p>
                            Temukan tujuan wisata sesuai keinginanmu untuk menikmati liburan yang luar biasa dan tak
                            terlupakan.
                        </p>
                    </div>
                    <div class="content-image">
                        <img src="../image/destination.jpg" alt="Destination">
                    </div>

                    <div class="content-description">
                        <h1 class="title">Choose Your Perfect Accommodation</h1>
                        <p>
                            Pilih penginapan yang nyaman sesuai preferensimu untuk nikmati liburanmu. Tersedia berbagai
                            pilihan penginapan sesuai kebutuhan dan keinginanmu.
                        </p>
                    </div>
                    <div class="content-image">
                        <img src="../image/accommodation.jpg" alt="Destination">
                    </div>
                </div>
            </div>

            <!-- <div class="content">
            <h1>Which island do you want to go to?</h1>
            <img src="../src/public/image/think.jpg">
        </div> -->

            <div class="content-wisata">

                <div class="content">
                    <h1>Which island do you want to go to?</h1>
                    <img src="../image/think.jpg">
                </div>

                <div class="kategori-wisata">
                    <div class="card">
                        <div class="face front">
                            <img src="https://cdn.idntimes.com/content-images/post/20191223/74879303-216660275991570-7657361271454078273-n-2d45d01ed202e7ef3208bdb1ff79feec.jpg"
                                alt="">
                            <h3>Pantai pink</h3>
                        </div>
                        <div class="face back">
                            <h3>Pantai pink</h3>
                            <p>Dinamakan Pink Beach karena memang pasir pantainya berwarna merah muda (pink). Masyarakat
                                lokal lebih suka menyebutnya
                                Pantai Merah, sementara wisatawan asing lebih suka menyebutnya Pink Beach. Warna pink
                                yang lembut tampak kian jelas
                                terutama saat pasir tersapu ombak. Belum diketahui secara pasti dari mana asal muasal
                                warna pasir merah muda yang cantik
                                ini.</p>
                            <div class="link">
                                <a href="#">Details</a>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="face front">
                            <img src="https://cdn.idntimes.com/content-images/post/20191223/69463083-729061354204487-5484493197146213656-n-549469bb6b3455619b776463a2ff9a2a.jpg"
                                alt="">
                            <h3>Danau kelimutu</h3>
                        </div>
                        <div class="face back">
                            <h3>Danau kelimutu</h3>
                            <p>Danau Kelimutu yang dikenal sebagai "Danau Tiga Warna" ini berada di Taman Nasional
                                Kelimutu. Disebut sebagai "Danau
                                Tiga Warna", karena sering berubah-ubah warnanya jadi merah dan cokelat tua. Kamu bisa
                                menikmati keindahan danau ini,
                                setelah mendaki Gunung Kelimutu yang berada di ketinggian 1.631 meter di atas permukaan
                                laut. </p>
                            <div class="link">
                                <a href="#">Details</a>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="face front">
                            <img src="https://cdn.idntimes.com/content-images/post/20191223/75408745-471286273405023-3455884748166906516-n-afd2dbf4996a8d794912aa8c1b9fd671.jpg"
                                alt="">
                            <h3>Pulau padar</h3>
                        </div>
                        <div class="face back">
                            <h3>Pulau padar</h3>
                            <p>ulau Padar menawarkan pemandangan perbukitan yang dikelilingi lautan biru. Untuk
                                menikmati keindahan pemandangan
                                tersebut, kamu harus naik ke puncak bukit Gili Padar. Sayangnya, belum ada tangga atau
                                pegangan, sehingga harus ekstra
                                hati-hati saat mendakinya.</p>
                            <div class="link">
                                <a href="#">Details</a>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="face front">
                            <img src="https://cdn.idntimes.com/content-images/post/20191223/72169034-105001884234948-1907060897786909100-n-627ca663f2c53d4ec4954d603db00612.jpg"
                                alt="">
                            <h3>Pantai lasiana</h3>
                        </div>
                        <div class="face back">
                            <h3>Pantai lasiana</h3>
                            <p>Pantai yang berada di Kota Kupang ini cukup mudah diakses, karena hanya berjarak 12
                                kilometer dari pusat kota. Saat
                                mengunjunginya, kamu akan disambut deretan puluhan pohon kelapa yang menjulang tinggi.
                                Uniknya, ada kapal karam Jepang yang tersimpan di bawah laut, jadi pemandangan paling
                                epik saat diving.</p>
                            <div class="link">
                                <a href="#">Details</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="content">
                    <button><a href="#/Explore">Get Started</a></button>
                </div>
            </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
