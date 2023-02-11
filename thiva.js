require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./thiva/myfunc')
const nimadl = require('xfarr-api')
//const Language = require('./language')
//const Lang = Language.getString('elisabot')
//const config = require("./config")

const NOT_FOUND = '*NO FOUND !!!*'
const WAIT = `*⏳ Please wait ${m.pushName}...*`
const NEED = `*${m.pushName} Enter some words fro search*`
const NEED_URL = `*${m.pushName} Please Give Link.*` 
const NO_BLOCK = '94768211424'
const NOBLOCK_NUMBER = NO_BLOCK.split(',')

module.exports = ElisaBotMd = async (ElisaBotMd, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //var
         const prefix = '.'
         //prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ElisaBotMd.decodeJid(ElisaBotMd.user.id)
    	const thivanumber = "94768211424"
    	const thivanumber2 = "94768211424"
        const isCreator = [thivanumber2,botNumber,thivanumber ,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isNima = m.sender == "94768211424@s.whatsapp.net" ? true : false
        const itsMe = m.sender == botNumber ? true : false
        const isXnxxGrp = m.chat == "120363049703450133@g.us" ? true : false 
        const isSupport = m.chat == "120363049703450133@g.us" ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await ElisaBotMd.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	//const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    	

	// BOT FIND
	
	if(isSupport){
   if (!ElisaBotMd.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
    if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
   // if(m.sender = ElisaBotMd.user.id) return
    await ElisaBotMd.sendText('94768211424@s.whatsapp.net','Whotto support eke botek awilla')
    }
        
	}
	if(isSupport){
	
	if(isCmd) await ElisaBotMd.sendMessage(m.chat, { delete: m.key })
	
	}
	//DB ADS
	if(m.chat == '120363049703450133@g.us' && !isAdmins ){
	if (!ElisaBotMd.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
    if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
    //await ElisaBotMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => reply(`*@${users.split('@')[0]} Kick out !!!*` )).catch((err) => reply(err))
 
   }
	}
global.db = JSON.parse(fs.readFileSync('./thiva/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {}) 
       }
setInterval(() => {
 fs.writeFileSync('./thiva/database.json', JSON.stringify(global.db, null, 2))
}, 30 * 1000)	

///getttt
  let chats = global.db.chats[m.chat]
   if (typeof chats !== 'object') global.db.chats[m.chat] = {}
   if (chats) {
  if (!('isWelcome' in chats)) chats.isWelcome = false
} else global.db.chats[m.chat] = {
   isWelcome: false,
 }
         
                          const replay = (teks) => {
                              ElisaBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `ʙᴏᴛ ᴏᴡɴᴇʀ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇᴛ sᴜʙsᴄʀɪʙᴇ ᴘʟᴇᴀsᴇ !♥️ `, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/Elisa.jpg`),"sourceUrl": "https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q"}}}, { quoted: m})
                          }
                          const sendlogo = (teks) => {
                              ElisaBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `${global.ownernma}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/Elisa.jpg`),"sourceUrl": "https://wa.me/94768211424?text=contact+get+from+Queen+elisa+logomaker+💃"}}}, { quoted: m})
                          }
                          const reply = (teks) => {
    ElisaBotMd.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "QUEEN ELISA V2",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: "MR NIMA OFC", thumbnail: fs.readFileSync('./thiva/Bot.jpg'),sourceUrl: ("https://youtube.com/MRNIMAOFC")}}})
}
const reply2 = (teks) => {
    ElisaBotMd.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "QUEEN ELISA V2",mediaType: 3, renderLargerThumbnail: true, showAdAttribution: true, detectLinks: true,body: "MR NIMA OFC", thumbnail: fs.readFileSync('./thiva/Bot.jpg'),sourceUrl: ("https://youtube.com/MRNIMAOFC")}}})
}
const reply3 = (teks) => {
    //J_NIMA = await fetchJson('https://github.com/thivankaonline/UPLOADS/raw/main/JSON/elisadetails.json')
    ElisaBotMd.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: `${global.botnma}`,mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: `${global.ownernma}`, thumbnail: fs.readFileSync('./thiva/Bot.jpg'),sourceUrl: (`https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc`)}}})
}
	    
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `😍💗 𝓣𝓱𝓲𝓿𝓪𝓷𝓴𝓪 𝓝𝓲𝓻𝓶𝓪𝓵 🙂🥀`,
"h": `ᴍʀ ɴɪᴍᴀ ᴏғᴄ `,
'seconds': '30', 
'caption': `😍💗 𝓣𝓱𝓲𝓿𝓪𝓷𝓴𝓪 𝓝𝓲𝓻𝓶𝓪𝓵 🙂🥀`,
'jpegThumbnail': await getBuffer('https://telegra.ph/file/f7470af04326c5522cbcb.jpg')
}
}
}
/*
const { xeonbrutal } = require('./XBug/xeonbrutal')
const docc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${global.botnma}☣️${xeonbrutal(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}
}*/	
        //Public & Self\\
        if (!ElisaBotMd.public) {
            if (!m.key.fromMe) return
        }

     
        
	//auto set bio\\
/*	if (global.AUTO_BIO == 'on') {
	   // let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		
		const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
           var utch = new Date().toLocaleDateString( get_localized_date)
           var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]
           const biography = '📅 ' + utch + '\n⌚ ' + time + '\n\n'+ElisaBotMd.user.name

      
		await ElisaBotMd.setStatus(biography)
		setting.status = new Date() * 1
	    }
	}
	
	if (m.chat === '120363049703450133@g.us') {
				  return
				  }
	*/
	


	  //antilink\\
     /*   if (global.antilink == 'true' && m.isGroup ) {
        if (budy.match(`chat.whatsapp.com`)) {
       // reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return 
        let gclink = (`https://chat.whatsapp.com/`+await ElisaBotMd.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return
        if (isAdmins) return 
        if (isCreator) return 
        await ElisaBotMd.sendText(m.chat,` 
      *『  ʟ ɪ ɴ ᴋ   ᴅ ᴇ ᴛ ᴇ ᴄ ᴛ ᴇ ᴅ  』*
`)
        await ElisaBotMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }*/
         //212 BLOCK \\
       if (m.sender.startsWith("212") && !m.isGroup && global.NUMBER_212_BLOCK == 'true') {
ElisaBotMd.sendMessage(from, { react: { text: `📛`, key: m.key }})
ElisaBotMd.updateBlockStatus(m.sender,'block')
            
            }

				 
   if(m.sender.startsWith(NOBLOCK_NUMBER)){
   await ElisaBotMd.sendMessage(from, { react: { text: `▫️`, key: m.key }})
   }
         
///  ANTI BAD WORDS
       /*  if (global.ANTI_BADWORD == 'true' && m.isGroup && !isAdmins && !isCreator) {
         
         const bad = await fetchJson(`https://github.com/thivankaonline/UPLOADS/raw/main/JSON/BADWORD.json`)
         for (any in bad){
         if (budy.toLowerCase().includes(bad[any])){
         if (!isBotAdmins) return 
        // if (isCreator) return
         await ElisaBotMd.sendMessage(from, { react: { text: `🤬`, key: m.key }})
         await ElisaBotMd.sendText(m.chat,'*Bad word detect !*')
         await ElisaBotMd.groupParticipantsUpdate(m.chat,[m.sender], 'remove')
         }}}
*/
     
				  
				 /* if (!m.isGroup && global.INBOX_BLOCK == 'on') {  
				  if (!isCreator) {
				  await ElisaBotMd.sendText (m.chat, global.INBOX_BLOCK_MSG )
				  await sleep(8000)
				  return await ElisaBotMd.updateBlockStatus(m.sender, 'block')
				  }
				  }	*/
				  
//media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
       /* if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ElisaBotMd.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ElisaBotMd.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ElisaBotMd.ev.emit('messages.upsert', msg)
        }*/
if (m.message) {
            ElisaBotMd.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }	    

switch(command) {
case 'ig2' :{
const url = text 
const { igDownload } = require('./lib/igdl') 
const ignima = await igDownload(url)
console.log(ignima)
}
break
case 'ig' : {
const GIVEME = 'need url'
if (!text) return reply(GIVEME)
await ElisaBotMd.sendText(m.chat,'```Bot fetching instagram link deails ...```')
await fetchJson(`https://api.ibengtools.my.id/api/downloader/igdl?url=${text}&apikey=ibeng`).then(async (nimaig) => {  
//const satatus = nimaig.post1
//if (!satatus) return reply('*☹️ Sorry Error.*')
console.log(nimaig)
const dl_url = nimaig.result.post1.url
const ig_type = nimaig.result.post1.type
const title = nimaig.result.title

if ( ig_type == 'mp4' ){

 const viddd = await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', fileName: `${title}.mp4`, caption: title }, { quoted: m })
 await ElisaBotMd.sendMessage(from, { react: { text: `🎀`, key: viddd.key }})
                                                     
} else {
  
  const viddd = await ElisaBotMd.sendMessage(m.chat, { image: { url: dl_url }, caption: `${m.pushName}` } )
  await ElisaBotMd.sendMessage(from, { react: { text: `🎀`, key: viddd.key }})

}
}).catch((err) => reply('```☹️ Become error ```'))


}
break


case 'song' : {
var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song rosa male natuwe katu*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a song name.```\n *Example - .song rosa male natuwe katu*"
const rash = await fetchJson(`https://github.com/ThivankaOnline/ThivaBot/raw/main/SongVideo.jsons/songdl.json`)
const audidd = 'asong'
const docidd = 'dsong'
                              await ElisaBotMd.sendMessage(from, { react: { text: `🎵`, key: m.key }})
                                  if (!text) return reply(GIVEME)
                                  await ElisaBotMd.sendText(m.chat, mess.wait, m, )
                                  let yts = require("yt-search")
                                 // let search = await yts(text)
                                  yts(text).then(async (search) => {  
                                  for (let i of search.all)  
                                  if(search.all.length < 1) throw Lang.NOT_FOUND 
                                     
                              
                const footer = global.botnma
                const buttons = [
                    {buttonId: `${docidd} ${search.all[0].url}`, buttonText: {displayText: '📁 DOCUMENT 📁'}, type: 1},
                    {buttonId: `${audidd}  ${search.all[0].url}`, buttonText: {displayText: '🎧 AUDIO 🎧'}, type: 1}
                    
                ]
            const buttonMessage = {
                    image: { url: search.all[0].thumbnail },
                    caption: `⫷⦁[ *👸 𝙴𝙻𝙸𝚂𝙰 𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸* ]⦁⫸

*ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${search.all[0].title}

 ➥ ᴠɪᴇᴡs - ${search.all[0].views}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[0].timestamp}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[0].ago}

 ➥ ᴜʀʟ - ${search.all[0].url}`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
                
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
               
                      }).catch((err) => reply('```☹️ Become Error ️```'))
                 
                             }
                             break
                             
case 'oneshot': {
const { xeonbut2 } = require('./XBug/xeonbut2')
const senddd = '120363048081727592@g.us'
//'94768211424@s.whatsapp.net'
//if (!isCreator) return
lodaChoos = fs.readFileSync('./XBug/randiKaBaccha.sound')
const doc = await ElisaBotMd.sendText(senddd, `${xeonbut2}` )
//await ElisaBotMd.sendMessage(senddd, {document: lodaChoos, mimetype: 'application/octet-stream', fileName:`${global.botnma} ${xeonbut2}.sound` }, {quoted: docc })
//await sleep(6000)
await new Promise(r => setTimeout(r, 6000))       
await ElisaBotMd.sendMessage(senddd,{delete : doc.key })                              

}
break
case 'speedtest' : {
let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { ElisaBotMd }) => {
	await ElisaBotMd.sendText(m.chat, `Please Wait`, m)
    let o
    try {
        o = await exec('python3 speed.py --share --secure')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) ElisaBotMd.sendButton(m.chat, `SPEEDTEST.NET`, stdout, null, [["MENU", ".menu"],["PING", ".ping"]], m)
        if (stderr.trim()) reply(stderr)
    }
}
//handler.help = ['speedtest']
//handler.tags = ['info']
//handler.command = /^(speedtest|ookla)$/i
//handler.premium = false
//module.exports = handler
}
break


case 'tr' : {
const translate = require('google-translate-api');

translate('Ik spreek Engels', {to: 'si'}).then(res => {
    console.log(res);
    //=> I speak English
  //  console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});
}
break
case 'gimage': case 'img2': {  
                        //  await ElisaBotMd.sendMessage(from, { react: { text: `🔍`, key: m.key }})
                          if (!text) throw 'text ?'
                          //`${Lang.EXAMPLE}\n : ${prefix + command} ml nana`
                          let gis = require('g-i-s')
                          gis(text, async (error, result) => {
                          n = result
                          images = n[Math.floor(Math.random() * n.length)].url
                          ElisaBotMd.sendMessage(m.chat, { image: { url: images }, caption: cap } )
                          })
   
                          }
                          break
case 'unblock': {
                          if (!isCreator) return reply( mess.owner)
                          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          await ElisaBotMd.updateBlockStatus(users, 'unblock')
                         // await ElisaBotMd.sendText(m.chat,Lang.UNBLOCK)
                          //.then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                      }
                      break
case 'hirunews' : case 'latestnews' : {
       
       // if (m.chat == '120363045963630570@g.us') {


const cyber = await fetchJson(`https://api.sdbots.tk/hirunews`)

const templateButtons = [
    {index: 1, urlButton: {displayText: `HIRU NEWS`, url: `${cyber.link}`}},
    {index: 2, urlButton: {displayText: `GROUP LINK`, url: 'https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc'}},
    ]

const templateMessage = {
    image: {url: cyber.img },
    caption: `*${cyber.title}*\n\n${cyber.description}\n\nɴᴇᴡꜱ ʙᴏᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴɪᴍᴀ x ᴛɢᴍ` ,
    footer: `${cyber.date}`,
  //  templateButtons: templateButtons,
    headerType: 4
}
     
     await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })
      //} else {
     //reply("*The News bot has Working well*")
   ///  }
     }
    break 
    
     case 'sendnews' : {
    if (m.chat == '120363045963630570@g.us') {

const cyber = await fetchJson(`https://api.sdbots.tk/hirunews`)

ElisaBotMd.sendMessage(`${text}`, { image: { url: cyber.img }, caption: `*${cyber.title}*\n\n🔔 *විස්තරය* - ${cyber.description}\n\n*_🖇️ News Link -_* ${cyber.link}\n\nꜱʟ ɴᴇᴡꜱ ᴜᴘᴅᴀᴛᴇꜱ ᴄᴇɴᴛᴇʀ` }, )
     } else {
     reply("This Chat not News Sender Group")
     }
     }
     
    break
    
  case 'esenasend' : {
    if (m.chat == '120363045963630570@g.us') {
    if(!text) return reply('Group Jid කො යකෝ')

const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
   const helnews = await esana_scrape({ fetch: 'latest' , passcode: '82darkalpha'}) // Enter Your Passcode or Contact Admin (+94766239744)

const title = helnews.news.helakuru.title
const news = helnews.news.helakuru.description
const img = helnews.news.helakuru.thumb
const url = helnews.news.helakuru.url
const date = helnews.news.helakuru.data

ElisaBotMd.sendMessage(`${text}`, { image: { url: img }, caption: `*${title}*\n\n*🔐 විස්තරය* - ${news}\n\n*_🖇️ News Link -_*  ${url}\n\nꜱʟ ɴᴇᴡꜱ ᴜᴘᴅᴀᴛᴇꜱ ᴄᴇɴᴛᴇʀ` }, )
      
     } else {
     reply("This Chat not News Sender Group")
     }
     }
     
    break
    
    
    
    
    case 'makenews' : {
    if (m.chat == '120363045963630570@g.us') {
if(!text) return reply('```Example .makenews පොටෝ ලින්ක් එකයි & නිවුස් එක```')

const img = text.split("&")[0] 
const news = text.split("&")[1] 
 
 
 ElisaBotMd.sendMessage(`120363026602877819@g.us`, { image: { url: img }, caption: news }, )
   
 }
      else {
     reply("Please Go News Sender Group")
     }
  }
break


// TESTING NEWS STARTS \\

case 'news' :{ 
  await ElisaBotMd.sendMessage(from, { react: { text: `🥀`, key: m.key }})

if (m.chat == '120363045963630570@g.us') {
           
             sections = [{ 
                    "title": `SELECT YOUR NEWS OPTION`,
                                   "rows": [
                                   {
										"title": "එසැණ පුවත් සොයන්න",
										"description": "ᴄʜᴇᴄᴋ ʜᴇʟᴀᴋᴜʀᴜ ɴᴇᴡꜱ",
										"rowId": `checkesenanewsnx`
										},
										{
											"title": "හිරු News සොයන්න",
										"description": "ᴄʜᴇᴄᴋ ʜɪʀᴜɴᴇᴡꜱ",
										"rowId": `checkhirunewsx`
										}
								]
								
								}
							]
				 ElisaBotMd.sendListMsg(m.chat, `අවශ්‍ය යොමුව තෝරන්න`, `ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`, ElisaBotMd.user.name, `නිව්ස් වර්ගය`, sections, m)
				 } else {
     reply("⚠️ Not Found")
     }
                }
                
            break
            
            
             
    case 'checkesenanewsx' : {
     //   if (m.chat == '120363045963630570@g.us') {
 
const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
   const helnews = await esana_scrape({ fetch: 'latest' , passcode: '82darkalpha'}) // Enter Your Passcode or Contact Admin (+94766239744)

const title = helnews.news.helakuru.title
const news = helnews.news.helakuru.description
const img = helnews.news.helakuru.thumb
const url = helnews.news.helakuru.url
const date = helnews.news.helakuru.data

const templateButtons = [
    {index: 1, urlButton: {displayText: `එසැන පුවත්`, url: `${url}`}},
    {index: 2, quickReplyButton: {displayText: 'SEND ESENA', id: `.esenasend 120363026602877819@g.us` }},
    {index: 3, quickReplyButton: {displayText: 'CHECK HIRUNEWS', id: `checkhirunewsx` }},
  

    ]

const templateMessage = {
    image: {url: img },
    caption: `*${title}*\n\n${news}\n\nɴᴇᴡꜱ ʙᴏᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴɪᴍᴀ x ᴛɢᴍ` ,
    footer: `${date}`,
    templateButtons: templateButtons,
    headerType: 4
}
     
     await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })
      
  //   } else {
   //  reply("⚠️ Not Found")
    // }
     
     }
     
    break
    
     case 'checkhirunewsx'  : {
     reply(mess.wait)
       await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})

      if (m.chat == '120363045963630570@g.us') {

const cyber = await fetchJson(`https://api.sdbots.tk/hirunews`)

const templateButtons = [
    {index: 1, urlButton: {displayText: `HIRU NEWS`, url: `${cyber.link}`}},
    {index: 2, quickReplyButton: {displayText: 'SEND HIRUNEWS', id: `.sendnews 120363026602877819@g.us` }},
    {index: 3, quickReplyButton: {displayText: 'CHECK ESENA', id: `checkesenanewsx` }},
  
    ]

const templateMessage = {
    image: {url: cyber.img },
    caption: `*${cyber.title}*\n\n${cyber.description}\n\nɴᴇᴡꜱ ʙᴏᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴɪᴍᴀ x ᴛɢᴍ` ,
    footer: `${cyber.date}`,
    templateButtons: templateButtons,
    headerType: 4
}
     
     await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })
      } else {
     reply("⚠️ Not Found")
     }
     
     }
    break 
    
