const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const hname = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfawQiOjEyMDd9&auto=format&fit=crop&w=2102&g=80"alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit met'
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus enim, quis provident dolorem lau'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    name.innerHTML = 'Mr Big Man'
    date.innerHTML = 'Nov 03, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}


