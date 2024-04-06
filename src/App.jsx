import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <AllPriceCard />
    </>
  )
}
export default App;

function AllPriceCard() {
 
  const data = [
    {
      type :"FREE",
      user: "Single User",
      price : "$0",
      Storage: "50 GB Storage",
      PublicAccess:
        {
        Name :  "unlimited Public Projects",
        style : "Enabled",  
       }, 
       communityAccess : {
         Name :  "Community Access",
        style : "Enabled",
       },
       PrivateAccess: {
        Name: "unlimited Private Projects",
        style : "Disabled",
       },
       Phonesupport:{
       Name  : "Dedicated Phone Support",
       style : "Disabled",
       },
       Subdomain : {
       Name  : "Free Subdomain",
       style : "Disabled",
       },
       StatusReport : {
        Name : "Monthly Status reports",
        style : "Disabled",
       }

    },
    {
      type :"PLUS",
      user: "5 User",
      price : "$9",
      Storage: "50 GB Storage",
      PublicAccess:
        {
        Name :  "unlimited Public Projects",
        style : "Enabled",  
       }, 
       communityAccess : {
         Name :  "Community Access",
        style : "Enabled",
       },
       PrivateAccess: {
        Name: "unlimited Private Projects",
        style : "Enabled",
       },
       Phonesupport:{
       Name  : "Dedicated Phone Support",
       style : "Enabled",
       },
       Subdomain : {
       Name  : "Free Subdomain",
       style : "Enabled",
       },
       StatusReport : {
        Name : "Monthly Status reports",
        style : "Disabled",
       }
       
    },
    {
      type :"PRO",
      user: "unlimited Users",
      price : "$49",
      Storage: "50 GB Storage",
      PublicAccess:
        {
        Name :  "unlimited Public Projects",
        style : "Enabled",  
       }, 
       communityAccess : {
         Name :  "Community Access",
        style : "Enabled",
       },
       PrivateAccess: {
        Name: "unlimited Private Projects",
        style : "Enabled",
       },
       Phonesupport:{
       Name  : "Dedicated Phone Support",
       style : "Enabled",
       },
       Subdomain : {
       Name  : "Free Subdomain",
       style : "Enabled",
       },
       StatusReport : {
        Name : "Monthly Status reports",
        style : "Enabled",
       }
    }

  ];
    return (
           <div className="All-price-card">
           {
              data.map((value,index)=> (
                <PriceCard cardData={value} key={index}/>
              ))}
          </div>
    );
}



function PriceCard({cardData}){
  return (
    <div className = "container">
    <p className="type">{cardData.type}</p>
    <h1><p className="price">{cardData.price}/month </p></h1>
    <hr/>
    <p><span><i className= "fa fa-check text-margin"></i>{cardData.user}</span></p>
    <p><span><i className="fa fa-check text-margin"></i>{cardData.Storage}</span></p>
    <p className={cardData.PublicAccess.style} ><span><i className={cardData.PublicAccess.style == "Enabled" ? "fa fa-check text-margin" : "fa fa-times text-margin"}></i>{cardData.PublicAccess.Name}</span></p>
    <p className={cardData.communityAccess.style}><span><i className={cardData.communityAccess.style == "Enabled" ? "fa fa-check text-margin" : "fa fa-times text-margin"}></i>{cardData.communityAccess.Name}</span></p>
    <p className={cardData.PrivateAccess.style}><span><i className={cardData.PrivateAccess.style == "Enabled" ? "fa fa-check text-margin" : "fa fa-times text-margin"}></i>{cardData.PrivateAccess.Name}</span></p>
    <p className={cardData.Phonesupport.style}><span><i className={cardData.Phonesupport.style == "Enabled" ? "fa fa-check text-margin" : "fa fa-times text-margin"}></i>{cardData.Phonesupport.Name}</span></p>
    <p className={cardData.Subdomain.style}><span><i className={cardData.Subdomain.style  == "Enabled" ? "fa fa-check text-margin" : "fa fa-times text-margin"}></i>{cardData.Subdomain.Name}</span></p>
    <p className={cardData.StatusReport.style}><span><i className={cardData.StatusReport.style == "Enabled" ? "fa fa-check text-margin" : "fa fa-times text-margin"}></i>{cardData.StatusReport.Name}</span></p>
    
   
    <button className="btn btn-primary text-uppercase">button</button>
  </div>);
}
