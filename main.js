$ ('.readmore a').click (function() {
    event.preventDefault ()
    $ ('.readmore a').hide()
    $ ('#show-this-on-click').slideDown().show()
    $ ('.readless').removeClass('hide')
})

$ ('.readless a').click (function() {
    event.preventDefault ()
    $ ('#show-this-on-click').slideUp().hide()
    $ ('.readmore a').show()
    $ ('.readless a').hide()
})

$ ('.learnmore').click (function() {
    event.preventDefault ()
    $ ('#learnmoretext').slideDown().show()
    $ ('.learnmore').hide()
})
