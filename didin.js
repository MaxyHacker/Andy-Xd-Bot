//DikaAnrt//
// LU JUAL ? YAUDAH W ENC LAGI MWHEHEHE//
// DAH DI KASIH FREE MININAL SUBSCRIBE LAH BANG\nJangan Hapus THANK TO//
//🌹 THANK TO : //
// •  [DIDIN] / [ nama mu //

//MAKASIH All YG DAH BANTU W:v
// EROR FIX SENDIRI BANG
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const dani = require('./lib/null.js')
const { cerpen } = require('./storage/story/cerpen')
const yts = require('yt-search')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/jadibot')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const hariini = moment.tz('America/Port-au-Prince').format('dddd, DD MMMM YYYY')
const barat = moment.tz('America/Port-au-Prince').format('HH:mm:ss')
const tengah = moment.tz('America/Port-au-Prince').format('HH:mm:ss')
const timur = moment.tz('America/Port-au-Prince').format('HH:mm:ss')
const nyoutube = ('©Andy XD‡')  //ubah di config biar ngk emro
const didinyt = ('*ɴᴏᴛᴇ  :*\n*• ʙᴏ ᴍᴀsɪʜ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇʀᴋᴇᴍʙᴀɴɢᴀɴ ᴊɪᴋᴀ ᴀᴅᴀ ʙᴜɢ sɪʟᴀʜᴋɴ ʟᴀᴘᴏʀ ᴋᴇ ᴏᴡɴᴇʀ.*')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`

// database virtex
const { philips } = require('./lib/virtex/philips')
const { virus } = require('./lib/virtex/virus')
const { ngazap } = require('./lib/virtex/ngazap')

//TIME
const time2 = moment().tz('America/Port-au-Prince').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good morning 🌉'
 } 
 
 //Database\\
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));

module.exports = didin = async (didin, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await didin.decodeJid(didin.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	
	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
// Group
const groupMetadata = m.isGroup ? await didin.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	    const isBan = banned.includes(m.sender)
const isPremium = premium.includes(m.sender)


    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (!didin.public) {
    if (!m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

	//auto reply 
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./AndyMedia/vn/${anju}.mp3`)
					didin.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}

/////TEKS BUTTON
const prem1 = `Yooo bro ${pushname} ${speech} \n\nThis feature is only for premium members, please buy premium to use this feature `
const prem2 = `Click the button below to buy premium \n © ANDYMRLIT`
const prem3 = [{buttonId: `${prefix}beliprem`,buttonText: {displayText: `BELI PREMIUM`,},type: 1,},]

blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} You are not registered in the database, check your private messages to register`
limitabis = `*[LIMIT KAMU HABIS]*\n Buy limit at ${prefix}buylimit or buy premium to get unlimited limit`
//SAMA"
const drip =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: nyoutube,
mediaType: "VIDEO",
mediaUrl: `https://githb.com/Ajmal-Achu/Wizard-MD`,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}

	//BUTON MESAGE
	const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
didin.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

// DOCUMENT
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   didin.sendMessage(m.chat, buttonMessage, options)
   }
   
	  // Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 *ANTI LINK* 」\n\n*You were detected sending a group link*, *sorry you will be kicked‼️, Those who want it too, please send the link‼️*`)
if (!isBotAdmins) return m.reply(`*Just a bot, not an admin*`)
let gclink = (`https://chat.whatsapp.com/`+await didin.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`*sorry it didn't work, because you sent this group link*`)
if (isAdmins) return m.reply(`*sorry you admin*`)
if (isCreator) return m.reply(`*sorry you are the owner of my bot*`)
didin.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: didin.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, didin.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
didin.ev.emit('messages.upsert', msg)
}
	    
if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            didin.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await didin.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, didin.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game over',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game end` : `turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await didin.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await didin.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    didin.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} refuse suit, suit cancelled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    didin.sendText(m.chat, `The suit has been sent to the chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) didin.sendText(roof.p, `select  \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) didin.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) didin.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    didin.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) didin.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) didin.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    didin.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
        
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break	
 case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await didin.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await didin.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            didin.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await didin.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) didin.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'skdkka': {
                m.reply('https://wa.me/50941411147')
            }
            break
            case 'bot': {
                m.reply('Whats wrong, bro, why did you call me, is there anything I can help you with?🤔')
            }
            break
            case 'Hello': {
                m.reply('How are you bro')
            }
            case 'hehe': {
                m.reply('Fitur Yang Eror Akan Segera Mimin Benerin\nSabar Ya:/')
            }
            break
            case 'groupbot': {
                m.reply('Bro\nGroup AndyXd: https://chat.whatsapp.com/DSjOomRaTkU4z1a5ngl2Yw\nNOTE : If his brother has a bot, just enter it\n\n*_Thanks><_*')
            }
            break
            case 'tqto': {
                m.reply('THANK TO :\nMaxy: https://github.com/MaxyHacker')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    didin.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    didin.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    didin.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    didin.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    didin.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    didin.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    didin.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await didin.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await didin.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    didin.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    didin.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    didin.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    didin.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    didin.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    didin.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    didin.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, didin.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                didin.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, jawab, didin.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa DONASI Ke *Andy XD*🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, jawab, didin.user.name, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await didin.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            
           
//Pembatas
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                didin.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await didin.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await didin.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await didin.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await didin.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await didin.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await didin.downloadAndSaveMediaMessage(quoted)
                await didin.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await didin.downloadAndSaveMediaMessage(quoted)
                await didin.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `• @${mem.id.split('@')[0]}\n`
                }
                didin.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            didin.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'dkdkd': {
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `• *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: didin.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            didin.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿??𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: didin.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            didin.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: didin.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            didin.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${didin.user.id}
`
didin.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await didin.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await didin.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `Mode Group`, didin.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await didin.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await didin.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `Mode Edit Info`, didin.user.name, m)

            }
            }
            break
            case 'antidelete': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('type on to activate\ntype off to deactivate')
