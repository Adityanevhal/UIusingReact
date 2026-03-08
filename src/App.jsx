import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import image1 from './assets/propic/image1.png'
import image2 from './assets/propic/image2.png'
import image3 from './assets/propic/image3.png'
import image4 from './assets/propic/image4.png'
import image5 from './assets/propic/image5.png'
const App = () => {

const users = [
    {
      img: image1,
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    {
      img: image2,
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
      img: image3,
      intro:'',
      color:'darkorange',
      tag:'UnderBanked'
    },
    {
      img: image4,
      intro:'',
      color:'lightgreen',
      tag:'Waiting'
    },
    {
      img: image5,
      intro:'',
      color:'lightcoral',
      tag:'Excluded'
    }
]

  return (
    <div>
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App