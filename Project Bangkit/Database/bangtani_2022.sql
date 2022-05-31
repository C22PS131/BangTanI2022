-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2022 at 08:19 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bangtani_2022`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `kd_koperasi` varchar(8) NOT NULL,
  `nm_koperasi` char(35) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(800) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `luas_lahan` int(5) NOT NULL,
  `bd_pertanian` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`kd_koperasi`, `nm_koperasi`, `email`, `password`, `alamat`, `luas_lahan`, `bd_pertanian`) VALUES
('S09879', 'Koperasi Mekar Sukorejo', 'mekarsukorejo@gmail.com', '86043a7d0b85e766b792318198de4ae9', 'Jl.Mekar Baru Sukorejo', 1876, 'Padi');

-- --------------------------------------------------------

--
-- Table structure for table `user_reg`
--

CREATE TABLE `user_reg` (
  `nm_koperasi` char(35) NOT NULL,
  `email` varchar(35) NOT NULL,
  `password` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_reg`
--

INSERT INTO `user_reg` (`nm_koperasi`, `email`, `password`) VALUES
('Koperasi Mekar Sukorejo', 'mekarsukorejo@gmail.com', 'anjing45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`kd_koperasi`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
