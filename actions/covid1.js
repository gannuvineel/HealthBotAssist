  var selected = user.selection
  var s_arr = selected.split(',')
  var cnt = s_arr.length

  user['eval'] = 0

  bp.logger.info(`Latest value for s_arr.length is ${s_arr.length}`)
  bp.logger.info(`Latest value for cnt is ${cnt}`)
  for (var i = 0; i < s_arr.length; i++) {
    if (s_arr[i] == 'None of the above') {
      cnt = 0
    }
  }

  temp['severity'] = cnt

  if (temp['skill-choice-ret-r2w6on0nye'] != 'today') {
    temp['severity'] += 1
  }

  if (temp['skill-choice-ret-gthqnld1ul'] != 'none') {
    temp['severity'] += 1
  }

  if (temp['skill-choice-ret-kvfe5xvgwp'] == 'no' && temp['severity'] < 5) {
    user['eval'] = 3
  }

  if (temp['skill-choice-ret-kvfe5xvgwp'] == 'no' && temp['severity'] > 5) {
    user['eval'] = 1
  }
  if (temp['skill-choice-ret-kvfe5xvgwp'] == 'yes' && temp['severity'] < 5) {
    user['eval'] = 2
  }
  if (temp['skill-choice-ret-kvfe5xvgwp'] == 'yes' && temp['severity'] > 5) {
    user['eval'] = 1
  }
  /**bp.logger.info(`Latest value for user.q1 is ${user.q1}`)
  bp.logger.info(`Latest value for user.q2 is ${user.q2}`)
  bp.logger.info(`Latest value for user.q3 is ${user.q3}`)
  bp.logger.info(`Latest value for user.q4 is ${user.q4}`)

  user.eval = -1
  bp.logger.info(`Latest value for eval is ${user.eval}`)
  bp.logger.info(`Latest value for cnt is ${cnt}`)

  if (cnt < 5) {
    user.eval = 0
  } else {
    user.eval = 1
  }
  bp.logger.info(`Latest value for eval is ${user.eval}`)**/