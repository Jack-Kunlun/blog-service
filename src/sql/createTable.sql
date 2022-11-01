CREATE TABLE IF NOT EXISTS `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(30) PRIMARY NOT NULL,
  `password` varchar(30) NOT NULL DEFAULT '',
  `phone` varchar(20) NOT NULL DEFAULT '',
  `email` varchar(30) NOT NULL DEFAULT '',
  `isActive` boolean DEFAULT `true`,
  `create_time` timestamp DEFAULT now(),
  `update_time` timestamp DEFAULT now(),
  index `type`(`type`)
) engine = InnoDB charset = utf8;