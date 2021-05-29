const Discord = require("discord.js")
exports.run = async(client, message, args) => {
    message.channel.send("Sunucu ipsi işte burada --> \n **ip**")


  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "Davet Linki"
  };