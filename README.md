Penjelasan:
1. Import Express menggunakan framework Express untuk membuat server web dan REST API.
2. Inisialisasi Server dijalankan pada port 3100.
3. Middleware JSON app.use(express.json()) memungkinkan server menerima dan memproses data JSON dari request.
4. Data film disimpan dalam array movies dengan properti id, title, director, dan year.
5. Endpoint Utama yaitu GET / menampilkan pesan sambutan "Welcome to the Movie API".
6. Endpoint Film yaitu:
    - GET /movies mengirim semua data film.
    - GET /movies/:id mengirim detail film berdasarkan id.
    - GET /movies/title/:title mencari film berdasarkan judul.
    - POST /movies menambah film baru.
7. Data Sutradara disimpan dalam array directors dengan properti id dan name.
8. Endpoint Sutradara
    - GET /directors mengirim semua data sutradara.
    - GET /directors/:id mengirim detail sutradara berdasarkan id.
    - POST /directors menambah sutradara baru.
9. PUT /directors/:id mengedit nama sutradara berdasarkan id.
10. Menjalankan server aktif dan menampilkan alamat akses di console.
