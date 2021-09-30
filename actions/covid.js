  var q1 = temp['skill-choice-ret-ougwcwrq6u'] 
  var q2 = temp['skill-choice-ret-vyditb8i76']
  var q3 = temp['skill-choice-ret-itepdz7bnf'] 
  var q4 = temp['skill-choice-ret-qz6kxptvks']

  temp['severity'] = 1
  if (q1 == 'no')
  {
    temp['severity'] -= 0.25
  }
  if (q2 == 'no')
  {
    temp['severity'] -= 0.25
  }
  if (q3 == 'no')
  {
    temp['severity'] -= 0.25
  }
  if (q4 == 'no')
  {
    temp['severity'] -= 0.25
  }
  user['eval'] = 0
  if (q1 == 'no' && q2 == 'no' && q3 == 'no' && q4 == 'no')
  {
    temp['severity'] = 0
  }

  if (q1 == 'A little' && q2 == 'a little' && q3 == 'no' && q4 == 'no')
  {
    temp['severity'] = 0.2
  }

  if (q1 == 'A little' && q2 == 'a little' && q3 == 'yes' && q4 == 'no')
  {
    temp['severity'] = 0.5
  }

  if (temp['severity'] >= 0.5)
  {
    user['eval'] = 1
  }