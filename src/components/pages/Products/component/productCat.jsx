import React, { useState } from 'react'
import '../Products.css'
import Scrollbars from 'react-custom-scrollbars-2'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const ProductCat = ({ productsData }) => {
  const [categorydata, setCategorydata] = useState(productsData.productsPage.categories || {})
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addNewCategory = (e) => {
    setOpen(false);
    categorydata.push(inputValue)
  }

  const filterList = (id) => {
    console.log(id)
    const filter = categorydata.filter((elm, i) => i !== id)
    console.log(filter)
    setCategorydata(filter)
  }
  return (
    <>
      <h2 className='product-cat-title'>Product Categories</h2>

      <Scrollbars autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={300}>


        {categorydata.map((item, index) => {
          return <h3 className='product-cat-list'> {item} <i className="far fa-trash-alt myproduct-delete-icon" onClick={() => filterList(index)}></i></h3>
        })}


      </Scrollbars>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='xs' >
        <DialogTitle style={{ backgroundColor: '#394e64', marginBottom: '0', color: 'white' }}>Add Category</DialogTitle>
        <DialogContent style={{ backgroundColor: '#394e64' }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category"
            type="text"
            value={inputValue}
            fullWidth
            color='primary'
            variant="standard"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className=' categorybtn' onClick={addNewCategory}>Submit</button>

        </DialogContent>
      </Dialog>
      <button className='cat-btn add-product' onClick={handleClickOpen}>Add New Category</button>
    </>
  )
}

export default ProductCat