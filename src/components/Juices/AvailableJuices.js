import styles from './AvailableJuices.module.css';
import Card from '../UI/Card';
import JuiceItem from './JuiceItem/JuiceItem'
import { useEffect, useState } from 'react';

  const AvailableJuices = () => {
    const [availableJuices, setJuices] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    useEffect(()=>{
        const fetchJuices = async () => {
          const response =  await fetch('https://mainsqueeze-fc349-default-rtdb.firebaseio.com/juices.json');
        
          if(!response.ok) {
            throw new Error('Something went wrong!')
          }
          const responseData = await response.json();
          const loadedJuices = [];
            
          for(const key in responseData) {
            loadedJuices.push({
              id:key,
              name:responseData[key].name,
              description:responseData[key].description,
              price: responseData[key].price,
              image: responseData[key].image
            })
          };
          setJuices(loadedJuices)
          setLoading(false)
        }
      fetchJuices().catch((error)=>{
        setLoading(false);
        setError(error.message);  
      });
  },[])
  if(error) {
    return <section>There is an error</section>
  }
  if(loading) {
    return <section className={styles.loading}>Loading</section>
  }
  const juiceList = availableJuices.map(juice => 
        <JuiceItem 
          key={juice.id} 
          id={juice.id} 
          name={juice.name} 
          description={juice.description} 
          price={juice.price} 
          amount={juice.amount} 
          image={juice.image}>
        </JuiceItem>)
      return (loading ? <section className={styles.loading}> Loading </section>:
      <section className={styles.juices}>
          <Card>
            <ul>
                {juiceList}
            </ul>
          </Card>
      </section>)
  }

  export default AvailableJuices