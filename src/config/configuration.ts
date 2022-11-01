export default () => {
  const env = process.env;

  const host =
    env.NODE_ENV === "development"
      ? process.env.DB_HOST_DEV
      : process.env.DB_HOST_PRO;

  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      type: process.env.DB_TYPE,
      host,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/../entities/*.entity.{js,ts}`],
      // 警告：设置 synchronize: true 不能被用于生产环境，否则您可能会丢失生产环境数据
      synchronize: false,
      logging: ["error"],
      timezone: "+08:00",
      cache: {
        duration: 60000,
      },
      extra: {
        poolMax: 32,
        poolMin: 16,
        queueTimeout: 60000,
        pollPingInterval: 60,
        pollTimeout: 60,
      },
    },
  };
};
