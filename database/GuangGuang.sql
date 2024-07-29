-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2024 at 05:09 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Database: `GuangGuang`
CREATE DATABASE IF NOT EXISTS `GuangGuang` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `GuangGuang`;

-- Table structure for table `products`
CREATE TABLE `products` (
  `productId` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `productName` varchar(200) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double(10,2) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table `products`
INSERT INTO `products` (`productId`, `productName`, `quantity`, `price`, `image`) VALUES
(1, 'Apples', 100, 1.50, 'https://media.istockphoto.com/id/614871876/photo/apple-isolated-on-wood-background.jpg?s=2048x2048&w=is&k=20&c=s1xjWXB7dFm4tv0acDHZ5btuyQdi5i6OlDuzeMhlr7s='),
(2, 'Bananas', 75, 0.80, 'https://media.istockphoto.com/id/1184345169/photo/banana.jpg?s=2048x2048&w=is&k=20&c=9KxwjJ9Q1RPCMoz3KcOd70fdkOgfKhtc-bfP1boW0vI='),
(3, 'Milk', 50, 3.50, 'https://media.istockphoto.com/id/854296630/photo/glass-of-milk-and-bottle-of-milk-on-the-wood-table.jpg?s=2048x2048&w=is&k=20&c=X_an1XruIM9P4Rmqif_60rAcnSMcqlX-zv4wSj36tTs='),
(4, 'Bread', 80, 1.80, 'https://media.istockphoto.com/id/1432301803/photo/sliced-bread-pain-de-mie-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=egZlTxH6figMPErpQr0nudgzJTOTvfn9Nstri7lkfMM=');

-- Table structure for table `clothes`
CREATE TABLE `clothes` (
  `clothesId` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `clothesName` varchar(200) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double(10,2) NOT NULL,
  `image` varchar(500) NOT NULL,
  `size` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `material` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table `clothes`
INSERT INTO `clothes` (`clothesId`, `clothesName`, `quantity`, `price`, `image`, `size`, `color`, `material`) VALUES
(1, 'T-Shirt', 200, 15.00, 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'M', 'Blue', 'Cotton'),
(2, 'Jeans', 150, 40.00, 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '32', 'Black', 'Denim'),
(3, 'Jacket', 100, 75.00, 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'L', 'Red', 'Leather'),
(4, 'Dress', 80, 50.00, 'https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'S', 'Green', 'Silk');

-- Table structure for table `furniture`
CREATE TABLE `furniture` (
  `furnitureId` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `furnitureName` varchar(200) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double(10,2) NOT NULL,
  `image` varchar(500) NOT NULL,
  `material` varchar(100) NOT NULL,
  `style` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table `furniture`
INSERT INTO `furniture` (`furnitureId`, `furnitureName`, `quantity`, `price`, `image`, `material`, `style`) VALUES
(1, 'Coffee Table', 50, 150.00, 'https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Wood', 'Modern'),
(2, 'Sofa', 30, 800.00, 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Leather', 'Contemporary'),
(3, 'Bed', 20, 1200.00, 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Wood', 'Traditional'),
(4, 'Desk', 40, 300.00, 'https://plus.unsplash.com/premium_photo-1665329006421-4e945f91885f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Wood', 'Minimalist');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

COMMIT;
