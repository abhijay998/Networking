const loader = div(`
  <div class="w-screen h-screen flex items-center justify-center bg-black fixed top-0 left-0 z-[9999]" id="loader">
  <div class="flex space-x-5">
  <div class="w-[55px] h-[55px] bg-blue-500 rounded-full animate-bouncing-dot" style="animation-delay: -0.32s;"></div>
  <div class="w-[55px] h-[55px] bg-teal-500 rounded-full animate-bouncing-dot" style="animation-delay: -0.16s;"></div>
  <div class="w-[55px] h-[55px] bg-cyan-500 rounded-full animate-bouncing-dot" style="animation-delay: 0s;"></div>
</div>
  </div>
`, body);


const Cont = div(`
    <iframe id="threeIframe" src='${Constants.Links.Frames.ThreeDemesional}'  width='100%' height='100%' class="${Styles.GlobalStyles.Frame3d}"></iframe>`
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
    <h1 class="${Styles.Navbar.logo}">Network Types</h1>
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
            <a href="${Constants.Links.menuLinks.Creator}"><h1 class="${Styles.Navbar.Menu.options}">Creators</h1><br></a>
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
       Network Types
    </h1><br>
    <p class="sm:text-lg text-sm">Learn about Network Types</p>
`, Cont, null, null, 'class', Styles.HeroSection.format);

const MainCont = div('', body, null, null, 'class', Styles.MainContent.format);
const DefNetwork = div(`
    <h1 class="${Styles.MainContent.DefNetworkCont.h1}">C</h1>
    <p class="${Styles.MainContent.DefNetworkCont.p}">${Data.Network.type.def}</p>
`, MainCont, null, null, 'class', Styles.MainContent.DefNetworkCont.format);

if(window.innerWidth > 640) {
    gsap.from(DefNetwork, {
        scrollTrigger: {
          trigger: DefNetwork,
          start: "top 70%",
          scrub: 0.5,
          pin: true,
        },
        scale: 0.2,
        opacity: 0,
        duration: 4,
    });
} else {
    gsap.from(DefNetwork, {
        scrollTrigger: {
          trigger: DefNetwork,
          start: "top 60%",
          end: "bottom 20%",
          scrub: 0.5,
        },
        opacity: 0,
        duration: 5,
    });
}

const LinkContainers = div(``, MainCont, null, null, 'class', Styles.MainContent.ContainersRefLink.format);
const classNames = [
    `${Styles.MainContent.ContainersRefLink.ContStyles.ContC} type`,
    `${Styles.MainContent.ContainersRefLink.ContStyles.ContS} type`,
    `${Styles.MainContent.ContainersRefLink.ContStyles.ContB} type`,
    `${Styles.MainContent.ContainersRefLink.ContStyles.ContI} type`,
    `${Styles.MainContent.ContainersRefLink.ContStyles.ContB} type sm:col-span-2`,  
    `${Styles.MainContent.ContainersRefLink.ContStyles.ContB} type sm:col-span-2`  
];

const titles = ['PAN', 'LAN', 'MAN', 'WAN', 'VPN', 'SAN'];
const ps = [
    `${Data.Network.type.type.PAN}`,
    `${Data.Network.type.type.LAN}`,
    `${Data.Network.type.type.MAN}`,
    `${Data.Network.type.type.WAN}`,
    `${Data.Network.type.type.VPN}`,
    `${Data.Network.type.type.SAN}`,
];

const ItemCount = 6
for(i = 0; i < ItemCount; i++) {
    div(`
        <h1 class="${Styles.MainContent.ContainersRefLink.ContStyles.Elments.titleText}">${titles[i]}</h1>
        <p class="${Styles.MainContent.ContainersRefLink.ContStyles.Elments.p}">${ps[i]}</p>
    `, LinkContainers, null, null, 'class', classNames[i]);
}

const Othertypes = div(`
    <h2 class="${Styles.NetworkingConcepts.heading}">
        Other Networks
    </h2>
    <div class="grid sm:grid-cols-2 gap-6">
        ${Object.keys(Data.Network.Othertypes).map(key => `
            <div class="${Styles.NetworkingConcepts.card} animate-concept-card">
                <h3 class="${Styles.NetworkingConcepts.cardTitle}">${Data.Network.Othertypes[key].title}</h3>
                <p class="${Styles.NetworkingConcepts.cardDescription}">${Data.Network.Othertypes[key].description}</p>
            </div>
        `).join('')}
        <footer class="${Styles.NetworkingConcepts.card} sm:col-span-3">
            <h2 class='text-lg'>
                ${new Date().getFullYear()} The Internet and Webx.js by Abhijay Singh Meena. <br>
                Built with <a href="https://github.com/abhijay998/Webx-cdn" target="_blank" class="text-blue-400 hover:underline">Webx.js</a>
            </h2>
        </footer>
    </div>
`, document.body, null, null, 'class', Styles.NetworkingConcepts.format);

gsap.utils.toArray('.animate-concept-card').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: false,
      },

      scale: 0.1,
      opacity: 0,
      duration: 1.5,
      delay: i * 0.3,
    });
});


