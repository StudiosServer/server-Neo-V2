/*──────────────────────────────────────────────────────────
 *  🧩 NeoBot - Powered by NeoShiroko Labs
 *──────────────────────────────────────────────────────────
 *  🌐 Website  : https://www.neolabsofficial.my.id
 *  💬 WhatsApp : https://s.id/contact-zass
 *  📺 YouTube  : https://www.youtube.com/@ZassOnee
 *  🧠 GitHub   : github.com/zassonee/neobot
 *
 *  [ ! ] Jangan Hapus Wm Bggg
 *──────────── © 2025 Zass Onee. All rights reserved.───────────────────
 */

const fs = require('fs')
const chalk = require('chalk')

//——————————[ Set Owner ]——————————//
global.ytname = "https://www.youtube.com/@ZassOnee" //gausah ganti 
global.location = "Isekai" // ganti serah mu
global.ownername = "Studio Server" // ganti nama mu
global.ownernumber = '51932019718'  // ganti nomermu
global.email = "admin@studioserver.org" // gmail.com

//——————————[ Set Bot ]——————————//
global.botname = 'WABOT' // ganti serah mu
global.versi = '2.0.0'
global.foot = '© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴀss ᴏғғᴄ' // Footer button
global.idSaluran = "120363417526801494@newsletter" // idch
global.namach = "Neo-S Labs Official || Channel" // namach
global.aiUsageCount = global.aiUsageCount || {}; // jan kacau ha

//——————————[ Set Sticker ]——————————//
global.packname = ':: Made by Neo - Ai V 2.0.0 ::'
global.author = `\nForm YT NeoShiroko Labs`
global.themeemoji = '🪀'
global.wm = "Neo-S Labs Official"
// Ganti terserah klean ini pack sticker

//——————————[ Set Link ]——————————//
global.link = "https://whatsapp.com/channel/0029Vb615brAzNbywHCyRc1w" //linkch
global.namagc = "Marketplace¹ || Zass Official" //nama grup
global.linkgc = "https://chat.whatsapp.com/Bvdic3yrpFh5kTkk5oc5G0" //link gc
global.web = "https://www.neolabsofficial.my.id" // website 
global.prefa = ['!','.','#','💐']

//——————————[ Set Payment ]——————————//
global.dana = "Tidak Tersedia" // Isi no dana mu
global.gopay = "Tidak Tersedia" // Isi no gopay mu
global.ovo = "Tidak Tersedia" // Isi no ovo mu
global.qris = "https://link_qr_mu.desu" // pakai fitur .tourl untuk ubah foto ke link
global.an = {
  dana: "Nama dana",
  gopay: "Nama Gopay",
  ovo: "Nama Ovo"
}
/* ------ let kotak amal = {
Dana : 085298027445, An: Irfan,
Gopay : 085298027445, An: ARDY SHOP
}

#Ahh ini payment gw gpp di hapus cuma naro buat orang yg mau sedekah 😙
— Zass Onee
*/
//——————————[ Manage Vercell ]——————————//
global.vercelToken = "-" //Your Vercel Token

//——————————[ Manage GitHub ]——————————//
global.githubToken = "-" //Your GitHub Token
global.githubUsername = "-" //Your GitHub Username

//——————————[ Media Url ]——————————//
global.imgthumb = "https://files.catbox.moe/08karo.jpeg" //thumb menu
global.imgmenu = "https://files.catbox.moe/wpuhbk.jpeg" //thumb menu2
global.imgdoc = "https://files.catbox.moe/f7u77l.jpeg" // Wajib ukuran 1280 × 450
global.logo = "https://files.catbox.moe/lagzlv.jpg" //logo toko
global.vidthumb = "https://files.catbox.moe/22w9jb.mp4" //gif menu
global.vn = "https://files.catbox.moe/0d9fni.mpeg" //music menu

//——————————[ Api Panel V1 ]——————————//
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://domainmu.com"
global.apikey = "" // Isi api ptla
global.capikey = "" // Isi api ptlc

//——————————[ Api Panel V2 ]——————————//
global.egg2 = "15" // Isi id egg
global.nestid2 = "5" // Isi id nest
global.loc2 = "1" // Isi id location
global.domain2 = "https://domainmu2.com"
global.apikey2 = "-" // Isi api ptla
global.capikey2 = "-" // Isi api ptlc

//——————————[ Api Panel PV ]——————————//
global.egg3 = "15" // Isi id egg
global.nestid3 = "5" // Isi id nest
global.loc3 = "1" // Isi id location
global.domain3 = "https://domainmu-privatepanel.vip"
global.apikey3 = "-" // Isi api ptla
global.capikey3 = "-" // Isi api ptlc

//——————————[ Set Massage ]——————————//
global.mesg = {
  slr: "Fitur ini khusus reseller! Silahkan hubungi owner untuk membeli akses",
  pv: "*[ Warm System ]* Fitur ini khusus di private chat",
  gc: "*[ Warm System ]* Fitur ini khusus grup om—____—",
  own: "*[ Warm System ]* Sok asikk fitur ini khusus manusia tertamvan",
  adm: "*[ Warm System ]* Fitur ini khusus ateminnn",
  botadm: "Jadiin admin dulu",
  load: "bentar....",
  err: "Terjadi kesalahan, coba lagi suatu saat nanti..."
}
  

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})