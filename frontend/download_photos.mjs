import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const photos = {
  'anisha-garg': '1CcC8oa-L1FtLfdpwldP6uUqz9JaQ81l7',
  'ubaid-ashraf': '1RuuMJrull5b4jfBw5Gy7VfOfLAogJDr1',
  'tanishq-pandey': '1DSYV9GNezd0k1C33pDYJSj--QRz8slQg',
  'bhavishya-ratna': '1yk4yRRFfYyua9nmStmr6KP2etULqWiIc',
  'astha-pathak': '18eVk4akZkJ5Lryfo8hPpKBLXpWvULIoR',
  'anshika-gupta': '11nA2NmpiTHarao30zq8Y24eRmjmeySaz',
  'tushar-sharma': '1MnRMefbzaTTdbcnwKvulUMIM1wW9VgqO',
  'manishka-gupta': '1AG0zwruFF9ofePk81VT12RjB1JKjRTYk',
  'sambhav-jain': '1w79JvgKe-ZkNrRisQCqJJsIt4JmyayVm',
  'harmanpreet-singh': '1mHC3k4z5y2uPh74Bw0Ji--2MN6RRbv8x',
  'avani-sharma': '1odzIj4VanFYNdfvpBFcI5YH2Jdx0vYWK',
  'aastha-narang': '1qYVZD74WCeZ_CGZI2_WwjO_HVaiPFryG',
  'ayush-kumar': '1vnCSsGQ0yQgxghPdB8RqeUgcPcnIAEUK',
  'aniket-kumar-singh': '1BNShRlhYDgyNDlIQzsF3MKEOGiNMZopd',
};

const outDir = join('.', 'public', 'team');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

async function download(name, id) {
  const url = `https://drive.google.com/uc?export=download&id=${id}`;
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const outPath = join(outDir, `${name}.jpg`);
    writeFileSync(outPath, buf);
    console.log(`OK  ${name} -> ${buf.length} bytes`);
  } catch (e) {
    console.log(`FAIL ${name}: ${e.message}`);
  }
}

(async () => {
  for (const [name, id] of Object.entries(photos)) {
    await download(name, id);
  }
  console.log('Done!');
})();
