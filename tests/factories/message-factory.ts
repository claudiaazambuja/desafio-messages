import { faker } from '@faker-js/faker';

export async function createMessage(text?: string) {
  const newText = {
    text: text || faker.lorem.text(),
  };
 
  return newText;
}