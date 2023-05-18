import styles from './ItemWidget.module.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ItemWidget(props) {
  let content;
  const setTagsContent = () => {
     const data = props.tags.map((item) =>
          <div key={item} className={styles.tag}> {item} </div>
     )
     return data;
  }
  
  if(props.tags != [] && props.tags)
  content = setTagsContent();

  return (
     <div className={styles.item}>
          <div className={styles.inform}>
               <img className={styles.avatar} src={props.src} />
               <div className={styles.description}>
                    <div className={styles.data}>
                         <div className={styles.name}> {props.name} </div>
                         <div className={styles.email}> <b>{props.current && 'Не авторизирован'}</b> {props.email} </div>
                    </div>
                    <div className={styles.tags}>
                         {content}
                    </div>
               </div>
          </div>
          <div className={styles.more}>
               <div  style={{width:'30px', transform:'translate(-20px, -10px)'}}> <b>. . .</b> </div>
          </div>
     </div>
  );
}

export default ItemWidget;