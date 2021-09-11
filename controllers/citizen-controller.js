// get health of application
exports.postCitizen = (req, res) => {
  console.log('In controller - postCitizen');
  res.status(200).json({
    status: 'UP',
  });
};

exports.getCitizen = (req, res) => {
  console.log('In controller - getCitizen');
  res.status(200).json({
    status: 'UP',
  });
};
