import { got } from "got";

main();
async function main() {
  console.log(">>>> Start");

  const resp = await got("https://httpstat.us/200");
  console.log("Body", resp.body, "1,2,3,4,5");

  console.log("<<<< End");
}
