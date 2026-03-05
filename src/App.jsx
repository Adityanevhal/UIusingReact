import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
const App = () => {

const users = [
    {
      img:'./src/assets/propic/image1.png',
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    {
      img:'/src/assets/propic/image2.png',
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
      img:'./src/assets/propic/image3.png ',
      intro:'',
      color:'darkorange',
      tag:'UnderBanked'
    },
    {
      img:'./src/assets/propic/image4.png',
      intro:'',
      color:'lightgreen',
      tag:'Waiting'
    },
    {
      img:'./src/assets/propic/image5.png',
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