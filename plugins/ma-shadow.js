let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command}) => {
if (!text) throw `teksnya mana bang?\n\n${usedPrefix + command} melcanz`
let res = await fetch(API('amel', '/oxy/shadow', { text }, 'apikey'))
if (!res.ok) throw eror
let img = await res.buffer()
if (!img) throw img
conn.sendFile(m.chat, img, 'shadow.jpg', wm, m)
}
handler.help = ['shadow'].map(v => v + '<teks>')
handler.tags = ['maker']
handler.command = /^(shadow)$/

module.exports = handler