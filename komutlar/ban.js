const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Yeterli yetkiye sahip değilsin :x:')
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(':x: Kullanıcıyı etiketlemeyi unuttun kanka?')
  let sebep = args.slice(1).join(" ")
if(!sebep) return message.channel.send(`:x: Sebep belirtmeyi unuttun kanka.`)//ukqzn
 // let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   member.ban(member)                        //ukqzn//ukqzn
   let embed = new Discord.MessageEmbed()
  .setAuthor(`${member.user.tag} Sunucudan yasaklandı.`,member.user.avatarURL())
   .setDescription(`**Sebep:** ${sebep}`)//ukqzn
   message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,//ukqzn
    aliases: [],
    permLevel: 0  //ukqzn
}

exports.help = {
  name: 'ban',//ukqzn
    description: '',
    usage: ''//ukqzn
}