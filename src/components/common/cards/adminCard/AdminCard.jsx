import React from 'react';
import styles from './AdminCard.module.scss';


const AdminCard = ({ item, deleteAdmin }) => {
  return (
   <div>
     <tr >
      <td><img src={item.image} alt={item.title} className={styles.image} /></td>
      <td><p>{item.title}</p></td>
      <td><p>{item.price} ₼</p></td>
      <td><button onClick={deleteAdmin} className={styles.deleteBtn}>SİL</button></td>
    </tr>
   </div>
  );
};

export default AdminCard;