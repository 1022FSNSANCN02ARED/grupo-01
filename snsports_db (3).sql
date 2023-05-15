-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-05-2023 a las 22:45:50
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `snsports_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
(1, 'Adidas'),
(2, 'Nike'),
(3, 'Reebok'),
(4, 'Sonder'),
(5, 'Fila\r\n'),
(6, 'New Balance'),
(7, 'Puma\r\n'),
(8, 'Everlast'),
(9, 'Topper'),
(10, 'Under Armour'),
(11, 'Asics'),
(12, 'Umbro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brand_products`
--

CREATE TABLE `brand_products` (
  `products_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `type`) VALUES
(1, 'Destacado'),
(2, 'Oferta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category_products`
--

CREATE TABLE `category_products` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `color` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `color`) VALUES
(1, 'Rojo'),
(2, 'Negro'),
(3, 'Gris'),
(4, 'Blanco'),
(5, 'Verde'),
(6, 'Rosa'),
(7, 'Naranja'),
(8, 'Azul'),
(9, 'Celeste');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors_products`
--

CREATE TABLE `colors_products` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `color_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colors_products`
--

INSERT INTO `colors_products` (`id`, `product_id`, `color_id`) VALUES
(19, 6, 1),
(20, 6, 2),
(21, 6, 4),
(22, 6, 6),
(267, 13, 7),
(270, 16, 4),
(271, 17, 2),
(272, 17, 3),
(273, 17, 4),
(274, 17, 7),
(275, 18, 2),
(276, 18, 3),
(277, 18, 4),
(278, 18, 5),
(279, 18, 6),
(280, 18, 7),
(285, 20, 2),
(286, 20, 3),
(287, 20, 4),
(288, 20, 6),
(330, 26, 2),
(331, 26, 6),
(332, 26, 7),
(333, 26, 9),
(344, 28, 3),
(345, 28, 5),
(346, 28, 6),
(347, 28, 9),
(357, 29, 2),
(358, 29, 3),
(359, 29, 4),
(360, 29, 6),
(361, 29, 9),
(369, 30, 4),
(381, 31, 2),
(382, 31, 3),
(383, 31, 8),
(391, 32, 2),
(392, 32, 3),
(402, 33, 3),
(403, 33, 7),
(409, 34, 3),
(450, 38, 2),
(451, 38, 3),
(452, 38, 4),
(453, 38, 8),
(463, 39, 2),
(464, 39, 3),
(465, 39, 8),
(471, 40, 2),
(472, 40, 3),
(473, 40, 8),
(481, 41, 1),
(482, 41, 2),
(483, 41, 3),
(484, 41, 6),
(485, 41, 9),
(516, 45, 1),
(517, 45, 2),
(518, 45, 3),
(519, 45, 4),
(520, 45, 5),
(521, 45, 6),
(552, 47, 1),
(553, 47, 2),
(554, 47, 3),
(555, 47, 4),
(556, 47, 5),
(557, 47, 6),
(558, 43, 1),
(559, 43, 2),
(560, 43, 3),
(561, 43, 4),
(562, 43, 5),
(563, 43, 6),
(564, 43, 7),
(565, 43, 8),
(566, 43, 9),
(567, 15, 2),
(568, 14, 2),
(569, 19, 1),
(570, 19, 2),
(571, 19, 3),
(572, 19, 4),
(573, 35, 3),
(574, 35, 8),
(575, 37, 2),
(576, 37, 3),
(577, 37, 8),
(578, 50, 1),
(579, 50, 2),
(580, 50, 3),
(581, 50, 4),
(582, 50, 5),
(583, 50, 6),
(584, 50, 7),
(585, 36, 2),
(586, 36, 3),
(587, 36, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `genre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genre`
--

INSERT INTO `genre` (`id`, `genre`) VALUES
(1, 'Mujer'),
(2, 'Hombre'),
(3, 'Niño'),
(4, 'Niña'),
(5, 'Unisex');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre_products`
--

