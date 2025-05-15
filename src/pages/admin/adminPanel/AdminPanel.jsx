import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductThunk, getProductThunk, postProductThunk } from '../../../redux/reducers/productSlice';
import { deleteBasketThunk, postBasketThunk } from '../../../redux/reducers/basketSlice';
import { useFormik } from 'formik';
import AdminCard from '../../../components/common/cards/adminCard/AdminCard';

const AdminPanel = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductThunk())
    },[])
    
    const product=useSelector((state)=>state.products.products) || []
    
    const deleteAdmin=(id=>{
        dispatch(deleteBasketThunk(id))
        dispatch(deleteProductThunk(id))
    })
    
   
    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: '',
          },

        onSubmit: values => {
           
          alert(JSON.stringify(values, null, 2));
          dispatch(postProductThunk(values))
        },
      });
      return (
        <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <label htmlFor="title">title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <label htmlFor="price">price</label>
          <input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button type="submit">add</button>
        </form>

     <table>
  <thead>
    <tr>
        <th>image</th>
        <th>title</th>
        <th>price</th>
        <th><button>sil</button></th>
    </tr>
  </thead>
  <tbody>
    {product && product.map(item => <AdminCard item={item}  deleteAdmin={()=>deleteAdmin(item._id)}/>)}
  </tbody>
     </table>

     </div>
      )
}

export default AdminPanel