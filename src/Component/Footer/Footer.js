import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <h2>1)Props Vs state</h2>
            <p> The difference between state and prop in react there are two types of components there are 'stateless component' which is will not include
                don't need to access the state and then there are components that need to access the state stateless components it's kind of like a dumb component that really have one purpose  one
                input and output and nothing should ever change in that component whereas state components are components that contain state there'll be constant and iteration over the component every time something changes within the state
                every component has  a state in react it has its own state is local to the  component  state through can be passed down words through other components through something call props.
                Props are how components talk to one another so for example state can be passed to other components through props we can pass props through react using different attributes and access these attributes  and other components using this.pops   whatever the attributes are the benefit is yous state might need you might have to access the same state in different place throughout your application or on a different page you wanted that another page or another component to
            </p>
            <h2>2)How react Work</h2>
            <p>React হচ্ছে JavaScript library not a Framework that creates user  interface in a predictable and efficient way using declarative  code.আমরা declarative  code ব্যবহার করি components যা আমাদের information গুলো  display সাহায্য করে components  গুলো UI পুনর্ব্যবহারযোগ্য. components এর সাহায্যে আমরা app কে বিভিন্ন bock  স্বাধীনভাবে ভাগ ভাগ করে নিতে পারি।Components এ ইচ্ছে মত data input নেয় (props) এবং return এ React element যা আমরা screen এ দেখতে পায়|একটি Complex UI তৈরি করতে component গুলো একে অপরের সাথে props দ্বারা যুক্ত হয়।Components state and props দ্বারা তৈরি করা হয় which is one-way-data flow।</p>
        </div>
    );
};

export default Footer;