CREATE TABLE `genre_products` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images_products`
--

CREATE TABLE `images_products` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `name_archive` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `images_products`
--

INSERT INTO `images_products` (`id`, `product_id`, `name_archive`) VALUES
(26, 6, 'image-1681682367091.jpg'),
(27, 6, 'image-1681682367092.jpg'),
(28, 6, 'default-image.png'),
(29, 6, 'default-image.png'),
(30, 6, 'default-image.png'),
(61, 13, 'image-1684122994012.jpeg'),
(62, 13, 'image-1684122994037.jpeg'),
(63, 13, 'default-image.png'),
(64, 13, 'default-image.png'),
(65, 13, 'default-image.png'),
(66, 14, 'image-1684123507822.jpeg'),
(67, 14, 'image-1684123508101.jpeg'),
(68, 14, 'default-image.png'),
(69, 14, 'default-image.png'),
(70, 14, 'default-image.png'),
(71, 15, 'image-1684123926544.jpeg'),
(72, 15, 'default-image.png'),
(73, 15, 'default-image.png'),
(74, 15, 'default-image.png'),
(75, 15, 'default-image.png'),
(76, 16, 'image-1684124053432.jpeg'),
(77, 16, 'default-image.png'),
(78, 16, 'default-image.png'),
(79, 16, 'default-image.png'),
(80, 16, 'default-image.png'),
(81, 17, 'image-1684124282387.jpeg'),
(82, 17, 'image-1684124282438.jpeg'),
(83, 17, 'default-image.png'),
(84, 17, 'default-image.png'),
(85, 17, 'default-image.png'),
(86, 18, 'image-1684124458248.jpg'),
(87, 18, 'image-1684124458285.jpg'),
(88, 18, 'default-image.png'),
(89, 18, 'default-image.png'),
(90, 18, 'default-image.png'),
(91, 19, 'image-1684124546278.jpg'),
(92, 19, 'default-image.png'),
(93, 19, 'default-image.png'),
(94, 19, 'default-image.png'),
(95, 19, 'default-image.png'),
(96, 20, 'image-1684124675359.jpeg'),
(97, 20, 'default-image.png'),
(98, 20, 'default-image.png'),
(99, 20, 'default-image.png'),
(100, 20, 'default-image.png'),
(126, 26, 'image-1684126141721.jpeg'),
(127, 26, 'image-1684126141817.jpeg'),
(128, 26, 'default-image.png'),
(129, 26, 'default-image.png'),
(130, 26, 'default-image.png'),
(136, 28, 'image-1684126590026.jpeg'),
(137, 28, 'image-1684126590041.jpeg'),
(138, 28, 'image-1684126590138.jpeg'),
(139, 28, 'default-image.png'),
(140, 28, 'default-image.png'),
(141, 29, 'image-1684126769408.jpeg'),
(142, 29, 'image-1684126769445.jpeg'),
(143, 29, 'image-1684126769469.jpeg'),
(144, 29, 'default-image.png'),
(145, 29, 'default-image.png'),
(146, 30, 'image-1684126905555.jpg'),
(147, 30, 'image-1684126905581.jpg'),
(148, 30, 'default-image.png'),
(149, 30, 'default-image.png'),
(150, 30, 'default-image.png'),
(151, 31, 'image-1684127003178.jpg'),
(152, 31, 'default-image.png'),
(153, 31, 'default-image.png'),
(154, 31, 'default-image.png'),
(155, 31, 'default-image.png'),
(156, 32, 'image-1684127161320.jpg'),
(157, 32, 'image-1684127161323.jpg'),
(158, 32, 'default-image.png'),
(159, 32, 'default-image.png'),
(160, 32, 'default-image.png'),
(161, 33, 'image-1684127302190.jpg'),
(162, 33, 'image-1684127302193.jpg'),
(163, 33, 'image-1684127302198.jpg'),
(164, 33, 'default-image.png'),
(165, 33, 'default-image.png'),
(166, 34, 'image-1684127419539.jpg'),
(167, 34, 'image-1684127419543.jpg'),
(168, 34, 'default-image.png'),
(169, 34, 'default-image.png'),
(170, 34, 'default-image.png'),
(171, 35, 'image-1684127525012.jpg'),
(172, 35, 'image-1684127525014.jpg'),
(173, 35, 'default-image.png'),
(174, 35, 'default-image.png'),
(175, 35, 'default-image.png'),
(176, 36, 'image-1684127647581.jpeg'),
(177, 36, 'image-1684127647594.jpeg'),
(178, 36, 'default-image.png'),
(179, 36, 'default-image.png'),
(180, 36, 'default-image.png'),
(181, 37, 'image-1684127768784.jpeg'),
(182, 37, 'image-1684127768852.jpeg'),
(183, 37, 'default-image.png'),
(184, 37, 'default-image.png'),
(185, 37, 'default-image.png'),
(186, 38, 'image-1684127978896.jpeg'),
(187, 38, 'image-1684127978919.jpeg'),
(188, 38, 'image-1684127978931.jpeg'),
(189, 38, 'image-1684127978937.jpeg'),
(190, 38, 'default-image.png'),
(191, 39, 'image-1684128133457.jpeg'),
(192, 39, 'image-1684128133492.jpeg'),
(193, 39, 'image-1684128133506.jpeg'),
(194, 39, 'image-1684128133527.jpeg'),
(195, 39, 'default-image.png'),
(196, 40, 'image-1684128263702.jpeg'),
(197, 40, 'image-1684128263738.jpeg'),
(198, 40, 'image-1684128263761.jpeg'),
(199, 40, 'image-1684128263773.jpeg'),
(200, 40, 'default-image.png'),
(201, 41, 'image-1684128391626.jpeg'),
(202, 41, 'image-1684128391640.jpeg'),
(203, 41, 'image-1684128391646.jpeg'),
(204, 41, 'default-image.png'),
(205, 41, 'default-image.png'),
(211, 43, 'image-1684128732922.jpg'),
(212, 43, 'default-image.png'),
(213, 43, 'default-image.png'),
(214, 43, 'default-image.png'),
(215, 43, 'default-image.png'),
(221, 45, 'image-1684128939482.jpg'),
(222, 45, 'default-image.png'),
(223, 45, 'default-image.png'),
(224, 45, 'default-image.png'),
(225, 45, 'default-image.png'),
(231, 47, 'image-1684129094807.jpg'),
(232, 47, 'default-image.png'),
(233, 47, 'default-image.png'),
(234, 47, 'default-image.png'),
(235, 47, 'default-image.png'),
(246, 50, 'image-1684129355064.jpg'),
(247, 50, 'default-image.png'),
(248, 50, 'default-image.png'),
(249, 50, 'default-image.png'),
(250, 50, 'default-image.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `material`
--

CREATE TABLE `material` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `material`
--

INSERT INTO `material` (`id`, `type`) VALUES
(1, 'Poliester'),
(2, 'Malla'),
(3, 'Nylon'),
(4, 'Sintético'),
(5, 'Fibra'),
(6, 'Micro Polar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `material_products`
--

CREATE TABLE `material_products` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `material_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `order_id` varchar(50) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_products`
--

CREATE TABLE `order_products` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `discount` int(11) NOT NULL,
  `material_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `stock`, `brand_id`, `genre_id`, `category_id`, `discount`, `material_id`) VALUES
