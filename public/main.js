
var update = document.getElementById('update');
var del = document.getElementById('delete');
var delEmpty = document.getElementById('delEmpty');

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
    .then(data => {
        console.log(data)
        window.location.reload(true)
    })
})

delEmpty.addEventListener('click', function() {
    fetch('quotes', {
        method: 'delete',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'name': ''
        })
    })
    .then(data => {
        console.log(data)
        window.location.reload(true)
    })
})

del.addEventListener('click', function() {
    fetch('quotes', {
        method: 'delete',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'name': ''
        })
    })
    .then(data => {
        console.log(data)
        window.location.reload(true)
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
      console.log(data);
      window.location.reload(true);
    })
  })


