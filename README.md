# KAPILEM
KAPILEM is a simple series and movie catalog website created using HTML and CSS.

### Link Website
You can visit the KAPILEM site by clicking the following link.
[KAPILEM](https://kapilem.site/)

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
# MODUL 2
### UPDATE FOR MODULE-2

## FITUR
1.**FONT**: menambahkan font menggunakan @font-face (exo2). Berikut code CSS nya
```
@font-face {
    font-family: "exo2";
    src: url("/assets/Fonts/Exo2-Medium.ttf") format("truetype");
}

body {
    background-image: url(assets/img/background.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: "exo2", Arial, sans-serif;
    color: #ffffff;
}
```
2.**Text-Shadow**: menambah text shadow pada content h1. berikut gambarnya

![text shadow](/assets/img/shadow.png)

3.**Asymetry grid**: mengedit tampilan pada section pertama menjadi asymetry grid
![Asymetry grid](/assets/img/asymetry.png)

4.**Animaion and Transition**: untuk **transition** saya menambahkannya pada gambar, jadi bila di hover gambar akan membesar. berikut code nya
```
.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}
```
sedangkan untuk **animation** saya menambahkannya pada tulisan filter di side bar. dia akan berubah ubah warna nya. berikut code dan gambarnya
```
@keyframes colorChange {
    0% {
        color: #ffffff;
    }
    25% {
        color: #ff6347; /* Tomat */
    }
    50% {
        color: #32cd32; /* Hijau Lime */
    }
    75% {
        color: #1e90ff; /* Biru Dodger */
    }
    100% {
        color: #ffffff;
    }
}

.animasi {
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    animation: colorChange 3s infinite ease-in-out;
}
```
![Animation](/assets/img/animation.png)

5.**Hamburger Button**: saya juga menambahkan hamburger button pada navbar, sehingga ketika layar diperkecil, maka navigasi akan masuk ke dalam hamburger button
![Hamburger](/assets/img/hamburger.png)
saya juga menambahkan javacript pada hamburger button tapi **BELUM BISA BERJALAN DENGAN BAIK**.
Im still working on it :D
---
____

# DEPLOYMENT TO NETLIFY
## Here is how to deploy the website I created to Netlify and Niagahoster.
1. First, we go to the Netlify website and link the GitHub account.
![gambar1](/assets/img/1.png)

2. Then select which repository i want to deploy.
![gambar2](/assets/img/2.png)

3. Now, go to the Niagahoster website and log in with the email associated with my GitHub, then choose the domain i want, and proceed with the payment.
![gambar34](/assets/img/3.png)
![gambar34](/assets/img/4.png)

4. After the payment is completed, wait for a while for the registration process.
![gambar5](/assets/img/5.png)

5. Once the registration is complete, now set up the Netlify DNS for the domain by copying the nameservers provided by Netlify and transferring them to the nameservers in Niagahoster.
![gambar67](/assets/img/6.png)
![gambar67](/assets/img/7.png)

6. Wait for about 1 hour until your website gets the domain. Once it's finished, the website link will be accessible through Netlify.
![gambar8](/assets/img/8.png)

## That’s how I deploy my website using Netlify and purchase a domain from Niagahoster.
##### *Note : "I use my own repository first to deploy it to Netlify, and once it's done, I will clone the original repository.
---
___

## SEKIAN DAN TERIMA KASIH
#### ANDIKA ZULPRISA ADHA
##### PARIS-TEAM-2