if (args[0] === "on") {
if (AntiDelete) return m.reply('Sudah Aktif')
ntidel.push(from)
m.reply('Success turned on antidelete in this group')
} else if (args[0] === "off") {
if (!AntiDelete) return m.reply('Is dead')
let off = ntidel.indexOf(from)
ntidel.splice(off, 1)
m.reply('Success turned off antidelete in this group')
} else {
m.reply('on to enable, off to disable')
}
}
break
case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Previously Active`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Previously Inactive`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Inactive !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await didin.sendButtonText(m.chat, buttons, `Mode Antilink`, didin.user.name, m)
  }
}
break
case 'antilinkyoutube': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinkyt) return m.reply(`Previously Active`)
db.data.chats[m.chat].antilinkyt = true
m.reply(`Antilink Active Youtube !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinkyt) return m.reply(`Previously Inactive`)
db.data.chats[m.chat].antilinkyt = false
m.reply(`Antilink Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilinkyt on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilinkyt off', buttonText: { displayText: 'Off' }, type: 1 }
]
await Didin.sendButtonText(m.chat, buttons, `Mode Antilink Youtube`, Didin.user.name, m)
  }
}
break
case 'antilinktiktok': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinktt) return m.reply(`Previously Active`)
db.data.chats[m.chat].antilinktt = true
m.reply(`Antilink Aktif Tiktok !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinktt) return m.reply(`Sudah Previously Inactive`)
db.data.chats[m.chat].antilinktt = false
m.reply(`Antilink Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilinktt on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilinktt off', buttonText: { displayText: 'Off' }, type: 1 }
]
await Didin.sendButtonText(m.chat, buttons, `Mode Antilink Tiktok`, Didin.user.name, m)
  }
}
break
case 'anticall': {
if (!isCreator) return replay(mess.owner)
if (args[0] === "on") {
if (db.data.settings[botNumber].anticall) return m.reply(`Previously Active`)
db.data.settings[botNumber].anticall = true
m.reply(`Anticall Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!db.data.settings[botNumber].anticall) return m.reply(`Sudah Nonaktif Sebelumnya`)
db.data.settings[botNumber].anticall = false
m.reply(`Anticall Berhasil Di Nonaktifkan !`)
} else {
let buttonsanticall = [
{ buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
]
await Didin.sendButtonText(m.chat, buttonsanticall, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
}
}
break
case 'antilinkinstagram': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinkig) return m.reply(`Previously Active`)
db.data.chats[m.chat].antilinkig = true
m.reply(`Antilink Aktif Instagram !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinkig) return m.reply(`Sudah Previously Inactive`)
db.data.chats[m.chat].antilinkig = false
m.reply(`Antilink Instagram Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilinkig on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilinkig off', buttonText: { displayText: 'Off' }, type: 1 }
]
await Didin.sendButtonText(m.chat, buttons, `Mode Antilink Instagram`, Didin.user.name, m)
  }
}
break
case 'goblokcek': case 'jelekcek': case 'rate':case 'haram':case 'gaycek':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek': case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
didin.sendMessage(m.chat, { text: yn }, { quoted: m })
break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                m.reply(`${didin.user.name} It's been muted in this group!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Previously Inactive`)
                db.data.chats[m.chat].mute = false
                m.reply(`${didin.user.name} Unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `Mute Bot`, didin.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await didin.groupInviteCode(m.chat)
                didin.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await didin.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await didin.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                didin.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehe', buttonText: { displayText: 'Makasih Laporannya :/' }, type: 1 }]
            await didin.sendButtonText('6281545463585@s.whatsapp.net', buttons, pjtxt, nyoutube, m, {mentions: ments})
            let akhji = `Laporan Anda Telah Terkirim Ke Owner @${ownernya.split('@')[0]}\n*Terima Kasih Atas Laporannya🙏*\n_(Nomermu Akan Terblokir Jika Laporan Hanya Di Buat Buat)_`
            await didin.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
            break
            case 'bcgc': case 'bcgroup': {
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text?\n\nExample : ${prefix + command} ${global.ownername}`)
let getGroups = await didin.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replay(`Send broadcast to ${anu.length} group chat, time's up ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
var button = [{ buttonId: `tesrow`, buttonText: { displayText: `MENU‡` }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: `SEWABOT‡` }, type: 1 }]
let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
didin.send5ButImg(i, txt, `Andy XD‡`, log0, btn, thum)
}
replay(`Successfully Sent Broadcast To ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
if (!isCreator && !m.key.fromMe) return m.reply(mess.botOwner)
let anu = await store.chats.all().map(v => v.id)
m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
for (let yoi of anu) {
if (/image/.test(mime)) {
await sleep(1500)
var txtbc = `*Broadcast ${didin.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
let media = await didin.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPh(media)
let urll = await getBuffer(url)
didin.sendMessage(yoi, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
if (fs.existsSync(media)) fs.unlinkSync(media)
} else if (/video/.test(mime)) {
await sleep(1500)
var txtbc = `*Broadcast Andy XD*\n\n*✉️ Message :* ${q? q : ''}\n`
var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
let media = await didin.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPh(media)
let urll = await getBuffer(url)
didin.sendMessage(yoi, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
if (fs.existsSync(media)) fs.unlinkSync(media)
} else if (/audio/.test(mime)) {
let media = await didin.downloadAndSaveMediaMessage(quoted)
await sleep(1500)
let urll = await UploadFileUgu(media)
didin.sendMessage(yoi, { audio: { url: urll.url }}, { quoted: fdoc })
} else {
await sleep(1500)
var txtbc = `*Broadcast Andy XD*\n\n*✉️ Message :* ${q? q : ''}\n`
var btnbc = [{ buttonId: `owner`, buttonText: { displayText: `OWNER‡` }, type: 1 }]
await didin.sendButtonText(yoi, btnbc, txtbc, '', fdoc)
}
m.reply('Sukses Broadcast')
}
}
break
case 'bcloc': {
const Jimp = require('jimp')
const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
buffer = global.didinbc
if (!isCreator) return replay(mess.owner)
                if (!text) return m.reply(`Use ${prefix}bcloc text\n\nExample : ${prefix + command} attention everybody`)
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                m.reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} sec`)
	     	for (let yoi of anu) {
	     	await sleep(1500)
		    var button = [{ buttonId: `owner`, buttonText: { displayText: `OWNER‡` }, type: 1 }, { buttonId: `DONASI`, buttonText: { displayText: `DONASI‡` }, type: 1 }]             
            didin.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await reSize(buffer, 200, 200) }, buttons: button, footer: `Andy XD‡`, mentions: [m.sender] })
		}		
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await didin.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 didin.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await didin.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('America/Port-au-Prince').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 didin.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    didin.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await didin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await didin.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
case 'beliprem':
m.reply(`Chat Owner Kak Silahkan Ketik .owner`)
break
  case 'addprem':
if (!isCreator) throw mess.owner
if (!q) return m.reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
if(isNaN(q)) return await m.reply('harus berupa nomor')
  if (q.includes(`+`)) return m.reply('Tidak menggunakan + langsung nomor 6285****')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${prmi}`)
break
case 'delprem':
 case 'dellprem':
if (!isCreator) throw mess.owner
  if (!q) return m.reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
  if(isNaN(q)) return await m.reply('harus berupa nomor')
  if (q.includes(`+`)) return m.reply('Tidak menggunakan + langsung nomor 6285****')
  prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`Sukses delete premium ${prmi}`)
break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await didin.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await didin.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': {
if (!text) throw `Example : ${prefix + command} text`
await didin.sendMedia(m.chat, `https://didinbotz-apii.herokuapp.com/api/maker/attp?text=${text}`, 'didinbo', 'morou', m, {asSticker: true})
}
break
           case 'ttp': {
if (!text) throw `Example : ${prefix + command} text`
await didin.sendMedia(m.chat, `https://didinbotz-apii.herokuapp.com/api/maker/ttp?text=${text}`, 'didinbo', 'morou', m, {asSticker: true})
}
break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Send/reply image/sticker with caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await didin.downloadAndSaveMediaMessage(quoted)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await didin.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(awikwok)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'f22b3c4c2c'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await didin.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    didin.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        //━━━━━━━━━━━━━━━[ CONVERTER ]━━━━━━━━━━━━━━━━━//
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await didin.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
didin.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await didin.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await didin.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
didin.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
didin.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${didin.user.name}.mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
didin.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await didin.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await didin.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await didin.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//━━━━━━━━━━━━━━━[ SEARCH ]━━━━━━━━━━━━━━━━━//
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await didin.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    didin.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                didin.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `あ *Title* : ${g.title}\n`
teks += `あ *Description* : ${g.snippet}\n`
teks += `あ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `あ No : ${no++}\nあ Type : ${i.type}\nあ Video ID : ${i.videoId}\nあ Title : ${i.title}\nあ Views : ${i.views}\nあ Duration : ${i.timestamp}\nあ Upload At : ${i.ago}\nあ Author : ${i.author.name}\nあ Url : ${i.url}\n\n─────────────────\n\n`
}
didin.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `あ *Title* : ${g.title}\n`
teks += `あ *Description* : ${g.snippet}\n`
teks += `あ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'play': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
あ Title : ${anu.title}
あ Ext : Search
あ Id : ${anu.videoId}
🪀 Duration : ${anu.timestamp}
あ Viewers : ${anu.views}
あ Upload At : ${anu.ago}
あ Author : ${anu.author.name}
あ Channel : ${anu.author.url}
あ Description : ${anu.description}
あ Url : ${anu.url}`,
footer: didin.user.name,
buttons: buttons,
headerType: 4
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ytmp3': case 'ytaudio': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
didin.sendImage(m.chat, media.thumb, `あ Title : ${media.title}\nあ File Size : ${media.filesizeF}\nあ Url : ${isUrl(text)}\nあ Ext : MP3\nあ Resolusi : ${args[1] || '128kbps'}`, m)
didin.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
didin.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `あ Title : ${media.title}\nあ File Size : ${media.filesizeF}\nあ Url : ${isUrl(text)}\nあ Ext : MP3\nあ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                didin.sendMessage(m.chat, { image: { url: result }, caption: '• Media Url : '+result }, { quoted: m })
            }
            break
//Hosting Menu
case 'createcp':
let domain = q.split('|')[2]
let usern = q.split('|')[0]
let pekeg = q.split('|')[1]
if (args.length < 2) return m.reply(`Kirim perintah ${command} domain|package`)
m.reply("Creating please wait....")

axios.get(`https://${hostwhm}:2087/json-api/createacct?api.version=1&username=${usern}&contactemail=shymex404@gmail.com&pekeg=${pekeg}&domain=${domain}`, authWhm)
.then(response => {     
     let np = response.data
          if (np.metadata.result == 0) {
           m.reply(np.metadata.reason)
          } else {
           let dsta = np.metadata.output.raw;
            var substr = dsta.substring(
              dsta.toString().indexOf("+===================================+")
            ); //substr = 'word. Hello!'
            let nefft = substr.split("| Language: en")[0];
            m.reply(`${nefft}\n\nLogin : https://${hostwhm}:2087`)
  }});
break
case 'listcp':
reply('Wait Getting List Account info....')
axios.get(`https://${hostwhm}:2087/json-api/listaccts?api.version=1`, authWhm)
  .then((risol) => {
 let lisol = risol.data
 var ttdy = lisol.data.acct
let ogh = `*── 「 LIST CPANEL 」 ──*\nTotal Akun : ${ttdy.length}\n`
for (let i = 0; i < ttdy.length; i++) {
ogh += `
\n
─────[\`\`\` ${ttdy[i].user} \`\`\` ]────────
*▢ Maxsub* : ${ttdy[i].maxsub}
*▢ Maxsql* : ${ttdy[i].maxsql}
*▢ Startdate* : ${ttdy[i].startdate}
*▢ Disklimit* : ${ttdy[i].disklimit}
*▢ Maxlst* : ${ttdy[i].maxlst}
*▢ Plan* : ${ttdy[i].plan}
*▢ Owner*: ${ttdy[i].owner}
*▢ Ip* : ${ttdy[i].ip}
*▢ Domain* : ${ttdy[i].domain}
*▢ Diskused* : ${ttdy[i].diskused}
*▢ Maxaddons* : ${ttdy[i].maxaddons}
*▢ Suspendreason* : ${ttdy[i].suspendreason}
─────────────────\n\n`
}
reply(ogh)
})
				break
case 'terminate':
if (args.length < 2) return reply(`Kirim perintah ${command} username`)
reply('Wait Terminating Account....')
axios
    .get(
      `https://${hostwhm}:2087/json-api/removeacct?api.version=1&username=${args[1]}`, authWhm )
    .then((e) => {
      if ([1, "1"].includes(e.data?.metadata?.result))
      reply(`Done User ${args[1]} Telah di Terminate`);
      else {
        reply(e.metadata);
        console.log(e.data);
      }
    })
break
            case 'waifu': {
            	m.reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `simplemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    caption: `Random Waifu`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                didin.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                didin.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `• Title : ${result.title}\n• Category : ${result.type}\n• Detail : ${result.source}\n• Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					didin.sendMessage(m.chat, teks, text,{quoted:m,detectLinks: false})                        
		            })              
					break
case 'tts': {
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             didin.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: m })
         	}
         break
            case 'gcsearch': {
                if (!text) throw 'Masukkan Query Title'
                anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)
                n = anu.result
                result = n[Math.floor(Math.random() * n.length)]
                let jwbn = `*Nama : ${result.nama}\n*Link : ${result.link}*`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, jwbn, nyoutube, m)
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `• Title : ${result.title}\n• Source : ${result.source}\n• Media Url : ${result.image}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//INI FITUR SHORT YA ADICK"//
            case 'tinyurl': {
                if (!isCreator) throw mess.owner
            	if (!text) throw 'Masukkan Query Title'
                let anu = await fetchJson(`https://api.akuari.my.id/short/${command}?link=${text}`)
                didin.sendMessage(m.chat, { text: anu.hasil }, {quoted:m })
            }
            break
           case 'bitly': {
                if (!isCreator) throw mess.owner
            	if (!text) throw 'Masukkan Query Title'
                let anu = await fetchJson(`https://didinbotz-apii.herokuapp.com/api/linkshort/bitly?link=${text}`)
                didin.sendMessage(m.chat, { text: anu.result }, {quoted:m })
            }
            break
          case 'cuttly': {
                if (!isCreator) throw mess.owner
            	if (!text) throw 'Masukkan Query Title'
                let anu = await fetchJson(`https://didinbotz-apii.herokuapp.com/api/linkshort/cuttly?link=${text}`)
                didin.sendMessage(m.chat, { text: anu.result }, {quoted:m })
            }
            break
//AKHIR FITUR SHORT YA ADICK" WKWKWK//
case 'ssweb': case 'ss': {
                if (!text) throw 'No Query Link'
                m.reply(mess.wait)
                didin.sendMessage(m.chat, { image: { url: `https://didinbotz-apii.herokuapp.com/api/tools/ssweb?link=${text}` }, caption: `SSWEB DONE` }, { quoted: m })
            }
            break