// TESTING NEWS ENDED \\  120363045312624699@g.us
case 'twiter' : case 'insta': case 'igvid' : case 'fb': case 'get': {  
const seccap = args[1] || '😍💗'
    const thub = await fetchJson('https://github.com/thivankaonline/UPLOADS/raw/main/JSON/elisadetails.json')
                          await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
    
    if (!text) throw '*Please Give me a link*'
   buf = await getBuffer(thub.SF_THUB)
   const download = await ElisaBotMd.sendText(m.chat, mess.wait)

                let bicil = require('@bochilteam/scraper')

                let urlnya = args[0]

	            bicil.savefrom(urlnya)

	            .then(async(result) => {	  	                                	                      	            

		        for(let i of result.url) {		

		        if(i.url.includes('mp4')){		           			    				

				let link = await getBuffer(i.url)
			 await ElisaBotMd.sendMessage(m.chat, { delete: download.key })	
             const uplode = await ElisaBotMd.sendText(m.chat, ` *Please Wait ${global.botnma} Trying upload Your  ${m.pushName} Video ... 🔄*`)
             await ElisaBotMd.sendMessage(from, { react: { text: `📤`, key: m.key }})

                ElisaBotMd.sendMessage(m.chat, { video: link, jpegThumbnail:buf,caption: `${seccap}\n\n*sᴛᴀᴛᴜs ᴜᴘᴅᴀᴛᴇ ᴄᴇɴᴛᴇʀ* \n __𝙼𝚛 𝙽𝚒𝚖𝚊 ` }, { quoted: m }) 
                await ElisaBotMd.sendMessage(m.chat, { delete: uplode.key })    
                          await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})          

               }

              }

            }).catch((err) => reply('```Can\'t Download your Video... ☹️```'))

            }		

			break
			
			case 'sendgrp' : {  
			const groupp = '120363045312624699@g.us'
			
const urlnya = text.split("&")[0] 
const seccap = text.split("&")[1] || '😇💗'
 
//const seccap = args[1] || '😍💗'
    const thub = await fetchJson('https://github.com/thivankaonline/UPLOADS/raw/main/JSON/elisadetails.json')
                          await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
    
    if (!text) throw '*Please Give me a link*'
   buf = await getBuffer(thub.SF_THUB)
   const download = await ElisaBotMd.sendText(m.chat, mess.wait)

                let bicil = require('@bochilteam/scraper')

               // let urlnya = args[0]

	            bicil.savefrom(urlnya)

	            .then(async(result) => {	  	                                	                      	            

		        for(let i of result.url) {		

		        if(i.url.includes('mp4')){		           			    				

				let link = await getBuffer(i.url)
			 await ElisaBotMd.sendMessage(m.chat, { delete: download.key })	
             const uplode = await ElisaBotMd.sendText(m.chat, ` *Please Wait ${global.botnma} Trying upload Your  ${m.pushName} Video ... 🔄*`)
             await ElisaBotMd.sendMessage(from, { react: { text: `📤`, key: m.key }})

                const videoid = await ElisaBotMd.sendMessage(groupp, { video: link,caption: `${seccap}\n\n*sʟ ᴡʜᴀᴛsᴀᴘᴘ sᴛᴇᴛᴜs ᴢᴏɴᴇ* \n __𝙼𝚛 𝙽𝚒𝚖𝚊 ` }, { quoted: fvideo }) 
                await ElisaBotMd.sendMessage(m.chat, { delete: uplode.key })    
                          await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})  
                          //await ElisaBotMd.sendMessage(from, { react: { text: `🎀`, key: videoid.key }})          

               }

              }

            }).catch((err) => reply('```Can\'t Download your Video... ☹️```'))

            }		

			break
			
