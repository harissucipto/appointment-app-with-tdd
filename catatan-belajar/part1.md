# Test TDD

Prinsipinya selalu implementasikan sesuatu sesimple mungkin.

unit test harus tidak terikat satu dengan sama lain. cara paling mudah implementasikan ini yaitu kita tidak perlu share state diantara test. setiap test harus menggunakan variable yang digunakan sendiri.

saat kita berada dalam test kondisi merah. kita tidak boleh melakukan refactor, rework, atau meruubah yang lain selagi merah. yang harus kita lakukan adalah melakukan ignore atau pending, pada test yang akan kita kerjakan dengan cara keyword it.skip

```js
it.skip('renders another customer first name');
```

TDD berkaitan dengan DRY (dont repeat your self) saat kita melakukan sisi hijau saat melakukan refaktor.

good test terdiri dari 3 bagian.

3A

Arrange. setup test depedencies
Act. Executes production code under test
Assert. Check expetation are met.

dan juga :

- Short
- Descriptive
- independent dari test lainya
- tidak ada side effetct

## Konsep utama lainya

Red, green, refactor

Langkah - langkah dalam tdd yaitu:

1. Write a failling test

menulis test pendek yang mendeskripsikan fungsionalitas yang kita mau.

eseuksi test yang gagal, jika tidak gagal, maka bukan test yang baik. coba kembali.

2. Make it pass

buat test pass. lakukan sesemple mungkin, feel free to make a mess, you can clean up later.

3. Refactor your code

berhenti, memperlambat, dan menahan untuk pindah ke kasus lainya. bekerja lebih keras untuk membt kode produksi dan test kode sebersih mungin.
