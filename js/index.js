document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.getElementById('navbar_top')
    let nameSection = document.getElementById('home-section')
    // let resumeSection = document.getElementById('resume-section')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute('id')

            if (entry.intersectionRatio > 0) {
                let el = document.querySelector(`nav ul li a[href="#${id}"]`)
                el.className += ' current'
                console.log(id + ' - ' + el.className)
            } else {
                let el = document.querySelector(`nav ul li a[href="#${id}"]`)
                el.classList.remove('current')
                console.log(id + ' - ' + el.className)
            }
        })
    })

    const resumeSection = document.querySelector('#resume-section')
    const resumePages = resumeSection.querySelectorAll('div[id]')
    resumePages.forEach((section) => {
        observer.observe(section)
    })

    // resumeSection.style.marginTop = `${navbar.offsetHeight + 100}px`
    window.addEventListener('resize', () => {
        if (window.innerWidth < 912) nameSection.style.transform = `translateY(${navbar.offsetHeight / 10}px)`
        else nameSection.style.transform = `translateY(-${navbar.offsetHeight}px)`
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            navbar.classList.add('fixed-top', 'shadow-sm', 'bg-white')
            document.body.style.paddingTop = `${navbar.offsetHeight}px`
        } else {
            navbar.classList.remove('fixed-top', 'shadow-sm', 'bg-white')
            document.body.style.paddingTop = '0'
        }
    })
})
