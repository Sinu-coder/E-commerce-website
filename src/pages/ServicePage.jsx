import React from 'react'
import { useParams } from 'react-router-dom'
import FinanceAccounting from './FinanceAccounting';
import CustomerExperience from './CustomerExperience';
import Payroll from './Payroll';
function ServicePage() {
   const { slug }= useParams ();

   const services ={
    "finance-accounting": <FinanceAccounting/>,
    "customer-experience" : <CustomerExperience/>,
    "payroll": <Payroll/>
   }

  return  services[ slug ] || <h1> Service is not Found</h1>
}

export default ServicePage;
