const Discord = require('discord.js');
const assualt = new Discord.Client();
const chalk = require('chalk');
const moment = require('moment');
const Canvas = require('canvas')
const fetch2 = require('node-superfetch');
const fetch = require('node-fetch');
const request = require('request');
const weather = require('weather-js');
const math = require('mathjs');
var color = "#e74c3c";
var color2 = "#c0392b";
var owner = "288117975582507010";
var prefix = "a!";
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

const log = message => {
     console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

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
     assualt.user.setActivity("| a!help");
});

assualt.on("message", async message => {
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
     if (!message.content.startsWith(prefix)) return;
     let messageArray = message.content.split(" ");
     let cmd = messageArray[0];
     let args = messageArray.slice(1);
     let client = message.client;
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
     ];
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
     const roasts = [
          "*Puts you in the oven.*",
          "You're so stupid.",
          "Sorry, I can't hear you over how annoying you are.",
          "I've got better things to do.",
          "You're as dumb as Cleverbot.",
          "Your IQ is lower than the Mariana Trench.",
          "You're so annoying even the flies stay away from your stench.",
          "Go away, please.",
          "I'd give you a nasty look but you've already got one.",
          "It looks like your face caught fire and someone tried to put it out with a hammer.",
          "Your family tree must be a cactus because everyone on it is a prick.",
          "Someday you will go far, and I hope you stay there.",
          "The zoo called. They're wondering how you got out of your cage.",
          "I was hoping for a battle of wits, but you appear to be unarmed.",
          "You are proof that evolution can go in reverse.",
          "Brains aren't everything, in your case, they're nothing.",
          "Sorry I didn't get that, I don't speak idiot.",
          "Why is it acceptable for you to be an idiot, but not for me to point it out?",
          "We all sprang from apes, but you did not spring far enough.",
          "Even monkeys can go to space, so clearly you lack some potential.",
          "It's brains over brawn, yet you have neither.",
          "You look like a monkey, and you smell like one too.",
          "Even among idiots you're lacking.",
          "You fail even when you're doing absolutely nothing.",
          "If there was a vote for 'least likely to succeed' you'd win first prize.",
          "I'm surrounded by idiots... Or, wait, that's just you.",
          "I wanna go home. Well, really I just want to get away from the awful aroma you've got going there.",
          "Every time you touch me I have to go home and wash all my clothes nine times just to get a normal smell back.",
          "If I had a dollar for every brain you don't have, I'd have one dollar.",
          "I'd help you succeed but you're incapable.",
          "Your hairline is built like a graph chart, positive and negative forces attract but the clippers and your hair repel.",
          "I know a good joke! You!",
          "You have two parts of your brain, 'left' and 'right'. In the left side, there's nothing right. In the right side, there's nothing left.",
          "Is your ass jealous of the amount of shit that just came out of your mouth?",
          "I don't engage in mental combat with the unarmed.",
          "Two wrongs don't make a right, take your parents as an example.",
          "Your birth certificate is an apology letter from the condom factory.",
          "You sound reasonable. It must be time to up my medication!",
          "You must have been born on a highway because that's where most accidents happen.",
          "You're so ugly, when your mom dropped you off at school she got a fine for littering.",
          "If laughter is the best medicine, your face must be curing the world.",
          "I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
          "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
          "I'm jealous of all the people that haven't met you!",
          "If I had a face like yours, I'd sue my parents.",
          "There's only one problem with your face. I can see it.",
          "Don't you love nature, despite what it did to you?",
          "What language are you speaking? Cause it sounds like bullshit.",
          "Stupidity is not a crime so you are free to go.",
          "So, a thought crossed your mind? Must have been a long and lonely journey.",
          "You have a room temperature IQ - if the room is in Antarctica.",
          "If you really want to know about mistakes, you should ask your parents.",
          "I would ask you how old you are but I know you can't count that high.",
          "Do you want to know how I get all these insults? I use something called intelligence.",
          "I was going to give you a nasty look, but you already have one.",
          "I don't know what your problem is, but I'll bet it's hard to pronounce.",
          "Brains aren't everything. In your case they're nothing.",
          "As an outsider, what do you think of the human race?",
          "You look like a before picture.",
          "Oh, what? Sorry. I was trying to imagine you with a personality.",
          "You're the reason the gene pool needs a lifeguard.",
          "We can always tell when you are lying. Your lips move.",
          "I may love to shop but I'm not buying your bullshit.",
          "Hell is wallpapered with all your deleted selfies.",
          "You are living proof that manure can sprout legs and walk.",
          "You do realize makeup isn't going to fix your stupidity?",
          "Calling you an idiot would be an insult to all stupid people.",
          "You have the perfect face for radio.",
          "Aww, it's so cute when you try to talk about things you don't understand.",
          "If I wanted to hear from an asshole, I'd fart.",
          "What's the difference between you and an egg? Eggs get laid!"
     ]

     //commands

     if (cmd === `${prefix}help`) {
          message.channel.send(`**Check your DM's :mailbox_with_mail:**`);

          const embed = new Discord.RichEmbed()
               .setAuthor("Help Command", client.user.displayAvatarURL)
               .setColor(color)
               .setDescription("**Help Command : Prefix `a!`**\nIf you need further help, message a developer using the `dev` command.\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n**Syntax Key\n**`<>` • Required Argument\n`[]` • Sidenote From Dev\n`{}` • Optional Argument\n`...` • Multiple Arguments\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n **Commands • Fun **\n`slot` • Usage: `a!slot`\n`8ball` • Usage: `a!8ball <Question[?]>`\n`compliment` • Usage: `a!compliment {user}`\n`profile` • Usage: `a!profile {user}`\n`choose` • Usage: `a!choose <choice> <choice>...`\n`catfact` • Usage: `a!catfact`\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ **\nCommands• Image **\n`dog` • Usage: `a!dog`\n`cat` • Usage: `a!cat`\n`bird` • Usage: `a!bird`\n`avatar` • Usage: `a!avatar {user}`\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n**Commands• Tools **\n`timer` • Usage: `a!timer <milliseconds> {message}`\n`math` • Usage: `a!math <expression>`\n`day` • Usage: `a!day`\n`weather` • Usage: `a!weather <location>`\n`ping` • Usage: `a!ping`\n`serverinfo` • Usage: `a!serverinfo`\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBe sure to follow team Assault on Instagram! • https: //instagram.com/team.assault")

          message.author.send(embed).catch((e) => {
               message.channel.send("Please enable your DM's!").then(message => {
                    setTimeout(() => {
                         message.delete();
                    }, 5000)
               })
          });
     }

     if (cmd === `${prefix}timer`) {
          let messageArray = message.content.split(" ");
          let args = messageArray.slice(1);
          let username = args[0];
          if (!username) return;
          if (username > 18000000) return message.channel.send("You may not do more than 5 hours.")

          var ms = username;
          ms = 1000 * Math.round(ms / 1000); // round to nearest second
          var d = new Date(ms);

          message.delete();

          message.channel.send(`You've successfully set your timer for **${d.getUTCMinutes() + "m" + d.getUTCSeconds() + "s"}**! (Converted from milliseconds)`).then(message => {
               setTimeout(() => {
                    message.delete();
               }, 5000);
          })

          setTimeout(() => {
               message.author.send(`**__Time is up!__**\nYour timer has set off\nMessage: ${args.slice(1).join(" ")}`);
          }, username);
     }

     if (cmd === `${prefix}roast`) {
          let user = message.mentions.users.first() || message.author;
          return message.channel.send(`${user.username}: ` + roasts[Math.floor(Math.random() * roasts.length)])
     }

     if (cmd === `${prefix}weather`) {

          if (!args[0]) {
               return message.channel.send("Please provide a city/country.").then(message => {
                    setTimeout(() => {
                         message.delete();
                    }, 5000);
               });
          }

          weather.find({
               search: args.join(" "),
               degreeType: 'F'
          }, function (err, result) {
               if (err) return message.channel.send(err);

               switch (new Date().getDay()) {
                    case 0:
                         day = "Sunday";
                         break;
                    case 1:
                         day = "Monday";
                         break;
                    case 2:
                         day = "Tuesday";
                         break;
                    case 3:
                         day = "Wednesday";
                         break;
                    case 4:
                         day = "Thursday";
                         break;
                    case 5:
                         day = "Friday";
                         break;
                    case 6:
                         day = "Saturday";
               }

               try {
                    const embed = new Discord.RichEmbed()
                         .setColor(color)
                         .setAuthor(`Weather For ${result[0].current.observationpoint}`)
                         .addField(day, result[0].current.skytext, true)
                         .addField("Timezone", `UTC${result[0].location.timezone}`, true)
                         .addField("Feels Like", result[0].current.feelslike, true)
                         .addField("Degree Type", result[0].location.degreetype, true)
                         .addField("Temperature", result[0].current.temperature + " Degrees", true)
                         .addField("Feels Like", result[0].current.feelslike + " Degrees", true)
                         .addField("Winds", result[0].current.winddisplay, true)
                         .addField("Humidity", result[0].current.humidity + '%', true)
                         .setThumbnail(result[0].current.imageUrl);

                    message.channel.send(embed);
               } catch (err) {
                    return;
               }
          });
     }

     if (cmd === `${prefix}serverinfo`) {
          var onlineCount = message.guild.members.filter(m => m.presence.status === 'online').size
          var idleCount = message.guild.members.filter(m => m.presence.status === 'idle').size
          var dndCount = message.guild.members.filter(m => m.presence.status === 'dnd').size
          var offCount = message.guild.members.filter(m => m.presence.status === 'offline').size
          var text = message.guild.channels.filter(m => m.type === "text").size
          var voice = message.guild.channels.filter(m => m.type === "voice").size
          const embed = new Discord.RichEmbed()
               .setColor(color)
               .setThumbnail(message.guild.iconURL)
               .setTitle(`**Server Info for ${message.guild.name}**`)
               .addField(`Members [${message.guild.memberCount}]`, `Online: ${onlineCount}\nIdle: ${idleCount}\nDnD: ${dndCount}\nOffline: ${offCount}`)
               .addField(`Channels [${message.guild.channels.size}]`, `Text: ${text}\nVoice: ${voice}`)
               .addField(`Owner`, `${message.guild.owner.user.tag}`)
               .addField(`Created`, `${moment(message.guild.createdAt).format('lll')}`)
               .setTimestamp(new moment().format('lll'))
          message.channel.send(embed);
     }

     if ((cmd === `${prefix}userinfo`) || (cmd === `${prefix}whois`)) {
          let user = message.mentions.users.first() || message.author;
          const embed = new Discord.RichEmbed()
               .setColor(color)
               .setThumbnail(user.displayAvatarURL)
               .setTitle(`**User Info for ${user.tag}**`)
               .addField(`User ID`, `${user.id}`, true)
               .addField(`Status`, `${user.presence.status}`, true)
               .addField(`Joined At`, `${moment(user.joinedAt).format('lll')}`, true)
               .addField(`Created`, `${moment(user.createdAt).format('lll')}`, true)
               .setTimestamp(new moment().format('lll'))
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

     if (cmd === `${prefix}profile`) {
          let user = message.mentions.users.first() || message.author;
          const canvas = new Canvas.createCanvas(800, 250);
          const ctx = canvas.getContext("2d");

          const {
               body: t
          } = await fetch2.get("https://media.discordapp.net/attachments/584195827908608002/585495070950555670/fgfdg_1.png");
          const aa = await Canvas.loadImage(t);
          ctx.drawImage(aa, 0, 0);

          const {
               body: avi
          } = await fetch2.get(user.avatarURL);
          const avatar = await Canvas.loadImage(avi);
          ctx.drawImage(avatar, 15, 18, 220, 220);

          ctx.font = '57px Arial';
          ctx.fillStyle = "rgb(169,0,11)";
          ctx.textAlign = 'center';
          ctx.fillText('#' + user.discriminator, 519, 170);

          ctx.font = '57px Arial';
          ctx.fillStyle = "rgb(255,255,255)";
          ctx.textAlign = 'center';
          ctx.fillText('#' + user.discriminator, 519, 165);

          ctx.font = '57px Cocogoose';
          ctx.fillStyle = "rgb(169,0,11)";
          ctx.textAlign = 'center';
          ctx.fillText(user.username, 519, 125);

          ctx.font = '57px Cocogoose';
          ctx.fillStyle = "rgb(255,255,255)";
          ctx.textAlign = 'center';
          ctx.fillText(user.username, 519, 120);

          const a = new Discord.Attachment(canvas.toBuffer(), 'avatar.png');
          message.channel.send(a);
     }

     if (cmd === `${prefix}choose`) {
          if (args.length === 0) return message.channel.send("You need to give me two choices.");
          return message.channel.send(args.length === 1 ?
               'You only gave me one choice.' :
               `I think you should go with "${args[Math.floor(Math.random() * args.length)]}"`);
     }

     if (cmd === `${prefix}compliment`) {
          let user = message.mentions.users.first() || message.author;
          return message.channel.send(`${user.username}: ` + compliments[Math.floor(Math.random() * compliments.length)])
     }

     if (cmd === `${prefix}ping`) {
          const msg = await message.channel.send("Generating embed...");

          let pingembed = new Discord.RichEmbed()
               .addField(":computer: Latency: ", `${msg.createdTimestamp - message.createdTimestamp}ms`)
               .addField(`:stopwatch: API Latency:`, `${Math.round(client.ping)}ms`)
               .setColor(color)
               .setThumbnail(message.author.avatarURL)

          msg.edit(pingembed)
     }

     if (cmd === `${prefix}day`) {
          switch (new Date().getDay()) {
               case 0:
                    day = "Sunday";
                    break;
               case 1:
                    day = "Monday";
                    break;
               case 2:
                    day = "Tuesday";
                    break;
               case 3:
                    day = "Wednesday";
                    break;
               case 4:
                    day = "Thursday";
                    break;
               case 5:
                    day = "Friday";
                    break;
               case 6:
                    day = "Saturday";
          }

          const embed = new Discord.RichEmbed()
               .setColor(color)
               .setDescription(day)
          message.channel.send(embed)
     }

     if (cmd === `${prefix}say`) {
          const sayMessage = args.join(" ");
          message.channel.send(sayMessage);
     }

     if (cmd === `${prefix}fsay`) {
          const sayMessage = args.join(" ");
          message.delete()
          message.channel.send(sayMessage);
     }

     if (cmd === `${prefix}cat`) {
          request('http://aws.random.cat/meow', {
               json: true
          }, (err, res, body) => {
               if (err) {
                    return console.log(err);
               }
               message.channel.send("", {
                    files: [{
                         attachment: body.file
                    }]
               });
          });
     }

     if (cmd === `${prefix}dog`) {
          request('https://random.dog/woof.json', {
               json: true
          }, (err, res, body) => {
               if (err) {
                    return console.log(err);
               }
               message.channel.send("", {
                    files: [{
                         attachment: body.url
                    }]
               })
          });
     }

     if (cmd === `${prefix}catfact`) {
          request('https://catfact.ninja/fact', {
               json: true
          }, (err, res, body) => {
               if (err) {
                    return console.log(err);
               }
               message.channel.send(body.fact);
          });
     }

     if (cmd === `${prefix}bird`) {
          request('https://some-random-api.ml/birbimg', {
               json: true
          }, (err, res, body) => {
               if (err) {
                    return console.log(err);
               }
               message.channel.send("", {
                    files: [{
                         attachment: body.link
                    }]
               });
          });
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

     if (cmd === `${prefix}8ball`) {
          return message.channel.send(message.content.endsWith('?') ?
               `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
               "🎱 That doesn't look like a question, try again please.");
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
