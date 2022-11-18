drop table if exists `user`;

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(30) UNIQUE NOT NULL,
  `password` varchar(30) NOT NULL,
  `password_salt` varchar(30) NOT NULL,
  `phone` varchar(20) UNIQUE  NOT NULL,
  `email` varchar(30) DEFAULT '',
  `status` boolean DEFAULT `true`,
  `role` int DEFAULT 1,
  `create_time` timestamp DEFAULT now(),
  `update_time` timestamp DEFAULT now(),
);

comment on table `user` is '用户表';
comment on column `user.id` is '用户id';
comment on column `user.username` is '用户名';
comment on column `user.password` is '密码';
comment on column `user.password_salt` is '密码盐';
comment on column `user.phone` is '手机号';
comment on column `user.email` is '邮箱';
comment on column `user.status` is '用户状态, true为启用, false为禁用';
comment on column `user.role` is '用户角色权限';
comment on column `user.create_time` is '创建时间';
comment on column `user.update_time` is '更新时间';
