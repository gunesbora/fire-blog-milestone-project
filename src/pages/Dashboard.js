import React from 'react'
import{useFetch} from "../helpers/functions"
import BlogCard from "../components/BlogCard"


const Dashboard = () => {

  const {contactList}=useFetch();
  
  
    
    
  
  
  
  
  
  
  return (
    <div>
      
      <BlogCard contactList={contactList} />
    </div>
  )
}

export default Dashboard
