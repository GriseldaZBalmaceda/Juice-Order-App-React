import styles from './AvailableJuices.module.css';
import Card from '../UI/Card';
import JuiceItem from './JuiceItem/JuiceItem'
const Mock_Juices = [
    {
      id: 'j1',
      name: 'Berry Blast',
      description: 'Fresh Blueberries with rasperry.',
      price: 7.5,
      amount: 0,
      image: '../assets/BlueJuice.jpg'
    },
    {
      id: 'j2',
      name: 'SweetTart',
      description: 'Fresh Strawberries with lime.',
      price: 8.00,
      amount: 0
    },
    {
      id: 'j3',
      name: 'EnvyGreen',
      description: 'Our specialty green juice.Broccoli, spinach, green apples.',
      price: 9.00,
      amount:0
    },
    {
      id: 'j4',
      name: 'GoodMorning',
      description: 'An orange explosion.',
      price: 7.00,
      amount: 0
    },
  ];

  const AvailableJuices = () => {
      const juiceList = Mock_Juices.map(juice => <JuiceItem key={juice.id} id={juice.id} name={juice.name} description={juice.description} price={juice.price} amount={juice.amount}></JuiceItem>)
      return <section className={styles.juices}>
          <Card>
            <ul>
                {juiceList}
            </ul>
          </Card>
      </section>
  }

  export default AvailableJuices