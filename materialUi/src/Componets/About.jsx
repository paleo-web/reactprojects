import React from 'react'
import { Box, Input,Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material'
import FormValidation from './Form'
import { Button } from '@mui/material'
import { useSelector , useDispatch} from 'react-redux'
import { deleteCountact ,editCountact} from '../Redux/countactSlice'
import { Link } from 'react-router-dom';
// import Table from './Table'


function About() {
  const dispatch = useDispatch()
  const{countactReducer} = useSelector(state => state)
  // console.log(countactReducer.countacts);
  
  return (
    <div className='w-full flex  flex-col gap-4'>
      <Box className='shadow-lg m-10' width={'full'}  display={'flex'} justifyContent={'center'} alignItems={'center'} >
       <FormValidation/>
      </Box>

     <Box width={'full'}  display={'flex'} justifyContent={'center'} alignItems={'center'} >
     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Username
        </th>
        <th scope="col" className="px-6 py-3">
          <div className="flex items-center">
            Id
            <a href="#">
              <svg
                className="w-3 h-3 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
              </svg>
            </a>
          </div>
        </th>
        <th scope="col" className="px-6 py-3">
          <div className="flex items-center">
            Email
            <a href="#">
              <svg
                className="w-3 h-3 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
              </svg>
            </a>
          </div>
        </th>
        <th scope="col" className="px-6 py-3">
          <div className="flex items-center">
            phoneNumber
            <a href="#">
              <svg
                className="w-3 h-3 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
              </svg>
            </a>
          </div>
        </th>
        <th scope="col" className="px-6 py-3 ">
          <div className="flex items-center">
            Action
            <a href="#">
              <svg
                className="w-3 h-3 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
              </svg>
            </a>
          </div>
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody>
      
        { 
        countactReducer.countacts.length === 0 ? <p className='text-center text-2xl'>No Data</p> :
          countactReducer.countacts.map((countact) => {
            return(
              <tr key={countact.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {countact.username}
        </th>
        <td className="px-6 py-4">{countact.id}</td>
        <td className="px-6 py-4">{countact.email}</td>
        <td className="px-6 py-4">{countact.phonenumber}</td>
        <td className="px-6 py-4 text-right">
          <Button startIcon={<DeleteIcon />} varient='contained' onClick={() => dispatch(deleteCountact(countact.id))}>
              Delete
          </Button>
          <Button  startIcon={<EditIcon />} varient='contained' onClick={() => dispatch(editCountact(countact.id))}>
          <Link to={`/edit/${countact.id}`}>
               Edit
          </Link>
          </Button>
        </td>
      </tr>
            )
          })
        }
    </tbody>
  </table>
    </div>
      </Box>
     </div>
  )
}

export default About

