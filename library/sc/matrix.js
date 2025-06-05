const matrix = () => {
  const chars = "01325";
  const columns = process.stdout.columns || 80;
  const drops = Array(columns).fill(1);

  const colorGreen = (text) => `\x1b[32m${text}\x1b[0m`;
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const draw = () => {
    let output = '';
    for (let i = 0; i < columns; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      output += Math.random() > 0.975 ? colorGreen(char) : ' ';
    }
    console.log(output);
  };

  return new Promise(resolve => {
    const interval = setInterval(draw, 50);
    setTimeout(() => {
      clearInterval(interval);
      console.clear();

      console.log('\x1b[36m');
      console.log('███╗   ██╗███████╗ ██████╗     ████████╗███╗   ██╗███████╗');
      console.log('████╗  ██║██╔════╝██╔═══██╗    ╚══██╔══╝████╗  ██║██╔════╝');
      console.log('██╔██╗ ██║█████╗  ██║   ██║       ██║   ██╔██╗ ██║█████╗  ');
      console.log('██║╚██╗██║██╔══╝  ██║   ██║       ██║   ██║╚██╗██║██╔══╝  ');
      console.log('██║ ╚████║███████╗╚██████╔╝       ██║   ██║ ╚████║███████╗');
      console.log('╚═╝  ╚═══╝╚══════╝ ╚═════╝        ╚═╝   ╚═╝  ╚═══╝╚══════╝');
      console.log('                        Credits By Zass Onee');
      console.log('\x1b[0m');

      // TQTO
      console.log('\n\x1b[1m\x1b[35m==== THANKS TO ====\x1b[0m');
      console.log('\x1b[32m✔\x1b[0m Allah SWT');
      console.log('\x1b[32m✔\x1b[0m Zass Onee');
      console.log('\x1b[32m✔\x1b[0m Atzuhiro');
      console.log('\x1b[32m✔\x1b[0m Sunaookami Shiroko');
      console.log('\x1b[32m✔\x1b[0m Developer OpenAI & Baileys');
      console.log('\x1b[32m✔\x1b[0m Subscriber & Pengguna Setia');
      console.log('\x1b[32m✔\x1b[0m Yang Udah Support Proyek Ini');

      // Kontak Developer
      console.log('\n\x1b[1m\x1b[36m==== KONTAK DEVELOPER ====\x1b[0m');
      console.log('\x1b[33m• YouTube:\x1b[0m NeoShiroko Labs');
      console.log('\x1b[33m• WhatsApp:\x1b[0m wa.me/6285298027445');
      console.log('\x1b[33m• Channel:\x1b[0m https://whatsapp.com/channel/0029VaplrGI0gcfJ7mQknX0E');
      console.log('\x1b[33m• Website:\x1b[0m https://www.neolabsofficial.my.id');

      console.log('\n\x1b[36m[ NeoShiroko Labs ]\x1b[0m Bot Starting...\n');
      resolve(); // Resolve promise setelah animasi selesai
    }, 3000); // Efek jalan selama 3 detik
  });
};
module.exports = matrix;