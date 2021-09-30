  let time = new Map()
  time.set(0, 'mor')
  time.set(1, 'mor1')
  time.set(2, 'af')
  time.set(3, 'af1')
  time.set(4, 'ev')
  time.set(5, 'ev1')
  time.set(6, 'ng')
  time.set(7, 'emergency')
  time.set(8, 'call')

  let doctor = new Map()
  doctor.set(0, 'Broadway Medical Clinic')
  doctor.set(1, 'Transcona Medical Clinic')
  doctor.set(2, 'Regina Community Clinic')
  doctor.set(3, 'Regina Community Clinic')
  doctor.set(4, 'Transcona Medical Clinic')
  doctor.set(5, "Regina Qu'appelle Health Region")
  doctor.set(6, "Regina Qu'appelle Health Region")
  doctor.set(7, 'Regina Public Hospital')
  doctor.set(8, 'Regina Public Hospital')


   let loc = new Map()
  loc.set(0, '1319 Broadway Avenue. Regina, SK. S4P 1E5, Phone: (306) 757-4114')
  loc.set(1, '4936 4 Ave, Regina, SK S4T 0J3, Phone: (306) 775-2688')
  loc.set(2, '1106 Winnipeg St, Regina, SK S4R 1J6, Phone: (306) 543-7880')
  loc.set(3, '1106 Winnipeg St, Regina, SK S4R 1J6, Phone: (306) 543-7880')
  loc.set(4, '4936 4 Ave, Regina, SK S4T 0J3, Phone: (306) 775-2688')
  loc.set(5, "2180 23 Ave, Regina, SK S4S 0A5, Phone: (306) 766-5100")
  loc.set(6, "2180 23 Ave, Regina, SK S4S 0A5, Phone: (306) 766-5100")
  loc.set(7, '1440 14 Ave, Regina, SK S4P 0W5, Phone: (306) 766-4444')
  loc.set(8, '1440 14 Ave, Regina, SK S4P 0W5, Phone: (306) 766-4444')

  let fees = new Map()
  fees.set(0, '$100')
  fees.set(1, '$150')
  fees.set(2, '$100')
  fees.set(3, '$100')
  fees.set(4, '$150')
  fees.set(5, '$50')
  fees.set(6, '$50')
  fees.set(7, '$50')
  fees.set(8, '$50')

  let tm = new Map()
  tm.set(0, '8:00 AM')
  tm.set(1, '10:00 AM')
  tm.set(2, '12:00 PM')
  tm.set(3, '2:00 PM')
  tm.set(4, '4:00 PM')
  tm.set(5, '6:00 PM')
  tm.set(6, '8:00 PM')
  tm.set(7, 'emergency')
  tm.set(8, 'called')

  var input = temp['skill-choice-ret-9x642qckjh']
  var doc
  for (let [key, value] of time) {
    if (value == input) {
      doc = key
    }
  }

  user['doctor'] = doctor.get(doc)
  temp['fees'] = fees.get(doc)
  user['time'] = tm.get(doc)
  user['date'] = temp['skill-choice-ret-f88zr5ovcs']
  user['location'] = loc.get(doc)