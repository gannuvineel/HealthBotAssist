  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   * @param {any} value - Another Example value
   */

  var nodemailer = require('nodemailer')

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'healthbota@gmail.com',
      pass: 'Suby.200414194'
    }
  })

  var mailOptions = {
    from: 'healthbota@gmail.com',
    to: args.value,
    subject: 'Confirmation of Doctor Appointment',
    text:
      'Hi, \nYour doctor appointment is booked with ' +
      user['doctor'] +
      ', on ' +
      user['date'] +
      ' ' +
      user['time'] +
      ' at ' +
      user['location'] +
      '. Please do not forget to cover your face with a mask.'
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      bp.logger.info('error', error)
      user['eval'] = 0
      //bp.logger.info(user['eval'])
    } else {
      bp.logger.info('Email sent: ')
      user['eval'] = 1
      //bp.logger.info(user['eval'])
    }
  })