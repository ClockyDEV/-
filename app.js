const Discord = require('discord.js');
const assualt = new Discord.Client();
const chalk = require('chalk');
const moment = require('moment');
const math = require('mathjs');
var color = "#e74c3c";
var color2 = "#c0392b";
var owner = "288117975582507010";
var prefix = "a!";

const log = message => {
     console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

assualt.on('debug', e => {
     log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
});

assualt.on('error', e => {
     log(chalk.bgGreen(e.replace(regToken, 'that was redacted')));
});

assualt.on("disconnect", () => {
     log(`You have been disconnected at ${new Date()}`);
});

assualt.on("reconnecting", () => {
     log(`Reconnecting at ${new Date()}`);
});

assualt.on("ready", () => {
     log(`Assualt Discord Bot has started with ${assualt.users.size} users and ${assualt.guilds.size} guilds!!`)
});

assualt.on("message", (message) => {
     if (message.author.bot) return;
     if (!message.content.startsWith(prefix)) return;
     let messageArray = message.content.split(" ");
     let cmd = messageArray[0];
     let args = messageArray.slice(1);
     let client = message.client;

     if (cmd === `${prefix}choose`) {
          return message.channel.send(args.length === 1 ?
               'You only gave me one choice!' :
               `I think you should go with "${args[Math.floor(Math.random() * args.length)]}"`);
     }

     const answers = [
          'Maybe.',
          'Certainly not.',
          'I hope so.',
          'Not in your wildest dreams.',
          'There is a good chance.',
          'Quite likely.',
          'I think so.',
          'I hope not.',
          'I hope so.',
          'Never!',
          'Fuhgeddaboudit.',
          'Ahaha! Really?!?',
          'Pfft.',
          'Sorry, bucko.',
          'Hell, yes.',
          'Hell to the no.',
          'The future is bleak.',
          'The future is uncertain.',
          'I would rather not say.',
          'Who cares?',
          'Possibly.',
          'Never, ever, ever.',
          'There is a small chance.',
          'Yes!'
     ]

     if (cmd === `${prefix}8ball`) {
          return message.channel.send(message.content.endsWith('?') ?
               `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
               "🎱 That doesn't look like a question, try again please.");
     }

     if (cmd === `${prefix}avatar`) {
          let user = message.mentions.users.first() || message.author;
          let image = user.displayAvatarURL;
          let embed = new Discord.RichEmbed()
               .setAuthor(`${user.username}#${user.discriminator}`)
               .setColor(color)
               .setImage(image)
          message.channel.send(embed);
     }

     if (cmd === `${prefix}slot`) {
          let slots = [":popcorn:", " :hamburger:", ":fries:", ":doughnut:", ":pizza:", ":fried_shrimp:"];
          let result1 = Math.floor((Math.random() * slots.length));
          let result2 = Math.floor((Math.random() * slots.length));
          let result3 = Math.floor((Math.random() * slots.length));

          let extra1 = Math.floor((Math.random() * slots.length));
          let extra2 = Math.floor((Math.random() * slots.length));
          let extra3 = Math.floor((Math.random() * slots.length));

          let xtra1 = Math.floor((Math.random() * slots.length));
          let xtra2 = Math.floor((Math.random() * slots.length));
          let xtra3 = Math.floor((Math.random() * slots.length));

          if ((result1 === result2) && (result3 === result2) && (result3 === result1)) {
               let wEmbed = new Discord.RichEmbed()
                    .setTitle("You Won! :slot_machine:")
                    .addField('Result:', slots[extra1] + " " + slots[extra2] + " " + slots[extra3] + "\n" + slots[result1] + " " + slots[result2] + " " + slots[result3] + "◀ \n" + slots[xtra1] + " " + slots[xtra2] + " " + slots[xtra3])
                    .setColor(color)
                    .setTimestamp(moment().format('YYYY-MM-DD HH:mm:ss'))
               message.channel.send(wEmbed);
          } else {
               let embed = new Discord.RichEmbed()
                    .setTitle('You Lost! :slot_machine:')
                    .setDescription(slots[extra1] + " " + slots[extra2] + " " + slots[extra3] + "\n" + slots[result1] + " " + slots[result2] + " " + slots[result3] + "◀ \n" + slots[xtra1] + " " + slots[xtra2] + " " + slots[xtra3])
                    .setColor(color2)
                    .setTimestamp(moment().format('YYYY-MM-DD HH:mm:ss'))
               message.channel.send(embed);
          }
     }

     if (cmd === `${prefix}math`) {
          let repo;
          try {
               repo = math.eval(args);
          } catch (err) {
               repo = err
          }
          message.channel.send("**Input**\n```js\n" + args + "```\n**Output**\n```js\n" + repo + "```");
     }
});

assualt.on("guildCreate", async guild => {
     let guildCreate = new Discord.RichEmbed()
          .setColor(color)
          .setTitle("Server Logs")
          .addField("Guild Name", guild.name)
          .addField('Channel Count', guild.channels.size)
          .addField("Member Count", guild.memberCount)
          .addField("Role Count", guild.roles.size)
          .addField('Server Region', guild.region.toUpperCase())
          .addField("Guild ID", guild.id)
          .addField("Created At", guild.createdAt)
          .setThumbnail(guild.iconURL)
          .setTimestamp()
     assualt.users.get(owner).send(guildCreate)

     let guildOwner = new Discord.RichEmbed()
          .setColor(color2)
          .setTitle("Owner Info")
          .addField("Username", guild.owner.displayName)
          .addField('User ID', guild.owner.id)
          .addField("Nickname", guild.owner.nickname)
          .addField('Display Color', guild.owner.displayColor)
          .addField("Joined At", guild.owner.joinedAt)
          .setThumbnail(guild.owner.user.displayAvatarURL)
          .setTimestamp()
     assualt.users.get(owner).send(guildOwner)
});

assualt.login(process.env.TOKEN);
