const express = require('express');

const router = express.Router();

router.post('/version-a/branching/answer', (req, res) => {
    // Make a variable and give it the value from 'know-nhs-number'
    const nhsNumber = req.session.data['know-nhs-number'];
  
    // Check whether the variable matches a condition
    if (nhsNumber === 'Yes') {
      // Send user to next page
      res.redirect('/version-a/branching/answer-yes');
    } else {
      // Send user to ineligible page
      res.redirect('/version-a/branching/answer-no');
    }
  });

router.post('/version-b/branching/answer', (req, res) => {
    // Make a variable and give it the value from 'know-nhs-number'
    const nhsNumber = req.session.data['know-nhs-number'];
  
    // Check whether the variable matches a condition
    if (nhsNumber === 'Yes') {
      // Send user to next page
      res.redirect('/version-b/branching/answer-yes');
    } else {
      // Send user to ineligible page
      res.redirect('/version-b/branching/answer-no');
    }
  });
  
module.exports = router;
