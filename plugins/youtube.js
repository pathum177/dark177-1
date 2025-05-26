const {
  Hamza,
  commands
} = require("../lib/command");
const yts = require("yt-search");
const axios = require("axios");
const fg = require("api-dylux");
async function ytmp3(_0x176f78) {
  try {
    if (!_0x176f78) {
      throw new Error("URL parameter is required");
    }
    const _0x5a53f7 = await fg.yta(_0x176f78);
    const {
      title: _0x2f7bd5,
      dl_url: _0x575d9a
    } = _0x5a53f7;
    return {
      'status': true,
      'Created_by': "Hamza",
      'title': _0x2f7bd5,
      'dl_link': _0x575d9a
    };
  } catch (_0x3633fb) {
    return {
      'status': false,
      'error': _0x3633fb.message
    };
  }
}
async function ytmp4(_0x25a6b6, _0x3182e9) {
  try {
    if (!_0x25a6b6 || !_0x3182e9) {
      throw new Error("Both URL and format parameters are required.");
    }
    const _0x24ef09 = parseInt(_0x3182e9.replace('p', ''), 0xa);
    const _0x344c75 = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0x24ef09,
      'url': _0x25a6b6
    };
    const _0x3bfdee = {
      'Accept': '*/*',
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
      'Origin': "https://loader.to",
      'Referer': "https://loader.to",
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Mode': "cors",
      'Sec-Fetch-Site': "cross-site",
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const {
      data: _0x97ae96
    } = await axios.get('https://ab.cococococ.com/ajax/download.php', {
      'params': _0x344c75,
      'headers': _0x3bfdee
    });
    const _0x28f53e = _0x97ae96.id;
    async function _0x59f823() {
      const _0x4cb491 = {
        'id': _0x28f53e
      };
      try {
        const _0x11e2f2 = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          'params': _0x4cb491,
          'headers': _0x3bfdee
        });
        const {
          progress: _0x15d524,
          download_url: _0x1262a7,
          text: _0xa74828
        } = _0x11e2f2.data;
        return _0xa74828 === "Finished" ? _0x1262a7 : (await new Promise(_0x174091 => setTimeout(_0x174091, 0x3e8)), _0x59f823());
      } catch (_0x45f9ad) {
        throw new Error("Error in progress check: " + _0x45f9ad.message);
      }
    }
    return await _0x59f823();
  } catch (_0x28ecbc) {
    return {
      'status': false,
      'error': _0x28ecbc.message
    };
  }
}
module.exports = {
  'ytmp3': ytmp3,
  'ytmp4': ytmp4
};
function extractYouTubeId(_0xde2aed) {
  const _0x5de8ba = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x1f2295 = _0xde2aed.match(_0x5de8ba);
  return _0x1f2295 ? _0x1f2295[0x1] : null;
}
function convertYouTubeLink(_0x2d2c13) {
  const _0x32a052 = extractYouTubeId(_0x2d2c13);
  if (_0x32a052) {
    return "https://www.youtube.com/watch?v=" + _0x32a052;
  }
  return _0x2d2c13;
}
Hamza({
  'pattern': 'song',
  'desc': "To download songs.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (_0x1e5c16, _0x3ca393, _0x1d34b8, {
  from: _0x4937cb,
  quoted: _0x30ea04,
  body: _0x5aac5d,
  isCmd: _0x363beb,
  command: _0x5b06d1,
  args: _0x2a3d99,
  q: _0x482258,
  isGroup: _0x36e9ba,
  sender: _0x175d22,
  senderNumber: _0x206110,
  botNumber2: _0x324cd1,
  botNumber: _0x21f32f,
  pushname: _0x182dad,
  isMe: _0x18a1ef,
  isOwner: _0x12e91f,
  groupMetadata: _0x642f60,
  groupName: _0x5747d2,
  participants: _0x1089cf,
  groupAdmins: _0x11b7bc,
  isBotAdmins: _0x4b8e8c,
  isAdmins: _0x67c80d,
  reply: _0x1057b8
}) => {
  try {
    if (!_0x482258) {
      return _0x1057b8("Please give me a URL or title.");
    }
    _0x482258 = convertYouTubeLink(_0x482258);
    const _0x65d9de = await yts(_0x482258);
    const _0x567fce = _0x65d9de.videos[0x0];
    const _0x16b4d9 = _0x567fce.url;
    let _0x24ae3c = "\n*Song Found!*\n\n➥ *Title:* " + _0x567fce.title + " \n➥ *Duration:* " + _0x567fce.timestamp + " \n➥ *Views:* " + _0x567fce.views + " \n➥ *Uploaded On:* " + _0x567fce.ago + " \n➥ *Link:* " + _0x567fce.url + " \n \n *To download send:*\n\n1. *Audio File* \n2. *Document File* \n\n* GitHub:* github.com/HyHamza/BYTE-MD    ";
    let _0x3df8c9 = "\n🎥 *MP3 Download Found!* \n\n➥ *Title:* " + _0x567fce.title + " \n➥ *Duration:* " + _0x567fce.timestamp + " \n➥ *Views:* " + _0x567fce.views + " \n➥ *Uploaded On:* " + _0x567fce.ago + " \n➥ *Link:* " + _0x567fce.url + " \n\n*POWERED BY TALKDROVE* ";
    const _0xa2ae21 = await _0x1e5c16.sendMessage(_0x4937cb, {
      'image': {
        'url': _0x567fce.thumbnail
      },
      'caption': _0x24ae3c,
      'contextInfo': {
        'mentionedJid': ['923072380380@s.whatsapp.net'],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363252060326102@newsletter",
          'newsletterName': 'TalkDrove',
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TalkDrove",
          'body': "TalkDrove",
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png',
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
    const _0x1a713c = _0xa2ae21.key.id;
    _0x1e5c16.ev.on("messages.upsert", async _0x397223 => {
      const _0x1bf7f5 = _0x397223.messages[0x0];
      if (!_0x1bf7f5.message) {
        return;
      }
      const _0x1f0c37 = _0x1bf7f5.message.conversation || _0x1bf7f5.message.extendedTextMessage?.["text"];
      const _0x19b575 = _0x1bf7f5.key.remoteJid;
      const _0x498ad6 = _0x1bf7f5.message.extendedTextMessage && _0x1bf7f5.message.extendedTextMessage.contextInfo.stanzaId === _0x1a713c;
      if (_0x498ad6) {
        await _0x1e5c16.sendMessage(_0x19b575, {
          'react': {
            'text': '⬇️',
            'key': _0x1bf7f5.key
          }
        });
        const _0x41bd2c = await ytmp3('' + _0x16b4d9);
        const _0x3a53a4 = _0x41bd2c.dl_link;
        await _0x1e5c16.sendMessage(_0x19b575, {
          'react': {
            'text': '⬆️',
            'key': _0x1bf7f5.key
          }
        });
        if (_0x1f0c37 === '1') {
          await _0x1e5c16.sendMessage(_0x19b575, {
            'audio': {
              'url': _0x3a53a4
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'externalAdReply': {
                'title': _0x567fce.title,
                'body': _0x567fce.videoId,
                'mediaType': 0x1,
                'sourceUrl': _0x567fce.url,
                'thumbnailUrl': _0x567fce.thumbnail,
                'renderLargerThumbnail': true,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x1bf7f5
          });
        } else if (_0x1f0c37 === '2') {
          await _0x1e5c16.sendMessage(_0x19b575, {
            'document': {
              'url': _0x3a53a4
            },
            'mimetype': "audio/mp3",
            'fileName': _0x567fce.title + ".mp3",
            'caption': _0x3df8c9,
            'contextInfo': {
              'mentionedJid': ["923072380380@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': '120363252060326102@newsletter',
                'newsletterName': 'TalkDrove',
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "TalkDrove",
                'body': 'TalkDrove',
                'mediaType': 0x1,
                'sourceUrl': "https://talkdrove.com",
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          });
        }
        await _0x1e5c16.sendMessage(_0x19b575, {
          'react': {
            'text': '✅',
            'key': _0x1bf7f5.key
          }
        });
        console.log("Response sent successfully");
      }
    });
  } catch (_0x3f0f96) {
    console.log(_0x3f0f96);
    _0x1057b8('' + _0x3f0f96);
  }
});
Hamza({
  'pattern': 'ytmp3',
  'desc': "Download YouTube videos as MP3.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (_0x5d87d2, _0x57d3ec, _0xbe2564, {
  from: _0x24ce33,
  quoted: _0x2f4a8e,
  body: _0x10b7ef,
  isCmd: _0x320402,
  command: _0x557191,
  args: _0x1625e0,
  q: _0x5bfd00,
  isGroup: _0x4fcf81,
  sender: _0x30be74,
  senderNumber: _0x2a5f7b,
  botNumber2: _0x54b9cb,
  botNumber: _0x4e1cae,
  pushname: _0xb4110a,
  isMe: _0x5375f5,
  isOwner: _0x328cca,
  groupMetadata: _0x2104a3,
  groupName: _0x433a28,
  participants: _0x5ccc0d,
  groupAdmins: _0x24a2a9,
  isBotAdmins: _0xc458de,
  isAdmins: _0x40e84e,
  reply: _0x4714fc
}) => {
  try {
    if (!_0x5bfd00) {
      return _0x4714fc("Please provide a YouTube URL or title.");
    }
    _0x5bfd00 = convertYouTubeLink(_0x5bfd00);
    const _0x18bc48 = await yts(_0x5bfd00);
    const _0x43a6ed = _0x18bc48.videos[0x0];
    const _0x4d210b = _0x43a6ed.url;
    let _0x380053 = "*MP3 Download Found!* \n\n➥ *Title:* " + _0x43a6ed.title + " \n➥ *Duration:* " + _0x43a6ed.timestamp + " \n➥ *Views:* " + _0x43a6ed.views + " \n➥ *Uploaded On:* " + _0x43a6ed.ago + " \n➥ *Link:* " + _0x43a6ed.url + "  \n\n*To download send:*\n\n1. *Audio File* \n2. *Document File*\n\n* GitHub:* github.com/HyHamza/BYTE-MD";
    let _0x59d74b = "*MP3 Download Found!* \n\n➥ *Title:* " + _0x43a6ed.title + " \n➥ *Duration:* " + _0x43a6ed.timestamp + " \n➥ *Views:* " + _0x43a6ed.views + " \n➥ *Uploaded On:* " + _0x43a6ed.ago + " \n➥ *Link:* " + _0x43a6ed.url + " \n\n*POWRED BY TALKDROVE* ";
    const _0x216338 = await _0x5d87d2.sendMessage(_0x24ce33, {
      'image': {
        'url': _0x43a6ed.thumbnail
      },
      'caption': _0x380053,
      'contextInfo': {
        'mentionedJid': ["923072380380@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363252060326102@newsletter",
          'newsletterName': "TalkDrove",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TalkDrove",
          'body': "TalkDrove",
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
    const _0x2c9d7f = _0x216338.key.id;
    _0x5d87d2.ev.on("messages.upsert", async _0x24ce00 => {
      const _0x260f8b = _0x24ce00.messages[0x0];
      if (!_0x260f8b.message) {
        return;
      }
      const _0x8097be = _0x260f8b.message.conversation || _0x260f8b.message.extendedTextMessage?.["text"];
      const _0x5897ac = _0x260f8b.key.remoteJid;
      const _0x3bb0db = _0x260f8b.message.extendedTextMessage && _0x260f8b.message.extendedTextMessage.contextInfo.stanzaId === _0x2c9d7f;
      if (_0x3bb0db) {
        await _0x5d87d2.sendMessage(_0x5897ac, {
          'react': {
            'text': '⬇️',
            'key': _0x260f8b.key
          }
        });
        const _0x4dbefb = await ytmp3('' + _0x4d210b);
        const _0x48519e = _0x4dbefb.dl_link;
        await _0x5d87d2.sendMessage(_0x5897ac, {
          'react': {
            'text': '⬆️',
            'key': _0x260f8b.key
          }
        });
        if (_0x8097be === '1') {
          await _0x5d87d2.sendMessage(_0x5897ac, {
            'audio': {
              'url': _0x48519e
            },
            'mimetype': 'audio/mpeg',
            'contextInfo': {
              'externalAdReply': {
                'title': _0x43a6ed.title,
                'body': _0x43a6ed.videoId,
                'mediaType': 0x1,
                'sourceUrl': _0x43a6ed.url,
                'thumbnailUrl': _0x43a6ed.thumbnail,
                'renderLargerThumbnail': true,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x260f8b
          });
        } else if (_0x8097be === '2') {
          await _0x5d87d2.sendMessage(_0x5897ac, {
            'document': {
              'url': _0x48519e
            },
            'mimetype': "audio/mp3",
            'fileName': _0x43a6ed.title + ".mp3",
            'caption': _0x59d74b,
            'contextInfo': {
              'mentionedJid': ["923072380380@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363252060326102@newsletter",
                'newsletterName': "TalkDrove",
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "TalkDrove",
                'body': "TalkDrove",
                'mediaType': 0x1,
                'sourceUrl': "https://talkdrove.com",
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          });
        }
        await _0x5d87d2.sendMessage(_0x5897ac, {
          'react': {
            'text': '✅',
            'key': _0x260f8b.key
          }
        });
        console.log("Response sent successfully");
      }
    });
  } catch (_0x2ada86) {
    console.log(_0x2ada86);
    _0x4714fc('' + _0x2ada86);
  }
});
Hamza({
  'pattern': "yts",
  'desc': "To search for videos on YouTube.",
  'react': '🎥',
  'category': "search",
  'filename': __filename
}, async (_0x16a977, _0x159e78, _0x569c87, {
  from: _0x467ec8,
  quoted: _0x4d56f9,
  body: _0x517639,
  isCmd: _0x5f0fb4,
  command: _0x40936d,
  args: _0x3c7a7a,
  q: _0xfab97d,
  isGroup: _0xf05bf9,
  sender: _0x5126c2,
  senderNumber: _0x47abe9,
  botNumber2: _0x852796,
  botNumber: _0x315962,
  pushname: _0x3cdf96,
  isMe: _0x4c5181,
  isOwner: _0x14a27e,
  groupMetadata: _0x5b8948,
  groupName: _0x160f3d,
  participants: _0x5dc978,
  groupAdmins: _0x1efc05,
  isBotAdmins: _0x331c69,
  isAdmins: _0x90235a,
  reply: _0x149b2b
}) => {
  try {
    if (!_0xfab97d) {
      return _0x149b2b("Please provide a search query.");
    }
    const _0x3e3381 = await yts(_0xfab97d);
    const _0x4ac520 = _0x3e3381.videos.slice(0x0, 0xa);
    let _0x7081df = "*Search Results for:* " + _0xfab97d + "\n";
    _0x4ac520.forEach((_0x4e713a, _0x36866f) => {
      _0x7081df += "\n" + (_0x36866f + 0x1) + ". *Title:* " + _0x4e713a.title + " \n   *Duration:* " + _0x4e713a.timestamp + " \n   *Views:* " + _0x4e713a.views + " \n   *Uploaded On:* " + _0x4e713a.ago + " \n   *Link:* " + _0x4e713a.url;
    });
    _0x7081df += "\n*💻 GitHub:* github.com/HyHamza/BYTE-MD";
    await _0x16a977.sendMessage(_0x467ec8, {
      'image': {
        'url': _0x3e3381.videos[0x0].thumbnail
      },
      'caption': _0x7081df,
      'contextInfo': {
        'mentionedJid': ["923072380380@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363252060326102@newsletter",
          'newsletterName': "TalkDrove",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TalkDrove",
          'body': "TalkDrove",
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
  } catch (_0x4df0b4) {
    console.log(_0x4df0b4);
    _0x149b2b('' + _0x4df0b4);
  }
});
Hamza({
  'pattern': "video",
  'desc': "To download videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x5ada54, _0x3edec8, _0x5c860d, {
  from: _0x57c147,
  quoted: _0x12545c,
  body: _0x373ccd,
  isCmd: _0x18fa3a,
  command: _0x4a7477,
  args: _0x252afd,
  q: _0x1beeff,
  isGroup: _0x5ceec3,
  sender: _0x58aa3d,
  senderNumber: _0x24f0d4,
  botNumber2: _0x55d8ae,
  botNumber: _0xf7c74a,
  pushname: _0xd98aff,
  isMe: _0x4e6a85,
  isOwner: _0x2c6011,
  groupMetadata: _0xf4f291,
  groupName: _0x57dfba,
  participants: _0x292de0,
  groupAdmins: _0x2c7d79,
  isBotAdmins: _0x5f2994,
  isAdmins: _0x56c8f0,
  reply: _0x113e85
}) => {
  try {
    if (!_0x1beeff) {
      return _0x113e85("Please give me a URL or title.");
    }
    _0x1beeff = convertYouTubeLink(_0x1beeff);
    const _0x533aa0 = await yts(_0x1beeff);
    const _0xd7df23 = _0x533aa0.videos[0x0];
    const _0x291921 = _0xd7df23.url;
    let _0x4322f1 = "*Video Found!* \n\n➥ *Title:* " + _0xd7df23.title + " \n➥ *Duration:* " + _0xd7df23.timestamp + " \n➥ *Views:* " + _0xd7df23.views + " \n➥ *Uploaded On:* " + _0xd7df23.ago + " \n➥ *Link:* " + _0xd7df23.url + " \n\n *To download send:*\n\n *Video File* \n   *1.1:- 360*\n   *1.2:- 480*\n   *1.3:- 720*\n   *1.4:- 1080*\n *Document File* \n   *2.1:- 360*\n   *2.2:- 480*\n   *2.3:- 720*\n   *2.4:- 1080*\n\n*GitHub:* github.com/HyHamza/BYTE-MD\n*POWERED BY TALKDROVE*";
    let _0x15ccc3 = "\n🎥 *MP4 Download Found!* \n\n➥ *Title:* " + _0xd7df23.title + " \n➥ *Duration:* " + _0xd7df23.timestamp + " \n➥ *Views:* " + _0xd7df23.views + " \n➥ *Uploaded On:* " + _0xd7df23.ago + " \n➥ *Link:* " + _0xd7df23.url + " \n\n *POWERED BY TALKDROVE* ";
    const _0x30720a = await _0x5ada54.sendMessage(_0x57c147, {
      'image': {
        'url': _0xd7df23.thumbnail
      },
      'caption': _0x4322f1,
      'contextInfo': {
        'mentionedJid': ['923072380380@s.whatsapp.net'],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363252060326102@newsletter',
          'newsletterName': "TalkDrove",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TalkDrove",
          'body': "TalkDrove",
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
    const _0x368a0e = _0x30720a.key.id;
    _0x5ada54.ev.on("messages.upsert", async _0x412012 => {
      const _0x26f49b = _0x412012.messages[0x0];
      if (!_0x26f49b.message) {
        return;
      }
      const _0xeab2c4 = _0x26f49b.message.conversation || _0x26f49b.message.extendedTextMessage?.["text"];
      const _0x55b772 = _0x26f49b.key.remoteJid;
      const _0x44e69e = _0x26f49b.message.extendedTextMessage && _0x26f49b.message.extendedTextMessage.contextInfo.stanzaId === _0x368a0e;
      if (_0x44e69e) {
        await _0x5ada54.sendMessage(_0x55b772, {
          'react': {
            'text': '⬇️',
            'key': _0x26f49b.key
          }
        });
        if (_0xeab2c4 === "1.1") {
          const _0x6efd0d = await ytmp4('' + _0x291921, "360p");
          await _0x5ada54.sendMessage(_0x55b772, {
            'react': {
              'text': '⬆️',
              'key': _0x26f49b.key
            }
          });
          await _0x5ada54.sendMessage(_0x55b772, {
            'video': {
              'url': _0x6efd0d
            },
            'caption': _0x15ccc3,
            'contextInfo': {
              'mentionedJid': ["923072380380@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363252060326102@newsletter",
                'newsletterName': 'TalkDrove',
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "TalkDrove",
                'body': "TalkDrove",
                'mediaType': 0x1,
                'sourceUrl': "https://talkdrove.com",
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          });
        } else {
          if (_0xeab2c4 === '1.2') {
            const _0x4b98b5 = await ytmp4('' + _0x291921, "480");
            await _0x5ada54.sendMessage(_0x55b772, {
              'react': {
                'text': '⬆️',
                'key': _0x26f49b.key
              }
            });
            await _0x5ada54.sendMessage(_0x55b772, {
              'video': {
                'url': _0x4b98b5
              },
              'caption': _0x15ccc3,
              'contextInfo': {
                'mentionedJid': ["923072380380@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '120363252060326102@newsletter',
                  'newsletterName': "TalkDrove",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "TalkDrove",
                  'body': "TalkDrove",
                  'mediaType': 0x1,
                  'sourceUrl': "https://talkdrove.com",
                  'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            });
          } else {
            if (_0xeab2c4 === "1.3") {
              const _0xeddd69 = await ytmp4('' + _0x291921, "720");
              await _0x5ada54.sendMessage(_0x55b772, {
                'react': {
                  'text': '⬆️',
                  'key': _0x26f49b.key
                }
              });
              await _0x5ada54.sendMessage(_0x55b772, {
                'video': {
                  'url': _0xeddd69
                },
                'caption': _0x15ccc3,
                'contextInfo': {
                  'mentionedJid': ["923072380380@s.whatsapp.net"],
                  'groupMentions': [],
                  'forwardingScore': 0x3e7,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': '120363252060326102@newsletter',
                    'newsletterName': "TalkDrove",
                    'serverMessageId': 0x3e7
                  },
                  'externalAdReply': {
                    'title': "TalkDrove",
                    'body': 'TalkDrove',
                    'mediaType': 0x1,
                    'sourceUrl': 'https://talkdrove.com',
                    'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              });
            } else {
              if (_0xeab2c4 === '1.4') {
                const _0x3a9ea2 = await ytmp4('' + _0x291921, "1080");
                await _0x5ada54.sendMessage(_0x55b772, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x26f49b.key
                  }
                });
                await _0x5ada54.sendMessage(_0x55b772, {
                  'video': {
                    'url': _0x3a9ea2
                  },
                  'caption': _0x15ccc3,
                  'contextInfo': {
                    'mentionedJid': ["923072380380@s.whatsapp.net"],
                    'groupMentions': [],
                    'forwardingScore': 0x3e7,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': "120363252060326102@newsletter",
                      'newsletterName': "TalkDrove",
                      'serverMessageId': 0x3e7
                    },
                    'externalAdReply': {
                      'title': "TalkDrove",
                      'body': 'TalkDrove',
                      'mediaType': 0x1,
                      'sourceUrl': "https://talkdrove.com",
                      'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png',
                      'renderLargerThumbnail': false,
                      'showAdAttribution': true
                    }
                  }
                });
              } else {
                if (_0xeab2c4 === '2.1') {
                  const _0x62fddd = await ytmp4('' + _0x291921, "360");
                  await _0x5ada54.sendMessage(_0x55b772, {
                    'react': {
                      'text': '⬆️',
                      'key': _0x26f49b.key
                    }
                  });
                  await _0x5ada54.sendMessage(_0x55b772, {
                    'document': {
                      'url': _0x62fddd
                    },
                    'mimetype': 'video/mp4',
                    'fileName': _0xd7df23.title + ".mp4",
                    'caption': _0x15ccc3,
                    'contextInfo': {
                      'mentionedJid': ["923072380380@s.whatsapp.net"],
                      'groupMentions': [],
                      'forwardingScore': 0x3e7,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363252060326102@newsletter",
                        'newsletterName': "TalkDrove",
                        'serverMessageId': 0x3e7
                      },
                      'externalAdReply': {
                        'title': "TalkDrove",
                        'body': 'TalkDrove',
                        'mediaType': 0x1,
                        'sourceUrl': 'https://talkdrove.com',
                        'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png',
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  });
                } else {
                  if (_0xeab2c4 === '2.2') {
                    const _0x51c9db = await ytmp4('' + _0x291921, "480");
                    await _0x5ada54.sendMessage(_0x55b772, {
                      'react': {
                        'text': '⬆️',
                        'key': _0x26f49b.key
                      }
                    });
                    await _0x5ada54.sendMessage(_0x55b772, {
                      'document': {
                        'url': _0x51c9db
                      },
                      'mimetype': "video/mp4",
                      'fileName': _0xd7df23.title + ".mp4",
                      'caption': _0x15ccc3,
                      'contextInfo': {
                        'mentionedJid': ["923072380380@s.whatsapp.net"],
                        'groupMentions': [],
                        'forwardingScore': 0x3e7,
                        'isForwarded': true,
                        'forwardedNewsletterMessageInfo': {
                          'newsletterJid': "120363252060326102@newsletter",
                          'newsletterName': 'TalkDrove',
                          'serverMessageId': 0x3e7
                        },
                        'externalAdReply': {
                          'title': "TalkDrove",
                          'body': "TalkDrove",
                          'mediaType': 0x1,
                          'sourceUrl': "https://talkdrove.com",
                          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                          'renderLargerThumbnail': false,
                          'showAdAttribution': true
                        }
                      }
                    });
                  } else {
                    if (_0xeab2c4 === "2.3") {
                      const _0x1a7af9 = await ytmp4('' + _0x291921, "720");
                      await _0x5ada54.sendMessage(_0x55b772, {
                        'react': {
                          'text': '⬆️',
                          'key': _0x26f49b.key
                        }
                      });
                      await _0x5ada54.sendMessage(_0x55b772, {
                        'document': {
                          'url': _0x1a7af9
                        },
                        'mimetype': 'video/mp4',
                        'fileName': _0xd7df23.title + ".mp4",
                        'caption': _0x15ccc3,
                        'contextInfo': {
                          'mentionedJid': ["923072380380@s.whatsapp.net"],
                          'groupMentions': [],
                          'forwardingScore': 0x3e7,
                          'isForwarded': true,
                          'forwardedNewsletterMessageInfo': {
                            'newsletterJid': "120363252060326102@newsletter",
                            'newsletterName': "TalkDrove",
                            'serverMessageId': 0x3e7
                          },
                          'externalAdReply': {
                            'title': "TalkDrove",
                            'body': "TalkDrove",
                            'mediaType': 0x1,
                            'sourceUrl': 'https://talkdrove.com',
                            'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                            'renderLargerThumbnail': false,
                            'showAdAttribution': true
                          }
                        }
                      });
                    } else {
                      if (_0xeab2c4 === '2.4') {
                        const _0x5c79dc = await ytmp4('' + _0x291921, '1080');
                        await _0x5ada54.sendMessage(_0x55b772, {
                          'react': {
                            'text': '⬆️',
                            'key': _0x26f49b.key
                          }
                        });
                        await _0x5ada54.sendMessage(_0x55b772, {
                          'document': {
                            'url': _0x5c79dc
                          },
                          'mimetype': "video/mp4",
                          'fileName': _0xd7df23.title + ".mp4",
                          'caption': _0x15ccc3,
                          'contextInfo': {
                            'mentionedJid': ["923072380380@s.whatsapp.net"],
                            'groupMentions': [],
                            'forwardingScore': 0x3e7,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': "120363252060326102@newsletter",
                              'newsletterName': 'TalkDrove',
                              'serverMessageId': 0x3e7
                            },
                            'externalAdReply': {
                              'title': "TalkDrove",
                              'body': "TalkDrove",
                              'mediaType': 0x1,
                              'sourceUrl': "https://talkdrove.com",
                              'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                              'renderLargerThumbnail': false,
                              'showAdAttribution': true
                            }
                          }
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
        await _0x5ada54.sendMessage(_0x55b772, {
          'react': {
            'text': '✅',
            'key': _0x26f49b.key
          }
        });
        console.log("Response sent successfully");
      }
    });
  } catch (_0x314aa6) {
    console.log(_0x314aa6);
    _0x113e85('' + _0x314aa6);
  }
});
Hamza({
  'pattern': "ytmp4",
  'desc': "Download YouTube videos as MP4.",
  'react': '🎥',
  'category': 'download',
  'filename': __filename
}, async (_0x58824c, _0x49127e, _0x35f42c, {
  from: _0xbfdecb,
  quoted: _0x506dce,
  body: _0x126da3,
  isCmd: _0x48ca2e,
  command: _0x5a2e13,
  args: _0x5f0281,
  q: _0xd43bbf,
  isGroup: _0x3a715a,
  sender: _0x4fc93e,
  senderNumber: _0x510bbe,
  botNumber2: _0x4da83a,
  botNumber: _0xdcc50f,
  pushname: _0x5b62f2,
  isMe: _0x10b0cc,
  isOwner: _0x4a2e6,
  groupMetadata: _0xe0e673,
  groupName: _0x12f654,
  participants: _0x4b610d,
  groupAdmins: _0x4e6067,
  isBotAdmins: _0x43d7a0,
  isAdmins: _0x39bd67,
  reply: _0x2283c8
}) => {
  try {
    if (!_0xd43bbf) {
      return _0x2283c8("Please provide a YouTube URL or title.");
    }
    _0xd43bbf = convertYouTubeLink(_0xd43bbf);
    const _0x540d18 = await yts(_0xd43bbf);
    const _0x5a6b78 = _0x540d18.videos[0x0];
    const _0x494ee7 = _0x5a6b78.url;
    let _0x58defe = "*MP4 Download Found!* \n\n➥ *Title:* " + _0x5a6b78.title + " \n➥ *Duration:* " + _0x5a6b78.timestamp + " \n➥ *Views:* " + _0x5a6b78.views + " \n➥ *Uploaded On:* " + _0x5a6b78.ago + " \n➥ *Link:* " + _0x5a6b78.url + " \n\n *To download send:*\n\n*Video File* \n   *1.1:- 360*\n   *1.2:- 480*\n   *1.3:- 720*\n   *1.4:- 1080*\n *Document File*\n   *2.1:- 360*\n   *2.2:- 480*\n   *2.3:- 720*\n   *2.4:- 1080*\n\n  \n*GitHub:* github.com/HyHamza/BYTE-MD";
    let _0x2de25a = "\n🎥 *MP4 Download Found!* \n\n➥ *Title:* " + _0x5a6b78.title + " \n➥ *Duration:* " + _0x5a6b78.timestamp + " \n➥ *Views:* " + _0x5a6b78.views + " \n➥ *Uploaded On:* " + _0x5a6b78.ago + " \n➥ *Link:* " + _0x5a6b78.url + " \n\n*POWERED BY TALKDROVE* ";
    const _0x2804d2 = await _0x58824c.sendMessage(_0xbfdecb, {
      'image': {
        'url': _0x5a6b78.thumbnail
      },
      'caption': _0x58defe,
      'contextInfo': {
        'mentionedJid': ['923072380380@s.whatsapp.net'],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363252060326102@newsletter",
          'newsletterName': 'TalkDrove',
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TalkDrove",
          'body': 'TalkDrove',
          'mediaType': 0x1,
          'sourceUrl': "https://talkdrove.com",
          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    });
    const _0x23bce2 = _0x2804d2.key.id;
    _0x58824c.ev.on("messages.upsert", async _0x5935e8 => {
      const _0x3b2286 = _0x5935e8.messages[0x0];
      if (!_0x3b2286.message) {
        return;
      }
      const _0x34895c = _0x3b2286.message.conversation || _0x3b2286.message.extendedTextMessage?.["text"];
      const _0x10f50a = _0x3b2286.key.remoteJid;
      const _0x2cd226 = _0x3b2286.message.extendedTextMessage && _0x3b2286.message.extendedTextMessage.contextInfo.stanzaId === _0x23bce2;
      if (_0x2cd226) {
        await _0x58824c.sendMessage(_0x10f50a, {
          'react': {
            'text': '⬇️',
            'key': _0x3b2286.key
          }
        });
        if (_0x34895c === "1.1") {
          const _0x541283 = await ytmp4('' + _0x494ee7, "360p");
          await _0x58824c.sendMessage(_0x10f50a, {
            'react': {
              'text': '⬆️',
              'key': _0x3b2286.key
            }
          });
          await _0x58824c.sendMessage(_0x10f50a, {
            'video': {
              'url': _0x541283
            },
            'caption': _0x2de25a,
            'contextInfo': {
              'mentionedJid': ['923072380380@s.whatsapp.net'],
              'groupMentions': [],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363252060326102@newsletter",
                'newsletterName': "TalkDrove",
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "TalkDrove",
                'body': "TalkDrove",
                'mediaType': 0x1,
                'sourceUrl': "https://talkdrove.com",
                'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png',
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          });
        } else {
          if (_0x34895c === "1.2") {
            const _0x49ad34 = await ytmp4('' + _0x494ee7, '480');
            await _0x58824c.sendMessage(_0x10f50a, {
              'react': {
                'text': '⬆️',
                'key': _0x3b2286.key
              }
            });
            await _0x58824c.sendMessage(_0x10f50a, {
              'video': {
                'url': _0x49ad34
              },
              'caption': _0x2de25a,
              'contextInfo': {
                'mentionedJid': ["923072380380@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363252060326102@newsletter",
                  'newsletterName': "TalkDrove",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "TalkDrove",
                  'body': "TalkDrove",
                  'mediaType': 0x1,
                  'sourceUrl': "https://talkdrove.com",
                  'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            });
          } else {
            if (_0x34895c === "1.3") {
              const _0x1ca830 = await ytmp4('' + _0x494ee7, "720");
              await _0x58824c.sendMessage(_0x10f50a, {
                'react': {
                  'text': '⬆️',
                  'key': _0x3b2286.key
                }
              });
              await _0x58824c.sendMessage(_0x10f50a, {
                'video': {
                  'url': _0x1ca830
                },
                'caption': _0x2de25a,
                'contextInfo': {
                  'mentionedJid': ["923072380380@s.whatsapp.net"],
                  'groupMentions': [],
                  'forwardingScore': 0x3e7,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "120363252060326102@newsletter",
                    'newsletterName': "TalkDrove",
                    'serverMessageId': 0x3e7
                  },
                  'externalAdReply': {
                    'title': "TalkDrove",
                    'body': 'TalkDrove',
                    'mediaType': 0x1,
                    'sourceUrl': 'https://talkdrove.com',
                    'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              });
            } else {
              if (_0x34895c === "1.4") {
                const _0x56c5bf = await ytmp4('' + _0x494ee7, "1080");
                await _0x58824c.sendMessage(_0x10f50a, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x3b2286.key
                  }
                });
                await _0x58824c.sendMessage(_0x10f50a, {
                  'video': {
                    'url': _0x56c5bf
                  },
                  'caption': _0x2de25a,
                  'contextInfo': {
                    'mentionedJid': ["923072380380@s.whatsapp.net"],
                    'groupMentions': [],
                    'forwardingScore': 0x3e7,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': '120363252060326102@newsletter',
                      'newsletterName': "TalkDrove",
                      'serverMessageId': 0x3e7
                    },
                    'externalAdReply': {
                      'title': "TalkDrove",
                      'body': "TalkDrove",
                      'mediaType': 0x1,
                      'sourceUrl': "https://talkdrove.com",
                      'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                      'renderLargerThumbnail': false,
                      'showAdAttribution': true
                    }
                  }
                });
              } else {
                if (_0x34895c === "2.1") {
                  const _0x195b75 = await ytmp4('' + _0x494ee7, '360');
                  await _0x58824c.sendMessage(_0x10f50a, {
                    'react': {
                      'text': '⬆️',
                      'key': _0x3b2286.key
                    }
                  });
                  await _0x58824c.sendMessage(_0x10f50a, {
                    'document': {
                      'url': _0x195b75
                    },
                    'mimetype': 'video/mp4',
                    'fileName': _0x5a6b78.title + '.mp4',
                    'caption': _0x2de25a,
                    'contextInfo': {
                      'mentionedJid': ['923072380380@s.whatsapp.net'],
                      'groupMentions': [],
                      'forwardingScore': 0x3e7,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363252060326102@newsletter",
                        'newsletterName': "TalkDrove",
                        'serverMessageId': 0x3e7
                      },
                      'externalAdReply': {
                        'title': "TalkDrove",
                        'body': "TalkDrove",
                        'mediaType': 0x1,
                        'sourceUrl': "https://talkdrove.com",
                        'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  });
                } else {
                  if (_0x34895c === "2.2") {
                    const _0x530ee3 = await ytmp4('' + _0x494ee7, "480");
                    await _0x58824c.sendMessage(_0x10f50a, {
                      'react': {
                        'text': '⬆️',
                        'key': _0x3b2286.key
                      }
                    });
                    await _0x58824c.sendMessage(_0x10f50a, {
                      'document': {
                        'url': _0x530ee3
                      },
                      'mimetype': "video/mp4",
                      'fileName': _0x5a6b78.title + ".mp4",
                      'caption': _0x2de25a,
                      'contextInfo': {
                        'mentionedJid': ["923072380380@s.whatsapp.net"],
                        'groupMentions': [],
                        'forwardingScore': 0x3e7,
                        'isForwarded': true,
                        'forwardedNewsletterMessageInfo': {
                          'newsletterJid': "120363252060326102@newsletter",
                          'newsletterName': "TalkDrove",
                          'serverMessageId': 0x3e7
                        },
                        'externalAdReply': {
                          'title': "TalkDrove",
                          'body': "TalkDrove",
                          'mediaType': 0x1,
                          'sourceUrl': "https://talkdrove.com",
                          'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                          'renderLargerThumbnail': false,
                          'showAdAttribution': true
                        }
                      }
                    });
                  } else {
                    if (_0x34895c === "2.3") {
                      const _0x68146e = await ytmp4('' + _0x494ee7, "720");
                      await _0x58824c.sendMessage(_0x10f50a, {
                        'react': {
                          'text': '⬆️',
                          'key': _0x3b2286.key
                        }
                      });
                      await _0x58824c.sendMessage(_0x10f50a, {
                        'document': {
                          'url': _0x68146e
                        },
                        'mimetype': "video/mp4",
                        'fileName': _0x5a6b78.title + ".mp4",
                        'caption': _0x2de25a,
                        'contextInfo': {
                          'mentionedJid': ['923072380380@s.whatsapp.net'],
                          'groupMentions': [],
                          'forwardingScore': 0x3e7,
                          'isForwarded': true,
                          'forwardedNewsletterMessageInfo': {
                            'newsletterJid': "120363252060326102@newsletter",
                            'newsletterName': 'TalkDrove',
                            'serverMessageId': 0x3e7
                          },
                          'externalAdReply': {
                            'title': "TalkDrove",
                            'body': "TalkDrove",
                            'mediaType': 0x1,
                            'sourceUrl': "https://talkdrove.com",
                            'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png',
                            'renderLargerThumbnail': false,
                            'showAdAttribution': true
                          }
                        }
                      });
                    } else {
                      if (_0x34895c === "2.4") {
                        const _0x28647d = await ytmp4('' + _0x494ee7, '1080');
                        await _0x58824c.sendMessage(_0x10f50a, {
                          'react': {
                            'text': '⬆️',
                            'key': _0x3b2286.key
                          }
                        });
                        await _0x58824c.sendMessage(_0x10f50a, {
                          'document': {
                            'url': _0x28647d
                          },
                          'mimetype': 'video/mp4',
                          'fileName': _0x5a6b78.title + '.mp4',
                          'caption': _0x2de25a,
                          'contextInfo': {
                            'mentionedJid': ["923072380380@s.whatsapp.net"],
                            'groupMentions': [],
                            'forwardingScore': 0x3e7,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': '120363252060326102@newsletter',
                              'newsletterName': "TalkDrove",
                              'serverMessageId': 0x3e7
                            },
                            'externalAdReply': {
                              'title': "TalkDrove",
                              'body': "TalkDrove",
                              'mediaType': 0x1,
                              'sourceUrl': "https://talkdrove.com",
                              'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/TalkDrove_logo.png",
                              'renderLargerThumbnail': false,
                              'showAdAttribution': true
                            }
                          }
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
        await _0x58824c.sendMessage(_0x10f50a, {
          'react': {
            'text': '✅',
            'key': _0x3b2286.key
          }
        });
        console.log("Response sent successfully");
      }
    });
  } catch (_0x3fa11a) {
    console.log(_0x3fa11a);
    _0x2283c8('' + _0x3fa11a);
  }
});