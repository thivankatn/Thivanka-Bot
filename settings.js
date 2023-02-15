

const fs = require('fs')
const chalk = require('chalk')



//👇 if you need seen massage use " true "
global.READ_MASSAGE = 'false'
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94768211424'] 
//👇 Your Bot Alive Logo ( alive image )
global.alivelogo = `https://telegra.ph/file/30ec9e93fa99d8d79bf53.jpg`
//👇 Your Caption ( Image Video )
global.cap = '© Thivanka Nirmal'
//👇 Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO = process.env.AUTO_BIO || 'off'
//👇 Inbox massage block PM block
global.INBOX_BLOCK = process.env.INBOX_BLOCK || 'on'
//👇 Auto react 
global.AUTO_REACT = process.env.AUTO_REACT || 'false'
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD = process.env.ANTI_BADWORD || 'true'
//👇 Your Bot Name
global.botnma = process.env.BOT_NAME || 'Thivanka' 
//👇 Your name
global.ownernma = process.env.OWNER_NAME || 'Mr Thiva' 
//👇 Sticker package name
global.packname = process.env.STICKER_PACK_NAME || 'Thivanka' 
//👇 Sticker Author Name
global.author = process.env.STICKER_AUTHOR_NAME || 'Mr Thiva' 
//👇 Kick And Auto Delete Group link Senders
global.antilink = process.env.ANTI_LINK || 'true'
//👇 You Welcome Massage 
global.WELCOME_MSG = ''
//👇 You Good Bye Massage 
global.GOODBYE_MSG = ''
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'This Is Personal Account - BLOCK !!!'
//👇 Send welcome and goodbye massage 
global.SEND_WELCOME = 'true'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
global.BAD_KICK_MSG = '*Bad word detect !*'
//👇 URL.button 1 name
global.BUTTON1 = '𝗚𝗶𝘁𝗵𝘂𝗯'
//👇 URL button 2 name
global.BUTTON2 = '𝗪𝗲𝗯𝘀𝗶𝘁𝗲'
//👇 Button 1 url 
global.BUTTON1_URL = 'https://github.com/thivankaonline/'
//👇 Button 2 url
global.BUTTON2_URL = 'https://www.thivanka.lk'
//👇 Your Add Massage 
global.ADD_MSG = '*✅ Success add Group*' 
//👇 Your Kick Massage 
global.KICK_MSG = '*✅ Success Remove from Group*' 
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 212 Number block
global.NUMBER_212_BLOCK = 'true'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = ''
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'false'
//👇 Change Bot Language 
global.LANG = 'SI'







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/30ec9e93fa99d8d79bf53.jpg'
//other
global.pemilik = ['94768211424'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94768211424'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Thivanka' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','/',''] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin !',
    owner: 'This cmd is for Thiva bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Thiva is processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Thiva.jpg')
global.imgalive = fs.readFileSync('./Media/image/Thiva.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
