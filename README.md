# HOLA A TODOS 
## KAPILEM
KAPILEM adalah sebuah website katalog series dan film sederhana yang dibuat menggunakan HTML dan CSS.

### Link Website
[KAPILEM](https://andikazulprisa.github.io/Deploy-module-1/)

### Screenshot Website 
![Screenshot](/assets/img/ss1.png)

## Fitur
- **Navigasi**: Navbar dengan tautan ke bagian Series, Film, dan My List. Dilengkapi kolom pencarian yang membantu pengguna mencari konten.
- **Konten Utama**: Tampilan grid untuk menampilkan poster series dan film dengan judul 'Series' dan 'Film' yang responsif.
- **Filter Sidebar**: Filter yang dapat disesuaikan di bagian kanan layar untuk memilih genre, kualitas, dan urutan tampilan.

### Code HTML
Berikut code HTML yang digunakan untuk membuat navbar
```
<header>
    <nav class="navbar">
        <div class="logo">
            <a href="/">KAPILEM</a>
        </div>    
        <ul class="nav-links">
            <li><a href="#series">Series</a></li>
            <li><a href="#film">Film</a></li>
            <li><a href="#mylist">My List</a></li>
        </ul>
        <div class="search-box">
            <input type="text" placeholder="Search">
            <button class="search-button">Go</button>
        </div>
    </nav>
</header>
```
### Code CSS
Berikut code CSS yang digunakan untuk membuat tampilan pada navbar
```
.navbar {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    padding: 10px 20px;
    background-color: rgba(51, 51, 51, 0.8);
    z-index: 1000;
    color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.nav-links {
    display: flex;
    gap: 15px;
}
```
---
___
## SEKIAN DAN TERIMA KASIH
#### ANDIKA ZULPRISA ADHA
##### PARIS-TEAM-2
