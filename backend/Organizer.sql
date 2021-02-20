-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `cards`;
CREATE TABLE `cards` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(550) NOT NULL,
  `category_id` int(11) unsigned NOT NULL,
  `img_number` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cards` (`id`, `name`, `description`, `category_id`, `img_number`, `created_at`, `updated_at`) VALUES
(1,	'Bienvenue sur cette todolist',	'Vous pouvez noter une nouvelle carte :)',	1,	25,	'2021-02-20 12:57:14',	'2021-02-20 12:57:14');

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1,	'Projet professionnel',	'2021-02-06 15:48:08',	NULL),
(2,	'Projet personnel',	'2021-02-06 15:48:30',	NULL),
(3,	'Quotidien',	'2021-02-06 15:48:43',	NULL),
(4,	'Sport',	'2021-02-06 15:48:56',	NULL),
(5,	'Musique',	'2021-02-06 15:49:08',	NULL),
(6,	'Archive',	'2021-02-06 15:49:24',	NULL);

-- 2021-02-20 11:57:47
