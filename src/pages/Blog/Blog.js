import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
           <div className='py-5 px-3'>
            <h4>What is cors?</h4>
            <p>The full form of cors is cross-origin-resource-sharing. It is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.</p>
            <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Because there are many kinds of features of firebase like incredibly built-in analytics, app development mode easy and growth and user engagement etc.</p>
            <p>Yes, there more some alternative of firebase in authentication system.For example:
                <ul>
                    <li>Auth0</li>
                    <li>MongoDB</li>
                    <li>Okta</li>
                    <li>Passport</li>
                    <li>Keycloak</li>
                    <li>JSON web token </li>
                </ul>
            </p>
            <h4>How does private router work?</h4>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in.</p>
            <h4>What is node? How does it work?</h4>
            <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
           </div>
        </div>
    );
};

export default Blog;