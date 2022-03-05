import React from 'react';
import {Button} from 'react-bootstrap';
import './Customer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Home(){
    return(
        
    <div class="container">
  <div class="row">
    <div class="col"><a href="/Customer">Add New Customer</a></div>
    <div class="col"><a href="/">Add New Staff</a></div>
    <div class="col"><a href="/Book">Add New Book</a></div>
 
  </div>
  </div>
    
    )
}