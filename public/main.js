

var update = document.getElementById('update');
var del = document.getElementById('delete');

del.addEventListener('click', function() {
    fetch('quotes', {
        method: 'delete',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'name': 'Darth Vader'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(data => {
        console.log(data)
        window.location.reload()
    })
})

update.addEventListener('click', function () {
    console.log('adding event listener');
    
    fetch('quotes', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': 'Darth Vader',
        'quote': 'I find your lack of faith disturbing.'
      })
    })
    .then(response => {
      if (response.ok) 
        return response.json()
    })
    .then(data => {
      console.log(data)
    })
  })


/*
update.addEventListener('click', function() {
    //Send PUT Request here
    fetch('quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': 'Darth Vader',
            'quote': 'I find your lack of faith disturbing.'
        })
    })
    .then(response => {
        if (response.ok) return response.json()
    })
    .then(data => {
        console.log(data)
        //window.location.reload(true)
    })
})

*/

