const Styles = {
    NetT: {
        BentoGrid: {
            format: 'block sm:grid sm:grid-cols-4 sm:grid-rows-4 m-8',
            Cont: function (col, row, textSize, textPos) {
                return `bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white 
                m-4 p-6 rounded-lg bg-cover bg-center 
                col-span-${col} h-[${row * 14}rem] text-${textSize}
                transition-all duration-300 ease-in-out flex flex-col justify-${textPos}`;
            },

            ContBG: function (bg, col, row, textSize, textPos) {
                return `bg-[url(${bg})] text-white 
                m-4 p-6 rounded-lg bg-cover bg-center 
                col-span-${col} row-span-${row} 
                ${row ? `h-[${row * 14}rem]` : ''}  text-${textSize}
                transition-all duration-400 ease-in-out flex flex-col justify-${textPos}`;
            }
                    
        }
    },

    GlobalStyles: {
        Frame3d: `fixed top-0 left-0 z-0`,
    },

    Navbar: {
        format: `p-4 px-6 fixed top-0 left-0 flex justify-between w-full z-20 backdrop-blur-md bg-black/10`,
        logo: `text-4xl font-bold text-bold`,
        menuIcon: `text-4xl font-bold text-bold`,
        Menu: {
            GlobalFormat: `p-6 fixed top-0 sm:right-[-40%] right-[-100%] h-full sm:w-[40%] w-[100%] bg-black/30
            backdrop-blur-lg shadow-lg z-30`,
            Header: {
                format: `p-8 fixed top-0 left-0 flex justify-between w-full items-center`,
                title: `text-6xl font-bold text-bold`,
                closeIcon: `text-4xl font-bold text-bold`,
            },

            format: `flex flex-col justify-center h-full m-8`,
            options: `text-4xl font-bold text-white hover:text-indigo-600 text-bold animate`,
        }
    },

    HeroSection: {
        format: `flex flex-col items-center justify-center h-screen text-white relative z-10`,
        headingMaintText: `sm:text-8xl text-6xl`
    },

    MainBlurContent: {
        format: `block p-6 text-white relative w-full sm:grid sm:grid-cols-3`,
        container: {
            format: `p-6 bg-black/30 bg-blur backdrop-blur-sm m-4 rounded-xl`
        }
    },

    MainContent: {
        format: `relative w-full p-6`,
        DefNetworkCont: {
            format: `p-2 sm:flex sm:items-center p-6 bg-black/30  backdrop-blur-sm m-4 rounded-lg `,
            h1: `sm:text-9xl text-5xl text-indigo-500 m-2`,
            p: `sm:text-xl text-lg m-2`
        },

        ContainersRefLink: {
            format: 'grid sm:grid-cols-2 ',
            ContStyles: {
                ContC: `bg-black/30 backdrop-blur-sm hover:backdrop-blur-lg text-white 
                        m-4 p-6 rounded-lg hover:ring-2 hover:ring-teal-500
                        transition-all duration-300 ease-in-out`,

                ContS: `bg-black/30 backdrop-blur-sm hover:backdrop-blur-lg text-white 
                        m-4 p-6 rounded-lg hover:ring-2 hover:ring-sky-500 
                        transition-all duration-300 ease-in-out`,

                ContB: `bg-black/30 backdrop-blur-sm hover:backdrop-blur-lg text-white 
                        m-4 p-6 rounded-lg hover:ring-2 hover:ring-blue-500
                        transition-all duration-300 ease-in-out`,

                ContI: `bg-black/30 backdrop-blur-sm hover:backdrop-blur-lg text-white 
                        m-4 p-6 rounded-lg hover:ring-2 hover:ring-indigo-500
                        transition-all duration-300 ease-in-out`,
                Elments: {
                    titleText: `text-4xl m-4`,
                    p: `text-lg m-2`,
                    button: `p-3 m-2 rounded-lg bg-black text-white shadow hover:bg-white 
                    hover:text-black transition-all duration-500 ease-in-out`
                }
            } 
        }
    } 
}

Styles.NetworkingConcepts = {
    format: `p-6 text-white relative w-full`,
    heading: `text-5xl md:text-6xl font-bold text-center mb-10 text-blue-400`,
    cardGrid: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`,
    card: `bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl
           transform hover:-translate-y-2 transition-all duration-300 ease-in-out
           border border-transparent hover:border-purple-600 cursor-pointer`,
    cardTitle: `text-3xl font-semibold mb-3 text-white`,
    cardDescription: `text-lg text-gray-300`,
    cardIcon: `text-5xl mb-4 text-purple-500`
};
