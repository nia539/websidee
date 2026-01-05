
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Ambil nilai dari input form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi sederhana (Anda bisa mengganti ini dengan logika validasi yang lebih kompleks)
    if (username === 'nada' && password === '123') {
        // Jika validasi berhasil, arahkan ke halaman menu utama
        window.location.href = 'home.html';
    } else {
        alert('Username atau password salah');
    }
});

