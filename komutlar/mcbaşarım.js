const snekfetch = require('snekfetch');

exports.run = (client, msg, args) => {
  let [title, contents] = args.join(" ").split("-");
  if(!contents) {
    [title, contents] = ["Basarim Kazanildi", title];
  }
  if(!title||!contents) return msg.channel.send("Bir şeyler Yazmalısın.")
  if(title.length > 22 || contents.length > 22) return msg.channel.send("Maksimum uzunluk 22 karakter.")
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=$grass&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>msg.channel.send("", {files:[{attachment: r.body}]}));
  msg.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mcbasarim"],
  kategori:['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'mcbaşarım',
  description: 'Fwhy Code',
  usage: '!mcbasarim'
};