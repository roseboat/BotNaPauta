/* ******* ******
 * This file does not need to be editted!
 * Check out 'bot.ts'
 * ******* ******
 ***** */

import { Client } from 'discord.js';

import { Bot } from './bot';

import auth from '../auth.json';

function bootstrap() {
  const bot: Bot = new Bot();
  const client: Client = new Client();

  client.on('ready', (): void => console.log(`Logged in as ${client.user.tag}`));

  client.on('message', (msg: any): void => {
    const isCommand: boolean = msg.content[0] === '/';

    if (isCommand) {
      const words: string[] = msg.content.split(' ');
      const args: string[] = words.splice(1);
      const command: string = words[0].slice(1);

      bot[command](args, msg, client);
    }
  });

  client.login(auth.token);
}

bootstrap();
