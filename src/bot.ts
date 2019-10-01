import { Client } from 'discord.js';

export class Bot {
  [method: string]: (args: string[], msg: any, client: Client) => void;

  public ok(_args: string[], msg: any, _client: Client): void {
    msg.react('🆗');
  }

  public help(_args: string[], msg: any, _client: Client): void {
    const proto: any = Object.getPrototypeOf(this);
    const methods: string = Object
      .getOwnPropertyNames(proto)
      .filter((method: string): boolean => !['constructor'].includes(method))
      .map((method: string): string => `- \`/${method}\``)
      .join('\n');
    
    const replyText: string = 'I know these commands:\n' + methods;

    msg.reply(replyText);
  }
}
