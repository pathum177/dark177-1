const { cmd, commands } = require('../command');
const os = require("os");
const { system } = require('../lib/functions');

cmd({
    pattern: "system",
    alias: ["system", "systems", "systerm"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟 ",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `
┃◈╭────────────
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *🗃️ Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *📍 *Platform: ${os.hostname()}
┃◈┃• *👨‍💻 Owner*: Pathum Malsara
┃◈┃• *🧬 Version*: 3.0.0 BETA
┃◈└───────────
╰──────────────
`;

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
