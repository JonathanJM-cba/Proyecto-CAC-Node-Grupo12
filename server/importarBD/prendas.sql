-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 13-07-2024 a las 06:09:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prendas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--
-- Creación: 02-07-2024 a las 03:23:24
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`) VALUES
(1, 'remera'),
(2, 'buzo'),
(3, 'pantalon'),
(4, 'shorts');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prenda`
--
-- Creación: 02-07-2024 a las 03:23:24
--

CREATE TABLE `prenda` (
  `id` int(11) NOT NULL,
  `precio` int(50) NOT NULL,
  `stock` int(11) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `tienda` varchar(50) DEFAULT NULL,
  `ubicacion` varchar(100) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `prenda`
--

INSERT INTO `prenda` (`id`, `precio`, `stock`, `descripcion`, `tienda`, `ubicacion`, `id_categoria`, `createdAt`, `updatedAt`) VALUES
(1, 50500, 10, 'Remera de algodón azul con cuello redondo', 'ModaArgentina', 'Av. de Mayo 123 ', 1, '2024-07-04 18:49:12', '2024-07-04 18:49:12'),
(2, 53500, 7, 'Buzo azul con capucha y bolsillo', 'BuzosTop', 'Av. Belgrano 456', 2, '2024-07-04 18:49:12', '2024-07-04 18:49:12'),
(3, 60000, 10, 'Pantalón de tela azul con bolsillos laterales', 'PantalonesAZ', 'Plaza Urquiza 1230', 3, '2024-07-04 18:55:28', '2024-07-06 21:17:27'),
(4, 52000, 10, 'Shorts deportivos azul marino', 'CórdobaChic', 'Calle Lavalle 890', 4, '2024-07-04 18:55:28', '2024-07-06 19:14:53'),
(6, 78900, 20, 'Remera básica de algodon blanco', 'FashionCity', 'Calle Florida 456', 1, '2024-07-06 21:13:05', '2024-07-06 21:13:05'),
(9, 52200, 3, 'Pantalón ', 'TangoStyle', 'Av. Rivadia 456', 1, '2024-07-13 01:47:54', '2024-07-13 01:47:54');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prenda`
--
ALTER TABLE `prenda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `prenda`
--
ALTER TABLE `prenda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prenda`
--
ALTER TABLE `prenda`
  ADD CONSTRAINT `prenda_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