//INI FITUR SSWEB YA KONT//
//DIBAWAH FITUR STYLE TEXT YA. JING//
case 'style': case 'styletext': {
let { styletext } = require('./lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `あ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
//SELESAAAI//
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': {
                let anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/quotes`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.quote,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotes': {
var Quotes = JSON.parse(fs.readFileSync('./storage/quotes/quotes.json'))
var hasil = pickRandom(Quotes)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotesjawa': {
var jawa = JSON.parse(fs.readFileSync('./storage/quotes/quotesjawa.json'))
var hasil = pickRandom(jawa)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'katagalau': {
var Quotes = JSON.parse(fs.readFileSync('./storage/quotes/katagalau.json'))
var hasil = pickRandom(Quotes)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'dilan': {
var Dilan = JSON.parse(fs.readFileSync('./storage/quotes/dilan.json'))
var hasil = pickRandom(Dilan)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'katabucin': {
var teks = JSON.parse(fs.readFileSync('./storage/quotes/katabucin.json'))
var hasil = pickRandom(teks)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'bucin': {
var bucin = JSON.parse(fs.readFileSync('./storage/quotes/bucin.json'))
var hasil = pickRandom(bucin)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'katailham': {
var ilham = JSON.parse(fs.readFileSync('./storage/quotes/katailham.json'))
var hasil = pickRandom(ilham)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'renungan': {
var renungan = JSON.parse(fs.readFileSync('./storage/quotes/renungan.json'))
var hasil = pickRandom(renungan)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'gombalan': {
var gombalan = JSON.parse(fs.readFileSync('./storage/quotes/gombalan.json'))
var hasil = pickRandom(gombalan)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '⬡ BACK'}, type: 1}
]
let buttonMessage = {
text: `${hasil}`,
footer: mess.watermark,
buttons: buttons,
headerType: 2
}
didin.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//━━━━━━━━━━━━━━━[ TEXT PRO ]━━━━━━━━━━━━━━━━━//
            case 'berry': case 'glitch': case 'neon': case '3dboxtext': case 'pencil': case 'logobear': case '3dchristmas': case 'thunder': case 'magma': case 'strawberry': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                didin.sendMessage(m.chat, { image: { url: `https://api-didinbotz.herokuapp.com/api/textpro/${command}?text=${text}` }, caption: `textpro ${command}` }, { quoted: m })
            }
            break
            case 'glitchtiktok': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                didin.sendMessage(m.chat, { image: { url: `https://didinbotz-apiiiii.herokuapp.com/api/textpro/glitchtiktok?text=${text}&text2=${text}&apikey=didin` }, caption: `textpro ${command}` }, { quoted: m })
                }
                break
                        case 'candy': case 'christmas': case 'sparklechristmas': case 'holographic':
