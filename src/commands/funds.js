import FundManager from '../db/FundManager.js';

const fundManager = new FundManager();

export const data = {
  name: 'funds',
  description: 'Replies with the current available funds.',
};

export async function execute(interaction) {
  try {
    // Get the funds using the FundManager 
    fundManager.getFunds((err, funds) => {
      if (err) {
        console.log('Error retrieving funds:', err);
        interaction.reply('There was an error retrieving the funds.');
      } else {
        // Send the current available funds to the user 
        interaction.reply(`Current available funds: $${funds.toFixed(2)}`);
      }
    });
  } catch (error) {
    console.log('Error in /funds command execution:', error);
    interaction.reply('An unexpected error occurred while fetching the funds.');
  }
}