(6, 'Calza Larga', '', '20000.00', NULL, 5, 1, 1, 18000, 4),
(13, 'Remera Adidas ', 'Own the run', '11000.00', NULL, 1, 1, 1, 10000, 3),
(14, 'Remera Puma', ' Essentials', '6000.00', NULL, 7, 1, 2, 5000, 1),
(15, 'Remera Topper', 'Mc Light', '6500.00', NULL, 9, 1, 2, 5500, 2),
(16, 'Remera Puma ', 'Power Colorblock', '16000.00', NULL, 7, 1, 1, 14999, 1),
(17, 'Buzo Under Armour ', 'Rival Fleece', '210000.00', NULL, 10, 1, 1, 19000, 1),
(18, 'Remera Asics ', 'Crop', '7700.00', NULL, 11, 1, 1, 6500, 1),
(19, 'Remera Fila', ' Crop', '6390.00', NULL, 5, 1, 2, 5750, 1),
(20, 'Remera Puma ', 'Cropped', '7500.00', NULL, 1, 1, 1, 6200, 1),
(26, 'Campera Nike', 'Sportswear Essential', '42899.00', NULL, 2, 1, 1, 42000, 3),
(28, 'Campera Fila', 'Metallic', '25000.00', NULL, 5, 1, 1, 19800, 3),
(29, 'Campera rompeviento Nike', 'Icon Clash', '42000.00', NULL, 2, 1, 1, 40200, 3),
(30, 'Remera Adidas', 'Essentials', '13000.00', NULL, 1, 2, 1, 12100, 1),
(31, 'Remera Adidas', 'Designed for training workout ', '22.00', NULL, 1, 2, 1, 20600, 2),
(32, 'Remera Under Armour', 'Run Graphic Print', '14000.00', NULL, 10, 2, 1, 12499, 3),
(33, 'Remera Under Armour', 'Speed Stride', '12999.00', NULL, 10, 2, 1, 9999, 2),
(34, 'Remera Under Armour', 'Speed Stride ', '12999.00', NULL, 10, 2, 1, 9800, 2),
(35, 'Remera Fila', 'World map', '5800.00', NULL, 5, 2, 2, 4999, 1),
(36, 'Pantalón Lotto', 'Logo Mc', '9500.00', NULL, 1, 2, 1, 8699, 1),
(37, 'Buzo Fila', 'Inbox canguro con capucha', '15000.00', NULL, 5, 2, 2, 13500, 1),
(38, 'Campera Umbro', 'Classic', '25800.00', NULL, 12, 2, 1, 23540, 1),
(39, 'Pantalón Puma', 'Essentials', '22500.00', NULL, 7, 2, 1, 21000, 1),
(40, 'Pantalón Nike ', 'Training', '28000.00', NULL, 2, 2, 1, 25000, 1),
(41, 'Pantalón Asics women', 'Outline', '13500.00', NULL, 11, 1, 1, 12599, 1),
(43, 'Remera kids', 'Forever ', '7500.00', NULL, 4, 4, 1, 4900, 2),
(45, 'Buzo Good vibes', 'Essential', '17500.00', NULL, 1, 3, 1, 16000, 1),
(47, 'Remera básica ', 'Unisex', '6000.00', NULL, 11, 3, 1, 4800, 1),
(50, 'Conjunto Tenis', 'Opens', '19800.00', NULL, 4, 4, 2, 18000, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_sizes`
--

CREATE TABLE `products_sizes` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `size_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products_sizes`
--

INSERT INTO `products_sizes` (`id`, `product_id`, `size_id`) VALUES
(28, 6, 1),
(29, 6, 2),
(30, 6, 3),
(31, 6, 4),
(237, 13, 1),
(238, 13, 2),
(239, 13, 3),
(245, 16, 1),
(246, 16, 2),
(247, 16, 3),
(248, 16, 4),
(249, 17, 1),
(250, 17, 2),
(251, 17, 3),
(252, 17, 4),
(253, 17, 5),
(254, 18, 1),
(255, 18, 2),
(256, 18, 3),
(260, 20, 1),
(261, 20, 2),
(262, 20, 3),
(263, 20, 4),
(285, 26, 1),
(286, 26, 2),
(287, 26, 3),
(288, 26, 4),
(298, 28, 2),
(299, 28, 3),
(300, 28, 4),
(304, 29, 1),
(305, 29, 2),
(306, 29, 3),
(312, 30, 1),
(313, 30, 2),
(314, 30, 3),
(315, 30, 4),
(316, 30, 5),
(326, 31, 2),
(327, 31, 3),
(328, 31, 4),
(329, 31, 5),
(335, 32, 2),
(336, 32, 3),
(337, 32, 4),
(338, 32, 5),
(344, 33, 1),
(345, 33, 2),
(346, 33, 3),
(347, 33, 4),
(348, 33, 5),
(354, 34, 1),
(355, 34, 2),
(356, 34, 3),
(357, 34, 4),
(358, 34, 5),
(387, 38, 1),
(388, 38, 2),
(389, 38, 3),
(390, 38, 4),
(396, 39, 1),
(397, 39, 2),
(398, 39, 3),
(399, 39, 4),
(400, 39, 5),
(405, 40, 1),
(406, 40, 2),
(407, 40, 3),
(408, 40, 4),
(413, 41, 1),
(414, 41, 2),
(415, 41, 3),
(416, 41, 4),
(428, 45, 1),
(429, 45, 2),
(430, 45, 3),
(431, 45, 4),
(444, 47, 1),
(445, 47, 2),
(446, 47, 3),
(447, 43, 1),
(448, 43, 2),
(449, 43, 3),
(450, 15, 1),
(451, 15, 2),
(452, 15, 3),
(453, 14, 1),
(454, 14, 3),
(455, 19, 1),
(456, 19, 2),
(457, 19, 3),
(458, 35, 1),
(459, 35, 2),
(460, 35, 3),
(461, 35, 4),
(462, 37, 1),
(463, 37, 2),
(464, 37, 3),
(465, 37, 4),
(466, 50, 1),
(467, 50, 2),
(468, 36, 1),
(469, 36, 2),
(470, 36, 3),
(471, 36, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `role`
--

INSERT INTO `role` (`id`, `role`) VALUES
(1, 'administrador'),
(2, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `size` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `size`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L'),
(4, 'XL'),
(5, 'XXL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `identification_document` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user` varchar(50) NOT NULL,
  `birthdate` date DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `adress` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `identification_document`, `email`, `user`, `birthdate`, `image`, `password`, `role_id`, `adress`, `created_at`, `updated_at`) VALUES
