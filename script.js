const h1 = document.getElementById('h1')
const h2 = document.getElementById('h2')
const m1 = document.getElementById('m1')
const m2 = document.getElementById('m2')
const s1 = document.getElementById('s1')
const s2 = document.getElementById('s2')

h1m = 130
h1.style.marginTop = h1m + 'px'
h2m = 480
h2.style.marginTop = h2m + 'px'
m1m = 280
m1.style.marginTop = m1m + 'px'
m2m = 480
m2.style.marginTop = m2m + 'px'
s1m = 280
s1.style.marginTop = s1m + 'px'
s2m = 480
s2.style.marginTop = s2m + 'px'

function update() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    hours = hours < 10 ? new String("0" + hours) : new String(hours)
    h01 = hours.substring(0, 1)
    h12 = hours.substring(1, 2)
    minutes = minutes < 10 ? new String("0" + minutes) : new String(minutes)
    m01 = minutes.substring(0, 1)
    m12 = minutes.substring(1, 2)
    seconds = seconds < 10 ? new String("0" + seconds) : new String(seconds)
    s01 = seconds.substring(0, 1)
    s12 = seconds.substring(1, 2)

    switch(h01) {
        case "0":
            h1.style.marginTop = 130 + 'px'
            break
        case "1":
            h1.style.marginTop = 30 + 'px'
            break
        case "2":
            h1.style.marginTop = -70 + 'px'
            break
    }

    switch(h12) {
        case "0":
            h2.style.marginTop = 480 + 'px'
            break
        case "1":
            h2.style.marginTop = 380 + 'px'
            break
        case "2":
            h2.style.marginTop = 280 + 'px'
            break
        case "3":
            h2.style.marginTop = 180 + 'px'
            break
        case "4":
            h2.style.marginTop = 80 + 'px'
            break
        case "5":
            h2.style.marginTop = -20 + 'px'
            break
        case "6":
            h2.style.marginTop = -120 + 'px'
            break
        case "7":
            h2.style.marginTop = -220 + 'px'
            break
        case "8":
            h2.style.marginTop = -320 + 'px'
            break
        case "9":
            h2.style.marginTop = -420 + 'px'
            break
    }

    switch(m01) {
        case "0":
            m1.style.marginTop = 280 + 'px'
            break
        case "1":
            m1.style.marginTop = 180 + 'px'
            break
        case "2":
            m1.style.marginTop = 180 + 'px'
            break
        case "3":
            m1.style.marginTop = 80 + 'px'
            break
        case "4":
            m1.style.marginTop = -20 + 'px'
            break
        case "5":
            m1.style.marginTop = -120 + 'px'
            break
    }

    switch(m12) {
        case "0":
            m2.style.marginTop = 480 + 'px'
            break
        case "1":
            m2.style.marginTop = 380 + 'px'
            break
        case "2":
            m2.style.marginTop = 280 + 'px'
            break
        case "3":
            m2.style.marginTop = 180 + 'px'
            break
        case "4":
            m2.style.marginTop = 80 + 'px'
            break
        case "5":
            m2.style.marginTop = -20 + 'px'
            break
        case "6":
            m2.style.marginTop = -120 + 'px'
            break
        case "7":
            m2.style.marginTop = -220 + 'px'
            break
        case "8":
            m2.style.marginTop = -320 + 'px'
            break
        case "9":
            m2.style.marginTop = -420 + 'px'
            break
    }

    switch(s01) {
        case "0":
            s1.style.marginTop = 280 + 'px'
            break
        case "1":
            s1.style.marginTop = 180 + 'px'
            break
        case "2":
            s1.style.marginTop = 80 + 'px'
            break
        case "3":
            s1.style.marginTop = -20 + 'px'
            break
        case "4":
            s1.style.marginTop = -120 + 'px'
            break
        case "5":
            s1.style.marginTop = -220 + 'px'
            break
    }

    switch(s12) {
        case "0":
            s2.style.marginTop = 480 + 'px'
            break
        case "1":
            s2.style.marginTop = 380 + 'px'
            break
        case "2":
            s2.style.marginTop = 280 + 'px'
            break
        case "3":
            s2.style.marginTop = 180 + 'px'
            break
        case "4":
            s2.style.marginTop = 80 + 'px'
            break
        case "5":
            s2.style.marginTop = -20 + 'px'
            break
        case "6":
            s2.style.marginTop = -120 + 'px'
            break
        case "7":
            s2.style.marginTop = -220 + 'px'
            break
        case "8":
            s2.style.marginTop = -320 + 'px'
            break
        case "9":
            s2.style.marginTop = -420 + 'px'
            break
    }

    setTimeout(() => {
        update()
    }, 1000)
}

update()