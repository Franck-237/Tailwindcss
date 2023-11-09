/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontSize: { 
        regular: '14px',
        regular1: '20px',
        regular2: '50px',
        gras: '16px',
        gras1: '24px',
        gras2: '56px',
        gras3: '72px'

      },
      colors: { 
        head: '#5EAE53',
        btn1: '#EB8E78',
        btn2: '#5EAE53',
        hover: '#F49B3F',
        card: '#F7F7F7',
        man: '#FFE6E0',
        woman: '#FFE9CF',
        title: '#F6B76C',
        head1: '333333',
        icon: '#AFD3AA'
      },
      fontFamily: { 
        dmsans: 'DM Sans',
        worksans: 'Work Sans',
        caveat: 'Caveat'
      }
    },
  },
  plugins: [],
}

