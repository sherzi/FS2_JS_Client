$(document).ready( async function() {
  try {
    function firstFn() {
      alert('first function')
    }
    function secondFn() {
      alert('second function')
    }
    function thirdFn() {
      alert('third function')
    }
  
    if ($('.container').attr('id') === 'firstFn') {
      firstFn()
    }
    else if ($('.container').attr('id') === 'secondFn') {
      secondFn()
    }
    else if ($('.container').attr('id') === 'thirdFn') {
      thirdFn()
    }
  }
  catch(err) {
    console.error('error', err)
  }
  finally{
  }
})