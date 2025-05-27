const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")

cmd({
    pattern: "setv",
    alias: ["setv"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    try {
        let desc = `*DARK SHADOW MENU LIST*_ 
  ╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」 ──●●►     
 *⏳ Uptime*:  ${runtime(process.uptime())} 
 *📂 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
 *⚙️ HostName*: ${os.hostname()}
 *👨‍💻 Owner*: Pathum Malsara
╰───────────●●►

* *🔢 Reply Below This Number*
╭═════════════════○
*1┃• AI*
*2┃• ANIME*
*3┃• REACTION*
*4┃• CONVERT*
*5┃• FUN*
*6┃• DOUNLOAD*
*7┃• LIST*
*8┃• MAIN MENUU*
*9┃• GROUP MENU*
*10┃• All MENU*
*11┃• OWNER MENU*
*12┃• OTHER MENU*
╰═══════════════════○


> © *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/3yL2ZL8d/2024-8-23-21h39m1s.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(".AIMENU OPEN =====⤵️" );
                        break;
                    case '2':               
                        reply(".ANIMEMENU OPEN =====⤵️");
                        break;
                    case '3':               
                          reply(".REACTIONS OPEN =====⤵️");
                      break;
                    case '4':     
                        reply(".CONVERTMENU OPEN =====⤵️");
                      break;
                    case '5':     
                        reply(".FUNMENU OPEN =====⤵️ ");
                        break;
                    case '6':     
                        reply(".DLMENU OPEN =====⤵️");
                    break;
                    case '7':    
                        reply(".LISTCMD OPEN =====⤵️");
                    break;
                    case '8':    
                        reply(".MAINMENU OPEN =====⤵️");
                    break;                    
                    case '9':    
                        reply(".GROUPMENU OPEN =====⤵️");
                    break;
                    case '1':    
                        reply(".ALLMENU OPEN =====⤵️");
                    break;                                        
                    case '11':    
                        reply(".OWNERMENU OPEN =====⤵️");
                    break;
                    case '12':    
                        reply(".OTHERMENU OPEN =====⤵️");
                    break;                        
                    case '16':    
                        reply(".REPO OPEN =====⤵️");
                    break; 
                    case '17':    
                        reply(".update ALLWAYS_OFFLINE:false");
                    break;                       
                    case '18':    
                        reply(".update READ_MESSAGE:true");
                    break;
                    case '19':    
                        reply(".update READ_MESSAGE:false");
                    break;
                    case '20':    
                        reply(".update config.AUTO_REACT:true");
                    break;
                    case '21':    
                        reply(".update config.AUTO_REACT:false");
                    break;
                    case '22':    
                        reply(".update ANTI_LINK:true");
                    break;
                    case '23':    
                        reply(".update ANTI_LINK:false");
                    break;
                    case '24':    
                        reply(".update ANTI_LINK:fales");
                    break;
                    case '25':
                        reply(".update AUTO_REACT_STATUS:true");
                    break;
                    case '26':
                        reply(".update AUTO_REACT_STATUS:fales");
                    break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