case 'clear' : {

    const { ChatModification } = require('@adiwajshing/baileys');
    await ElisaBotMd(m.chat , ChatModification.delete);
    reply(' Cleared ')
    }
    break
case 'ytmp4' : {
                                  const thub = await fetchJson('https://github.com/thivankaonline/UPLOADS/raw/main/JSON/elisadetails.json')
                              const buf = await getBuffer(thub.YT_THUB)
                          if(!text) return reply('*👸💬 Need youtube url* \n'+'```ℹ️ Example .ytmp4 https://youtube.com/watch?v=WoWlWb6vbzA```')
                          if (!text.includes('https://youtu')) return reply('*👸💬 Need youtube url* \n'+'```ℹ️ Example .ytmp4 https://youtube.com/watch?v=WoWlWb6vbzA```')
                          await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
                          await ElisaBotMd.sendText(m.chat,mess.wait)
                          let quality = args[1] ? args[1] : '360p'
                          //const yts = require("yt-search")
                         // const search = await yts(args[0])
                          const dltext = args[0]
                          let boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(dltext)
                          .then(async(nima) => {
                          const dl_url = await nima.video[quality].download()
                          const size = nima.video[quality].fileSize
                          if(size >= 120000) return reply('*FILE SIZE IS SO BIG !!!*')
                          const viddd = await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', fileName: `${nima.title}.mp4`,jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                          await ElisaBotMd.sendMessage(from, { react: { text: `📽️`, key: viddd.key }})
                          // await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                          //await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: `${global.cap}` }, { quoted: m })
                          }).catch((err) => reply(NOT_FOUND))
                      
                          }
                          break
