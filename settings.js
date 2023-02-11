/* 
 █▀▄▀█   █▀▀█       █▄░▒█   ▀█▀   █▀▄▀█   █▀▀█
 █▒█▒█   █▄▄▀       █▒█▒█   ░█░   █▒█▒█   █▄▄█
 █░░▒█   █░▒█       █░░▀█   ▄█▄   █░░▒█   █░▒█
 */


const fs = require('fs')
const chalk = require('chalk')

global.sessionName = 'session'
global.LANG = 'SI'
global.prefa = ['#','!','/',''] 
global.owner = '94768211424'
global.premium = '94768211424'
global.botnma = 'ᴍʀ ᴛʜɪᴠᴀ ᴛᴅᴀ ᴘʀɪᴠᴇᴛ ʙᴏᴛ'
global.ownernma = 'ᴍʀ ᴛʜɪᴠᴀ ᴛᴅᴀ'
global.AUTO_BIO = 'off'
global.antilink = 'true'
global.NUMBER_212_BLOCK = 'true'
global.ANTI_BADWORD = 'false'
global.INBOX_BLOCK = 'false'
global.CAPTION = '© ᴍʀ ᴛʜɪᴠᴀ ᴛᴅᴀ ᴘʀɪᴠᴇᴛ ʙᴏᴛ'
global.ALIVE = `*□ 𝙼𝚁 𝚃𝙷𝙸𝚅𝙰 𝚃𝙳𝙰 𝙿𝚁𝙸𝚅𝙴𝚃 𝙱𝙾𝚃 𝙸𝚂 𝙾𝙽𝙻𝙸𝙽𝙴 □*


║🫧▷  *[GET COMMAND LIST]*
       _✓ .menu_

║👾▷ *[SUBSCRIBE MR NIMA]*
    _✓ http://youtube.com/c/ThivankaOnline_

║🧘‍♀️▷ *[NIMA OFC GROUP]*
    _✓ https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc_

║🌐▷ *[OFFICIAL WEB SITE]*
    ✓ _https://www.thivanka.lk_

╚════════❖•❄`

global.APK_DOWNLOAD = 'Downloading...'
global.APK_UPLOAD = 'Uploading...'
global.SONG_DOWN = '*Downloading Your Song...*'
global.SONG_UP = '*Uploading Your Song...*'
global.VIDEO_DOWN = 'Downloading...'
global.VIDEO_UP = 'Uploading...'

global.author = '⚹ ᴍʀ ᴛʜɪᴠᴀ ⚹'
global.packname = '♘ sᴛɪᴄᴋᴇʀ ᴘᴀᴄᴋ ᴛᴅᴀ ♘'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
