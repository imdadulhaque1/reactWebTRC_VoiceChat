import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Home.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';
function Home() {
    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to chatting room!!!" icon="Imdad">
            <p className={styles.pText}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>
                <div>
                    <Button text="Get your username "/>
                </div>
                <div>
                    <span>have an invite text?</span>
                    <Link to='/login'>Sign in</Link>
                </div>

            </Card>
        </div>
        
    )
}

export default Home;
