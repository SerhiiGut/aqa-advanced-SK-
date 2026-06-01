import { faker } from "@faker-js/faker";

export const TEST_DATA = {
  GIT_POCKET_GUIDE: "9781449325862",
  LEARNING_JAVASCRIPT: "9781491904244",
  YOU_DONT_KNOW_JS: "9781491904244",

  USER: {
    userName: faker.internet.username(),
    password: "Test12345!"
  }
};