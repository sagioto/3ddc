package com.vmware;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

@SpringBootApplication
public class Application {

    public static void main(String[] args) throws KeyManagementException, NoSuchAlgorithmException {
        DisableSecurity.trustEveryone();
        SpringApplication.run(Application.class, args);
    }
}