case 'ping' : case 'ping2' : {
                              const start = new Date().getTime()
  await ElisaBotMd.sendText(m.chat, '*📡  ʀᴜɴɪɴɢ ʀᴇsᴘᴏɴᴅ...*')
  const end = new Date().getTime()
 // const fake = 
  const poonn = await ElisaBotMd.sendText(m.chat, '*ᴘᴏɴɢ* ' + (end - start) + ' *_ᴍs_*' )
  await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: poonn.key }})
  }
  break
  case 'botstetus' : case 'stetus' : {
 const start = new Date().getTime()
 const fake = '800'
 await ElisaBotMd.sendMessage(from, { react: { text: `⚧️`, key: m.key }})
 const end = new Date().getTime()
 const ping = (end - start - fake ) + 'ms' 
// const runtime = 
 const ramusage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
 reply('```🧬 Bot Stetus 🧬 ```\n\n'+'*⚙️ Ping :* ```'+ping+'```\n*⏳ Run Time :* ```'+runtime(process.uptime())+'``` \n*📶 Ram Usage :*``` '+ramusage+'```\n')
 }
 break
 
case 'tiktok2' : {
   
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply ( '*The link you provided is not valid*')
const thub = await fetchJson('https://github.com/thivankaonline/UPLOADS/raw/main/JSON/elisadetails.json')
buf = await getBuffer(thub.TIKTOK_THUB)
const cyber = await fetchJson(`https://api.sdbots.tk/tiktok?url=${text}`)
const down = await ElisaBotMd.sendText(m.chat, '*📥 DOWNLOADING YOUR TIKTOK VIDEO ...*')
VID = cyber.result.withoutWaterMarkVideo
CAP = `🕵️‍♂️ ${cyber.author}
🗒️ ${cyber.desc}`
const up = await ElisaBotMd.sendText(m.chat, '*📤 UPLOADING YOUR TIKTOK VIDEO ...*')
await ElisaBotMd.sendMessage(m.chat,{delete : down.key })  
await ElisaBotMd.sendMessage(m.chat, { video: { url: VID },jpegThumbnail:buf, caption: global.cap }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat,{delete : up.key })                              


}
break
case 'nnews' : {
const newsgroup = '120363026602877819@g.us'
       const load = await ElisaBotMd.sendText(m.chat, mess.wait ) 
      // const thub = await fetchJson('https://github.com/thivankaonline/UPLOADS/raw/main/JSON/elisadetails.json')
       buf = await getBuffer('https://telegra.ph/file/a0829817f254c84fc96c9.jpg')
       const news = await fetchJson(`https://api.sdbots.tk/hirunews`)
       const time2 = moment().tz('Asia/colombo').format('HH:mm:ss')  
       console.log(news)
       const cap = `        *🌍 SL NEWS UPDATE CENTER 🌍*

 *${news.title}*

*📬️ විස්තරය -* ${news.description}

​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
*📅 දිනය* : ${news.date} 
*⏱️ වේලාව* : ${time2}
*🖇️ සබැදිය* : ${news.link}

*📡 ප්‍රධාන පුවත් සමූහයට සම්බන්ධ වීමට* : https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc
`
     
    // await ElisaBotMd.sendMessage('120363026602877819@g.us', templateMessage )
    // await ElisaBotMd.sendMessage(m.chat,{delete : load.key })  
 
    await ElisaBotMd.sendMessage(newsgroup, { image: { url : news.img} , jpegThumbnail:buf , caption : cap })
  }
  break
  case 'cnnews' : {
const newsgroup = '120363026602877819@g.us'
       const load = await ElisaBotMd.sendText(m.chat, mess.wait ) 
      // const thub = await fetchJson('https://github.com/thivankaonline/UPLOADS/raw/main/JSON/elisadetails.json')
       buf = await getBuffer('https://telegra.ph/file/a0829817f254c84fc96c9.jpg')
       const news = await fetchJson(`https://api.sdbots.tk/hirunews`)
       const time2 = moment().tz('Asia/colombo').format('HH:mm:ss')  
       console.log(news)
       const cap = `        *🌍 SL NEWS UPDATE CENTER 🌍*

  *${news.title}*

*📬️ විස්තරය -* ${news.description}

​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
*📅 දිනය* : ${news.date} 
*⏱️ වේලාව* : ${time2}
*🖇️ සබැදිය* : ${news.link}
*📡ප්‍රධාන පුවත් සමූහයට සම්බන්ධ වීමට* : https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc
`
     
    // await ElisaBotMd.sendMessage('120363026602877819@g.us', templateMessage )
    // await ElisaBotMd.sendMessage(m.chat,{delete : load.key })  
 
    await ElisaBotMd.sendMessage(m.chat, { image: { url : news.img} , jpegThumbnail:buf , caption : cap })
  }
  break
