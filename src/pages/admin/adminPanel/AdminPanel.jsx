import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductThunk, getProductThunk, postProductThunk } from '../../../redux/reducers/productSlice';
import { deleteBasketThunk, postBasketThunk } from '../../../redux/reducers/basketSlice';
import { useFormik } from 'formik';
import AdminCard from '../../../components/common/cards/adminCard/AdminCard';

const AdminPanel = () => {

    const [text,setText]=useState('')
    const [sort,setSort]=useState('asc')
   
   





    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductThunk())
    },[])
    
    const products=useSelector((state)=>state.products.products) || []
    
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
      const filteredProducts=products
      .filter(product => product.title.toLowerCase().includes(text.toLocaleLowerCase()))
      .sort((a,b)=>{
          return sort==="asc"? a.price-b.price: b.price-a.price
      })
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
    {filteredProducts && filteredProducts.map(item => <AdminCard item={item}  deleteAdmin={()=>deleteAdmin(item._id)}/>)}
  </tbody>
     </table>
  <button onClick={()=>setSort("asc")}>coxdan aza</button>
  <button onClick={()=>setSort("dasc")}>azdan coxa</button>
  <input type="text" placeholder='ada gore axtaris' name='' id='' onChange={(e)=>setText(e.target.value)}/>
     </div>
      )
}

export default AdminPanel