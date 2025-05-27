const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video

cmd({ 
    pattern: "video", 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `*🎥DARK SHADOW VIDEO DOWNLOADER🎥* 

╭━━❐━⪼
┇📄 *Title* -  ${yts.title}

┇⏱️ *Duration* - ${yts.timestamp}

┇📌*Views* -  ${yts.views}

┇👤 *Author* -  ${yts.author.name}

┇🔗 *Link* -  ${yts.url}

 ╰───────────●●►
+ 🔢 *SelectNumber Download Options:*\n
+ *1*  *Video🎬*\n
+ *2*  *Document📂*\n
+ *3*  *Audio🎶*\n\n
+ 📌 *Reply with the number to download in your choice.*;

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ`;

         const messageID = sentMsg.key.id;

    conn.ev.on("messages.upsert", async (msgData) => {
      const receivedMsg = msgData.messages[0];
      if (!receivedMsg.message) return;

      const receivedText = receivedMsg.message.conversation || receivedMsg.message.extendedTextMessage?.text;
      const senderID = receivedMsg.key.remoteJid;
      const isReplyToBot = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;

      if (isReplyToBot) {
        await conn.sendMessage(senderID, { react: { text: '⬇️', key: receivedMsg.key } });

        let downloadLink = data.data.url;

        switch (receivedText) {
          case "1":
            await conn.sendMessage(senderID, {
              video: { url: downloadLink },
              caption: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴅ"
            }, { quoted: receivedMsg });
            break;

          case "2":
            await conn.sendMessage(senderID, {
              document: { url: downloadLink },
              mimetype: "video/mp4",
              fileName: ${ytData.title}.mp4,
              caption: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴅ"
            }, { quoted: receivedMsg });
            break;

          case "3":
            await conn.sendMessage(senderID, {
              audio: { url: downloadLink },
              mimetype: "audio/mpeg"
            }, { quoted: receivedMsg });
            break;

          default:
            reply("❌ Invalid option! Please reply with 1, 2, or 3.");
        }

        await conn.sendMessage(senderID, { react: { text: '✅', key: receivedMsg.key } });
      }
    });

  } catch (error) {
    console.log(error);
    reply("⚠️ Error fetching video!");
        
});  
       
// play

cmd({ 
     pattern: "song", 
     react: "🎶", 
     desc: "Download Youtube song",
     category: "main", 
     use: '.song < Yt url or Name >', 
     filename: __filename }, 
     async (conn, mek, m, { from, prefix, quoted, q, reply }) => 
     
     { try { if (!q) return await reply("Please provide a YouTube URL or song name.");

const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No results found!");
    
    let yts = yt.results[0];  
    let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
    
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Please try again later.");
    }
    
    let ytmsg = `╭━━━〔 *🎵DARK SHADOW SONG DOWNLOADER🎵*
    
╭━━❐━⪼
┇📄 *Tital* -  ${yts.title}

┇⏱️ *Duration* - ${yts.timestamp}

┇📌 *Views* -  ${yts.views}

┇👤 *Author* -  ${yts.author.name} 

┇🔗 *Link* -  ${yts.url}

 ╰───────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ♡*`;



// Send song details
    await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg }, { quoted: mek });
    
    // Send audio file
    await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
    
    // Send document file
    await conn.sendMessage(from, { 
        document: { url: data.result.downloadUrl }, 
        mimetype: "audio/mpeg", 
        fileName: `${data.result.title}.mp3`, 
        caption: `> *© Pᴏᴡᴇʀᴇᴅ Bʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ♡*`
    }, { quoted: mek });

} catch (e) {
    console.log(e);
    reply("An error occurred. Please try again later.");
}

});
