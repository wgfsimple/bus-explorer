export default {
  service: {
    tcp: false,
    udp: false,
    unixds: true,
    host: '127.0.0.1',
    port: 7654,
    socket: '/bitconch/tmp/bitconch-blockstream.sock',
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    // path: '/var/run/redis/redis-server.sock',
  },
};
