  var days = temp['skill-choice-ret-r2w6on0nye']
  var q1 = user['que1']
  var q2 = user['que2']
  var light = temp['skill-choice-ret-6sm7adw2fe']
  var light_days = temp['skill-choice-ret-qow3amc5y0']

  if ((days == 'today' || days == 'p_week' || days == 'w_week') && q1 == 'none' && q2 == 'none' && light == 'no') {
    user['eval'] = 1
  } else if (
    (days == 'today' || days == 'p_week' || days == 'w_week') &&
    q1 == 'none' &&
    q2 == 'none' &&
    light == 'yes'
  ) {
    user['eval'] = 1
  } else if ((days == 'today' || days == 'p_week') && q1 == 'none' && q2 == 'none' && light == 'long') {
    user['eval'] = 1
  } else if (q1 != 'none' && q2 == 'none') {
    user['eval'] = 1
  } else if ((days == 'w_week' || days == 'w2_week') && q1 == 'none' && q2 == 'none' && light == 'long') {
    user['eval'] = 2
  } else if ((days == 'w_week' || days == 'w2_week') && q1 != 'none' && q2 == 'none') {
    user['eval'] = 2
  } else if (q1 == 'none' && q2 != 'none' && light == 'long') {
    user['eval'] = 3
  } else if (q1 != 'none' && q2 != 'none' && (light == 'yes' || light == 'long')) {
    user['eval'] = 4
  } else {
    user['eval'] = 2
  }