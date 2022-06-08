-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Jun 2022 pada 08.24
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bangtani2022`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_login`
--

CREATE TABLE `user_login` (
  `kd_koperasi` varchar(16) NOT NULL,
  `email` varchar(35) NOT NULL,
  `password` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_login`
--

INSERT INTO `user_login` (`kd_koperasi`, `email`, `password`) VALUES
('Koperasi Mekar S', 'mekarsukorejo@gmail.com', 'anjing45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_reg`
--

CREATE TABLE `user_reg` (
  `kd_koperasi` varchar(16) NOT NULL,
  `nm_koperasi` char(35) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(800) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `luas_lahan` int(5) NOT NULL,
  `bd_pertanian` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_reg`
--

INSERT INTO `user_reg` (`kd_koperasi`, `nm_koperasi`, `email`, `password`, `alamat`, `luas_lahan`, `bd_pertanian`) VALUES
('S09879', 'Koperasi Mekar Sukorejo', 'mekarsukorejo@gmail.com', '86043a7d0b85e766b792318198de4ae9', 'Jl.Mekar Baru Sukorejo', 1876, 'Padi');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `user_reg`
--
ALTER TABLE `user_reg`
  ADD PRIMARY KEY (`kd_koperasi`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
