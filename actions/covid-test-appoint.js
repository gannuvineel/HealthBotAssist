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

  var input = temp['skill-choice-ret-oe965ebpcj']
  var input2 = temp['skill-choice-ret-99a4xzzxym']

  var doc
  for (let [key, value] of time) {
    if (value == input) {
      doc = key
    }
  }

  user['time'] = tm.get(doc)
  user['date'] = temp['skill-choice-ret-f88zr5ovcs']
  temp['book'] = 0

  if (input2 == 'Regina Drive-Thru Testing Site') {
    if (input != 'mor' && input != 'mor1') {
      user['location'] = 'International Trade Centre at Evraz Place - Hall C 1700 Elphinstone Street'
      user['doctor'] = input2
      temp['book'] = 1
    }
  }

  if (input2 == 'Saskatoon Drive-Thru Testing Site') {
    if (input != 'mor' && input != 'mor1') {
      user['location'] = '3630 Thatcher Ave'
      user['doctor'] = input2
      temp['book'] = 1
    }
  }

  if (input2 == 'Prince Albert Drive-Thru Testing Site') {
    if (input != 'ev' && input != 'ev1' && input != 'ng') {
      user['location'] = 'The Cone Shop Car Wash, 890 6th Ave E'
      user['doctor'] = input2
      temp['book'] = 1
    }
  }

  if (input2 == 'Yorkton Drive-Thru Testing Site') {
    if (input != 'ev' && input != 'ev1' && input != 'ng' && input != 'mor') {
      user['location'] = '276 Myrtle Ave'
      user['doctor'] = input2
      temp['book'] = 1
    }
  }