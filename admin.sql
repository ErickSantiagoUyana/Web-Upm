-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2021 a las 14:13:21
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `admin`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entity`
--

CREATE TABLE `entity` (
  `id` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `birthdate` datetime DEFAULT NULL,
  `deathdate` datetime DEFAULT NULL,
  `image_url` varchar(2047) COLLATE utf8_unicode_ci DEFAULT NULL,
  `wiki_url` varchar(2047) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `entity`
--

INSERT INTO `entity` (`id`, `name`, `birthdate`, `deathdate`, `image_url`, `wiki_url`) VALUES
(1, 'WHATWG', '2004-01-20 00:00:00', NULL, '../images/WHATWG_logo.png', 'https://en.wikipedia.org/wiki/WHATWG'),
(2, 'AppleInc', '1976-02-20 00:00:00', NULL, 'https://i.blogs.es/5c509d/appleinc/1366_2000.jpg', 'https://en.wikipedia.org/wiki/Apple_Inc.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entity_contributes_product`
--

CREATE TABLE `entity_contributes_product` (
  `product_id` int(11) NOT NULL,
  `entity_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `entity_contributes_product`
--

INSERT INTO `entity_contributes_product` (`product_id`, `entity_id`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `birthdate` datetime DEFAULT NULL,
  `deathdate` datetime DEFAULT NULL,
  `image_url` varchar(2047) COLLATE utf8_unicode_ci DEFAULT NULL,
  `wiki_url` varchar(2047) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `person`
--

INSERT INTO `person` (`id`, `name`, `birthdate`, `deathdate`, `image_url`, `wiki_url`) VALUES
(1, 'Tim Berners-Lee', '1955-01-30 00:00:00', NULL, '../images/tim.jpg', 'https://en.wikipedia.org/wiki/Tim_Berners-Lee'),
(2, 'Vannevar Bush', '1890-01-30 00:00:00', '1974-12-31 00:00:00', '../images/v_bush.jpg', 'https://en.wikipedia.org/wiki/Vannevar_Bush'),
(3, 'Steve Jobs', '1955-03-02 00:00:00', '2011-03-03 00:00:00', 'https://imagessl1.casadellibro.com/a/l/t7/81/9788499921181.jpg', 'https://en.wikipedia.org/wiki/Steve_Jobs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person_contributes_product`
--

CREATE TABLE `person_contributes_product` (
  `product_id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `person_contributes_product`
--

INSERT INTO `person_contributes_product` (`product_id`, `person_id`) VALUES
(1, 1),
(2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person_participates_entity`
--

CREATE TABLE `person_participates_entity` (
  `entity_id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `person_participates_entity`
--

INSERT INTO `person_participates_entity` (`entity_id`, `person_id`) VALUES
(1, 1),
(1, 2),
(2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `birthdate` datetime DEFAULT NULL,
  `deathdate` datetime DEFAULT NULL,
  `image_url` varchar(2047) COLLATE utf8_unicode_ci DEFAULT NULL,
  `wiki_url` varchar(2047) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `birthdate`, `deathdate`, `image_url`, `wiki_url`) VALUES
(1, 'HTML', '1993-01-10 00:00:00', NULL, '../images/HTML_logo.png', 'https://en.wikipedia.org/wiki/HTML'),
(2, 'iPhone', '2007-01-10 00:00:00', NULL, 'https://i.blogs.es/abe23f/650_1000_iphone_2-1/1366_2000.jpg', 'https://en.wikipedia.org/wiki/IPhone');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `role_value` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `role_value`) VALUES
(1, 'adminUser', 'adminUser@example.com', '$2y$10$lNGRPXIMab3brMnwlAIGw.CgLRTZOMs8/l5HGX8weiMnXSsx/9O8u', 1),
(2, 'reader', 'reader@example.com', '$2y$10$5BPmsDyWeNqaf1yTAGw96e6AVCwqxJ8ALUdeung2IN6kSc0ot8Izq', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `entity`
--
ALTER TABLE `entity`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Entity_name_uindex` (`name`);

--
-- Indices de la tabla `entity_contributes_product`
--
ALTER TABLE `entity_contributes_product`
  ADD PRIMARY KEY (`product_id`,`entity_id`),
  ADD KEY `IDX_772C40B24584665A` (`product_id`),
  ADD KEY `IDX_772C40B281257D5D` (`entity_id`);

--
-- Indices de la tabla `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Person_name_uindex` (`name`);

--
-- Indices de la tabla `person_contributes_product`
--
ALTER TABLE `person_contributes_product`
  ADD PRIMARY KEY (`product_id`,`person_id`),
  ADD KEY `IDX_5EBE1F014584665A` (`product_id`),
  ADD KEY `IDX_5EBE1F01217BBB47` (`person_id`);

--
-- Indices de la tabla `person_participates_entity`
--
ALTER TABLE `person_participates_entity`
  ADD PRIMARY KEY (`entity_id`,`person_id`),
  ADD KEY `IDX_9A036581257D5D` (`entity_id`),
  ADD KEY `IDX_9A0365217BBB47` (`person_id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Product_name_uindex` (`name`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_UNIQ_USERNAME` (`username`),
  ADD UNIQUE KEY `IDX_UNIQ_EMAIL` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `entity`
--
ALTER TABLE `entity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `entity_contributes_product`
--
ALTER TABLE `entity_contributes_product`
  ADD CONSTRAINT `FK_772C40B24584665A` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FK_772C40B281257D5D` FOREIGN KEY (`entity_id`) REFERENCES `entity` (`id`);

--
-- Filtros para la tabla `person_contributes_product`
--
ALTER TABLE `person_contributes_product`
  ADD CONSTRAINT `FK_5EBE1F01217BBB47` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`),
  ADD CONSTRAINT `FK_5EBE1F014584665A` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `person_participates_entity`
--
ALTER TABLE `person_participates_entity`
  ADD CONSTRAINT `FK_9A0365217BBB47` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`),
  ADD CONSTRAINT `FK_9A036581257D5D` FOREIGN KEY (`entity_id`) REFERENCES `entity` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
