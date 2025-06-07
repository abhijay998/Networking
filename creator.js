const loader = div(`
  <div class="w-screen h-screen flex items-center justify-center bg-black fixed top-0 left-0 z-[9999]" id="loader">
  <div class="flex space-x-5">
  <div class="w-[55px] h-[55px] bg-blue-500 rounded-full animate-bouncing-dot" style="animation-delay: -0.32s;"></div>
  <div class="w-[55px] h-[55px] bg-cyan-500 rounded-full animate-bouncing-dot" style="animation-delay: -0.16s;"></div>
  <div class="w-[55px] h-[55px] bg-sky-500 rounded-full animate-bouncing-dot" style="animation-delay: 0s;"></div>
</div>
  </div>
`, body);


const Cont = div(`
    <iframe id="threeIframe" src='${Constants.Links.Frames.ThreeDemesional4}'  width='100%' height='100%' class="${Styles.GlobalStyles.Frame3d}"></iframe>`
, body, null, function () { null }, 'class', 'relative w-screen h-screen overflow-hidden');
setTimeout(() => {
    gsap.to('#loader', {
        opacity: 0,
        duration: 1,
        onComplete: () => loader.remove()
    });
}, 8000);

const NavBar = webx.createElement({
    tag: 'nav', 
    parent: Cont,
    html: `
    <h1 class="${Styles.Navbar.logo}">Networking</h1>
    <button onclick="tl.play()"> 
        <h1 class="${Styles.Navbar.menuIcon}">☰</h1>
    </button>`,
    attribute: {
        key: 'class',
        value: Styles.Navbar.format,
    }
});


const Menu = webx.createElement({
    tag: 'div',
    parent: Cont,
    html: `
        <nav class="${Styles.Navbar.Menu.Header.format}">
            <h1 class="${Styles.Navbar.Menu.Header.title}">Menu</h1>
            <button id="close">
                <h1 class="${Styles.Navbar.Menu.Header.closeIcon}">✕</h1>
            </button>
        </nav>
        <div class="${Styles.Navbar.Menu.format}">
            <a href="${Constants.Links.menuLinks.Home}"><h1 class="${Styles.Navbar.Menu.options}">Home</h1><br></a>
            <a href="${Constants.Links.menuLinks.NetworkTyp}"><h1 class="${Styles.Navbar.Menu.options}">Network Types</h1><br></a>
            <a href="${Constants.Links.menuLinks.Protocols}"><h1 class="${Styles.Navbar.Menu.options}">Network Protocols</h1><br></a>
            <a href="${Constants.Links.menuLinks.Creator}"><h1 class="${Styles.Navbar.Menu.options}">Creator</h1><br></a>
            <a href="${Constants.Links.menuLinks.Home}"><h1 class="${Styles.Navbar.Menu.options}">Wireless Network</h1><br></a>
            <a href="${Constants.Links.menuLinks.Home}"><h1 class="${Styles.Navbar.Menu.options}">Network Components</h1><br></a>
            <a href="${Constants.Links.menuLinks.Home}"><h1 class="${Styles.Navbar.Menu.options}">Networking Topologies</h1><br></a>
        </div>
    `,
    attribute: {
        key: 'class',
        value: Styles.Navbar.Menu.GlobalFormat
    }
});

var tl = gsap.timeline();

tl.to(Menu, {
    right: '0',
    duration: 1,
});

tl.from('.animate', {
    x:200,
    stagger: 0.7,
    opacity: 0,
});

tl.pause()

getById('close').addEventListener('click', function () {
    tl.reverse();
});

const HeroSection = div(`
    <h1 class="${Styles.HeroSection.headingMaintText}" id="heroheadingtext">
        About Me
    </h1><br>
`, Cont, null, null, 'class', Styles.HeroSection.format);

gsap.from('#heroheadingtext span', {
    opacity: 0,
    duration: 1.5,
    repeat: -1,
    stagger: 0.8,
    ease: "power3.out",
});


const MainCont = div('', body, null, null, 'class', Styles.MainContent.format);
const DefNetwork = div(`
    <h1 class="text-6xl m-2">Abhijay</h1><br>
    <p class="text-lg">
        This Website is made for a project made by Abhijay Singh Meena
        please check out <a href="https://github.com/abhijay998/Webx-cdn" target="_blank" class="text-blue-400 hover:underline">Webx.js</a>
        the DOM Manipulation library also made by Abhijay thanks for veiwing this project  
    </p>
`, MainCont, null, null, 'class', `
p-6 bg-black/30  backdrop-blur-xl m-4 rounded-lg 
backdrop-blur-xl`);