(4, 'Miguel ', 'Sánchez', '12345678', 'mangelsany6@gmail.com', 'miguel', '1977-11-10', NULL, '$2a$10$mVtX4Go0VwX/7kj9ypJBw.Imfsjp.5Gk/OSN.fivWxK7d1lTlRKSu', 1, '1348', '2023-04-01 19:54:13', '2023-04-01 19:54:13'),
(5, 'Marcelo', 'Gomez', '12345678', 'Marcelo@gmail.com', 'marcelo', '1999-10-10', NULL, '$2a$10$SV5ibMxuEd4qDW/y1suKA.jZ6FSu0TzEQcNE4Lphml7gwToozJ7Uu', 2, 'pellegrini 123', '2023-04-01 21:12:06', '2023-04-01 21:12:06'),
(8, 'Alejandra', 'Perez', '12345678', 'alejandra@gmail.com', 'Alejandra', '1999-10-10', NULL, '$2a$10$ToLg40Uw2euX/SDpugfIZeBtvTFtDPbwu4MwlWw0ZHEFVnsSbVGwO', NULL, 'Nacion', '2023-04-01 21:38:33', '2023-04-01 21:38:33'),
(9, 'Carlos', 'Gomez', '12345678', 'carlos@gmail.com', 'carlos', '1999-10-10', NULL, '$2a$10$f57/KIeP1NhCLdFknYBt1er7WYVnRm355.nyRhrbE9UiU1si4ecZq', NULL, '1348', '2023-04-01 21:40:27', '2023-04-01 21:40:27'),
(11, 'Alejandro', 'Perez', '12345678', 'Alejandro@gmail.com', 'Alejandro', '1999-10-10', NULL, '$2a$10$wIPNWAcumUB5XexlyghBqOqIxYzzfCQSQkwQ1kxnKPgg/X2S7Sg7a', NULL, '1232', '2023-04-01 21:44:15', '2023-04-01 21:44:15'),
(12, 'Carlos', 'Perez', '12345678', 'carlos@gmail.com', 'carlos', '1999-10-10', NULL, '$2a$10$VtZjhmyPjdClqKK77ORJnOm0KSfihSd5xTQ3ohrbRa1SlvSkOq9Z.', 2, 'San Nicolas', '2023-04-01 21:47:44', '2023-04-01 21:47:44'),
(13, 'Belén', 'Alegrette', '111', 'belenalegrette@gmail.com', 'Bel', '2023-05-01', 'image-1684174846667.jpeg', '$2a$10$p6BEiXuZPgSPt1HK9FGn7O4p6yPYfbhUqHP6qfpSz0Ymd.InXa/v.', 1, '11111111', '2023-05-15 18:21:12', '2023-05-15 18:20:47');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `brand_products`
--
ALTER TABLE `brand_products`
  ADD KEY `products_id` (`products_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `category_products`
--
ALTER TABLE `category_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors_products`
--
ALTER TABLE `colors_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `color_id` (`color_id`);

--
-- Indices de la tabla `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genre_products`
--
ALTER TABLE `genre_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indices de la tabla `images_products`
--
ALTER TABLE `images_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `material_products`
--
ALTER TABLE `material_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `material_id` (`material_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `order_products`
--
ALTER TABLE `order_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_id` (`brand_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `products_sizes`
--
ALTER TABLE `products_sizes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `size_id` (`size_id`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `category_products`
--
ALTER TABLE `category_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `colors_products`
--
ALTER TABLE `colors_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=588;

--
-- AUTO_INCREMENT de la tabla `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `genre_products`
--
ALTER TABLE `genre_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `images_products`
--
ALTER TABLE `images_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT de la tabla `material`
--
ALTER TABLE `material`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `material_products`
--
ALTER TABLE `material_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `products_sizes`
--
ALTER TABLE `products_sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=472;

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `brand_products`
--
ALTER TABLE `brand_products`
  ADD CONSTRAINT `brand_products_ibfk_1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `brand_products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`);

--
-- Filtros para la tabla `category_products`
--
ALTER TABLE `category_products`
  ADD CONSTRAINT `category_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `category_products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Filtros para la tabla `colors_products`
--
ALTER TABLE `colors_products`
  ADD CONSTRAINT `colors_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `colors_products_ibfk_2` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`);

--
-- Filtros para la tabla `genre_products`
--
ALTER TABLE `genre_products`
  ADD CONSTRAINT `genre_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `genre_products_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`);

--
-- Filtros para la tabla `images_products`
--
ALTER TABLE `images_products`
  ADD CONSTRAINT `images_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `material_products`
--
ALTER TABLE `material_products`
  ADD CONSTRAINT `material_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `material_products_ibfk_2` FOREIGN KEY (`material_id`) REFERENCES `material` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `order_products`
--
ALTER TABLE `order_products`
  ADD CONSTRAINT `order_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `order_products_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Filtros para la tabla `products_sizes`
--
ALTER TABLE `products_sizes`
  ADD CONSTRAINT `products_sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `products_sizes_ibfk_2` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
