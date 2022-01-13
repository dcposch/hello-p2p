import Hyperswarm from "hyperswarm";

console.log("🌍 HELLO P2P 🌎");
const swarm = new Hyperswarm();
const key = Buffer.alloc(32).fill("hack lodge");

swarm.on("connection", (socket, details) => {
  console.log("new peer connected", details.publicKey);
  process.stdin.pipe(socket).pipe(process.stdout);
});

swarm.join(key, {
  client: true, // find & connect to peers
  server: true, // announce self as a connection target
});
