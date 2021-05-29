const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Moderasyon Bot | Yardım Menüsü")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`

**»** **!ban** : Sunucudan bir üyeyi yasaklar.
**»** **!unban** : İstediğiniz kişinin banını kaldırır.
**»** **!sil** : Belirli bir kanaldaki mesajları siler.
**»** **!kick** : Sunucudan bir üye kickler.
**»** **!yavaş-mod** : Sohbete yazma sınır (süre) ekler.
**»** **!istatistik** : Bot hakkında bilgi verir.
**»** **!küfür-engel** : Küfür engel açıp kapatırsın.
**»** **!reklam-engelle** : Reklam engel açıp kapatırsın.
**»** **!nuke** : Kanala nuke atarsın.
**»** **!mcbaşarım** : Minecraft başarımı kazanırsınız.
**»** **!ip** : Sunucu ipsini alırsınız.

`) 
  
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false,   
    aliases: ["mod"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: 'yardım menüsü',
    usage: 'yardım'
  };