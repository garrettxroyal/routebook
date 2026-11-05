const STORES=[
["ge440","Giant Eagle","#440 — Mayfield Rd","4401 Mayfield Rd, South Euclid, OH 44121","(216) 382-6500","7:00 AM – 10:00 PM daily"],
["gelv","Giant Eagle","Legacy Village","25105 Cedar Rd, Lyndhurst, OH 44124","(216) 920-3300","7:00 AM – 10:00 PM daily"],
["hgreen","Heinen's","Green Rd","2180 S Green Rd, Cleveland, OH 44121","(216) 382-4144","Mon–Fri 8AM–8PM, Sat–Sun 8AM–7PM"],
["wmse","Walmart","Supercenter","1868 Warrensville Center Rd, South Euclid, OH 44121","(216) 382-1657","6:00 AM – 11:00 PM daily"],
["mjff","Meijer","Fairfax Market","2190 E 105th St, Cleveland, OH 44106","(216) 628-7301","6:00 AM – 10:00 PM daily"],
["mjrh","Meijer","Richmond Heights","5155 Wilson Mills Rd, Richmond Heights, OH 44143","(216) 428-0840","6:00 AM – 12:00 AM daily"],
["dlee","Dave's","Lee Rd","1940 Lee Rd, Cleveland Heights, OH 44118","(216) 321-7917","8:00 AM – 10:00 PM daily"],
["dsev","Dave's","Severance / Mayfield Rd","3628 Mayfield Rd, Cleveland Heights, OH 44118","(216) 291-2300","8:00 AM – 9:00 PM daily"],
["dwm","Dave's","Wilson Mills Rd","5100 Wilson Mills Rd, Richmond Heights, OH 44143","(440) 460-0900","8:00 AM – 9:00 PM daily"],
["dmid","Dave's","Midtown","1929 E 61st St, Cleveland, OH 44103","(216) 361-5130","7:00 AM – 9:00 PM daily"],
["dsc","Dave's","Shore Center","22501 Shore Center Dr, Euclid, OH 44123","(216) 289-0506","7:00 AM – 9:00 PM daily"],
["ddm","Discount Drug Mart","E 200th St","725 E 200th St, Euclid, OH 44119","(216) 531-1700","Mon–Sat 8:00 AM – 10:00 PM, Sun 9:00 AM – 9:00 PM"],
["mcov","Marc's","Coventry Rd","1833 Coventry Rd, Cleveland Heights, OH 44118","(216) 320-1000","Mon–Sat 7:00 AM – 9:00 PM, Sun 7:00 AM – 7:00 PM"],
["mmay","Marc's","Mayfield Rd / South Euclid","4519 Mayfield Rd, South Euclid, OH 44121","(216) 691-8988","Mon–Sat 7:00 AM – 9:00 PM, Sun 7:00 AM – 7:00 PM"],
["mwh","Marc's","Willoughby Hills","27505 Chardon Rd, Willoughby Hills, OH 44092","(440) 943-7200","Mon–Sat 7:00 AM – 9:00 PM, Sun 7:00 AM – 7:00 PM"],
["meuc","Marc's","Euclid / Shore Center Area","22840 Lakeshore Blvd, Euclid, OH 44123","(216) 731-9000","Mon–Sat 7:00 AM – 9:00 PM, Sun 7:00 AM – 7:00 PM"]
].map(a=>({id:a[0],chain:a[1],name:a[2],addr:a[3],phone:a[4],hours:a[5]}));
const CHAINS=["Giant Eagle","Heinen's","Walmart","Meijer","Dave's","Marc's","Discount Drug Mart"];
