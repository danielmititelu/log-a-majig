import { LogMessage } from "./localStorage";

const numberRule = /\d+/;

export const calculateMessagesSum = function (data: LogMessage[]) {
  return data
    .filter((entry) => entry.message.match(numberRule) !== null)
    .map((entry) => Number(entry.message.match(numberRule)))
    .reduce((partialSum, entry) => partialSum + entry, 0);
};
