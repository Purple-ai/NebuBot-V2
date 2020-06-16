const Discord = require('discord.js');
const {Client} = require('discord.js');

const client = new Discord.Client();
const bot = new Client();
var prefix = "="
const PREFIX = '=';
client.login("YourToken"); 
client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
  });
//{Commande d'activité} //
client.on('ready', () => {
  client.user.setActivity("rajouter des rajouts de rajout.")
})
// {Commande d'avatar (pdp)} //
client.on('message', message => {
  if (message.content.startsWith( `${prefix}avatar`)) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor('#FEC8D8')
        .setAuthor( user.username)
        .setImage(user.avatarURL())
        .setTimestamp()
	      .setFooter(`${message.author.username}`)
    message.channel.send(avatarEmbed);
}})
// {Commande d'aide} //
client.on('message', message => {
  if  (message.content.startsWith( `${prefix}help`)) {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#CF91F3')
	.setTitle('Voici la page d\'aide')
	.setURL('https://discord.gg/MC9apMs')
	.setAuthor(`${message.author.username}`, 'https://cdn.discordapp.com/attachments/678201231147008000/708844644133371955/logoconfig.png', 'https://discord.gg/MC9apMs')
	.setDescription('Voice toutes les commandes disponibles :')
	.setThumbnail('https://cdn.discordapp.com/attachments/678201231147008000/708844644133371955/logoconfig.png')
	.addFields(
    { name: '__**Utilitaire :**__', value: ' =avatar qui affiche ta pdp <mention d\'un utilisateur> (Permet d\'afficher ton avatar ou celui de la personne mentionnée (photo de profil)), \n \n =help (pour afficher cette page), \n \n =info (pour afficher les infos du bot) \n \n =reseau (pour afficher les réseaux sociaux du bot)' },
    { name: '__**Explications :**__', value: ' <Optionel> | [Obligatoire] | ( Commentaire / Explication )'},
  )
  .setImage ('https://cdn.discordapp.com/attachments/682984665153273861/722159880177451018/2ca70316176149611374e25acd98eb68.png')
	.setTimestamp()
  .setFooter(`${message.author.username}`, 'https://cdn.discordapp.com/attachments/678201231147008000/708844644133371955/logoconfig.png');
  message.channel.send(exampleEmbed);
  }})

// info du bot //
client.on('message', message => {
  if (message.content.startsWith(`${prefix}info`)){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#CF91F3')
    .setAuthor(`${message.author.username}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/678201231147008000/708844644133371955/logoconfig.png')
    .addFields(
      { name: '__**Informations :**__', value: '__Créateur :__ \n ```" 𝐏𝐮𝐫𝐩𝐥𝐞 | 愛 ▪  𝐂#2402``` __Version :__ \n ```2.0``` __Contact__ : \n ```Nebufakyt@gmail.com``` \n \n Tous droits résérvés. '})
    .setImage ('https://cdn.discordapp.com/attachments/682984665153273861/722159880177451018/2ca70316176149611374e25acd98eb68.png')
    .setTimestamp()
    .setFooter(`${message.author.username}`);
    message.channel.send(exampleEmbed);
}})
// commande réseaux sociaux //
client.on('message', message => {
  if (message.content.startsWith(`${prefix}reseau`)){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#CF91F3')
    .setAuthor(`${message.author.username}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/678201231147008000/708844644133371955/logoconfig.png')
    .addFields(
      { name: 'Réseaux sociaux :', value: '__Twitter :__ \n https://twitter.com/nebubot \n __Instagram :__ \n https://www.instagram.com/nebubot_v2/'})
      .setImage ('https://www.pngkey.com/png/full/785-7859170_clip-art-free-instagram-twitter-facebook-icons-facebook.png')
      .setTimestamp()
      .setFooter(`${message.author.username}`);
      message.channel.send(exampleEmbed);
}})
