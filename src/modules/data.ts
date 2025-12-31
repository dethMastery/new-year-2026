import BG1 from "../assets/background/bg1.png";
import BG2 from "../assets/background/bg2.png";

import type { bgInterface, dataInterface } from "./interfaces/dataInterface";

export const bg: bgInterface[] = [
  {
    id: 0,
    background: BG1,
  },
  {
    id: 1,
    background: BG2,
  },
];

export const data: dataInterface[] = [
  {
    id: 0,
    background: "",
    text: "ขอให้คุณมีความสุขมากๆ ในทุกๆ วัน มีสุขภาพร่างกายที่แข็งแรง ปราศจากโรคภัยไข้เจ็บ คิดหวังสิ่งใดก็ขอให้สมปรารถนา และพบเจอแต่สิ่งดีๆ เข้ามาในชีวิตนะครับ",
  },
  {
    id: 1,
    background: "",
    text: "ขอให้ประสบความสำเร็จในหน้าที่การงาน มีความก้าวหน้าและรุ่งเรืองยิ่งๆ ขึ้นไป ขอให้ทุกอุปสรรคผ่านพ้นไปด้วยดี และมีแต่โอกาสดีๆ วิ่งเข้ามาหาคุณเสมอ เป็นกำลังใจให้เสมอนะครับ",
  },
  {
    id: 2,
    background: "",
    text: "ขอให้ร่ำรวยเงินทอง หยิบจับอะไรก็เป็นเงินเป็นทอง มีโชคลาภไหลมาเทมาไม่ขาดสาย ขอให้กิจการเจริญรุ่งเรือง มั่งคั่งร่ำรวย และมีความสุขกับความสำเร็จที่ได้รับนะครับ",
  },
];
