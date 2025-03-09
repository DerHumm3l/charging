import { customAlphabet } from "nanoid";

const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const idLength = 8;

const nanoid = customAlphabet(alphabet, idLength);

export function id() {
  return nanoid();
}
