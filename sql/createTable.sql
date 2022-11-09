CREATE TABLE IF NOT EXISTS `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(30) UNIQUE NOT NULL,
  `password` varchar(30) NOT NULL,
  `phone` varchar(20) DEFAULT '',
  `email` varchar(30) DEFAULT '',
  `isActive` boolean DEFAULT `true`,
  `create_time` timestamp DEFAULT now(),
  `update_time` timestamp DEFAULT now(),
) engine = InnoDB charset = utf8;