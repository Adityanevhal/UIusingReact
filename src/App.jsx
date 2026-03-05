import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
const App = () => {

const users = [
    {
      img:'./src/assets/propic/image1.png',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'/src/assets/propic/image2.png',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'./src/assets/propic/image3.png ',
      intro:'',
      tag:'UnderBanked'
    },
    {
      img:'./src/assets/propic/image4.png',
      intro:'',
      tag:'Waiting'
    },
    {
      img:'./src/assets/propic/image5.png',
      intro:'',
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