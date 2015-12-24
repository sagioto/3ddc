package com.vmware;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.vmware.connection.BasicConnection;

/**
 * Created by mghuywaron on 12/23/2015.
 */
@Component
public class VCConnection extends BasicConnection {
    @Autowired
    public VCConnection( @Value("${vcenter.user}")String username,
                         @Value("${vcenter.password}") String password,
                         @Value("${vcenter.url}") String url) {
        super();
        setPassword(password);
        setUrl(url);
        setUsername(username);
    }
}
