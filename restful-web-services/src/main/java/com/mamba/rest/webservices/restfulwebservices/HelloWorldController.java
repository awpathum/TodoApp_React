package com.mamba.rest.webservices.restfulwebservices;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
public class HelloWorldController {

//    @GetMapping(path = "/hello-world")
//    public String helloWorld(){
//        return "Hello World!";
//    }

    @GetMapping(path = "/hello-world")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World");
    }
}