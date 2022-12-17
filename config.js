/**
   * Create By Dika Ardnt.
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	didin: 'https://api.zeeoneofc.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12'
}

// Other
global.owner = ['50941411147','50941411147']
global.ownernomer = "50941411147"
global.premium = ['50947477839']
global.packname = 'ANDY MR LIT‡'
global.author = 'ANDY MR LIT‡'
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.namebotmu = 'ANDY XD BOT'
global.tutorial = 'https://www.youtube.com/@e'
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bots Must Be Admins First!',
    premime: 'Premium Special Features If You Want to Register, Type in Rent',
    verify: 'Register First Kk, How to Register Type .menu',
    owner: 'Owner Bot Special Features',
    api: 'Maybe the fire is an error, cok?',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Special Features for Bot Number Users',
    wait: '[❗] PATIENCE AGAIN IN THE PROCESS',
    endLimit: 'Your Daily Limit Has Been Expired, The Limit Will Reset Every 12 Hours',
}

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
global.thumb = fs.readFileSync('./AndyMedia/didin.png')
global.didinbc = fs.readFileSync('./AndyMedia/didinbc.png')
global.rules = fs.readFileSync('./AndyMedia/rules.jpg')
global.xc = fs.readFileSync('AndyMedia/didinxc.jpg')
global.mygit = 'https://github.com/andymrlit'
global.myyt = 'https://www.youtube.com/@'
global.myytv = 'https://www.youtube.com/@ove'
global.botname = 'ANDY XD BOT'
global.akulaku = 'ANDY XD BOT'
global.ytname = 'andy_mr_lit'
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
