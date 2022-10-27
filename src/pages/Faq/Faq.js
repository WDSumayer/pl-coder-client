import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
       <div style={{height:'100vh'}}>
         <div className='container'>
           <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6 mt-5'>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Will this course be effective?</Accordion.Header>
        <Accordion.Body>
          Of course! this course will be more effective. You will learn a lot of.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Will I get support after finishing this course?</Accordion.Header>
        <Accordion.Body>
          Yes, we will provide you life time support. Our skillfull trainer will help you after finishing this course also.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can I get a certificate?</Accordion.Header>
        <Accordion.Body>
         Yes, we will give you a certificate that will help you to get a standard job.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
            <div className='col-md-3'></div>
           </div>
        </div>
       </div>
    );
};

export default Faq;