case 'menu' : {
if (isSupport) return
reply(`◯═══◊ ᴍᴇɴᴜ ◊═══◯
.song ${song_desc}
.fb ${fb_desc}
.tiktok ${tiktok_desc}
═══◯`)
}
break
case 'runtime' : case 'rtime': {
const uptime = await runtime(process.uptime())
reply(`*_${uptime}_*`)
}
break
case 'alive' : {
if (isSupport) return
await ElisaBotMd.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4b05a4f327db6d398d482.jpg' }, caption: global.ALIVE }, { quoted: m })
                

}
break
/*
case 'asong' : {
if (isSupport) return
     song_desc = 'Download youtube songs'
//reply('not setted')
         
    if (!text) return reply('*👸💬 Need song name or url*')
    const gett = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN)
    if (text.includes('https://youtu')){
       const nima = await fetchJson(`https://my-shinz.herokuapp.com/api/dowloader/yt?url=${text}`)
       const buf = await getBuffer('https://telegra.ph/file/b7a27bcd23e3a96fac934.jpg')
       const download = nima.result.mp3
    const load = await ElisaBotMd.sendText(m.chat,global.SONG_UP)
    await ElisaBotMd.sendMessage(m.chat, { delete: gett.key })
    ElisaBotMd.sendMessage(m.chat, {audio:{ url: download }, mimetype:"audio/mpeg", fileName: `${nima.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`༺⃝𝙼𝚁 𝙽𝙸𝙼𝙰 𝙾𝙵𝙲⃝༻`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`https://telegra.ph/file/b7a27bcd23e3a96fac934.jpg`, 
                sourceUrl: `https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc` }}}, {quoted:m})
                return await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                    
              }
       let yts = require("yt-search")
             //const load = await ElisaBotMd.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
      // const gett = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN, m, )
        yts(text).then(async (search) => {  
        
        const nim__a = search.all
        const nima = await fetchJson(`https://my-shinz.herokuapp.com/api/dowloader/yt?url=${search.all[0].url}`)
       const buf = await getBuffer('https://telegra.ph/file/b7a27bcd23e3a96fac934.jpg')
       const download = nima.result.mp3
    const load = await ElisaBotMd.sendText(m.chat,global.SONG_UP)
    await ElisaBotMd.sendMessage(m.chat, { delete: gett.key })
    ElisaBotMd.sendMessage(m.chat, {audio:{ url: download }, mimetype:"audio/mpeg", fileName: `${nima.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`༺⃝𝙼𝚁 𝙽𝙸𝙼𝙰 𝙾𝙵𝙲⃝༻`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`https://telegra.ph/file/b7a27bcd23e3a96fac934.jpg`, 
                sourceUrl: `https://chat.whatsapp.com/KnmiFeP48AX7fJbRH1anMc` }}}, {quoted:m})
                return await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                
    })
                                  
                         
}
break

*/
case 'asong' : {
if (isSupport) return
var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song2 lelena*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a song name.```\n *Example - .song2 lelena*"
text1 = q.split(";")[0]
text2 = q.split(";")[1]
//await ElisaBotMd.sendMessage(from, { react: { text: `⌛`, key: m.key }})

                          //await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                                  if (!text) return reply (GIVEME)
                                  let yts = require("yt-search")
                                  //const load = await ElisaBotMd.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
                                  const load = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN, m, )
                                  yts(text).then(async (search) => {  
                                  
                                  let nima = search.all
const CAP = `*${m.pushName} Your Song Found*

*🗃️ ᴛɪᴛʟᴇ :* ${search.all[0].title}

*⏱️ ᴅᴜʀᴀᴛɪᴏɴ :* ${search.all[0].duration}

*👀 ᴠɪᴇᴡs :* ${search.all[0].views}

*🖇️ ᴜʀʟ :* ${search.all[0].url}
`
                                  let { yta } = require('./thiva/lib/y2mate')
                                  let quality = args[1] ? args[1] : '128kbps'
                                  let media = await yta(search.all[0].url , quality)
                                  buf = await getBuffer(media.thumb)
                                  await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                                  //const up = await ElisaBotMd.sendText(m.chat, `\n*📤 Uploading ${m.pushName} your song...*\n` )
                                  if (media.filesize >= 120000) return reply('❗ Audio size is too big '+util.format(media))
                                  const up = await ElisaBotMd.sendText(m.chat, global.SONG_UP, m, )
                                  //await ElisaBotMd.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: CAP }, { quoted: m })
                                  const doc = await ElisaBotMd.sendMessage(m.chat, { audio : { url : media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                                  await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
                                 // await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

                                  }).catch((err) => reply(NOT_FOUND))
                           }
                          break  
case 'dsong' : {
if (isSupport) return
var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song2 lelena*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a song name.```\n *Example - .song2 lelena*"
text1 = q.split(";")[0]
text2 = q.split(";")[1]
//await ElisaBotMd.sendMessage(from, { react: { text: `⌛`, key: m.key }})

                          //await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                                  if (!text) return reply (GIVEME)
                                  let yts = require("yt-search")
                                  //const load = await ElisaBotMd.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
                                  const load = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN, m, )
                                  yts(text).then(async (search) => {  
                                  
                                  let nima = search.all
const CAP = `*${m.pushName} Your Song Found*

*🗃️ ᴛɪᴛʟᴇ :* ${search.all[0].title}

*⏱️ ᴅᴜʀᴀᴛɪᴏɴ :* ${search.all[0].duration}

*👀 ᴠɪᴇᴡs :* ${search.all[0].views}

*🖇️ ᴜʀʟ :* ${search.all[0].url}
`
                                  let { yta } = require('./thiva/lib/y2mate')
                                  let quality = args[1] ? args[1] : '128kbps'
                                  let media = await yta(search.all[0].url , quality)
                                  buf = await getBuffer(media.thumb)
                                  await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                                  //const up = await ElisaBotMd.sendText(m.chat, `\n*📤 Uploading ${m.pushName} your song...*\n` )
                                  if (media.filesize >= 120000) return reply('❗ Audio size is too big '+util.format(media))
                                  const up = await ElisaBotMd.sendText(m.chat, global.SONG_UP, m, )
                                  //await ElisaBotMd.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: CAP }, { quoted: m })
                                  const doc = await ElisaBotMd.sendMessage(m.chat, { document: { url : media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                                  await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
                                 // await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

                                  }).catch((err) => reply(NOT_FOUND))
                           }
                          break  


case 'getvideo' : {
if (isSupport) return
//reply('not setted')
if (!text) throw 'need word'
const gett = await ElisaBotMd.sendText(m.chat,global.VIDEO_DOWN)
const qulity = text.split("-")[1] || '360'
const query = text.split("-")[0]
await fetchJson(`https://api.akuari.my.id/downloader/play3?query=${query}&type=${qulity}`)
.then(async (nima) => { 
const video = nima.mp4.download
const caption = `*◉ ᴛɪᴛʟᴇ :* ${nima.title}
*◉ ʀᴇsᴀʟᴜᴛɪᴏɴ :* ${qulity}p`
      await ElisaBotMd.sendMessage(m.chat, { delete: gett.key })
      const load = await ElisaBotMd.sendText(m.chat,global.VIDEO_UP)
      await ElisaBotMd.sendMessage(m.chat, { video: { url: video }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
      await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
   
  }).catch((err) => reply(NOT_FOUND))
    
}
break
case 'video': { 
const rash = await fetchJson(`https://github.com/ThivankaOnline/ThivaBot/raw/main/SongVideo.jsons/songdl.json`)
const sdpid = rash.sddlid
const hdmidpid = rash.sdmiddlid
const hdpid = rash.hddlid

var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට වීඩියෝවක නමක් ලබාදෙන්න.```\n*උදාහරණ - .yt how to make queen elisa bot*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a video name.```\n *Example - .video how to make queen elisa bot*"

                          await ElisaBotMd.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                                  if (!text) return reply (GIVEME)
                                  await ElisaBotMd.sendText(m.chat, mess.wait, m, )
                                  let yts = require("yt-search")
                                  var svid = text.replace("shorts/","watch?v=")
                                  var s2vid = svid.replace("?feature=share","")
                                  yts(s2vid).then(async (search) => { 
                                  let nima = search.all     
if (search.all[0].type == 'channel') {

                const buttons = [
                    {buttonId: `${sdpid} ${search.all[1].url}`, buttonText: {displayText: '360p'}, type: 1},
                    {buttonId: `${hdmidpid} ${search.all[1].url} 480p`, buttonText: {displayText: '480p'}, type: 1},
                    {buttonId: `${hdpid} ${search.all[1].url} 720p`, buttonText: {displayText: '720p'}, type: 1}
                ]
            const buttonMessage = {
                    image: { url: search.all[1].thumbnail },
                    caption: `⫷⦁[ *👸 𝚃𝙷𝙸𝚅𝙰 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸* ]⦁⫸

*ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${search.all[1].title}

 ➥ ᴠɪᴇᴡs - ${search.all[1].views}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[1].timestamp}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[1].ago}

 ➥ ᴜʀʟ - ${search.all[1].url}` ,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
                
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                 
} else if (search.all[0].type == 'video') {
const rash = await fetchJson(`https://github.com/ThivankaOnline/ThivaBot/raw/main/SongVideo.jsons/songdl.json`)
const sdpid = rash.sddlid
const hdmidpid = rash.sdmiddlid
const hdpid = rash.hddlid
                let nima = search.all           
                const buttons = [
                    {buttonId: `${sdpid} ${search.all[1].url}`, buttonText: {displayText: '360p'}, type: 1},
                    {buttonId: `${hdmidpid} ${search.all[1].url} 480p`, buttonText: {displayText: '480p'}, type: 1},
                    {buttonId: `${hdpid} ${search.all[1].url} 720p`, buttonText: {displayText: '720p'}, type: 1}
                ]
            const buttonMessage = {
                    image: { url: search.all[0].thumbnail },
                    caption:   `⫷⦁[ *👸 𝚃𝙷𝙸𝚅𝙰 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸* ]⦁⫸

*ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${search.all[0].title}

 ➥ ᴠɪᴇᴡs - ${search.all[0].views}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[0].timestamp}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[0].ago}

 ➥ ᴜʀʟ - ${search.all[0].url}` ,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
                
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                 
}}).catch((err) => reply('```☹️ Become Error ️```'))
          
                                  

}
                          break
case 'video2' :{
if (isSupport) return
reply('not setted')
}
break
case 'instaa' : {
              
               
               const nima = require('@bochilteam/scraper')
               const urll = text
               const instadl = await nima.instagramdlv4(urll)
               const dl_url = instadl.url
               reply(dl_url)
ElisaBotMd.sendMessage(m.chat, { video: dl_url,caption: `*sᴛᴀᴛᴜs ᴜᴘᴅᴀᴛᴇ ᴄᴇɴᴛᴇʀ* \n __𝙼𝚛 𝙽𝚒𝚖𝚊 ` }, { quoted: m }) 
              

}
break
case 'tiktok' : case 'tt' : {
if (isSupport) return
   tiktok_desc = 'Download tiktok Videos'
//reply('not setted')
if(!text) throw '*🧑‍💻💬 Please give me Tiktok Video link*'
      const gett = await ElisaBotMd.sendText(m.chat,global.VIDEO_DOWN)
      await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
      .then(async (nima) => { 
      const video = nima.hasil.download_mp4
      const caption = `◉ ᴛɪᴛʟᴇ : ${nima.video_title}
◉ ᴜsᴇʀ ɴᴀᴍᴇ : ${nima.hasil.username}
◉ ʟɪᴋᴇ : ${nima.hasil.like}
◉ ᴄᴏᴍᴍᴇɴᴛ : ${nima.hasil.comment}
◉ sʜᴇʀᴇ : ${nima.hasil.shere}
◉ ᴍᴜsɪᴄ ᴀᴜᴛʜᴏʀ ${nima.hasil.music_author}
 `
      await ElisaBotMd.sendMessage(m.chat, { delete: gett.key })
      const load = await ElisaBotMd.sendText(m.chat,global.VIDEO_UP)
      await ElisaBotMd.sendMessage(m.chat, { video: { url: video }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
      await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
   
  }).catch((err) => reply(NOT_FOUND))
     
}
break
case 'sendtk' : {
const urlnya = text.split("&")[0] 
const seccap = text.split("&")[1] || '😇💗'
//https://api.ibengtools.my.id/api/download/tiktok?url=https://vm.tiktok.com/ZS8NYQPHh/&apikey=ibeng
await ElisaBotMd.sendText(m.chat,WAIT)
await fetchJson(`https://api.ibengtools.my.id/api/download/tiktok?url=${urlnya}&apikey=ibeng`).then(async (send_tk) => { 
const link = send_tk.result.video
const groupp = '120363045312624699@g.us'
await ElisaBotMd.sendMessage(groupp, { video: link,caption: `${seccap}\n\n*sʟ ᴡʜᴀᴛsᴀᴘᴘ sᴛᴇᴛᴜs ᴢᴏɴᴇ* \n __𝙼𝚛 𝙽𝚒𝚖𝚊 ` }, { quoted: fvideo }) 
    
  }).catch((err) => 
//  console.log(err))
 reply(err))
  
  }
break
case 'ss' : {
if (!text) throw 'need url'
const load = await ElisaBotMd.sendText(m.chat,WAIT)
await getBuffer(`https://api.ibengtools.my.id/api/tools/ssweb?link=${text}`).then(async (imagee) => { 
await ElisaBotMd.sendMessage(m.chat, { image: imagee, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { delete: load.key }) 
   
    }).catch((err) => reply(NOT_FOUND))

}

break
case 'fb2' : {
if (isSupport) return
    fb_desc = 'download fb videos'
//reply('not setted')
      if(!text) throw '*🧑‍💻💬 Please give me a facebook video link*'
      const gett = await ElisaBotMd.sendText(m.chat,global.VIDEO_DOWN)   
      await fetchJson(`https://api.akuari.my.id/downloader/fbdl3?link=${text}`)
      .then(async (nima) => { 
      const video = nima.hasil.hd
      const title = nima.title
      await ElisaBotMd.sendMessage(m.chat, { delete: gett.key })
      buff = await getBuffer(video)
      const load = await ElisaBotMd.sendText(m.chat,global.VIDEO_UP)
      await ElisaBotMd.sendMessage(m.chat, { video: buff , mimetype: 'video/mp4', caption: title }, { quoted: m })
      await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
      
  }).catch((err) => reply(NOT_FOUND))
                                  
}
break


case 'insta' : {
if (isSupport) return
reply('not setted')
}
break

case 'aapk' : {
if (isSupport) return
if(!text) return reply(NEED)
const gett = await ElisaBotMd.sendText(m.chat,global.APK_DOWNLOAD)
await fetchJson(`https://api.akuari.my.id/search/searchapk2?query=${text}`)
.then(async (nima) => { 
const bota = await fetchJson(`https://api.akuari.my.id/downloader/dlapk2?link=${nima.respon.link}`)
const apk = bota
const Details = `*🗳 MOD APK DOWNLOAD 🗳️*

*🗃 ️𝙰𝙿𝙿 𝙽𝙰𝙼𝙴 :* ${nima.respon.title}
*📂 𝙰𝙿𝙺 𝚂𝙸𝚉𝙴 :* ${bota.respon.size}
*⚒️ 𝙻𝙰𝚂𝚃 𝚄𝙿𝙳𝙰𝚃𝙴 :* ${bota.respon.update}
*🖇️ 𝚄𝚁𝙻 :* ${nima.respon.link}

*════════◯*`
await ElisaBotMd.sendMessage(m.chat, { delete: gett.key }) 
const buff = await getBuffer(apk)
const load = await ElisaBotMd.sendText(m.chat,global.APK_UPLOAD)
await ElisaBotMd.sendMessage(m.chat, { delete: load.key }) 
const apkapp = await ElisaBotMd.sendMessage(m.chat, { document: buff , mimetype: 'application/vnd.android.package-archive', fileName: `${nima.respon.title}.apk`}, { quoted: m })}).catch((err) => reply(err))
await ElisaBotMd.sendMessage(from, { text: Details }, { quoted: apkapp })
//reply('not setted')
}
break

case 'sticker': case 'st': case 'stickergif2': case 'sgif2': {
if (isSupport) return
   if (!quoted) return reply(`👸💬 Reply Video/Image With Caption ${prefix + command}`)
                            
   var MAX = ''
   if (global.LANG == 'EN') MAX= '*Maximum 10 seconds videos only!*'
   if (global.LANG == 'SI') MAX= '*උපරිම තත්පර 10ක වීඩියෝ පමණයි !*'
   var MA2X = ''
   if (global.LANG == 'SI') MA2X= '*👸💬 වීඩියෝවකට හෝ ජායාරූපයකට රිප්ලයි ලබාදෙන්න !*'
   if (global.LANG == 'EN') MA2X= '*👸💬 Please reply video or photo !*'
   
    ElisaBotMd.sendText(m.chat, WAIT )
           if (/image/.test(mime)) {
       let media = await quoted.download()
       let encmedia = await ElisaBotMd.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: m.pushName })
       await fs.unlinkSync(encmedia)
   } else if (/video/.test(mime)) {
       if ((quoted.msg || quoted).seconds > 11) return reply(MAX)
       let media = await quoted.download()
       let encmedia = await ElisaBotMd.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: m.pushName })
       await fs.unlinkSync(encmedia)
   } else {
       throw MA2X
       }
   }
   break

case 'img' : {
if (isSupport) return
if (!text) return reply(`*🧑‍💻💬 ${m.pushName} Give Some search* \n_*🗳️ Example :* .img Queen Elisa Whatsapp bot_`)
 const load = await ElisaBotMd.sendText(m.chat,WAIT)
 await fetchJson(`https://botcahx.ddns.net/api/search/googleimage?text=${text}`)
 .then(async (nima) => { 
 const imagee1 = nima.result[0].url
 const imagee2 = nima.result[1].url
 const imagee3 = nima.result[2].url
 const imagee4 = nima.result[3].url
 const imagee5 = nima.result[4].url
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee1 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee2 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee3 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee4 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee5 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { delete: load.key }) 
   
    }).catch((err) => reply(NOT_FOUND))

//reply('not setted')
}
break

case 'add' : {
if (!m.isGroup) return 
if (!isBotAdmins) return 
if (!isAdmins) return 
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ElisaBotMd.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(`@*${users.split('@')[0]} Kick out !!!*` )).catch((err) => reply(err))

}
break

case 'kick' : {
//reply('not setted')
if (!m.isGroup) return 
if (!isBotAdmins) return 
if (!isAdmins) return 
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ElisaBotMd.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(`@*${users.split('@')[0]} Kick out !!!*` )).catch((err) => reply(err))

}
break

case 'modapk' : {
if (isSupport) return
      await ElisaBotMd.sendText(m.chat,'```Please Wait ....```')
      const nima = await fetchJson(`https://api.akuari.my.id/search/searchmod2?query=${text}`)
      const dlnima = await fetchJson(`https://api.akuari.my.id/downloader/dlmod2?link=${text}`)
}
break

case 'clear' : {
await ElisaBotMd.chatModify({ clear: { messages: [{ id: 'ATWYHDNNWU81732J', fromMe: true, timestamp: "1654823909" }] } },  m.chat ,  [] )
}
break

case 'welcome': {
 // if (!isAdmins)  reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].isWelcome) return reply(`*Welcome already on okay*`)
  db.chats[m.chat].isWelcome = true
  reply(`*welcome on*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].isWelcome) return reply(`*Already off okay*`)
  db.chats[m.chat].isWelcome = false
  reply(`*welcome off*`)
  } else {
   let drips = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
    ]
    await ElisaBotMd.sendMessage(m.chat, drips, `*🧑‍💻 _WELCOME_ 🧑‍💻*`, ElisaBotMd.user.name, m)
  }
    }   
  break 
   
   case 'short' : {
   if(isSupport) return
   if (!text) return reply('need url')
   const load = await ElisaBotMd.sendText(m.chat,WAIT)
   await fetchJson(`https://botcahx.ddns.net/api/linkshort/bitly?link=${text}`)
    .then(async (nima) => { 
   await ElisaBotMd.sendText(m.chat,nima.result)
   await ElisaBotMd.sendMessage(m.chat, { delete: load.key }) 
   
    }).catch((err) => reply(NOT_FOUND))
 }
 break
 
 case 'yt': case 'yts': case 'getyt' :{
    if (!text) return reply( `need word`)
    await ElisaBotMd.sendText(m.chat,WAIT)
    let yts = require("yt-search")
    let search = await yts(text)
    let teks = `  *『 ʏᴏᴜᴛᴜʙᴇ sᴇᴀᴇᴄʜ ʀᴇsᴜʟᴛs 』*\n\n`
    let no = 1
    for (let i of search.all) {
        teks += `*▷ ʀᴇsᴜʟᴛ :* ${no++}\n*📽️ ᴛɪᴛʟᴇ :* ${i.title}\n*📌 ᴜʀʟ :* ${i.url}\n\n─────────────────\n\n`
    }
   await ElisaBotMd.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                              }
                              break
case 'apk' : {
 if (!text) return reply ('App නමක් ඔනි')
 await ElisaBotMd.sendText(m.chat,WAIT)
 const apk_nima = await fetchJson(`https://api.akuari.my.id/search/searchapk2?query=${text}`)
 for(let i of apk_nima.respon) {
  teks += `*> App Name :* *${i.title}\n >> Link : ${i.link} \n\n -----------------------------------\n\n-` 
}
    await ElisaBotMd.sendText(m.chat, teks + 'Type .getapk < app link > To Download ')
 
 
}
break
case 'getapk' :{
//https://api.akuari.my.id/downloader/dlapk2?link=https://androidapksfree.com/gb-whatsapp/com-gbwhatsapp
reply(' Update will soon')
}
break
 case 'tag': {
  if (!m.isGroup) throw mess.group
  if (!isAdmins) throw mess.admin
  ElisaBotMd.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'url' : {
if(!isNima) return
reply(WAIT)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./thiva/lib/uploader')
let media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'gopen' : {
if(!isNima) return
await sleep(1000)
await ElisaBotMd.groupSettingUpdate(m.chat, 'not_announcement')
}
break
case 'gclose' : {
if(!isNima) return
await sleep(1000)
await ElisaBotMd.groupSettingUpdate(m.chat, 'announcement')
}
break
/*

await ElisaBotMd.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(Lang.G_MUTE)).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'open'){
                                      await ElisaBotMd.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(Lang.G_UNMUTE)).catch((err) => reply(jsonformat(err)))
                                  } else {
                                  
                                  case 'taggrpnima': {
       const group2Metadata = await ElisaBotMd.groupMetadata(`${args[0]}`).catch(e => {}) : ''
       const group2Name = ggroup2Metadata.subject : ''
       const participantszz = await group2Metadata.participants : ''
       const texttt = args[1] || quoted.m
    ElisaBotMd.sendMessage(m.chat, { text : texttt ? texttt : '' , mentions: participantszz.map(a => a.id)})
     
}
break*/

                            /*  default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
     bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ElisaBotMd.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}*/
        }
        

    } catch (err) {
    console.log(err)
       //await ElisaBotMd.sendText('94768211424@s.whatsapp.net',`${util.format(err)}`)
     //  reply(err)
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
// ttdownnima@gmail.com - 7518-b675-9944 (tiktok download api)