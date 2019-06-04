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

assualt.on("message", await message => {
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
     
     if (cmd === `${prefix}dog`) {
          const url = await fetch('https://dog.ceo/api/breeds/image/random')
               .then(response => response.json())
               .then(body => body.message);
          return message.channel.send("", url);
     }

     const compliments = [
          'Your smile is contagious.',
          'You look great today.',
          "You're a smart cookie.",
          'I bet you make babies smile.',
          'You have impeccable manners.',
          'I like your style.',
          'You have the best laugh.',
          'I appreciate you.',
          'You are the most perfect you there is.',
          'You are enough.',
          "You're strong.",
          'Your perspective is refreshing.',
          "You're an awesome friend.",
          'You light up the room.',
          'You shine brighter than a shooting star.',
          'You deserve a hug right now.',
          'You should be proud of yourself.',
          "You're more helpful than you realize.",
          'You have a great sense of humor.',
          "You've got all the right moves!",
          "Is that your picture next to 'charming' in the dictionary?",
          'Your kindness is a balm to all who encounter it.',
          "You're all that and a super-size bag of chips.",
          "On a scale from 1 to 10, you're an 11.",
          'You are brave.',
          "You're even more beautiful on the inside than you are on the outside.",
          'You have the courage of your convictions.',
          'Your eyes are breathtaking.',
          'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.',
          'You are making a difference.',
          "You're like sunshine on a rainy day.",
          'You bring out the best in other people.',
          'Your ability to recall random factoids at just the right time is impressive.',
          "You're a great listener.",
          'How is it that you always look great, even in sweatpants?',
          'Everything would be better if more people were like you!',
          'I bet you sweat glitter.',
          'You were cool way before hipsters were cool.',
          'That color is perfect on you.',
          'Hanging out with you is always a blast.',
          'You always know -- and say -- exactly what I need to hear when I need to hear it.',
          'You smell really good.',
          "You may dance like no one's watching, but everyone's watching because you're an amazing dancer!",
          'Being around you makes everything better!',
          "When you say, 'I meant to do that,' I totally believe you.",
          "When you're not afraid to be yourself is when you're most incredible.",
          "Colors seem brighter when you're around.",
          "You're more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)",
          "That thing you don't like about yourself is what makes you so interesting.",
          "You're wonderful.",
          'You have cute elbows. For reals!',
          'Jokes are funnier when you tell them.',
          "You're better than a triple-scoop ice cream cone. With sprinkles.",
          'Your bellybutton is kind of adorable.',
          'Your hair looks stunning.',
          "You're one of a kind!",
          "You're inspiring.",
          "If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener.",
          'You should be thanked more often. So thank you!!',
          "Our community is better because you're in it.",
          "Someone is getting through something hard right now because you've got their back.",
          'You have the best ideas.',
          'You always know how to find that silver lining.',
          'Everyone gets knocked down sometimes, but you always get back up and keep going.',
          "You're a candle in the darkness.",
          "You're a great example to others.",
          'Being around you is like being on a happy little vacation.',
          'You always know just what to say.',
          "You're always learning new things and trying to better yourself, which is awesome.",
          'If someone based an Internet meme on you, it would have impeccable grammar.',
          'You could survive a Zombie apocalypse.',
          "You're more fun than bubble wrap.",
          'When you make a mistake, you fix it.',
          'Who raised you? They deserve a medal for a job well done.',
          "You're great at figuring stuff out.",
          'Your voice is magnificent.',
          'The people you love are lucky to have you in their lives.',
          "You're like a breath of fresh air.",
          "You're gorgeous -- and that's the least interesting thing about you, too.",
          "You're so thoughtful.",
          'Your creative potential seems limitless.',
          'Your name suits you to a T.',
          "You're irresistible when you blush.",
          'Actions speak louder than words, and yours tell an incredible story.',
          'Somehow you make time stop and fly at the same time.',
          'When you make up your mind about something, nothing stands in your way.',
          'You seem to really know who you are.',
          'Any team would be lucky to have you on it.',
          "In high school I bet you were voted 'most likely to keep being awesome.'",
          'I bet you do the crossword puzzle in ink.',
          'Babies and small animals probably love you.',
          "If you were a scented candle they'd call it Perfectly Imperfect (and it would smell like summer).",
          "You're someone's reason to smile.",
          "You're even better than a unicorn, because you're real.",
          'How do you keep being so funny and making everyone laugh?',
          'You have a good head on your shoulders.',
          'Has anyone ever told you that you have great posture?',
          'The way you treasure your loved ones is incredible.',
          "You're really something special.",
          "You're a gift to those around you.",
          'You deserve better.'
     ];
     
     if (cmd === `${prefix}compliment`) {
          let user = message.mentions.users.first() || message.author;
          return message.channel.send(`${user.username}: ` + compliments[Math.floor(Math.random() * answers.length)])
     }

     if (cmd === `${prefix}cat`) {
          const file = await fetch('http://aws.random.cat/meow')
               .then(response => response.json())
               .then(body => body.file);
          return message.channel.send("", file)
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
