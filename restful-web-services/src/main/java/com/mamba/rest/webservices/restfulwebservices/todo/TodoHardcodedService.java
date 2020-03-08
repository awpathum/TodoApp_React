package com.mamba.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
public class TodoHardcodedService {
    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "mamba", "learn spring", new Date(), false));
        todos.add(new Todo(++idCounter, "mamba", "learn hibernate", new Date(), false));
        todos.add(new Todo(++idCounter, "mamba", "learn react", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

}