case 'deepsea': case 'blackpink': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'karbon': case 'colorneon': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case '3dbox': 
case 'transformer': case '3dstone': case 'greenneon': 
case 'neonlight': case 'harrypotter': case 'brokenglass': case 'papercut': case 'lion2': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case '3davengers': 
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'whitebear': 
case 'chocolate': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'sand': case 'glue': case '1917': case 'leaves': {
             if (!q) return m.reply(`Example : ${prefix + command} Didin`) 
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/colorneon/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
             if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
             if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
             if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
             didin.sendMessage(m.chat, { image: { url: anu }, caption: `Done | Follow Ig : @Didin_yt1` }, { quoted: m })
             }
             break
             case 'glitch2': case 'harrypot': case 'graffiti': case 'pornhub': case 'glitch3': case '3dspace': case 'lion': case 'wolf': case 'retro': case '8bit': {
             if(!q) return m.reply(`Use ${prefix + command} text1|text2`)
             m.reply(mess.wait)
             teks1 = q.split("|")[0]
             teks2 = q.split("|")[1]
             let link
             if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
             if (/harrypot/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/graffiti/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
             if (/pornhub/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
             if (/glitch2/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
             if (/3dspace/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
             if (/lion/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/wolf/.test(command)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
             if (/retro/.test(command)) link = 'https://textpro.me/create-3d-retro-text-effect-online-free-1065.html'
             if (/8bit/.test(command)) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
             let anu = await maker.textpro(link, [`${teks1}`,`${teks2}`])
             didin.sendMessage(m.chat, { image: { url: anu }, caption: `Made by Didin` }, { quoted: m })
             }
             break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
//INI FITUR Photooxy YA ADICK"//
case 'carved-wood': case 'picture-of-love': case 'naruto': case 'butterfly': case 'pubg': case 'illuminated-metallic': case 'flower-typography': case 'sweet-candy': case 'coffee-cup': case 'under-grass': case 'night-sky': case 'harry-potter': case 'metallic': case 'shadow': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                didin.sendMessage(m.chat, { image: { url: `https://didinbotz-apii.herokuapp.com/api/photooxy/${command}?text=${text}` }, caption: `textpro ${command}` }, { quoted: m })
            }
            break
case 'berry': case 'blackpink': case 'glitch': case 'neon': case '3dboxtext': case 'pencil': case 'logobear': case '3dchristmas': case 'thunder': case 'magma': case 'strawberry': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                didin.sendMessage(m.chat, { image: { url: `https://didinbotz-apii.herokuapp.com/api/textpro/${command}?text=${text}` }, caption: `textpro ${command}` }, { quoted: m })
            }
            break
//INI FITUR IMAGE MAKER YA ADICK"//
case 'wanted':
case 'darkness':
case 'blur':
case 'beautiful':
case 'circle':
case 'pixelate':
case 'rainbow':
case 'resize':
case 'trigger':
case 'invert':
case 'facepalm': {
if (!m.quoted && !text) throw `reply gambar/Sticker dengan caption ${prefix + command}`
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await didin.downloadAndSaveMediaMessage(quoted)
res = await TelegraPh(media)
kontol = `https://didinbotz-apii.herokuapp.com/api/maker/${command}?url=${res}`
xuntul = await didin.sendMessage(m.chat, { image: { url: kontol }}, {quoted:m})
}
            break
case 'tiktok]':{ 
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
    var button = [{ buttonId: `tiktokaudio`, buttonText: { displayText: `AUDIO‡` }, type: 1 }, { buttonId: `owner`, buttonText: { displayText: `OWNER‡` }, type: 1 }]
didin.sendMessage(m.chat, { caption: 'Tu Video Nya | Jangan Lupa subscribe yt Andy XD', video: { url: data.watermark }, buttons: button, footer: `© ANDYMRLIT‡`, mentions: [sender] })
})
}
break
case 'tiktokaudio':{
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
didin.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
//BATAS NYA DECK//
//━━━━━━━━━━━━━━━[ WEBZONE ]━━━━━━━━━━━━━━━━━//
//━━━━━━━━━━━━━━━[ RANDOM ASUPAN ]━━━━━━━━━━━━━━━━━//
case 'asupan':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var asupan = JSON.parse(fs.readFileSync('./storage/asupan/asupan.json'))
var hasil = pickRandom(asupan)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanghea':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var gheayubi = JSON.parse(fs.readFileSync('./storage/asupan/gheayubi.json'))
var hasil = pickRandom(gheayubi)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanbocil':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var bocil = JSON.parse(fs.readFileSync('./storage/asupan/bocil.json'))
var hasil = pickRandom(bocil)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanukhty':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ukhty = JSON.parse(fs.readFileSync('./storage/asupan/ukhty.json'))
var hasil = pickRandom(ukhty)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupansantuy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var santuy = JSON.parse(fs.readFileSync('./storage/asupan/santuy.json'))
var hasil = pickRandom(santuy)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupankayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kayes = JSON.parse(fs.readFileSync('./storage/asupan/kayes.json'))
var hasil = pickRandom(kayes)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanrika':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var rikagusriani = JSON.parse(fs.readFileSync('./storage/asupan/rikagusriani.json'))
var hasil = pickRandom(rikagusriani)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupannotnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./storage/asupan/asupannotnot.json'))
var hasil = pickRandom(notnot)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'storyanime':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var storyanime = JSON.parse(fs.readFileSync('./storage/video/storyanime.js'))
var hasil = pickRandom(storyanime)
didin.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
         case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6285822347348`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
case 'jadibot': {
if (!isPremium) return sendButMessage (m.chat, prem1, prem2, prem3, { quoted:m})
jadibot(didin, m, m.chat)
}
break
case 'listjadibot':
try {
let user = [... new Set([...global.conns.filter(didin => didin.user).map(didin => didin.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
let y = await didin.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
didin.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break
case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    didin.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                didin.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
case 'darkjokes': case 'mountain': case 'meme': case 'aestatic': case 'art': case 'boneka': case 'cyber': case 'doraemon': case 'exo': case 'wallpapergame': case 'islamic': case 'kartun': case 'katakata': case 'kpop': case 'mobil': case 'motor': case 'pokemon': case 'programming': case 'pubg': case 'quotesyt': case 'stanic': case 'tatasurya': case 'technology': case 'wallhp': case 'wallml': case 'wallnime': case 'yulibocil': 
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var darkjokes = JSON.parse(fs.readFileSync(`./storage/wallpaper/${command}.json`))
var hasil = pickRandom(darkjokes)
didin.sendMessage(m.chat, { caption: mess.success, image: { url: hasil }, buttons: but, footer: mess.watermark }, { quoted: m })
break
//ANJAY ALOK//
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'f22b3c4c2c'))
                let msg = await didin.sendImage(m.chat, anu.result.img, `• Title : ${anu.result.lagu}\n• Album : ${anu.result.album}\n• Singer : ${anu.result.penyanyi}\n• Publish : ${anu.result.publish}\n• Lirik :\n${anu.result.lirik.result}`, m)
                didin.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'f22b3c4c2c'))
                let msg = await didin.sendImage(m.chat, anu.result.thumb, `• Title : ${anu.result.title}\n• Url : ${isUrl(text)[0]}`)
                didin.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'f22b3c4c2c'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                didin.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'f22b3c4c2c'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await didin.sendMessage(m.chat, buttonMessage, { quoted: m })
                didin.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'f22b3c4c2c'))
                didin.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `• Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pinterest': {
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
didin.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
• Title : ${anu.title}
• Author : ${anu.author.name}
• Like : ${anu.like}
• Caption : ${anu.caption}
• Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: didin.user.name,
			buttons,
			headerType: 4
		    }
		    didin.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        didin.sendMessage(m.chat, { image: { url }, caption: `• Title : ${anu.title}\n• Author : ${anu.author.name}\n• Like : ${anu.like}\n• Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		didin.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
//INI FITUR ISLAMI KEK NYA WORK SEMUA\nKalo Eror Fix Sendiri ya teman wk//
				case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return m.reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		didin.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
case 'hadits': case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
let { number, arab, id } = res.result.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
didin.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tafsirsurah': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
case 'kisahnabi': {
if (!text) return m.reply(`Mau Kisah Nabi Siapa?\n\nList Nama Nabi :\n1. adam\n2. idris\n3. nuh\n4. hud\n5. saleh\n6. ibrahim\n7. luth\n8. ismail\n9. ishaq\n10. yaqub\n11. yusuf\n12. ayub\n13. syuaib\n14. musa\n15. harun\n16. dzulkifli\n17. daud\n18. sulaiman\n19. ilyas\n20. ilyasa\n21. yunus\n22. zakaria\n23. yahya\n24. musa\n25. muhammad\n\nExample: ${prefix+command} Muhammad`)
var tipe = (args[0] || '').toLowerCase()
switch (tipe) {
case 'adam': case 'idris': case 'nuh': case 'hud': case 'saleh': case 'ibrahim': case 'luth': case 'ismail': case 'ishaq': case 'yaqub': case 'yusuf': case 'ayub': case 'syuaib': case 'musa': case 'harun': case 'dzulkifli': case 'daud': case 'sulaiman': case 'ilyas': case 'ilyasa': case 'yunus': case 'zakaria': case 'yahya': case 'musa': case 'muhammad': 
m.reply(mess.wait)
let kisah = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Islami/${text}.json`)
resNabi = `Kisah Nabi ${text}

❏ *Nama* : ${kisah.name}
❏ *Kelahiran* : ${kisah.thn_kelahiran}
❏ *Usia* : ${kisah.usia}
❏ *Tempat* : ${kisah.tmp}
❏ *Cerita* : ${kisah.description}
`
didin.sendMessage(m.chat, { image: { url: `${kisah.image_url}` }, caption: resNabi }, { quoted: m })
 }
}
break
case 'niatsolat': {
if (!text) return m.reply(`Mau Niat Solat Apa?\n\nList Niat Solat :\n1. subuh\n2. dzuhur\n3. ashar\n4. maghrib\n5. isya\n\nExample: ${prefix+command} subuh`)
var tipe = (args[0] || '').toLowerCase()
switch (tipe) {
case 'subuh': case 'dzuhur': case 'ashar': case 'maghrib': case 'isya':
m.reply(mess.wait)
let niat = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Niatsolat/${text}.json`)
let resniat = `Niat Solat ${text}
  
❏ *Nama* : ${niat.name}
❏ *Arabic* : ${niat.arabic}
❏ *Latin* : ${niat.latin}
❏ *Indonesia* : ${niat.terjemahan}
`
m.reply(resniat)
 }
}
break
case 'asmaulhusna': {
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/religi/asmaulhusna.json')
let capt = `Asmaul Husna:\n\n`
for (let i of anu) {
capt += `❏ *Nomor*: ${i.index}\n`
capt += `❏ *Latin*: ${i.latin}\n`
capt += `❏ *Arab*: ${i.arabic}\n`
capt += `❏ *Arti ID*: ${i.translation_id}\n`
capt += `❏ *Arti EN*: ${i.translation_en}\n\n━━━━━━━━━━━━━━━━━━━━━━━\n`
}
m.reply(capt)
}
break
case 'jadwalsholat':
case 'jadwalshalat':
case 'jadwalsalat': {
if (!text) throw `Contoh : ${prefix + command} Padang`
let res = await dani.jadwalsholat(text)  
let capt = `Jadwal Sholat Kota : ${text}\n\n`
let i = res
capt += `Tanggal : ${i.tanggal}\n`
capt += `Imsak : ${i.imsyak}\n`
capt += `Subuh : ${i.subuh}\n`
capt += `Dzuhur : ${i.dzuhur}\n`
capt += `Ashar : ${i.ashar}\n`
capt += `Maghrib : ${i.maghrib}\n`
capt += `Isya : ${i.isya}\n\n`
m.reply(capt)
}
break
case 'ceramah': {
if (!text) return m.reply(`Mau Ceramah Dari Siapa?\n\nList Ustadz :\n1. abdulsomad\n2. adihidayat\n3. felixsiauw\n4. khalidbasalamah\n\nExample: ${prefix+command} abdulsomad`)
var tipe = (args[0] || '').toLowerCase()
switch (tipe) {
case 'abdulsomad': case 'adihidayat': case 'felixsiauw': case 'khalidbasalamah': 
m.reply(mess.wait)
let ceramah = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Ceramah/${text}.json`)
let rescera = `Ceramah Dari *${ceramah.name}*

${ceramah.ceramah}`
m.reply(rescera)
}
}
break
//SELESAI//
//━━━━━━━━━━━━━━━[ RANDOM CERPEN ]━━━━━━━━━━━━━━━━━//
case 'cerpen-anak':{
let hasil = await cerpen(`anak`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let hasil = await cerpen(`bahasa daerah`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let hasil = await cerpen(`bahasa Inggris`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let hasil = await cerpen(`bahasa jawa`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let hasil = await cerpen(`bahasa sunda`)
m.reply(`
 ❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-budaya':{
let hasil = await cerpen(`budaya`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cinta':{
let hasil = await cerpen(`cinta`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaislami':{
let hasil = await cerpen(`cinta islami`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintapertama':{
let hasil = await cerpen(`cinta pertama`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let hasil = await cerpen(`cinta romantis`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasedih':{
let hasil = await cerpen(`cinta sedih`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let hasil = await cerpen(`Cinta segitiga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasejati':{
let hasil = await cerpen(`cinta sejati`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-galau':{
let hasil = await cerpen(`galau`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-gokil':{
let hasil = await cerpen(`gokil`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-inspiratif':{
let hasil = await cerpen(`inspiratif`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-jepang':{
let hasil = await cerpen(`jepang`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kehidupan':{
let hasil = await cerpen(`kehidupan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-keluarga':{
let hasil = await cerpen(`keluarga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let hasil = await cerpen(`kisah nyata`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-korea':{
let hasil = await cerpen(`korea`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kristen':{
let hasil = await cerpen(`kristen`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-liburan':{
let hasil = await cerpen(`liburan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-malaysia':{
let hasil = await cerpen(`malaysia`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-mengharukan':{
let hasil = await cerpen(`mengharukan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-misteri':{
let hasil = await cerpen(`misteri`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-motivasi':{
let hasil = await cerpen(`motivasi`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasihat':{
let hasil = await cerpen(`nasihat`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let hasil = await cerpen(`nasionalisme`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-olahraga':{
let hasil = await cerpen(`olahraga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penantian':{
let hasil = await cerpen(`penantian`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pendidikan':{
let hasil = await cerpen(`pendidikan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengalaman':{
let hasil = await cerpen(`pengalaman pribadi`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let hasil = await cerpen(`pengorbanan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penyesalan':{
let hasil = await cerpen(`penyesalan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perjuangan':{
let hasil = await cerpen(`perjuangan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perpisahan':{
let hasil = await cerpen(`perpisahan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-persahabatan':{
let hasil = await cerpen(`persahabatan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-petualangan':{
let hasil = await cerpen(`petualangan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-ramadhan':{
let hasil = await cerpen(`ramadhan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-remaja':{
let hasil = await cerpen(`remaja`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rindu':{
let hasil = await cerpen(`rindu`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-romantis':{
let hasil = await cerpen(`romantis`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sastra':{
let hasil = await cerpen(`sastra`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sedih':{
let hasil = await cerpen(`sedih`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sejarah':{
let hasil = await cerpen(`sejarah`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
//DDONE//
//INI FITUR STICKER YA DECK//
case 'patrick':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/patrick?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'lonet':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/lonte?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'lidi':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/manusia-lidi?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'kucing':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kucing?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'sponbob':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/sponsbob?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'kawansponbob':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kawan-sponsbob?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'popoci':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/popoci?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'meow':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/meow?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'menjamet':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/menjamet?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'tyni':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/tyni?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'gojosatoru':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/gojosatoru?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'hopeboy':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/hope-boy?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'doge':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/doge?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'dinokuning':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/dyno-kuning?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'nicholas':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/nicholas?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'krrobot':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kr-robot?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'jiisho':
m.reply(mess.wait)
didin.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/jisoo?apikey=dhmDlD5x`}}, {quoted: m })
break

//done//
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await didin.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                didin.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                didin.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                didin.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
// INI FITUR STORE GAME YA JING //
case 'proses': {
min = `• SEND YOUR ACCOUNT ID BY CLIKING THE SEND ID BUTTON\n\n•FOR PAYEMENT PLEASE CLICK THE PAY BOUTTON\n\nThank you`
let buttons = [{ buttonId: `owner`, buttonText: {displayText: 'sᴇɴᴅ ɪᴅ‡'}, type: 1},{buttonId: `bayar`, buttonText: {displayText: 'PAY ANDY‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, min, nyoutube, m)
            }
            break
case 'ff':{
   const sections = [
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "110 Diamonds", 
	    rowId: `${prefix}proses`,
	   },	    
     ]
    },
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "200 Diamonds", 
	    rowId: `${prefix}proses`,
	   },	    
     ]
    },
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "320 Diamonds", 
	    rowId: `${prefix}proses`,
	   },	    
     ]
    },
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "1080 Diamonds", 
	    rowId: `${prefix}proses`,
	   },	    
     ]
    },
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "1200 Diamonds", 
	    rowId: `${prefix}proses`,
	   },	    
     ]
    },
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "5200 Diamonds", 
	    rowId: `${prefix}proses`,
	   },	    
     ]
    }     
    ]

  const listMessage = {
   text: `*_Yoo bro ${pushname}_*\n*_Ini List Diamond Pou Free Fire_*`,
   footer: "Andy XD‡",
   title: "",
   buttonText: "Price Check !!",
   sections
   }

  didin.sendMessage(m.chat, listMessage, {quoted:m})


  }
break
//fitur menfess//
        case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kk ada Menfess nih!!\n\nDari :  _${saking}_  \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 var button = [{ buttonId: `menfesconfirm`, buttonText: { displayText: `CONFIRM‡` }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: `SEWABOT‡` }, type: 1 }]
					didin.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: button, footer: `Andy XD\nLink Channel YouTube\nhttps://youtube.com/@rismamylove` })
				m.reply(`Sukses Mengirim Menfess!!`)
				break

			case 'menfesconfirm':
 				 didin.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🌹`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
				break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await didin.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, didin.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await didin.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, didin.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await didin.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, didin.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, didin.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await didin.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await didin.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, didin.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await didin.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, didin.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, didin.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                didin.public = true
                m.reply('*Sukse Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                didin.public = false
                m.reply('*Sukses Change To Self Usage*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                didin.sendContact(m.chat, global.owner, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                didin.sendListMsg(m.chat, `pilih aja *Din* Setmenu nya!`, didin.user.name, `*Hello Didin* !`, `Pilih Din`, sections, m)
                }
            }
            break
            case 'sponsor': {
            if (!m.isGroup) throw mess.group
            let qontak = `6285718971848@s.whatsapp.net`
let dana = `6281911500445@s.whatsapp.net`
let shopeeotp = `6285574670796@s.whatsapp.net`
let shopee = `622150996855@s.whatsapp.net`
let tokopedia = `6281197911081@s.whatsapp.net`
let smartfrend = `628881212888@s.whatsapp.net`
let getcontact = `447990653714@s.whatsapp.net`
let facebook = `447710173736@s.whatsapp.net`
let pasarpolis = `6287700178000@s.whatsapp.net`
let kominfo = `628119224545@s.whatsapp.net`
let alfamart = `628111500959@s.whatsapp.net`
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `*Bot by Andy XD Dev* 
-Creator :  @${ownernya.split('@')[0]}\n-Lu : @${me.split('@')[0]}\n-Powered  : @${ini_mark.split('@')[0]}\n- :  @${qontak.split('@')[0]}\n- :  @${dana.split('@')[0]}\n- :  @${shopeeotp.split('@')[0]}\n- :  @${shopee.split('@')[0]}\n- :  @${tokopedia.split('@')[0]}\n- :  @${smartfrend.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${facebook.split('@')[0]}\n- :  @${pasarpolis.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${kominfo.split('@')[0]}\n- :  @${alfamart.split('@')[0]}`
            let ments = [ownernya, me, ini_mark, qontak, dana, shopeeotp, shopee, tokopedia, smartfrend, getcontact, facebook, pasarpolis, kominfo, alfamart]
            let buttons = [
                        { buttonId: 'tesrow', buttonText: { displayText: '📖List Menu' }, type: 1 }
                    ]
                    await didin.sendButtonText(m.chat, buttons, jawab, didin.user.name, m, {mentions: ments})
            }
            break
//INI FITUR REQUEST YA ADICK"//
case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'tesrow', buttonText: { displayText: 'MENU‡' }, type: 1 },{ buttonId: 'DONASI', buttonText: { displayText: 'DONASI' }, type: 1 }]
            await didin.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: m })
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*`
            await didin.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: m })
            }
            break
case 'reeport': {
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
didin.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
didin.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
//INI UNTUK FITUR STORE YA KAWAN//
case 'store':{
  // send a list message!
   const sections = [
    {
	title: "Store -1",
	rows: [
	   {
	    title: "Free Fire", 
	    rowId: `${prefix}ff`,
	    description: "List Diamond Free Fire",
	   },	    
     ]
    },
    {
	title: "Store -2",
	rows: [
	   {
	    title: "Mobile Legends", 
	    rowId: `${prefix}ml`,
	    description: "List Harga Diamond Mobile Legends",
	   },	    
     ]
    },
    {
	title: "Store -3",
	rows: [
	   {
	    title: "Call Of Duty", 
	    rowId: `${prefix}cod`,
	    description: "List Harga CP Call Of Duty",
	   },	    
     ]
    },
    {
	title: "Store -4",
	rows: [
	   {
	    title: "PUBG MOBILE", 
	    rowId: `${prefix}pubg`,
	    description: "List Harga UC PUBG MOBILE",
	   },	    
     ]
    },
    {
	title: "Store -5",
	rows: [
	   {
	    title: "Point Blank", 
	    rowId: `${prefix}pb`,
	    description: "List Harga CASH Point Blank",
	   },	    
     ]
    }     
    ]

  const listMessage = {
   text: `*_Welcome To Andy XD Store_*`,
   footer: "Andy XD‡",
   title: "",
   buttonText: "Please Select !!",
   sections
   }

  didin.sendMessage(m.chat, listMessage, {quoted:m})


  }
break
//ini MENU NYA YA ADICK"//
case 'menu': { 
const Jimp = require('jimp')
didin.sendMessage(m.chat, { react: { text: "🌸", key: m.key }})
const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
buffer = global.thumb
  	anu = `*YOOO BRO ${pushname}\n I'm ANDY XD WhatsApp that helps you make it easier to make stickers etc.`
let buttons = [{ buttonId: 'tesrow', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: 'OTHER' }, type: 1 }]
    didin.sendMessage(m.chat, { caption: `${anu}`, location: { jpegThumbnail: await reSize(buffer, 200, 200) }, buttons: buttons, footer:  `By: Andy XD`, mentions: [m.sender] })
}
break
case 'rules': {
const Jimp = require('jimp')
const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
buffer = global.rules
  	anu = `
⚠️ *TERMS AND CONDITIONS* ⚠️

* STRICTLY PROHIBITED TO SEND VIRTEX AND THE LIKE WHICH MAKING THE SERVER DOWN OR BOT CRASH.*

 USERS THAT SEND PERSONAL THINGS OR DATA WILL NOT BE STORED BY THIS BOTS, AND WILL NOT BE RESPONSIBLE FOR SUCH PERSONAL DATA!*
 
  WE NEVER ASKED YOU
TO PROVIDE PERSONAL INFORMATION.*

RULES! *

Do not spam bro.
 SANCTION WARN/SOFT BLOCK

2. DO NOT PHONE BOTS.
 SANCTION: SOFT BLOCK

3 DO NOT EXPLOIT THE BOAT.
PERMANENT BLOCK SANCTIONS
___________________

NOTE: THIS BOT USES AUTOREAD OR DIRECTLY READS MESSAGES THAT USERS SEND.`
    var button = [{ buttonId: `sewabot`, buttonText: { displayText: `BUYBOT‡` }, type: 1 }, { buttonId: `DONASI`, buttonText: { displayText: `DONASI‡` }, type: 1 }]
didin.sendMessage(m.chat, { caption: `${anu}`, location: { jpegThumbnail: await reSize(buffer, 200, 200) }, buttons: button, footer:  mess.watermark, mentions: [m.sender] })
}
break
case 'tesrow':{
let sections = [

                {

                title: "sᴛᴀᴛᴜs",

                rows: [
{title: "【️💌】Creator ‹", rowId: `owner`, description: `ʀᴏᴏᴍ ᴅᴇᴠᴇʟᴏᴘᴇʀ><`},
{title: "【️☄️】ʀᴇǫᴜᴇsᴛ ‹", rowId: `request`, description: `BOT BY ANDYMRLIT`},
{title: "【️📩】ʀᴇᴘᴏʀᴛ ‹", rowId: `report`, description: `BOT BY ANDYMRLIT`},
{title: "【️💻】ʙᴏᴛ sᴛᴀᴛᴜs ‹", rowId: `botinfo`, description: `BOT BY ANDYMRLIT`},
]
},
  {
title: "BOT BY ANDYMRLIT",
rows: [
{title: "【⚙️】› ᴍ ᴀ ɪ ɴ | ᴍ ᴇ ɴ ᴜ ‹", rowId: `mainmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🏢】› ɢ ʀ ᴏ ᴜ ᴘ ‹", rowId: `grupmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【📲】›  ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ ‹", rowId: `downloadmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🛠️】› ᴏ ᴡ ɴ ᴇ ʀ ‹", rowId: `ownermenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🔎】› s ᴇ ᴀ ʀ ᴄ ʜ ‹", rowId: `searchmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🕋】› ɪ s ʟ ᴀ ᴍ ɪ ‹", rowId: `islamimenu`, description: `BOT BY ANDYMRLIT`},
{title: "【💬】› ᴀ ɴ ᴏ ɴ ʏ ᴍ ᴏ ᴜ s ‹", rowId: `anonmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【📁】› ᴅ ᴀ ᴛ ᴀ ʙ ᴀ s ᴇ ‹ ", rowId: `dbmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🎧】› s ᴏ ᴜ ɴ ᴅ ‹", rowId: `soundmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🔖】 ʀ ᴀ ɴ ᴅ ᴏ ᴍ ‹", rowId: `randommenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🎙️】› ᴠ ᴏ ɪ ᴄ ᴇ  ‹", rowId: `vcmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🕹️】› ᴄ ᴏ ɴ ᴠ ᴇ ʀ ᴛ ‹", rowId: `convertmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🧩】› ғ ᴜ ɴ ‹", rowId: `funmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🎥】› ᴘ ʜ ᴏ ᴛ ᴏ | ᴏ x ʏ ‹", rowId: `photomenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🗡️】› ᴛ ᴇ x ᴛ | ᴘ ʀ ᴏ ‹", rowId: `textpro`, description: `BOT BY ANDYMRLIT`},
{title: "【🔗️】› s ʜ ᴏ ʀ ᴛ ‹", rowId: `shortmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【📝️】› ᴄ ᴇ ʀ ᴘ ᴇ ɴ ‹", rowId: `cerpenmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【👀】› ᴀ s ᴜ ᴘ ᴀ ɴ ‹", rowId: `asupanmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🌌】› ɪ ᴍ ᴀ ɢ ᴇ ‹", rowId: `randomimage`, description: `BOT BY ANDYMRLIT`},
{title: "【🌀】› ᴀ ɴ ɪ ᴍ ᴇ ‹", rowId: `animemenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🎗️】› ɢ ᴀ ᴍ ᴇ  ‹", rowId: `gamemenu`, description: `BOT BY ANDYMRLIT`},
{title: "【📌️】› ᴄ ᴇ ᴋ | ᴍ ᴇ ɴ ᴜ ‹", rowId: `cekmenu`, description: `BOT BY ANDYMRLIT`},
{title: "【🔮】› ᴘ ʀ ɪ ᴍ ʙ ᴏ ɴ ‹", rowId: `primbonmenu`, description: `BOT BY ANDYMRLIT`}
]
},
  {
title: "ɪɴғᴏ",
rows: [
{title: "【🔭】sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ", rowId: `sc`, description: `BOT BY ANDYMRLIT`},
{title: "【💰】ᴅᴏɴᴀsɪ", rowId: `donasi`, description: `BOT BY ANDYMRLIT`},
{title: "【❗】ʀᴜʟᴇs", rowId: `rules`, description: `BOT BY ANDYMRLIT`},
{title: "【🥇】ᴄᴏɴᴛʀɪʙᴜᴛᴏʀ", rowId: `tqto`, description: `BOT BY ANDYMRLIT`},
{title: "【🌸】ɢʀᴏᴜᴘ ʙᴏᴛ", rowId: `groupbot`, description: `BOT BY ANDYMRLIT`},
     ]
    }     
    ]

didin.sendListMsg(m.chat, `*_Bro 🌚 ${pushname} ${ucapanWaktu}_*\n\n_I am ANDY XD‡ Bot whatsapp multi-device Developped BY ANDYMRLIT*`, '', '', `Touch me ^_^ `, sections, m)
}
break
case 'gamemenu':{
  // send a list message!
   const sections = [
    {
	title: "Game 1",
	rows: [
	   {
	    title: "Tebak Gambar", 
	    rowId: `${prefix}tebakgambar`,
	   },	    
     ]
    },
    {
	title: "Game 2",
	rows: [
	   {
	    title: "Tebak Lirik", 
	    rowId: `${prefix}tebak lirik`,
	   },	    
     ]
    },
    {
	title: "Game 3",
	rows: [
	   {
	    title: "tictactoe", 
	    rowId: `${prefix}tictactoe`,
	   },	    
     ]
    },
    {
	title: "Game 4",
	rows: [
	   {
	    title: "Tebak Kata", 
	    rowId: `${prefix}tebak kata`,
	   },	    
     ]
    },
    {
	title: "Game 5",
	rows: [
	   {
	    title: "Tebak Lontong", 
	    rowId: `${prefix}tebak lontong`,
	   },	    
     ]
    },
    {
	title: "Game 6",
	rows: [
	   {
	    title: "Tebak Lagu", 
	    rowId: `${prefix}tebak lagu`,
      },	    
     ]
    },
    {
	title: "Game 7",
	rows: [
	   {
	    title: "Tebak Kalimat", 
	    rowId: `${prefix}tebak kalimat`,
      },	    
     ]
    },
    {
	title: "Game 8",
	rows: [
	   {
	    title: "Suit PvP", 
	    rowId: `${prefix}suitpvp`,
	    description: "",
	   },	    
     ]
    }     
    ]

  const listMessage = {
   text: `*_Yoo bro ${pushname} ${ucapanWaktu}_*\n\n_The following games are available on Andy XD‡_`,
   footer: "Andy XD‡",
   title: "",
   buttonText: "Buka!",
   sections
   }

  didin.sendMessage(m.chat, listMessage, {quoted:m})


  }
break
case 'sc':{
let sections = [

                {

                title: "THANK TO",

                rows: [

                {title: "Contributor", rowId: `${prefix}tqto`, description: ``},

                ]

                },

                ]

                didin.sendListMsg(m.chat, `*❏ Andy XD‡*

This bot was made using *NodeJS* with the help of *Baileys* as Whatsapp Web API and modified from *Hisoka Morou ( DikaArdnt )

BECAUSE THERE IS NO SCRIPT SO JUST FOLLOW MY INSTAGRAM
© Andy XD‡`, ' ', ' ', `Open Open!`, sections, m)
       }
break
case 'donasi': case 'donate': case 'donasi': case 'donasi': {
                didin.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/d460e086f9f9bf6b04e17.jpg' }, caption: `*Hi Bro ${m.pushName}*\n*_Jika ingin Donasi Silahkan Scan Gambar Diatas_*

*_Atau Via_*
- Dana : 50947477839
- OVO : 50941411147
- Saweria : https://saweria.co/dutagamer

*_Thank you for those who have donated_*\n` }, { quoted: m })
            }
            break
case 'sewabot':{
let sections = [

                {

                title: "✧──────[ SEWABOT ]──────✧",

                rows: [

                {title: "OWNER", rowId: `${prefix}owner`, description: ``},
                
                {title: "Official Bot WhatsApp", rowId: `${prefix}groupbot`, description: ``},

                ]

                },

                ]

                didin.sendListMsg(m.chat, `*────── 「 BUY BOT 」 ──────*
                
our rental list please select
• 1 Week 50 gdes
• 2 Weeks 100 gdes
┗━━━•❅•°•❈`, ' ', ' ', `Look!`, sections, m)
       }
break
            case 'grupmenu': {
goup = `「 *Group Menu* 」
あ ${prefix}linkgroup
あ ${prefix}ephemeral [option]
あ ${prefix}setppgc [image]
あ ${prefix}setname [text]
あ ${prefix}setdesc [text]
あ ${prefix}group [option]
あ ${prefix}editinfo [option]
あ ${prefix}add @user
あ ${prefix}kick @user
あ ${prefix}hidetag [text]
あ ${prefix}tagall [text]
あ ${prefix}antilink [on/off]
あ ${prefix}mute [on/off]
あ ${prefix}promote @user
あ ${prefix}demote @user
あ ${prefix}vote [text]
あ ${prefix}devote
あ ${prefix}upvote
あ ${prefix}cekvote
あ ${prefix}hapusvote
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Bro ${pushname} |${ucapanWaktu}`,
  caption: goup,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'soundmenu': {
sond = `「 *Sound Menu* 」
あ ${prefix}sound1
あ ${prefix}sound2
あ ${prefix}sound3
あ ${prefix}sound4
あ ${prefix}sound5
あ ${prefix}sound6
あ ${prefix}sound7
あ ${prefix}sound8
あ ${prefix}sound9
あ ${prefix}sound10
あ ${prefix}sound11
あ ${prefix}sound12
あ ${prefix}sound13
あ ${prefix}sound14
あ ${prefix}sound15
あ ${prefix}sound16
あ ${prefix}sound17
あ ${prefix}sound18
あ ${prefix}sound19
あ ${prefix}sound20
あ ${prefix}sound21
あ ${prefix}sound22
あ ${prefix}sound23
あ ${prefix}sound24
あ ${prefix}sound25
あ ${prefix}sound26
あ ${prefix}sound27
あ ${prefix}sound28
あ ${prefix}sound29
あ ${prefix}sound30
あ ${prefix}sound31
あ ${prefix}sound32
あ ${prefix}sound33
あ ${prefix}sound34
あ ${prefix}sound35
あ ${prefix}sound36
あ ${prefix}sound37
あ ${prefix}sound38
あ ${prefix}sound39
あ ${prefix}sound40
あ ${prefix}sound41
あ ${prefix}sound42
あ ${prefix}sound43
あ ${prefix}sound44
あ ${prefix}sound45
あ ${prefix}sound46
あ ${prefix}sound47
あ ${prefix}sound48
あ ${prefix}sound49
あ ${prefix}sound50
あ ${prefix}sound51
あ ${prefix}sound52
あ ${prefix}sound53
あ ${prefix}sound54
あ ${prefix}sound55
あ ${prefix}sound56
あ ${prefix}sound57
あ ${prefix}sound58
あ ${prefix}sound59
あ ${prefix}sound60
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: sond,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
case 'cerpenmenu': {
pen = `「 *RANDOM CERPEN* 」
あ ${prefix}cerpen
あ ${prefix}cerpen-sejarah 
あ ${prefix}cerpen-sedih
あ ${prefix}cerpen-sastra
あ ${prefix}cerpen-romantis
あ ${prefix}cerpen-rohani
あ ${prefix}cerpen-rindu
あ ${prefix}cerpen-remaja
あ ${prefix}cerpen-ramadhan
あ ${prefix}cerpen-petualangan
あ ${prefix}cerpen-persahabatan
あ ${prefix}cerpen-perpisahan
あ ${prefix}cerpen-perjuangan
あ ${prefix}cerpen-penyesalan
あ ${prefix}cerpen-pengorbanan
あ ${prefix}cerpen-pengalaman
あ ${prefix}cerpen-pendidikan
あ ${prefix}cerpen-penantian
あ ${prefix}cerpen-patahhati
あ ${prefix}cerpen-olahraga
あ ${prefix}cerpen-nasionalisme
あ ${prefix}cerpen-nasihat
あ ${prefix}cerpen-motivasi
あ ${prefix}cerpen-misteri
あ ${prefix}cerpen-mengharukan
あ ${prefix}cerpen-malaysia
あ ${prefix}cerpen-liburan
あ ${prefix}cerpen-kristen
あ ${prefix}cerpen-korea
あ ${prefix}cerpen-kisahnyata
あ ${prefix}cerpen-keluarga
あ ${prefix}cerpen-kehidupan
あ ${prefix}cerpen-jepang
あ ${prefix}cerpen-inspiratif
あ ${prefix}cerpen-gokil
あ ${prefix}cerpen-galau
あ ${prefix}cerpen-cintasejati
あ ${prefix}cerpen-cintasegitiga
あ ${prefix}cerpen-cintasedih
あ ${prefix}cerpen-cintaromantis
あ ${prefix}cerpen-cintapertama
あ ${prefix}cerpen-cintaislami
あ ${prefix}cerpen-cinta
あ ${prefix}cerpen-budaya
あ ${prefix}cerpen-bahasasunda
あ ${prefix}cerpen-bahasajawa
あ ${prefix}cerpen-bahasainggris
あ ${prefix}cerpen-bahasadaerah
あ ${prefix}cerpen-anak
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: pen,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'photomenu': {
pimbon = `「 *Photo Oxy* 」
あ ${prefix}naruto
あ ${prefix}picture-of-love
あ ${prefix}coffee-cup
あ ${prefix}butterfly
あ ${prefix}metallic
あ ${prefix}night-sky
あ ${prefix}under-grass
あ ${prefix}harry-potter
あ ${prefix}sweet-candy
あ ${prefix}carved-wood
あ ${prefix}illuminated-metallic
あ ${prefix}flower-typography
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: pimbon,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'cekmenu': {
pimbon = `「 *CEK MENU* 」
あ${prefix}goblokcek 
あ ${prefix}jelekcek 
あ ${prefix}rate
あ ${prefix}haram
あ ${prefix}gaycek
あ ${prefix}lesbicek
あ ${prefix}gantengcek 
あ ${prefix}cantikcek
あ ${prefix}begocek 
あ ${prefix}suhucek
あ ${prefix}pintercek
あ ${prefix}jagocek
あ ${prefix}nolepcek
あ ${prefix}babicek
あ ${prefix}bebancek
あ ${prefix}baikcek
あ ${prefix}jahatcek
あ ${prefix}anjingcek
あ ${prefix}haramcek
あ ${prefix}pakboycek
あ ${prefix}pakgirlcek
あ ${prefix}sangecek 
あ ${prefix}bapercek
あ ${prefix}fakboycek
あ ${prefix}alimcek
あ ${prefix}suhucek
あ ${prefix}fakgirlcek
あ ${prefix}kerencek
あ ${prefix}wibucek
あ ${prefix}pasarkascek
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: pimbon,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'downloadmenu': {
dwnloader = `「 *Downloader Menu* 」
あ ${prefix}tiktok [url]
あ ${prefix}tiktokaudio [url]
あ ${prefix}wikimedia [url]
あ ${prefix}pinterest
あ ${prefix}umma [url]
あ ${prefix}ytmp3 [url]
あ ${prefix}ytmp4 [url]
あ ${prefix}gitclone [url]
あ ${prefix}umma [url]
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: dwnloader,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'searchmenu': {
sarch = `「 *Search Menu* 」
あ ${prefix}play [query]
あ ${prefix}yts [query]
あ ${prefix}google [query]
あ ${prefix}gimage [query]
あ ${prefix}pinterest [query]
あ ${prefix}wallpaper [query]
あ ${prefix}wikimedia [query]
あ ${prefix}ringtone [query]
あ ${prefix}ssweb [ link ]
あ ${prefix}gcsearch [query]
あ ${prefix}brainly
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: sarch,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'randommenu': {
rndom = `「 *Random Menu* 」
あ ${prefix}coffe
あ ${prefix}quotesanime
あ ${prefix}motivasi
あ ${prefix}quotes
あ ${prefix}quotesjawa
あ ${prefix}katagalau
あ ${prefix}dilan
あ ${prefix}katabucin
あ ${prefix}bucin
あ ${prefix}katailham
あ ${prefix}renungan
あ ${prefix}gombalan
あ ${prefix}couple
あ ${prefix}anime
あ ${prefix}waifu
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: rndom,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'hostingmenu': {
rndom = `「 *Hosting Menu* 」
あ ${prefix}createcp
あ ${prefix}listcp
あ ${prefix}termintate
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
            await didin.sendButtonText(m.chat, buttons, rndom, nyoutube, m)
            }
            break
            case 'textpro': {
txtpro = `「 *Text Pro Menu* 」
あ ${prefix}blackpink
あ ${prefix}glitch
あ ${prefix}berry
あ ${prefix}pencil
あ ${prefix}3dboxtext
あ ${prefix}neon
あ ${prefix}logobear
あ ${prefix}thunder
あ ${prefix}3dchristmas
あ ${prefix}strawberry
あ ${prefix}magma
あ ${prefix}pornhub
あ ${prefix}candy
あ ${prefix}christmas
あ ${prefix}sparklechristmas
あ ${prefix}holographic
あ ${prefix}deepsea
あ ${prefix}scifi
あ ${prefix}rainbow
あ ${prefix}waterpipe
あ ${prefix}spooky
あ ${prefix}karbon
あ ${prefix}colorneon
あ ${prefix}circuit
あ ${prefix}discovery
あ ${prefix}metalic
あ ${prefix}fiction
あ ${prefix}demon
あ ${prefix}3dbox
あ ${prefix}transformer 
あ ${prefix}3dstone 
あ ${prefix}greenneon 
あ ${prefix}neonlight 
あ ${prefix}harrypotter 
あ ${prefix}brokenglass 
あ ${prefix}papercut 
あ ${prefix}lion2 
あ ${prefix}watercolor
あ ${prefix}multicolor 
あ ${prefix}neondevil
あ ${prefix}underwater
あ ${prefix}graffitibike
あ ${prefix}3davengers
あ ${prefix}snow
あ ${prefix}cloud
あ ${prefix}honey
あ ${prefix}ice
あ ${prefix}fruitjuice
あ ${prefix}biscuit
あ ${prefix}wood
あ ${prefix}whitebear 
あ ${prefix}chocolate 
あ ${prefix}matrix
あ ${prefix}blood
あ ${prefix}dropwater
あ ${prefix}toxic
あ ${prefix}lava
あ ${prefix}rock
あ ${prefix}bloodglas
あ ${prefix}hallowen
あ ${prefix}darkgold
あ ${prefix}joker 
あ ${prefix}wicker
あ ${prefix}firework
あ ${prefix}skeleton
あ ${prefix}sand
あ ${prefix}glue
あ ${prefix}1917
あ ${prefix}leaves
あ ${prefix}glitch2 
あ ${prefix}harrypot
あ ${prefix}graffiti
あ ${prefix}glitch3
あ ${prefix}3dspace
あ ${prefix}lion
あ ${prefix}wolf 
あ ${prefix}retro
あ ${prefix}8bit 
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: txtpro,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
case 'ephotomenu': {
potooxy = `「 *Ephoto Menu* 」
あ ${prefix}neon
あ ${prefix}ffcover
あ ${prefix}galaxy
あ ${prefix}ytcertificate 
あ ${prefix}igcertificate 
あ ${prefix}beach
あ ${prefix}crossfire
あ ${prefix}glass
あ ${prefix}awan
あ ${prefix}flower
あ ${prefix}Musim Semi
あ ${prefix}Kaligrafi
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: potooxy,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
           case 'funmenu': {
mun = `「 *Fun Menu* 」
あ ${prefix}simih
あ ${prefix}halah
あ ${prefix}hilih
あ ${prefix}huluh
あ ${prefix}heleh
あ ${prefix}holoh
あ ${prefix}jadian
あ {prefix}tts
あ ${prefix}jodohku
あ ${prefix}delttt
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: mun,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'primbonmenu': {
pimbon = `「 *Primbon Menu* 」
あ ${prefix}nomorhoki
あ ${prefix}artimimpi
あ ${prefix}artinama
あ ${prefix}ramaljodoh
あ ${prefix}ramaljodohbali
あ ${prefix}suamiistri
あ ${prefix}ramalcinta
あ ${prefix}cocoknama
あ ${prefix}pasangan
あ ${prefix}jadiannikah
あ ${prefix}sifatusaha
あ ${prefix}rezeki
あ ${prefix}pekerjaan
あ ${prefix}nasib
あ ${prefix}penyakit
あ ${prefix}tarot
あ ${prefix}fengshui
あ ${prefix}haribaik
あ ${prefix}harisangar
あ ${prefix}harisial
あ ${prefix}nagahari
あ ${prefix}arahrezeki
あ ${prefix}peruntungan
あ ${prefix}weton
あ ${prefix}karakter
あ ${prefix}keberuntungan
あ ${prefix}memancing
あ ${prefix}masasubur
あ ${prefix}zodiak
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: pimbon,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
case 'imagemaker': {
pimbon = `「 *Image Maker* 」
あ ${prefix}wanted
あ ${prefix}trigger
あ ${prefix}resize
あ ${prefix}rainbow
あ ${prefix}pixelate
あ ${prefix}darkness
あ ${prefix}blur
あ ${prefix}beautiful
あ ${prefix}circle
あ ${prefix}invert
あ ${prefix}facepalm
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: pimbon,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'convertmenu': {
cnvert = `「 *Convert Menu* 」
あ ${prefix}attp
あ ${prefix}ttp
あ ${prefix}toimage
あ ${prefix}removebg
あ ${prefix}sticker
あ ${prefix}emojimix
あ ${prefix}emojimix2
あ ${prefix}tovideo
あ ${prefix}togif
あ ${prefix}tourl
あ ${prefix}tovn
あ ${prefix}tomp3
あ ${prefix}toaudio
あ ${prefix}ebinary
あ ${prefix}dbinary
あ ${prefix}styletext
あ ${prefix}smeme
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: cnvert,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'mainmenu': {
min = `「 *Main Menu* 」
あ ${prefix}ping
あ ${prefix}owner
あ ${prefix}menu / ${prefix}help / ${prefix}?
あ ${prefix}delete
あ ${prefix}infochat
あ ${prefix}quoted
あ ${prefix}listpc
あ ${prefix}listgc
あ ${prefix}listonline
あ ${prefix}tinyurl
あ ${prefix}menfess
あ ${prefix}speedtest
あ ${prefix}request
あ ${prefix}tts
あ ${prefix}styletext
あ ${prefix}jadibot [ premium ]
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: min,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
           case 'bugmenu': {
min = `「 *BUG MENU* 」
あ ${prefix}sendbug 628xxx
あ ${prefix}philips 628xxx
あ ${prefix}philips2 628xxx
あ ${prefix}philips3 628xxx
あ ${prefix}santet @tag
あ ${prefix}santet2 @tag
あ ${prefix}santet3 @tag
あ ${prefix}virtex 628xxx
あ ${prefix}virtex2 628xxx
あ ${prefix}virtex3 628xxx
あ ${prefix}bug1 628xxx
あ ${prefix}bug2 628xxx
あ ${prefix}bug3 628xxx
あ ${prefix}bug4 628xxx
あ ${prefix}bug5 628xxx
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: min,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
case 'rpgmenu': {
min = `「 *RPG MENU* 」
あ ${prefix}hunting
あ ${prefix}mining
あ ${prefix}heal
あ ${prefix}profile
あ ${prefix}inventory
あ ${prefix}leaderboard
あ ${prefix}buy
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: min,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
case 'randomimage': {
min = `「 *Random Image* 」
あ ${prefix}darkjokes
あ ${prefix}meme
あ ${prefix}aestatic
あ ${prefix}mountain
あ ${prefix}art
あ ${prefix}boneka
あ ${prefix}cyber
あ ${prefix}doraemon
あ ${prefix}exo
あ ${prefix}wallpapergame
あ ${prefix}islamic
あ ${prefix}kartun
あ ${prefix}katakata
あ ${prefix}kpop
あ ${prefix}mobil
あ ${prefix}motor
あ ${prefix}programming
あ ${prefix}pubg
あ ${prefix}pokemon
あ ${prefix}quotesyt
あ ${prefix}stanic
あ ${prefix}tatasurya
あ ${prefix}technology
あ ${prefix}wallhp
あ ${prefix}wallml
あ ${prefix}wallnime
あ ${prefix}yulibocil
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: min,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
case 'asupanmenu': {
min = `「 *Asupan Menu* 」
あ ${prefix}asupan
あ ${prefix}asupanloli
あ ${prefix}asupankayes
あ ${prefix}asupanghea
あ ${prefix}asupanbocil
あ ${prefix}asupanukhty
あ ${prefix}asupansantuy
あ ${prefix}asupanrika
あ ${prefix}asupannotnot
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: min,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
case 'shortmenu': {
min = `「 *Short Link* 」
あ ${prefix}bitly
あ ${prefix}tinyurl
あ ${prefix}cuttly
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: min,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'dbmenu': {
dtbase = `「 *Database Menu* 」
あ ${prefix}setcmd
あ ${prefix}listcmd
あ ${prefix}delcmd
あ ${prefix}lockcmd
あ ${prefix}addmsg
あ ${prefix}listmsg
あ ${prefix}getmsg
あ ${prefix}delmsg
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: dtbase,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'anonmenu': {
aonymous = `「 *Anonymous Menu* 」
あ ${prefix}anonymous
あ ${prefix}start
あ ${prefix}next
あ ${prefix}keluar
あ ${prefix}menfess
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: aonymous,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'islamimenu': {
islmic = `「 *Islamic Menu* 」
あ ${prefix}iqra
あ ${prefix}hadist
あ ${prefix}alquran
あ ${prefix}ceramah
あ ${prefix}tafsirsurah
あ ${prefix}jadwalsholat
あ ${prefix}asmaulhusna
あ ${prefix}niatsholat 
あ ${prefix}kisahnabi
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: islmic,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
case 'vcmenu': {
vice = `「 *Voice Changer* 」
あ ${prefix}bass
あ ${prefix}blown
あ ${prefix}deep
あ ${prefix}earrape
あ ${prefix}fast
あ ${prefix}fat
あ ${prefix}nightcore
あ ${prefix}reverse
あ ${prefix}robot
あ ${prefix}slow
あ ${prefix}tupai
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: vice,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'BOT CREATED BY ANDY', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'ownermenu': {
oner = `「 *Owner Menu* 」
あ ${prefix}react [emoji]
あ ${prefix}chat [option]
あ ${prefix}join [link]
あ ${prefix}leave
あ ${prefix}block @user
あ ${prefix}unblock @user
あ ${prefix}bcgroup [text]
あ ${prefix}bcall [text]
あ ${prefix}setppbot [image]
あ ${prefix}setexif
あ ${prefix}setmenu [option]
あ ${prefix}bitly
あ ${prefix}cuttly
あ ${prefix}tinyurl
──────────────•`
let buttons = [{ buttonId: `tesrow`, buttonText: {displayText: 'BACK‡'}, type: 1},{buttonId: `donasi`, buttonText: {displayText: 'DONASI‡'}, type: 1}]
let buttonMessage = {
  document: fs.readFileSync('./AndyMedia/doc/fake.pdf'),
  fileName : `Hi ${pushname} |${ucapanWaktu}`,
  caption: oner,
  footer: 'Andy XD‡',
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Andy XD‡',
  body: 'Subscribe My IG BRO', 
  showAdAttribution: true,
  thumbnail: xc,
  mediaType: 1,
  sourceUrl: myyt
  }}
  }
 didin.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
break
            case 'sjsk': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
                anu = `*${ucapanWaktu}* kak @${me.split('@')[0]}\n*Powered*  : @${ini_mark.split('@')[0]}\n*Creator* : @${ownernya.split('@')[0]}
「*Group Menu*
あ ${prefix}linkgroup
あ ${prefix}ephemeral [option]
あ ${prefix}setppgc [image]
あ ${prefix}setname [text]
あ ${prefix}setdesc [text]
あ ${prefix}group [option]
あ ${prefix}editinfo [option]
あ ${prefix}add @user
あ ${prefix}kick @user
あ ${prefix}hidetag [text]
あ ${prefix}tagall [text]
あ ${prefix}antilink [on/off]
あ ${prefix}mute [on/off]
あ ${prefix}promote @user
あ ${prefix}demote @user
あ ${prefix}vote [text]
あ ${prefix}devote
あ ${prefix}upvote
あ ${prefix}cekvote
あ ${prefix}hapusvote
──────────────•
「*Webzone Menu*
あ ${prefix}playstore
あ ${prefix}gsmarena
あ ${prefix}jadwalbioskop
あ ${prefix}nowplayingbioskop
あ ${prefix}aminio
あ ${prefix}wattpad
あ ${prefix}webtoons
あ ${prefix}drakor
──────────────•
「*Downloader Menu*
あ ${prefix}tiktoknowm [url]
あ ${prefix}tiktokwm [url]
あ ${prefix}tiktokmp3 [url]
あ ${prefix}instagram [url]
あ ${prefix}twitter [url]
あ ${prefix}twittermp3 [url]
あ ${prefix}facebook [url]
あ ${prefix}pinterestdl [url]
あ ${prefix}ytmp3 [url]
あ ${prefix}ytmp4 [url]
あ ${prefix}getmusic [query]
あ ${prefix}getvideo [query]
あ ${prefix}umma [url]
あ ${prefix}joox [query]
あ ${prefix}soundcloud [url]
──────────────•
「*Search Menu*
あ ${prefix}play [query]
あ ${prefix}yts [query]
あ ${prefix}google [query]
あ ${prefix}gimage [query]
あ ${prefix}pinterest [query]
あ ${prefix}wallpaper [query]
あ ${prefix}wikimedia [query]
あ ${prefix}ytsearch [query]
あ ${prefix}ringtone [query]
あ ${prefix}stalk [option] [query]
──────────────•
「*Random Menu*
あ ${prefix}coffe
あ ${prefix}quotesanime
あ ${prefix}motivasi
あ ${prefix}dilanquote
あ ${prefix}bucinquote
あ ${prefix}katasenja
あ ${prefix}puisi
あ ${prefix}couple
あ ${prefix}anime
あ ${prefix}waifu
──────────────•
「*Text Pro Menu*
あ ${prefix}3dchristmas
あ ${prefix}3ddeepsea
あ ${prefix}americanflag
あ ${prefix}3dscifi
あ ${prefix}3drainbow
あ ${prefix}3dwaterpipe
あ ${prefix}halloweenskeleton
あ ${prefix}sketch
あ ${prefix}bluecircuit
あ ${prefix}space
あ ${prefix}metallic
あ ${prefix}fiction
あ ${prefix}greenhorror
あ ${prefix}transformer
あ ${prefix}berry
あ ${prefix}thunder
あ ${prefix}magma
あ ${prefix}3dcrackedstone
あ ${prefix}3dneonlight
あ ${prefix}impressiveglitch
あ ${prefix}naturalleaves
あ ${prefix}fireworksparkle
あ ${prefix}matrix
あ ${prefix}dropwater
あ ${prefix}harrypotter
あ ${prefix}foggywindow
あ ${prefix}neondevils
あ ${prefix}christmasholiday
あ ${prefix}3dgradient
あ ${prefix}blackpink
あ ${prefix}gluetext
──────────────•
「*Photo Oxy Menu*
あ ${prefix}shadow
あ ${prefix}romantic
あ ${prefix}smoke
あ ${prefix}burnpapper
あ ${prefix}naruto
あ ${prefix}lovemsg
あ ${prefix}grassmsg
あ ${prefix}lovetext
あ ${prefix}coffecup
あ ${prefix}butterfly
あ ${prefix}harrypotter
あ ${prefix}retrolol
──────────────•
「*Ephoto Menu*
あ ${prefix}ffcover
あ ${prefix}crossfire
あ ${prefix}galaxy
あ ${prefix}glass
あ ${prefix}neon
あ ${prefix}beach
あ ${prefix}blackpink
あ ${prefix}igcertificate
あ ${prefix}ytcertificate
──────────────•
「*Fun Menu*
あ ${prefix}simih
あ ${prefix}halah
あ ${prefix}hilih
あ ${prefix}huluh
あ ${prefix}heleh
あ ${prefix}holoh
あ ${prefix}jadian
あ ${prefix}jodohku
あ ${prefix}delttt
あ ${prefix}tictactoe
あ ${prefix}family100
あ ${prefix}tebak [option]
あ ${prefix}math [mode]
あ ${prefix}suitpvp [@tag]
──────────────•
「*Primbon Menu*
あ ${prefix}nomorhoki
あ ${prefix}artimimpi
あ ${prefix}artinama
あ ${prefix}ramaljodoh
あ ${prefix}ramaljodohbali
あ ${prefix}suamiistri
あ ${prefix}ramalcinta
あ ${prefix}cocoknama
あ ${prefix}pasangan
あ ${prefix}jadiannikah
あ ${prefix}sifatusaha
あ ${prefix}rezeki
あ ${prefix}pekerjaan
あ ${prefix}nasib
あ ${prefix}penyakit
あ ${prefix}tarot
あ ${prefix}fengshui
あ ${prefix}haribaik
あ ${prefix}harisangar
あ ${prefix}harisial
あ ${prefix}nagahari
あ ${prefix}arahrezeki
あ ${prefix}peruntungan
あ ${prefix}weton
あ ${prefix}karakter
あ ${prefix}keberuntungan
あ ${prefix}memancing
あ ${prefix}masasubur
あ ${prefix}zodiak
──────────────•
「*Convert Menu*
│
あ ${prefix}attp
あ ${prefix}ttp
あ ${prefix}toimage
あ ${prefix}removebg
あ ${prefix}sticker
あ ${prefix}emojimix
あ ${prefix}emojimix2
あ ${prefix}tovideo
あ ${prefix}togif
あ ${prefix}tourl
あ ${prefix}tovn
あ ${prefix}tomp3
あ ${prefix}toaudio
あ ${prefix}ebinary
あ ${prefix}dbinary
あ ${prefix}styletext
あ ${prefix}smeme
──────────────•
「*Main Menu*
│
あ ${prefix}ping
あ ${prefix}owner
あ ${prefix}menu / ${prefix}help / ${prefix}?
あ ${prefix}delete
あ ${prefix}infochat
あ ${prefix}quoted
あ ${prefix}listpc
あ ${prefix}listgc
あ ${prefix}listonline
あ ${prefix}speedtest
──────────────•
「*Database Menu*
│
あ ${prefix}setcmd
あ ${prefix}listcmd
あ ${prefix}delcmd
あ ${prefix}lockcmd
あ ${prefix}addmsg
あ ${prefix}listmsg
あ ${prefix}getmsg
あ ${prefix}delmsg
──────────────•
「*Anonymous Menu*
あ ${prefix}anonymous
あ ${prefix}start
あ ${prefix}next
あ ${prefix}keluar
──────────────•
「*Islamic Menu*
あ ${prefix}iqra
あ ${prefix}hadist
あ ${prefix}alquran
あ ${prefix}juzamma
あ ${prefix}tafsirsurah
──────────────•
「*Voice Changer*
あ ${prefix}bass
あ ${prefix}blown
あ ${prefix}deep
あ ${prefix}earrape
あ ${prefix}fast
あ ${prefix}fat
あ ${prefix}nightcore
あ ${prefix}reverse
あ ${prefix}robot
あ ${prefix}slow
あ ${prefix}tupai
──────────────•
「 *Owner Menu* 
あ ${prefix}react [emoji]
あ ${prefix}chat [option]
あ ${prefix}join [link]
あ ${prefix}leave
あ ${prefix}block @user
あ ${prefix}unblock @user
あ ${prefix}bcgroup [text]
あ ${prefix}bcall [text]
あ ${prefix}setppbot [image]
あ ${prefix}setexif
あ ${prefix}setmenu [option]
──────────────•
_DONASI Ngab_\n_Jangan Ngarep Free Mulu_`
                let buttons = [{ buttonId: 'DONASI', buttonText: { displayText: '🙏DONASI' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
            await didin.sendButtonText(m.chat, buttons, anu, nyoutube, m, {mentions: ments})
            }
            break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
didin_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await didin.sendMessage(m.chat, { audio: didin_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
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
		    didin.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})